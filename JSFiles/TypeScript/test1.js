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
var fs = require('fs');
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
describe("Login into QA Click", () => {
    it("Fill the Onboarding Form", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://qaclickacademy.github.io/protocommerce/");
        yield protractor_1.element(protractor_1.by.xpath("//div[@class='form-group']//input[@name='name']")).sendKeys("Student 1");
        yield protractor_1.element(protractor_1.by.name('email')).sendKeys("test@gmail.com");
        yield protractor_1.element(protractor_1.by.id('exampleInputPassword1')).sendKeys("test");
        //For taking screesnhot at specific point
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'exception.png');
        });
        yield protractor_1.element(protractor_1.by.id('exampleCheck1')).click();
        yield protractor_1.element(protractor_1.by.xpath("//select[@id='exampleFormControlSelect1']//option[contains(text(),'Female')]")).click();
        yield protractor_1.element(protractor_1.by.id('inlineRadio1')).click();
        yield protractor_1.element(protractor_1.by.xpath("//input[@name='bday']")).sendKeys("15-11-1984");
        yield protractor_1.element(protractor_1.by.buttonText('Submit')).click();
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'exception1.png');
        });
        protractor_1.element(protractor_1.by.css("div[class*='success']")).getText().then(function (text) {
            logger.info(text);
            expect(text).toContain("Success!");
            protractor_1.element(protractor_1.by.xpath("//a[@class='close']")).click();
            protractor_1.browser.sleep(2000);
        });
    }));
    it("Validation of error message", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//div[@class='form-group']//input[@name='name']")).clear();
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.xpath("//div[@class='form-group']//input[@name='name']")).sendKeys("c");
        yield protractor_1.element(protractor_1.by.xpath("//div[@class='alert alert-danger']")).getText().then(function (text) {
            logger.info(text);
            expect(text).toContain("2 characters");
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UeXBlU2NyaXB0L3Rlc3QxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0U7QUFJL0UsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNoQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUV0QixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsU0FBUyxlQUFlLENBQUMsSUFBSSxFQUFFLFFBQVE7SUFDckMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDekMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2YsQ0FBQztBQUVELFFBQVEsQ0FBQyxxQkFBcUIsRUFBQyxHQUFFLEVBQUU7SUFFbkMsRUFBRSxDQUFDLDBCQUEwQixFQUFDLEdBQU8sRUFBRTtRQUV2QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFFckUsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENB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