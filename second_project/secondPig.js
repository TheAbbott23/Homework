function translate(str) {

    str=str.toLowerCase();

    const vowels = ["a", "e", "i", "o", "u"];
    const firstLetter = str[0];
        //consolelog.(firstLetter);
    
        if (vowels.find((vowel) => vowel === firstLetter)) {
            return str + 'way';
                     // console.log(firstLetter);
        } else {
            //remove first letter of word
            const newString = str.substring(1);  
            //put that letter at the end
            //add -ay to the end after that letter
            return newString + firstLetter + "ay";

        }
    
    };

    console.log(translate("object"));  
    
translate ("pandemic");

module.exports = {
    translate
}

 