import { ElementFinder,element,by } from "protractor";

export class Test1_Class
{

name:ElementFinder
email:ElementFinder
password:ElementFinder
checkbox:ElementFinder
femaleChebox:ElementFinder
radio1btn:ElementFinder
birthday:ElementFinder
submitbtn:ElementFinder
closebtn:ElementFinder
namecheck:ElementFinder
alerttxt:ElementFinder
sucesstxt:ElementFinder


constructor()
{
this.name=element(by.xpath("//div[@class='form-group']//input[@name='name']"));
this.email=element(by.name('email'));
this.password=element(by.id('exampleInputPassword1'));
this.checkbox=element(by.id('exampleCheck1'));
this.femaleChebox=element(by.xpath("//select[@id='exampleFormControlSelect1']//option[contains(text(),'Female')]"));
this.radio1btn=element(by.id('inlineRadio1'));
this.birthday=element(by.xpath("//input[@name='bday']"));
this.submitbtn=element(by.buttonText('Submit'));
this.closebtn=element(by.xpath("//a[@class='close']"));
this.namecheck=element(by.xpath("//div[@class='form-group']//input[@name='name']"));
this.alerttxt=element(by.xpath("//div[@class='alert alert-danger']"));
this.sucesstxt=element(by.css("div[class*='success']"));




}





}