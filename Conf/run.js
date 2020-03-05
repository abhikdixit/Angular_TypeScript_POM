var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');
var AllureReporter = require('jasmine-allure-reporter');
directConnect: true

exports.config = {
  framework: 'jasmine',
 // seleniumAddress: 'http://localhost:4444/wd/hub',
//  specs: ['../Test_Spec/HomePageLogin_Spec.js','../Test_Spec/BankManager_Spec.js'],
  specs: ['../JSFiles/POM_TestSpec/Test1_spec.js','../JSFiles/POM_TestSpec/Test2_spec.js'],

  suites: {
    BankManagerFlow: 
    [ 
      "../Test_Spec/HomePageLogin_Spec.js",
      "../Test_Spec/BankManager_Spec.js"
    ],

    CustomerLoginFlow: 
    [ 
      "../Test_Spec/HomePageLogin_Spec.js",
      "../Test_Spec/CustomerLogin_Spec.js",
      "../Test_Spec/CustomerAccountPage_Spec.js"
    ],

    AllTest: 
    [ 
      "../Test_Spec/HomePageLogin_Spec.js",
      "../Test_Spec/CustomerLogin_Spec.js",
      "../Test_Spec/CustomerAccountPage_Spec.js",
      "../Test_Spec/BankManager_Spec.js"
    ],
},

onPrepare: function() {
  browser.driver.manage().window().maximize();

  jasmine.getEnv().addReporter(new AllureReporter());
  jasmine.getEnv().afterEach(function(done){
    browser.takeScreenshot().then(function (png) {
      allure.createAttachment('Screenshot', function () {
        return new Buffer(png, 'base64')
      }, 'image/png')();
      done();
    })
  });
  
  jasmine.getEnv().addReporter(
    new Jasmine2HtmlReporter({
      savePath: 'Report/screenshots'
    })
  );
  jasmine.getEnv().addReporter(new HtmlReporter({
    baseDirectory: 'Report/screenshots'
    }).getJasmine2Reporter());
}


  
  
}