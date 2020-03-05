"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Test1_Class {
    constructor() {
        this.name = protractor_1.element(protractor_1.by.xpath("//div[@class='form-group']//input[@name='name']"));
        this.email = protractor_1.element(protractor_1.by.name('email'));
        this.password = protractor_1.element(protractor_1.by.id('exampleInputPassword1'));
        this.checkbox = protractor_1.element(protractor_1.by.id('exampleCheck1'));
        this.femaleChebox = protractor_1.element(protractor_1.by.xpath("//select[@id='exampleFormControlSelect1']//option[contains(text(),'Female')]"));
        this.radio1btn = protractor_1.element(protractor_1.by.id('inlineRadio1'));
        this.birthday = protractor_1.element(protractor_1.by.xpath("//input[@name='bday']"));
        this.submitbtn = protractor_1.element(protractor_1.by.buttonText('Submit'));
        this.closebtn = protractor_1.element(protractor_1.by.xpath("//a[@class='close']"));
        this.namecheck = protractor_1.element(protractor_1.by.xpath("//div[@class='form-group']//input[@name='name']"));
        this.alerttxt = protractor_1.element(protractor_1.by.xpath("//div[@class='alert alert-danger']"));
        this.sucesstxt = protractor_1.element(protractor_1.by.css("div[class*='success']"));
    }
}
exports.Test1_Class = Test1_Class;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDFfQ2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlQ2xhc3MvVGVzdDFfQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxXQUFXO0lBaUJ4QjtRQUVBLElBQUksQ0FBQyxJQUFJLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsS0FBSyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUMsQ0FBQztRQUNwSCxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUt4RCxDQUFDO0NBTUE7QUF6Q0Qsa0NBeUNDIn0=