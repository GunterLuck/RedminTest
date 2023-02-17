import { Page,Locator } from "@playwright/test";
 
export class textGenerator{
    randomText() {
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < 15; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
    }
    randomPassword() {
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < 15; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
    }
    randomName() {
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < 15; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
    }
    randomEmail() {
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < 15; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return (result + '@gmail.com');
    }
    testSerchText() {
    return ('Nick')
    }  
    usernameText() {
      return ('nikita25102001')
    }
    passwordText() {
      return ('nikita251001')
    }
}
