const emailRegex : RegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

export function validateEmail(email : string) : boolean { 
    return emailRegex.test(email);
}
