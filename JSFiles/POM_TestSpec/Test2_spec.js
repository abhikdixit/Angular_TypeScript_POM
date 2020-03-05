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
const Test2_Class_1 = require("../PageClass/Test2_Class");
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';
describe("Login into Shopping page", () => {
    let obj2 = new Test2_Class_1.Test2_Class();
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
        yield obj2.shoplink.click();
        selectItems("Samsung Note 8");
        selectItems("iphone X");
        selectItems("Nokia Edge");
        obj2.checkouttxt.getText().then(function (text) {
            logger.info("Total no of checkout item is" + text);
            var result = text.slice(10, 13);
            logger.info("Final Checkout item is" + result);
            obj2.checkoutbtn.click();
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
        yield protractor_1.browser.actions().mouseMove(obj2.country).sendKeys("India").perform();
        yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ARROW_DOWN).perform();
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform().then(function () {
            protractor_1.browser.sleep(5000);
        });
        yield protractor_1.browser.sleep(5000);
        //  element(by.css("div #checkbox2")).click();
        yield obj2.purchasebtn.click();
        obj2.sucesmsgtxt.getText().then(function (msg) {
            expect(msg).toContain("Thank");
            obj2.closebtn.click();
            logger.info("Sucess message has been closed");
            protractor_1.browser.sleep(3000);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDJfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BPTV9UZXN0U3BlYy9UZXN0Ml9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0c7QUFFaEcsMERBQXVEO0FBR3ZELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFFdEIsUUFBUSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRTtJQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUU3QixJQUFJLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO0lBQ2pDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVkLFNBQWUsV0FBVyxDQUFDLE9BQU87O1lBRTlCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtvQkFFeEUsSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO3dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNoRTtnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRUQsU0FBZSxhQUFhLENBQUMsUUFBUTs7WUFDakMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFF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