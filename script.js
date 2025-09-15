


const CHARACTERS = ["Warrior", "Paladin", "Mage", "Shaman", "Monk",
     "Evoker", "Hunter", "Rogue", "Demon Hunter", "Priest", "Warlock",
    "Death Knight"];
    

    const SPECS = {
        Warrior: ["Arms", "Fury", "Paladin"],
        Paladin: ["Holy", "Protection", "Retribution"],
        Mage: ["Frost", "Arcane", "Fire"],
        Shaman: ["Elemental", "Enhancement", "Restoration"],
        Monk: ["Brewmaster", "Windwalker", "Mistweaver"],
        Evoker: ["Devestation", "Preservation", "Augmentation"],
        Hunter: ["Survival", "Markmanship", "Beast Mastery"],
        Priest: ["Holy", "Discipline", "Shadow"],
        Warlock: ["Destruction", "Demonology", "Affliction"],
        DeathKnight: ["Frost", "Unholy", "Blood"]
    };

    

 function getRandomChar() {
        const randomIndexVanArray = Math.floor (Math.random() * CHARACTERS.length);
        const RESULT = CHARACTERS[randomIndexVanArray];
        document.getElementById("outputClass").textContent = RESULT;

        console.log(RESULT);
        return RESULT;
     
    };

    // function getRandomSpec(getRandomChar) {
    //     const SPECRANDOM = Math.floor(Math.random() * SPECS.length)
    //     const RESULT = SPECS[SPECRANDOM]
    //     document.getElementById("outputSpec").textContent = RESULT;
    //     console.log(RESULT);
    //     return RESULT
    // }
    



