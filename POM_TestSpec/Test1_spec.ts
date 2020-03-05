import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { async } from 'q';
import { Test1_Class } from '../PageClass/Test1_Class';


var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';

var fs = require('fs');
function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream(filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

describe("Login into QA Click",()=>{
    let obj1=new Test1_Class();
it("Fill the Onboarding Form",async()=>{
 
    
    
    

await browser.get("https://qaclickacademy.github.io/protocommerce/");

await obj1.name.sendKeys("Student 1");
await obj1.email.sendKeys("test@gmail.com");
await obj1.password.sendKeys("test");

//For taking screesnhot at specific point
browser.takeScreenshot().then(function (png) {
    writeScreenShot(png, 'exception.png');
});

await obj1.checkbox.click();
await obj1.femaleChebox.click();
await obj1.radio1btn.click();
await obj1.birthday.sendKeys("15-11-1984");
await obj1.submitbtn.click();

browser.takeScreenshot().then(function (png) {
    writeScreenShot(png, 'exception1.png');
});



obj1.sucesstxt.getText().then(function(text){
    
logger.info(text);
expect(text).toContain("Success!");
obj1.closebtn.click();
browser.sleep(2000);
});
});

it("Validation of error message",async()=>{
    await obj1.namecheck.clear();
    await browser.sleep(2000);
    await obj1.name.sendKeys("c");
    await obj1.alerttxt.getText().then(function(text){
    logger.info(text);
    expect(text).toContain("2 characters");

    });





   
});

});

