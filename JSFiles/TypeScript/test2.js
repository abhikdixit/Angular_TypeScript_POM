"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';
describe("Login into Shopping page", () => {
    var FinalAmount, amount, amount1;
    var total = 0;
    function selectItems(product) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element.all(protractor_1.by.tagName("app-card")).each(function (item) {
                item.element(protractor_1.by.css("h4[class='card-title']")).getText().then(function (text) {
                    if (text == product) {
                        item.element(protractor_1.by.css("button[class='btn btn-info']")).click();
                    }
                });
            });
        });
    }
    function RemoveProduct(rproduct) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element.all(protractor_1.by.css("tbody tr")).each(function (item1, i) {
                if (i < 3) {
                    item1.element(protractor_1.by.css("td:nth-child(1) div div h4 a")).getText().then(function (text) {
                        if (text == rproduct) {
                            item1.element(protractor_1.by.buttonText('Remove')).click();
                        }
                    });
                }
            });
        });
    }
    function checkoutproduct() {
        return __awaiter(this, void 0, void 0, function* () {
            total = 0;
            yield protractor_1.element.all(protractor_1.by.tagName("tbody tr")).each(function (item) {
                item.element(protractor_1.by.css("td:nth-child(4)")).getText().then(function (text) {
                    if (text == 'Total') {
                    }
                    else if (text == 'Continue Shopping') {
                    }
                    else {
                        amount = text.substring(3, 9);
                        //  console.log("Final Price of Product is"+amount);   
                        total = +total + +amount;
                    }
                    logger.info("Final Amount of all Product in cart is" + total);
                });
            });
        });
    }
    function AmountValidation() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.element(protractor_1.by.css('tbody tr td.text-right h3 strong')).getText().then(function (text) {
                amount1 = text.substring(3, 13);
                logger.info("Total Amount of all item in cart is" + amount1);
                expect(parseInt(amount1)).toBe(total);
            });
        });
    }
    it("Purchase Product from shoping website", () => __awaiter(this, void 0, void 0, function* () {
        //  browser.get("https://qaclickacademy.github.io/protocommerce/");
        yield protractor_1.element(protractor_1.by.linkText('Shop')).click();
        selectItems("Samsung Note 8");
        selectItems("iphone X");
        selectItems("Nokia Edge");
        protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link btn btn-primary']")).getText().then(function (text) {
            logger.info("Total no of checkout item is" + text);
            var result = text.slice(10, 13);
            logger.info("Final Checkout item is" + result);
            protractor_1.element(protractor_1.by.partialLinkText('Checkout')).click();
            protractor_1.browser.sleep(2000);
        });
    }));
    it("Checkout the Product from the list", () => __awaiter(this, void 0, void 0, function* () {
        checkoutproduct();
    }));
    it("Validation of Total Amount of item in cart", () => __awaiter(this, void 0, void 0, function* () {
        AmountValidation();
    }));
    it("Remove Product from the Cart", () => __awaiter(this, void 0, void 0, function* () {
        RemoveProduct("iphone X");
        yield logger.info("Product has been sucesfully removed from cart");
        checkoutproduct();
        AmountValidation();
        yield logger.info("All items are sucesfully validated and are ready for checkout");
        yield protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Checkout')]")).click();
        // element(by.id('country')).sendKeys("India");
        yield protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.id("country"))).sendKeys("India").perform();
        yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ARROW_DOWN).perform();
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform().then(function () {
            protractor_1.browser.sleep(5000);
        });
        yield protractor_1.browser.sleep(5000);
        //  element(by.css("div #checkbox2")).click();
        yield protractor_1.element(protractor_1.by.buttonText('Purchase')).click();
        protractor_1.element(protractor_1.by.xpath("//div[@class='alert alert-success alert-dismissible']")).getText().then(function (msg) {
            expect(msg).toContain("Thank");
            protractor_1.element(protractor_1.by.xpath("//a[@class='close']")).click();
            logger.info("Sucess message has been closed");
            protractor_1.browser.sleep(3000);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UeXBlU2NyaXB0L3Rlc3QyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0Y7QUFJL0YsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNoQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUV0QixRQUFRLENBQUMsMEJBQTBCLEVBQUMsR0FBRSxFQUFFO0lBQ3BDLElBQUksV0FBVyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUM7SUFDL0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRVosU0FBZSxXQUFXLENBQUMsT0FBTzs7WUFHaEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtnQkFFeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO29CQUd2RSxJQUFHLElBQUksSUFBRSxPQUFPLEVBQ2hCO3dCQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ2hFO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDO0tBQUE7SUFFRCxTQUFlLGFBQWEsQ0FBQyxRQUFROztZQUVuQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLLEVBQUUsQ0FBQztn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