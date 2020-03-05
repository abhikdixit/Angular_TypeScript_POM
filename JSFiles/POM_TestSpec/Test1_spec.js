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
const Test1_Class_1 = require("../PageClass/Test1_Class");
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
    let obj1 = new Test1_Class_1.Test1_Class();
    it("Fill the Onboarding Form", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://qaclickacademy.github.io/protocommerce/");
        yield obj1.name.sendKeys("Student 1");
        yield obj1.email.sendKeys("test@gmail.com");
        yield obj1.password.sendKeys("test");
        //For taking screesnhot at specific point
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'exception.png');
        });
        yield obj1.checkbox.click();
        yield obj1.femaleChebox.click();
        yield obj1.radio1btn.click();
        yield obj1.birthday.sendKeys("15-11-1984");
        yield obj1.submitbtn.click();
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'exception1.png');
        });
        obj1.sucesstxt.getText().then(function (text) {
            logger.info(text);
            expect(text).toContain("Success!");
            obj1.closebtn.click();
            protractor_1.browser.sleep(2000);
        });
    }));
    it("Validation of error message", () => __awaiter(this, void 0, void 0, function* () {
        yield obj1.namecheck.clear();
        yield protractor_1.browser.sleep(2000);
        yield obj1.name.sendKeys("c");
        yield obj1.alerttxt.getText().then(function (text) {
            logger.info(text);
            expect(text).toContain("2 characters");
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDFfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BPTV9UZXN0U3BlYy9UZXN0MV9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0U7QUFFL0UsMERBQXVEO0FBR3ZELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFFdEIsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLFNBQVMsZUFBZSxDQUFDLElBQUksRUFBRSxRQUFRO0lBQ3JDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNmLENBQUM7QUFFRCxRQUFRLENBQUMscUJBQXFCLEVBQUMsR0FBRSxFQUFFO0lBQy9CLElBQUksSUFBSSxHQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDO0lBQy9CLEVBQUUsQ0FBQywwQkFBMEIsRUFBQyxHQUFPLEVBQUU7UUFNdkMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBRXJFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMseUNBQXlDO1FBQ3pDLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUN2QyxlQUFlLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFN0Isb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ3ZDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUlILElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUMsR0FBTyxFQUFFO1FBQ3RDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXZDLENBQUMsQ0FBQyxDQUFDO0lBT1AsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILENBQUMsQ0FBQyxDQUFDIn0=