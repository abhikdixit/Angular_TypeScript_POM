import { ElementFinder,element,by} from "protractor";

export class Test2_Class
{

    shoplink:ElementFinder
    checkouttxt:ElementFinder
    checkoutbtn:ElementFinder
    purchasebtn:ElementFinder
    sucesmsgtxt:ElementFinder
    closebtn:ElementFinder
    country:ElementFinder

constructor()
{
this.shoplink=element(by.linkText('Shop'));
this.checkouttxt=element(by.xpath("//a[@class='nav-link btn btn-primary']"));
this.checkoutbtn=element(by.partialLinkText('Checkout'));
this.purchasebtn=element(by.buttonText('Purchase'));
this.sucesmsgtxt=element(by.xpath("//div[@class='alert alert-success alert-dismissible']"));
this.closebtn=element(by.xpath("//a[@class='close']"));
this.country=element(by.id("country"));



}




}