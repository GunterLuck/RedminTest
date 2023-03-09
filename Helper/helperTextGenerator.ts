export class TextGeneratorHelper{
    
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
        for ( var i = 0; i < 20; i++ ) {
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
        for ( var i = 0; i < 12; i++ ) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return (result + '@gmail.com');
    }
    testSerchText() {
        return ('Nick')
    }  
}
