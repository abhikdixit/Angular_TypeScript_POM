"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Test2_Class {
    constructor() {
        this.shoplink = protractor_1.element(protractor_1.by.linkText('Shop'));
        this.checkouttxt = protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link btn btn-primary']"));
        this.checkoutbtn = protractor_1.element(protractor_1.by.partialLinkText('Checkout'));
        this.purchasebtn = protractor_1.element(protractor_1.by.buttonText('Purchase'));
        this.sucesmsgtxt = protractor_1.element(protractor_1.by.xpath("//div[@class='alert alert-success alert-dismissible']"));
        this.closebtn = protractor_1.element(protractor_1.by.xpath("//a[@class='close']"));
        this.country = protractor_1.element(protractor_1.by.id("country"));
    }
}
exports.Test2_Class = Test2_Class;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDJfQ2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlQ2xhc3MvVGVzdDJfQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBcUQ7QUFFckQsTUFBYSxXQUFXO0lBV3hCO1FBRUEsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUl2QyxDQUFDO0NBS0E7QUE1QkQsa0NBNEJDIn0=