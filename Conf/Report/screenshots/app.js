var app = angular.module('reportingApp', []);

//<editor-fold desc="global helpers">

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};
var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
    } else if (getSpec(item.description) !== getSpec(prevItem.description)) {
        item.displaySpecName = true;
    }
};

var getParent = function (str) {
    var arr = str.split('|');
    str = "";
    for (var i = arr.length - 2; i > 0; i--) {
        str += arr[i] + " > ";
    }
    return str.slice(0, -3);
};

var getShortDescription = function (str) {
    return str.split('|')[0];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};

var defaultSortFunction = function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) {
        return -1;
    }
    else if (a.sessionId > b.sessionId) {
        return 1;
    }

    if (a.timestamp < b.timestamp) {
        return -1;
    }
    else if (a.timestamp > b.timestamp) {
        return 1;
    }

    return 0;
};


//</editor-fold>

app.controller('ScreenshotReportController', function ($scope, $http) {
    var that = this;
    var clientDefaults = {};

    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, clientDefaults.searchSettings || {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = clientDefaults.columnSettings; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        } else {
            this.inlineScreenshots = false;
        }
    }

    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        return getParent(str);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };

    this.getShortDescription = function (str) {
        return getShortDescription(str);
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };

    var results = [
    {
        "description": "Fill the Onboarding Form|Login into QA Click",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "5d342eb76ad15a4ab0a85c3831f85499",
        "instanceId": 6968,
        "browser": {
            "name": "chrome",
            "version": "72.0.3626.119"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00a70035-004d-006c-0030-00ba00f00033.png",
        "timestamp": 1550816134852,
        "duration": 20139
    },
    {
        "description": "Validation of error message|Login into QA Click",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "5d342eb76ad15a4ab0a85c3831f85499",
        "instanceId": 6968,
        "browser": {
            "name": "chrome",
            "version": "72.0.3626.119"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "003e00cd-000d-00e2-0069-0096005c0020.png",
        "timestamp": 1550816158141,
        "duration": 3385
    },
    {
        "description": "Purchase Product from shoping website|Login into Shopping page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "5d342eb76ad15a4ab0a85c3831f85499",
        "instanceId": 6968,
        "browser": {
            "name": "chrome",
            "version": "72.0.3626.119"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://qaclickacademy.github.io/protocommerce/shop - Failed to load resource: the server responded with a status of 404 (Not Found)",
                "timestamp": 1550816163438,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://qaclickacademy.github.io/protocommerce/shop - Mixed Content: The page at 'https://qaclickacademy.github.io/protocommerce/shop' was loaded over HTTPS, but requested an insecure image 'http://placehold.it/900x350'. This content should also be served over HTTPS.",
                "timestamp": 1550816164131,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://qaclickacademy.github.io/protocommerce/shop - Mixed Content: The page at 'https://qaclickacademy.github.io/protocommerce/shop' was loaded over HTTPS, but requested an insecure image 'http://placehold.it/900x350'. This content should also be served over HTTPS.",
                "timestamp": 1550816164139,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://qaclickacademy.github.io/protocommerce/shop - Mixed Content: The page at 'https://qaclickacademy.github.io/protocommerce/shop' was loaded over HTTPS, but requested an insecure image 'http://placehold.it/900x350'. This content should also be served over HTTPS.",
                "timestamp": 1550816164154,
                "type": ""
            }
        ],
        "screenShotFile": "00160002-00ca-0039-00e9-00af00430082.png",
        "timestamp": 1550816162737,
        "duration": 8256
    },
    {
        "description": "Checkout the Product from the list|Login into Shopping page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "5d342eb76ad15a4ab0a85c3831f85499",
        "instanceId": 6968,
        "browser": {
            "name": "chrome",
            "version": "72.0.3626.119"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009e00d3-0035-000b-00fe-00db00480094.png",
        "timestamp": 1550816171952,
        "duration": 1039
    },
    {
        "description": "Validation of Total Amount of item in cart|Login into Shopping page",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "5d342eb76ad15a4ab0a85c3831f85499",
        "instanceId": 6968,
        "browser": {
            "name": "chrome",
            "version": "72.0.3626.119"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "0007002a-00c7-002e-0036-00fe002d00bb.png",
        "timestamp": 1550816173956,
        "duration": 670
    },
    {
        "description": "Remove Product from the Cart|Login into Shopping page",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "5d342eb76ad15a4ab0a85c3831f85499",
        "instanceId": 6968,
        "browser": {
            "name": "chrome",
            "version": "72.0.3626.119"
        },
        "message": [
            "NoSuchElementError: No element found using locator: By(css selector, tbody tr td.text-right h3 strong)"
        ],
        "trace": [
            "NoSuchElementError: No element found using locator: By(css selector, tbody tr td.text-right h3 strong)\n    at elementArrayFinder.getWebElements.then (C:\\Users\\ankur.jain\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\ankur.jain\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\ankur.jain\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\ankur.jain\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\ankur.jain\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\ankur.jain\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\ankur.jain\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as getText] (C:\\Users\\ankur.jain\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as getText] (C:\\Users\\ankur.jain\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at C:\\Users\\ankur.jain\\eclipse-workspace\\Protractor_TypeScript\\POM_TestSpec\\Test2_spec.ts:74:61\n    at Generator.next (<anonymous>)\n    at C:\\Users\\ankur.jain\\eclipse-workspace\\Protractor_TypeScript\\JSFiles\\POM_TestSpec\\Test2_spec.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\ankur.jain\\eclipse-workspace\\Protractor_TypeScript\\JSFiles\\POM_TestSpec\\Test2_spec.js:3:12)\n    at AmountValidation (C:\\Users\\ankur.jain\\eclipse-workspace\\Protractor_TypeScript\\JSFiles\\POM_TestSpec\\Test2_spec.js:64:16)\n    at Object.<anonymous> (C:\\Users\\ankur.jain\\eclipse-workspace\\Protractor_TypeScript\\POM_TestSpec\\Test2_spec.ts:117:9)"
        ],
        "browserLogs": [],
        "screenShotFile": "00a1009c-00db-00cd-0003-00ff00740088.png",
        "timestamp": 1550816175642,
        "duration": 1991
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.loadResultsViaAjax = function () {

        $http({
            url: './combined.json',
            method: 'GET'
        }).then(function (response) {
                var data = null;
                if (response && response.data) {
                    if (typeof response.data === 'object') {
                        data = response.data;
                    } else if (response.data[0] === '"') { //detect super escaped file (from circular json)
                        data = CircularJSON.parse(response.data); //the file is escaped in a weird way (with circular json)
                    }
                    else
                    {
                        data = JSON.parse(response.data);
                    }
                }
                if (data) {
                    results = data;
                    that.sortSpecs();
                }
            },
            function (error) {
                console.error(error);
            });
    };


    if (clientDefaults.useAjax) {
        this.loadResultsViaAjax();
    } else {
        this.sortSpecs();
    }


});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        if (!items) {
            return filtered; // to avoid crashing in where results might be empty
        }
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            var isHit = false; //is set to true if any of the search criteria matched
            countLogMessages(item); // modifies item contents

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    isHit = true;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    isHit = true;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    isHit = true;
                }
            }
            if (isHit) {
                checkIfShouldDisplaySpecName(prevItem, item);

                filtered.push(item);
                prevItem = item;
            }
        }

        return filtered;
    };
});

