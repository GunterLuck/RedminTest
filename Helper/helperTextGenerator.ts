export class TextGeneratorHelper{
    
    randomText() {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let charLength = chars.length;
        let result = '';
        for ( let i = 0; i < 15; i++ ) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
    }
    randomPassword() {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let charLength = chars.length;
        let result = '';
        for ( let i = 0; i < 20; i++ ) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
    }
    randomName() {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charLength = chars.length;
        let result = '';
        for ( let i = 0; i < 15; i++ ) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
    }
    randomEmail() {
        let result = this.randomText()
        return (result + '@gmail.com');
    }
    testSerchText() {
        return ('Nick')
    }  
}
