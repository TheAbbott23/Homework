
const match = require("./passwordCheck");

describe('match', ()=> {
    
    test ('correct login', ()=> {
        expect(match.checkPassword('shawn@psych.com', 'tearsforfears')).toEqual("Welcome Shawn");
    });

    test ('inccorect login', ()=> {
        expect(match.checkPassword('ryan@milk.com', 'gangster')).toEqual("Unauthorized");
    });
});

