


const CHARACTERS = ["Warrior", "Paladin", "Mage", "Shaman", "Monk",
     "Evoker", "Hunter", "Rogue", "Demon Hunter", "Priest", "Warlock",
    "Death Knight"];

    function getRandomChar(characters) {
        const randomIndexArray = Math.floor(Math.random() * characters.length);
        return characters[randomIndexArray];
       
    }
    
console.log(getRandomChar(CHARACTERS));

function getRandomClass() {

}
   


