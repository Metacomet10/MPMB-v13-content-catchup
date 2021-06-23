var iFileName = "test_TCoE-magic-items.js";
RequiredSheetVersion(13);

// Define the source
SourceList["TCoE"] = { 
	name : "Tasha's Cauldron of Everything", 
	abbreviation : "TCoE",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tashas-cauldron-everything",
	date : "2020/11/17"
};

MagicItemsList["absorbing tattoo"] = {
    name : "Absorbing Tattoo",
    source : ["TCoE",119],
    type : "wondrous item",
    rarity : "very rare",
    description : "This magic tattoo features designs that emphasize one color.",
    descriptionFull : "Produced by a special needle, this magic tattoo features designs that emphasize one color.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Damage Resistance. While the tattoo is on your skin, you have resistance to a type of damage associated with that color, as shown on the table below. The DM chooses the color or determines it randomly.\n  1 : Acid : Green\n  2 : Cold : Blue\n  3 : Fire : Red\n  4 : Force : White\n  5 : Lightning : Yellow\n  6 : Necrotic : Black\n  7 : Poison : Violet\n  8 : Psychic : Silver\n  9 : Radiant : Gold\n  10 : Thunder : Orange\n  Damage Absorption. When you take damage of the chosen type, you can use your reaction to gain immunity against that instance of the damage, and you regain a number of hit points equal to half the damage you would have taken. Once this reactino is used, it can't be used again until the next dawn.",
    attunement : true,
    usages : "1",
    recovery : "dawn",
    choices : ["acid", "cold", "fire", "force", "lightning", "necrotic", "poison", "psychic", "radiant", "thunder"],
    "acid" : {        
        name : "Acid Absorbing Tattoo",
        action : ["reaction", "Acid Immunity"],
        description : "This magic tattoo features designs that emphasize the color green.  While on my skin, this tattoo gives me resistance to acid damage. I can use my reaction when hit with acid damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Acid"]
    },
    "cold" : {        
        name : "Cold Absorbing Tattoo",
        action : ["reaction", "Cold Immunity"],
        description : "This magic tattoo features designs that emphasize the color blue.  While on my skin, this tattoo gives me resistance to cold damage. I can use my reaction when hit with cold damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Cold"]
    },
    "fire" : {        
        name : "Fire Absorbing Tattoo",
        action : ["reaction", "Fire Immunity"],
        description : "This magic tattoo features designs that emphasize the color red.  While on my skin, this tattoo gives me resistance to fire damage. I can use my reaction when hit with fire damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Fire"]
    },
    "force" : {        
        name : "Force Absorbing Tattoo",
        action : ["reaction", "Force Immunity"],
        description : "This magic tattoo features designs that emphasize the color white.  While on my skin, this tattoo gives me resistance to force damage. I can use my reaction when hit with force damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Acid"]
    },
    "lightning" : {        
        name : "Lightning Absorbing Tattoo",
        action : ["reaction", "Lightning Immunity"],
        description : "This magic tattoo features designs that emphasize the color yellow.  While on my skin, this tattoo gives me resistance to lightning damage. I can use my reaction when hit with lightning damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Lightning"]
    },
    "necrotic" : {        
        name : "Necrotic Absorbing Tattoo",
        action : ["reaction", "Necrotic Immunity"],
        description : "This magic tattoo features designs that emphasize the color black.  While on my skin, this tattoo gives me resistance to necrotic damage. I can use my reaction when hit with necrotic damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Necrotic"]
    },
    "poison" : {        
        name : "Poison Absorbing Tattoo",
        action : ["reaction", "Poison Immunity"],
        description : "This magic tattoo features designs that emphasize the color violet.  While on my skin, this tattoo gives me resistance to poison damage. I can use my reaction when hit with poison damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Poison"]
    },
    "psychic" : {        
        name : "Psychic Absorbing Tattoo",
        action : ["reaction", "Psychic Immunity"],
        description : "This magic tattoo features designs that emphasize the color silver.  While on my skin, this tattoo gives me resistance to psychic damage. I can use my reaction when hit with psychic damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Psychic"]
    },
    "radiant" : {        
        name : "Radiant Absorbing Tattoo",
        action : ["reaction", "Radiant Immunity"],
        description : "This magic tattoo features designs that emphasize the color gold.  While on my skin, this tattoo gives me resistance to radiant damage. I can use my reaction when hit with radiant damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Radiant"]
    },
    "thunder" : {        
        name : "Thunder Absorbing Tattoo",
        action : ["reaction", "Thunder Immunity"],
        description : "This magic tattoo features designs that emphasize the color orange.  While on my skin, this tattoo gives me resistance to thunder damage. I can use my reaction when hit with thunder damage to gain immunity against it and recover half the damage as HP.",
        dmgres : ["Thunder"]
    }
}

MagicItemsList["alchemical compendium"] = {
	name : "Alchemical Compendium",
	source : ["TCoE", 119],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function(v) {
		return v.isSpellcaster && classes.known.wizard ? true : false;
	},
	description : "When found, this spellbook contains the following spells: enlarge/reduce, feather fall, flesh to stone, gaseous form, magic weapon, and polymorph. The book has 3 charges that regains 1d3 expended charges at dawn. ",
	descriptionFull : "Acrid odors cling to this stained, heavy volume. The book's metal fittings are copper, iron, lead, silver, and gold, some frozen mid-transition from one metal to another. When found, the book contains the following spells: enlarge/reduce, feather fall, flesh to stone, gaseous form, magic weapon, and polymorph. It functions as a spellbook for you.\n  While you are holding the book, you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the transmutation school.\n  As an action, you can touch a nonmagical object that isn't being worn or carried and spend a number of charges to transform the target into another object. For 1 charge, the object can be no larger than 1 foot on a side. You can spend additional charges to increase the maximum dimensions by 2 feet per charge. The new object must have a gold value equal to or less than the original.",
	usages : 3,
	recovery : "dawn",
    action : ["action", "Transform Non-magic Object (1+ charge)"],
    spellcastingBonus : [{
        name : "Enlarge/Reduce",
        spells: ["enlarge/reduce"],
        selection : ["enlarge/reduce"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Feather Fall",
        spells: ["feather fall"],
        selection : ["feather fall"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Flesh to Stone",
        spells: ["flesh to stone"],
        selection : ["flesh to stone"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Gaseous Form",
        spells: ["gaseous form"],
        selection : ["gaseous form"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Magic Weapon",
        spells: ["magic weapon"],
        selection : ["magic weapon"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Polymorph",
        spells: ["polymorph"],
        selection : ["polymorph"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["all-purpose tool"] = {
    name : "All-Purpose Tool",
    source : ["TCoE", 119],
    type : "wondrous item",
    description : "While holding this screwdriver I gain a bonus to spell attack rolls and saving throw DCs of my artificer spells.\n  I can transform this screwdriver into any type of artisan's tools as an action.\n  As an action I can choose any cantrip that I don't know from any class list and can cast is as an artificer cantrip for 8 hours. This can't be used again until the next dawn.",
    descriptionFull : "This simple screwdriver can transform into a variety of tools; as an action, you can touch the item and transform it into any type of artisan's tool of your choice (see the \"Equipment\" chapter in the Player's Handbook for a list of artisan's tools). Whatever form the tool takes, you are proficient with it.\n  While holding this tool, you gain a bonus to the spell attack rolls and the saving throw DCs of your artificer spells. The bonus is determined by the tool's rarity.\n  As an action, you can focus on the tool to channel your creative forces. Choose a cantrip that you don't know from any class list. For 8 hours, you can cast that cantrip, and it counts as an artificer cantrip for you. Once this property is used, it can't be used again until the next dawn.",
    attunement : true,
    prerequisite : "Requires attunement by an artificer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.artificer ? true : false;
    },
    choices : ["+1 tool (uncommon)", "+2 tool (rare)", "+3 tool (very rare)"],
    usages : 1,
    recovery : "dawn",
    action : ["action", "Choose Unknown Cantrip (8 hours)"],
    "+1 tool (uncommon)" : {
        name : "All-Purpose Tool +1",
        rarity : "uncommon",
        magicItemTable : "F",
        description : "While holding this screwdriver I gain a +1 bonus to spell attack rolls and saving throw DCs of my artificer spells. As an action I can transform this screwdriver into any type of artisan's tools. Once per day, as an action I can choose any cantrip that I don't know and can cast it as an artificer cantrip for 8 hours.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/artificer/).test(spellcasters)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my artificer spells."
            ]
        }
    },
    "+2 tool (rare)" : {
        name : "All-Purpose Tool +2",
        rarity : "rare",
        magicItemTable : "G",
        description : "While holding this screwdriver I gain a +2 bonus to spell attack rolls and saving throw DCs of my artificer spells. As an action I can transform this screwdriver into any type of artisan's tools. Once per day, as an action I can choose any cantrip that I don't know and can cast it as an artificer cantrip for 8 hours.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/artificer/).test(spellcasters)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my artificer spells."
            ]
        }
    },
    "+3 tool (very rare)" : {
        name : "All-Purpose Tool +3",
        rarity : "very rare",
        magicItemTable : "G",
        description : "While holding this screwdriver I gain a +3 bonus to spell attack rolls and saving throw DCs of my artificer spells. As an action I can transform this screwdriver into any type of artisan's tools. Once per day, as an action I can choose any cantrip that I don't know and can cast it as an artificer cantrip for 8 hours.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/artificer/).test(spellcasters)) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my artificer spells."
            ]
        }
    }
}
MagicItemsList["amulet of the devout"] = {
    name : "Amulet of the Devout",
    source : ["TCoE", 119],
    type : "wondrous item",
    description : "While I wear this holy symbol, I gain a bonus to spell attack rolls and saving throw DCs of my spells.\n  I can use my Channel Divinity feature without expending one of the feature's uses. This recharges at dawn.",
    descriptionFull : "This amulet bears the symbol of a deity inlaid with precious stones or metals. While you wear the holy symbol you gain a bonus to spell attack rolls and the saving throw DCs of your spells. The bonus is determined by the amulet's rarity.\n  While you wear this amulet, you can use your Channel Divinity feature without expending one of the feature's uses. Once this property is used, it can't be used again until the next dawn.",
    attunement : true,
    prerequisite : "Requires attunement by a cleric or paladin",
    prereqeval : function(v) {
        return (classes.known.cleric ? true : false || classes.known.paladin ? true : false);
    },
    choices : ["+1 amulet (uncommon)", "+2 amulet (rare)", "+3 amulet (very rare)"],
    usages : 1,
    recovery : "dawn",
    "+1 amulet (uncommon)" : {
        name : "Amulet of the Devout +1",
        rarity : "uncommon",
        magicItemTable : "F",
        description : "While I wear this holy symbol, I gain a +1 bonus to spell attack rolls and saving throw DCs of my spells.\n  I can use my Channel Divinity feature without expending one of the feature's uses. This recharges at dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/cleric|paladin/).test(spellcasters)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+2 amulet (rare)" : {
        name : "Amulet of the Devout +2",
        rarity : "rare",
        magicItemTable : "G",
        description : "While I wear this holy symbol, I gain a +2 bonus to spell attack rolls and saving throw DCs of my spells.\n  I can use my Channel Divinity feature without expending one of the feature's uses. This recharges at dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/cleric|paladin/).test(spellcasters)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+3 amulet (very rare)" : {
        name : "Amulet of the Devout +3",
        rarity : "very rare",
        magicItemTable : "G",
        description : "While I wear this holy symbol, I gain a +3 bonus to spell attack rolls and saving throw DCs of my spells.\n  I can use my Channel Divinity feature without expending one of the feature's uses. This recharges at dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && (/cleric|paladin/).test(spellcasters)) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    }
}
MagicItemsList["arcane grimoire"] = {
    name : "Arcane Grimoire",
    source : ["TCoE", 120],
    type : "wondrous item",
    description : "While I hold this spellbook, I gain a bonus to spell attack rolls and saving throw DCs of my spells.\n  When I use my Arcane Recovery feature, I can increase the number of spell slot levels I regain by 1.",
    descriptionFull : "While you are holding this leather-bound book, you can use it as a spellcasting focus for your wizard spells, and you gain a bonus to spell attack rolls and the saving throw DCs of your wizard spells. The bonus is determined by the book's rarity.\n  You can use this book as a spellbook. In addition, when you use your Arcane Recovery feature, you can increase the number of spell slot levels you regain by 1.",
    attunement : true,
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    choices : ["+1 grimoire (uncommon)", "+2 grimoire (rare)", "+3 grimoire (very rare)"],
    usages : 1,
    recovery : "dawn",
    "+1 grimoire (uncommon)" : {
        name : "Arcane Grimoire +1",
        rarity : "uncommon",
        magicItemTable : "F",
        description : "While I hold this spellbook, I gain a +1 bonus to spell attack rolls and saving throw DCs of my spells.\n  When I use my Arcane Recovery feature, I can increase the number of spell slot levels I regain by 1.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/wizard/).test(spellcasters)|ability == 4)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+2 grimoire (rare)" : {
        name : "Arcane Grimoire +2",
        rarity : "rare",
        magicItemTable : "G",
        description : "While I hold this spellbook, I gain a +2 bonus to spell attack rolls and saving throw DCs of my spells.\n  When I use my Arcane Recovery feature, I can increase the number of spell slot levels I regain by 1.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/wizard/).test(spellcasters)|ability == 4)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+3 grimoire (very rare)" : {
        name : "Arcane Grimoire +3",
        rarity : "very rare",
        magicItemTable : "G",
        description : "While I hold this spellbook, I gain a +3 bonus to spell attack rolls and saving throw DCs of my spells.\n  When I use my Arcane Recovery feature, I can increase the number of spell slot levels I regain by 1.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/wizard/).test(spellcasters)|ability == 4)) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    }
}
MagicItemsList["astral shard"] = {
    name : "Astral Shard",
    source : ["TCoE", 120],
    type : "wondrous item",
    rarity : "rare",
    description : "While I hold or wear this crystal, I can teleport to an unoccupied space within 30 feet that I can see immediately following the use of a metamagic option while casting a sorcerer spell.",
    descriptionFull : "This crystal is a solidified shard of the Astral Plane, swirling with silver mist. As an action, you can attack the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus for your sorcerer spells while you hold or wear it.\n  When you use a Metamagic option on a spell while you are holding or wearing the shard, immediately after casting the spell you can teleport to an unoccupied space you can see within 30 feet of you.",
    attunement : true,
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;
    }
}

MagicItemsList["astromancy archive"] = {
    name : "Astromancy Archive",
    source : ["TCoE", 120],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "While I hold this disc, I can expend a charge to replace one of my prepared divination spells with one from the archive. Using my reaction I can force a creature making a saving throw or ability check within 30 ft to roll a d4 and add or subract the result from their roll.",
    descriptionFull : "This brass disc of articulated concentric rings unfolds into an armillary sphere. As a bonus action, you can unfold it into the sphere or back into a disc. When found, it contains the following spells, which are wizard spells for you while you are attuned to it: augury, divination, find the path, foresight, locate creature, and locate object. It functions as a spellbook for you, with spells encoded on the rings.\n  While you are holding the archive, you can use it as a spellcasting foucs for your wizard spells\n  The archive has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the archive, you can expend 1 charge to replace one of your prepeared wizard spells with a different spell in the archive. The new spell must be of the divination school.\n  When a creature you can see within 30 feet of you makes an attack roll, an ability check or a saving throw, you can use your reaction to expend 1 charge and force the creature to roll a d4 and apply the number rolled as a bonus or penalty (your choice) to the original roll. You can do this after you see the roll but before its effects are applied.",
    usages : 3,
	recovery : "dawn",
    action : ["reaction", "+/- 1d4 to atk/save/skill (1 chg)"],
    spellcastingBonus : [{
        name : "Augury",
        spells : ["augury"],
        selection : ["augury"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Divination",
        spells : ["divination"],
        selection : ["divination"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Find the path",
        spells : ["find the path"],
        selection : ["find the path"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Foresight",
        spells : ["foresight"],
        selection : ["foresight"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Locate Creature",
        spells : ["locate creature"],
        selection : ["locate creature"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Locate Object",
        spells : ["locate object"],
        selection : ["locate object"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["atlas of endless horizons"] = {
    name : "Atlas of Endless Horizons",
    source : ["TCoE", 120],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "While I hold this book, I can expend a charge to replace one of my prepared spells with one from the atlas. When I am hit by an attack, I can use my reactionto teleport up to 10 feet to an unoccupied space I can see. If out of range of the attack, it misses.",
    descriptionFull : "This thick book is bound in dark leather, criss-crossed with inlaid silver lines suggesting a map or chart. When found, the book contains the following spells, which are wizard spells for you while you are attuned to the book: arcane gate, dimension door, gate, misty step, plane shift, teleportation circle, and word of recall. It functions as a spellbook for you.\n  While you are holding the book, you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the conjuration school.\n  When you are hit by an attack you can use your reaction to expend 1 charge to teleport up to 10 feet to an unoccupied space you can see. If your new position is out of range of the attack, it misses you.",
    usages : 3,
	recovery : "dawn",
    spellcastingBonus : [{
        name : "Arcane Gate",
        spells : ["arcane gate"],
        selection : ["arcane gate"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Dimension door",
        spells : ["dimension door"],
        selection : ["dimension door"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Gate",
        spells : ["gate"],
        selection : ["gate"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Misty step",
        spells : ["misty step"],
        selection : ["misty step"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Plane Shift",
        spells : ["plane shift"],
        selection : ["plane shift"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Teleportation Circle",
        spells : ["teleportation circle"],
        selection : ["teleportation circle"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Word of Recall",
        spells : ["word of recall"],
        selection : ["word of recall"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }],
    action : ["reaction", "Teleport 10ft (1 charge)"]
}

MagicItemsList["baba yaga's mortar and pestle"] = {
    name : "Baba Yaga's Mortar and Pestle",
    source : ["TCoE", 121],
    type : "wondrous item",
    rarity : "artifact",
    description : "I can expand the mortar to fit up to a Large creature. I can make the pestle a quarterstaff and back at will. When hitting with a melee attack I can add 1d8 force for each charge expended up to 3. Holding both, I can fill the mortar with any nonmagical plant, fluid or mineral worth 10 gp by speaking its name.",
    descriptionFull : "The creations of the immortal Bab Yaga defy the laws of mortal magic. Among the notorious implements that cement her legend on countless worlds are the artifacts that propel her through the planes: Baba Yaga's Mortar and Pestle. These signature tools of Baba Yaga are a single artifact for purposes of attunement. Should the two objects become separated, the pestle appears next to the mortar at the next dawn.\n  Random Properties. This artifact has the following random properties, which you can determine by rolling on the teables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 major beneficial property\n  1 minor detrimental property\n  Properties of the Mortar. The mortar is a Tiny wooden bowl. However, the mortar increases in size to accommodate anything you place inside, expanding--if there's enough space--up to Large size, meaning it can hold even a Large creature.\n  Properties of the Pestle. The pestle is a 6-inch-long, worn wooden tool. Once during your turn while you are holding the pestle, you can extend it into a quarterstaff or shrink it back into a pestle (no action required). As a quarterstaff, the pestle is a magic weapon that grants a +3 bonus to attack and damage rolls made with it.\n  The pestle has 12 charges. When you hit with a melee attack using the pestle, you can expend up to 3 of its charges to deal an extra 1d8 force damage for each charge expended. The pestle regains all expended charges daily at dawn.\n  Perfect Tools. While holding the mortar and pestle, you can use your action to say the name of any nonmagical plant, mineral, or fluid worth 10 gp or less. The mortar instantly fills with the desired amount of that material. Once you use this action you can't do so again until you finish a short or long rest.\n  You can also use the artifact as alchemist's supplies, brewer's supplies, cook's utensils, an herbalism kit, and a poisoner's kit. You have advantage on any check you make using the artifact as one of these tools.\n  Primal Parts. As an action while the pestle and the mortar is within 5 geet of you, you can command the pestle to grind. For the next minute, or until you use your action to verbally command it to stop, the pestle moves on its own, grinding the contents of the mortar into a mush or fine powder that's equally useful for cooking or alchemy. At the start of each of your turns, whatever is in the mortar takes 4d10 force damage. If this reduces the target's hit points to 0, the target is reduce to powder, pulp, or paste, as appropriate. Only magic items are unaffected. If you wish, when the pestle stops, you can have the mortar separate its contents--like powdered bone, crushed herbs, pulped organs--into separate piles.\n  Traverse the Night. If you are holding the pestle while you are inside the mortar, you can use your action to verbally command the mortar to travel to a specific place or creature. You don't need to know where your destination is, but it must be a specific destination--not just the nearest river or a red dragon's lair. If the stated destination is within 1,000 miles of you, the mortar lifts into the air and vanishes. You and any creatures in the mortar travel through a dreamlike sky, with hazy reflections of the world passing by below. Creatures might see images of you streaking through the sky between your point of origin and the destination. You arrive at the location 1 hour later or, if it is night, 1 minute later.\n  Bones Know Their Home. When you command the mortar to travel, you can instead throw out the dust or paste of something ground by the mortar and name a location on a different plane of existence or a different world on the Material Plane. If that material came from a creature native to the named plane or world, the mortar travels through an empty night sky to an unoccupied space at that destination, arriving in 1 minute.\n  Destroying the Mortar and Pestle. The mortar and pestle are destroyed if they are crushed underfoot by the Dancing Hut of Baba Yaga or by Baba Yaga herself.",
    attunement : true,
    usages : 12,
    recovery : "dawn",
    action : [
        ["action", "Traverse the Night"],
        ["action", "Primal Parts"],
        ["action", "Perfect Tools"]
    ],
    weaponOptions : [{
        name : "Baba Yaga's Pestle",
        source : ["TCoE", 121],
        regExpSearch : /^(?=.*pestle)(?=.*yaga's)(?=.*baba).*$/i,
        description : "Versatile (1d8); 1-3 charges per attack add 1d8 force damage per charge",
        modifiers : [3,3],
        type: "simple",
        ability : 1,
        abilitytodamage : true,
        damage : [1, 6, "bludgeoning"],
        range : "Melee",
        tooltip : "I have to expand Baba Yaga's Pestle into a quarterstaff before I may use it as a weapon.",
        defaultExcluded : true
    }]
}

MagicItemsList["barrier tattoo"] = {
    name : "Barrier Tattoo",
    source : ["TCoE",122],
    type : "wondrous item",
    description : "This magic tattoo depicts protective imagery and uses ink that resembles liquid metal. While not wearing armor, this tatoo grants me an Armor Class related to the rarity of the tattoo.",
    descriptionFull : "Produced by a special needle, this magic tatoo depicts protective imagery and uses ink that resembles liquid metal.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Protection. While you aren't wearing armor, the tattoo grants you an Armor Class depending on the tattoo's rarity, as shown below. You can use a shield and still gain this benefit.\n  Uncommon : 12 + your Dexterity modifier\n  Rare : 15 + your Dexterity modifier (maximum of +2)\n  Very Rare : 18",
    attunement : true,
    choices : ["uncommon", "rare", "very rare"],
    "uncommon" : {
        rarity : "uncommon",
        name : "Barrier Tattoo (uncommon)",
        description : "This magic tattoo depicts protective imagery and uses ink that resembles liquid metal. While not wearing any armor, this tattoo grants me an Armor Class of 12 plus my Dexterity Modifier.",
        addArmor : "Barrier Tattoo (uncommon)",
        armorOptions : {
            regExpSearch : /^(?=.*barrier)(?=.*(tattoo)).*$/i,
            name : "Barrier Tattoo (uncommon)",
            source : ["TCoE",122],
            ac : 12
        }
    },
    "rare" : {
        rarity : "rare",
        name : "Barrier Tattoo (rare)",
        description : "This magic tattoo depicts protective imagery and uses ink that resembles liquid metal. While not wearing any armor, this tattoo grants me an Armor Class of 15 plus my Dexterity Modifier (maximum of 2).",
        addArmor : "Barrier Tattoo (rare)",
        armorOptions : {
            regExpSearch : /^(?=.*barrier)(?=.*(tattoo)).*$/i,
            name : "Barrier Tattoo (rare)",
            source : ["TCoE",122],
            ac : 15,
            dex : 2
        }
    },
    "very rare" : {
        rarity : "very rare",
        name : "Barrier Tattoo (very rare)",
        description : "This magic tattoo depicts protective imagery and uses ink that resembles liquid metal. While not wearing any armor, this tattoo grants me an Armor Class of 18.",
        addArmor : "Barrier Tattoo (very are)",
        armorOptions : {
            regExpSearch : /^(?=.*barrier)(?=.*(tattoo)).*$/i,
            name : "Barrier Tattoo (very rare)",
            source : ["TCoE",122],
            ac : 18,
            dex : -10
        }
    }
}

MagicItemsList["bell branch"] = {
    name : "Bell Branch",
    source : ["TCoE", 122],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a druid or warlock",
	prereqeval : function(v) {
		return v.isSpellcaster && (classes.known.druid ? true : false || classes.known.warlock ? true : false);
	},
    description : "This silver implement is shaped like a tree branch and is strung with small golden bells. As a bonus action I can expend 1 charge to detect the presence of aberrations, celestials, constructs, elementals, fey, fiends, or undead within 60 feet. As an action I can expend 1 charge to cast protection from evil and good.",
    descriptionFull : "This silver implement is shaped like a tree branch and is strung with small golden bells. The branch is a spellcasting focus for your spells while you hold it.\n  The branch has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it.\n  As a bonus action, you can expend 1 charge to detect the presence of aberrations, celestials, constructs, elementals, fey, fiends, or undead within 60 feet of you. If such creatures are present and don't have total cover from you, the bells ring softly, their tone indicating the creature types present.\n  As an action, you can expend 1 charge to cast protection from evil and good.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : [
        ["bonus action", "Detect Presence"],
        ["action","Cast Protection from Evil/Good"]
    ],
    spellcastingBonus : [{
        name : "Protection from Evil/Good",
        spells : ["protection from evil and good"],
        selection : ["protection from evil and good"],
        spellcastingAbility : "class"
    }]
}

MagicItemsList["blood fury tattoo"] = {
    name : "Blood Fury Tattoo",
    source : ["TCoE",122],
    type : "wondrous item",
    rarity : "legendary",
    description : "When I hit with a weapon attack I can expend a charge to add 4d6 necrotic damage and regain HP equal to the necrotic damage dealt. When I am damaged by a creature I can see, I can expend a charge and use my reation to make a melee attack against that creature with advantage.",
    descriptionFull : "Produced by a special needle, this magic tatoo evokes fury in its form and colors.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Bloodthirsty Strikes. The tattoo has 10 charges, and it regains all expended charges daily at dawn. While this tattoo is on your skin, you gain the following benefits:\n  When you hit a creature with a weapon attack, you can expend a charge to deal an extra 4d6 necrotic damage to the target, and you regain a number of hit points equal to the necrotic damage dealt.\n  When a creature you can see damages you, you can expend a charge and use your reaction to make a melee attack against that creature with advantage on your attack roll.",
    attunement : true,
    usages : 10,
    recovery : "dawn",
    action : ["reaction", "Melee Attack w/adv (1 chg)"]
}

MagicItemsList["bloodwell vial"] = {
    name : "Bloodwell Vial",
    source : ["TCoE",122],
    type : "wondrous item",
    attunement : true,
    description : "While I hold this vial, I gain a bonus to my spell attack rolls and the saving throw DCs of my sorcerer spells. When I roll any Hit Dice to recover hit points I can gain 5 sorcery points once per day.",
    descriptionFull : "To attune this vial, you must place a few drops of your blood in it. The vial can't be opened while your attunement to it lasts. If your attunement to the vial ends, the contained blood turns to ash. You can use the vial as a spellcasting focus for your spells while wearing or holding it, and you gain a bonus to spell attack rolls and to the saving throw DCs of your sorcerer spells. The bonus is determined by the vial's rarity.\n  In addition, when you roll any Hit Dice to recover hit points while you are carrying the vial, you can regain 5 sorcery points. This property of the vial can't be used again until the next dawn.",
    usages : "1",
    recovery : "dawn",
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;
    },
    limfeaname : "Roll Hit Dice Recover 5 SP",
    choices : ["+1 vial (uncommon)", "+2 vial (rare)", "+3 vial (very rare)"],
    "+1 vial (uncommon)" : {
        name : "Bloodwell Vial +1",
        rarity : "uncommon",
        magicItemTable : "F",
        description : "While I hold this vial, I gain a +1 bonus to my spell attack rolls and the saving throw DCs of my sorcerer spells. When I roll any Hit Dice to recover hit points I can regain 5 sorcery points once per day.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/sorcerer/).test(spellcasters)|ability == 6)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+2 vial (rare)" : {
        name : "Bloodwell Vial +2",
        rarity : "rare",
        magicItemTable : "G",
        description : "While I hold this vial, I gain a +2 bonus to my spell attack rolls and the saving throw DCs of my sorcerer spells. When I roll any Hit Dice to recover hit points I can regain 5 sorcery points once per day.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/sorcerer/).test(spellcasters)|ability == 6)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
    "+3 vial (very rare)" : {
        name : "Bloodwell Vial +3",
        rarity : "very rare",
        magicItemTable : "G",
        description : "While I hold this vial, I gain a +3 bonus to my spell attack rolls and the saving throw DCs of my sorcerer spells. When I roll any Hit Dice to recover hit points I can regain 5 sorcery points once per day.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
					if (type != "prepare" && ((/sorcerer/).test(spellcasters)|ability == 6)) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my spells."
            ]
        }
    },
}

MagicItemsList["cauldron of rebirth"] = {
    name : "Cauldron of Rebirth",
    source : ["TCoE",122],
    type : "wondrous item",
    rarity : "very rare",
    description : "After a long rest, I can make a potion of greater healing that lasts up to 24 hours. As an action I can make the cauldron grow large enough for a Medium creature to crouch in. I can place a dead creature inside with 200 pounds of salt for 8 hours to raise dead.",
    descriptionFull : "This Tiny pot bears relief scenes of heroes on its cast iron sides. You can use the cauldron as a spellcasting focus for your druid spells, and it functions as a suitable component for the scrying spell. When you finish a long rest, you can use the cauldron to create a potion of greater healing. The potion lasts for 24 hours, the loses its magic if not consumed.\n  As an action you can use the cauldron to grow large enough for a Medium creature to crouch within. You can revert the cauldron to its normal size as an action, harmlessly shuntin anything that can't fit inside to the neares unoccupied space.\n  If you place the corpse of a humanoid into the cauldron and cover the corpse with 200 pounds of salt (which costs 10 gp) for at least 8 hours, the salt is consumed and the creature returns to life as if by raise dead at the next dawn. Once used, this property can't be used again for 7 days.",
    attunement : true,
    prerequisite : "Requires attunement by a druid or warlock",
    prereqeval : function(v) {
        return v.isSpellcaster && (classes.known.druid ? true : false || classes.known.warlock ? true : false);
    },
    action : ["action", "Cauldron of Rebirth grow/shrink"],
    limfeaname : "CoR: Grow/Shrink",
    extraLimitedFeatures : [{
        name : "Cauldron of Rebirth: Rebirth",
        usages : "1",
        recovery : "7 days"
    }]
}

MagicItemsList["coiling grasp tattoo"] = {
    name : "Coiling Grasp Tattoo",
    source : ["TCoE",123],
    type : "wondrous item",
    rarity : "uncommon",
    description : "As an action, I can cause this tattoo to extrude inky tendrils and grapple a creature within 15 feet of me.\n  The creature takes 3d6 force damage and are grappled if they fail a DC 14 Strength save.",
    descriptionFull : "Produced by a special needle, this magic tatoo has long intertwining designs.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Grasping Tendrils. While the tattoo is on your skin, you can, as an action, cause the tattoo to extrude into inky tendrils, which reach for a creature you can see within 15 feet of you. The creature must succeed on a DC 14 Strength saving throw or take 3d6 force damage and be grappled by you. As an action, the creature can escape the grapple by succeeding on a DC 14 Strength (Athletics) or Dexterity (Acrobatics) check. The grapple also ends if you halt it (no action requred), if the creature is ever more than 15 feet away from you, or if you use this tattoo on a different creature.",
    attunement : true,
    usages : 10,
    recovery : "dawn",
    action : ["action", "Grasping Tendrils"]
}

MagicItemsList["crook of rao"] = {
    name : "Crook of Rao",
    source : ["TCoE",123],
    type : "wondrous item",
    rarity : "artifact",
    description : "While holding the crook, I can expend 1 or more charges to cast one of its spells. I can spend 10 minutes to banish all fiends below CR 19 within 1 mile to their home plane for 100 years.",
    descriptionFull : "Ages ago, the serene god Rao created a tool to shield his fledgling faithful against the evils of the Lower Planes. Yet, as eons passed, mortals developed their own methods of dealing with existential threats, and the crook was largely forgotten. In recent ages, though, the Crook of Rao was rediscovered and leveraged against the rising power of the Witch Queen Iggwilv (one of the names of the wizard Tasha). Although she was defeated, Iggwilv managed to damage the crook during the battle, infecting it with an insidious curse--and the potential for future victory. In the aftermath, the crook was again lost. Occasionally it reappears, but the famed artifact is not what it was. Whether or not the artifact's bearers realize its full threat, few risk using the Crook of Rao--potentially for the final time.\n  Random Properties. The artifact has the following random properties, which you can determine by reolling on the tables in the \"Arifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 major beneficial property\n  1 minor detrimental property\n  Spells. The crook has 6 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells (save DC 18) from it: aura of life (2 charges), aura of purity (2 charges), banishment (1 charge), beacon of hope (1 charge), mass cure wounds (3 charges). The crook regains 1d6 expended charges daily at dawn.\n  Absolute Banishment. While you are attuned to the crook and holding it, you can spend 10 minutes to banish all but the mightiest fiends within 1 mile of you. Any fiend with a challenge rating of 19 or higher is unaffected. Each banished fiend is sent back to its home plane and can't return to the plane the Crook of Rao banished it from for 100 years.\n\nSee the Notes section for further information.",
    toNotesPage : [{
        name : "Crook of Rao",
        note : [
            "\nFailing Matrix",
            "Whenvever the Crook of Rao's Absolute Banishment property is used, or when its last charge is expended, roll on the Extraplanar Reversal table. Any creature conjured as a result of this effect appear in random unoccupied spaces within 60 feet of you and are not under your control.",
            "\nExtraplanar Reversal",
            " d100   Effect",
            "01-25   A portal to a random plane opens. The portal closes after 5 mintues.",
            "26-45   2d4 imps and 2d4 quasits appear.",
            "46-60   1d8 succubi/incubi appear.",
            "61-70   1d10 barbed devils and 1d10 vrocks appear.",
            "71-80   1 arcanoloth, 1 night hag, and 1 rakshasa appear.",
            "81-85   1 ice devil and 1 marilith appear.",
            "86-90   1 balor and 1 pit fiend appear. At the DM's discretion, a portal opens\n       into the presence of a archdevil or demon lord instead, then closes\n       after 5 minutes.",
            "91-00   Iggwilv's Curse (see the Iggwilv's Curse property).",
            "\nIggwilv's Curse",
            "When the Crook was last used against Iggwilv, the Witch Queen lashed out at the artifact, infecting its magical matrix. Over the years, this curse has spread within the crook, threatening to violently pervert its ancient magic. If this occurs, the Crook of Rao, as it is currently known, is destroyed, its magical matrix inverting and exploding into a 50-foot diameter portal. This portal functions as a permanent gate spell cast by Iggwilv. The gate then, once per round on an initiateve count 20, audibly speaks a fiend's name in Iggwilv's voice, doing so until the gate calls on every fiend ever banished by the Crook of Rao. If the fiend still exists, it is drawn through the gate. This process takes eighteen years to complete, at the end of which the gate becomes a permanent portal to Pazunia, the first layer of the Abyss.",
            "\nDestroying or Repairing the Crook",
            "The Crook of Rao can either be destroyed or repaired by journeying to Mount Celestiaand obtaining a tear from the eternally serene god Rao. One way to make the emontionless god cry would be to reunite Rao with the spirit of his first worshipper who sought revelations byond the multiverse long ago. The Crook dissolves if immersed in teh god's tear for a year and a day. If washed in the tear daily for 30 days the Crook loses its Failing Matrix Property.",
        ]
    }],
    attunement : true,
    usages : 6,
    recovery : "dawn",
    action : ["action", "Absolute Banishment"],
    spellcastingBonus : [{
        name : "Aura of Life",
        spells : ["aura of life"],
        selection : ["aura of life"],
        firstCol : "2c",
        allowUpCasting : true,
        fixedDC : 18,
    },{
        name : "Aura of Purity",
        spells : ["aura of purity"],
        selection : ["aura of purity"],
        firstCol : "2c",
        allowUpCasting : true,
        fixedDC : 18,
    },{
        name : "Banishment",
        spells : ["banishment"],
        selection : ["banishment"],
        firstCol : "1c",
        allowUpCasting : true,
        fixedDC : 18,
    },{
        name : "Beacon of Hope",
        spells : ["beacon of hope"],
        selection : ["beacon of hope"],
        firstCol : "1c",
        allowUpCasting : true,
        fixedDC : 18,
    },{
        name : "Mass Cure Wounds",
        spells : ["mass cure wounds"],
        selection : ["mass cure wounds"],
        firstCol : "3c",
        allowUpCasting : true,
        fixedDC : 18,
    }]
}

MagicItemsList["crystalline chronicle"] = {
    name : "Crystalline Chronicle",
    source : ["TCoE", 124],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "While I am holding the crystal, I can use it as a spellcasting focus. I know the cantrips mage hand, mind sliver, and message if I don't already know them.",
    descriptionFull : "An etched crystal sphere the size of a grapefruit hums faintly and pulses with irregular flares of inner light. While you are touching the crystal, you can retrieve and store information and spells within the crystal at the same rate as reading and writing. When found the crystal contains the following spells: detect thoughts, intellect fortress, Rary's telepathic bond, sending, telekinesis, Tasha's mind whip, and Tenser's floating disk. It functions as a spellbook for you, with its spells and other writing psychically encoded within it.\n  While you are holding the crystal, you can use it as a spellcasting focus for your wizard spells, and you know the mage hand, mind sliver and message cantrips if you don't already know them.\n  The crystal has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the information within the crystal, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book.\n  When you cast a wizard spell, you can expend 1 charge to cast the spell without verbal, somatic, or material components of up to 100 gp value.",
    usages : 3,
	recovery : "dawn",
    spellcastingBonus : [{
        name : "Detect Thoughts",
        spells : ["detect thoughts"],
        selection : ["detect thoughts"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Intellect Fortress",
        spells : ["intellect fortress"],
        selection : ["intellect fortress"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Mage Hand",
        spells : ["mage hand"],
        selection : ["mage hand"],
        firstCol : "atwill",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Message",
        spells : ["message"],
        selection : ["message"],
        firstCol : "atwill",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Mind Sliver",
        spells : ["mind sliver"],
        selection : ["mind sliver"],
        firstCol : "atwill",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Rary's Telepathic Bond",
        spells : ["rary's telepathic bond"],
        selection : ["rary's telepathic bond"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Sending",
        spells : ["sending"],
        selection : ["sending"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Telekinesis",
        spells : ["telekinesis"],
        selection : ["telekinesis"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Tasha's Mind Whip",
        spells : ["tasha's mind whip"],
        selection : ["tasha's mind whip"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Tenser's Floating Disk",
        spells : ["tenser's floating disk"],
        selection : ["tenser's floating disk"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }],
    action : [
        ["action", "Swap Prepared Spell"],
        ["action", "Cast Without Components"]
    ]
}

MagicItemsList["demonomicon of iggwilv"] = {
    name : "Demonomicon of Iggwilv",
    source : ["TCoE",125],
    type : "wondrous item",
    rarity : "artifact",
    description : "While holding the Demonomicon, when I make an Intelligence check regarding demons or a Wisdom check related to the Abyss I can add double my proficiency bonus to the check. When I make a spell damage roll against a fiend I apply the maximum damage.",
    descriptionFull : "An expansive treatise documenting the Abyss's infinite layers and inhabitants, the Demonomicon of Iggwilv is the most thorough and blasphemous tome of demonology in the multiverse. The tome recounts both the oldest and most current profanities of the Abyss and demons. Demons have attempted to censor the text, and while sections have been ripped from the book's spine, the general chapters remain, ever revealing demonic secrets. And the book holds more than blasphemies. Caged behind lines of script roils a secret piece of the Abyss itself, which keeps the book up-to-date, no matter how many pages are removed, and it longs to be more than mere reference material.\n  Random Properties. The artifact has the following random properties, which you can determine by rolling on the tables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 minor detrimental property\n  1 major detrimental property\n  Spells. The book has 8 charges. It regains 1d8 expended charges daily at dawn. While holding it, you can use an action to cast Tasha's hideous laughter from it or to expend 1 or more of its charges to cast one of the following spells (save DC 20) from it: magic circle (1 charge), magic jar (2 charges), planar ally (3 charges), planar binding (2 charges), plane shift (to layers of the Abyss only; 3 charges), summon fiend (3 charges).\n  Abyssal Reference. You can reference the Demonomicon whenever you make an Intelligence check to discern information about demons or a Wisdom (Survival) check related to the Abyss. When you do so, you can add double your proficiency bonus to the check.\n\nSee the Notes section for further information.",
    attunement : true,
    toNotesPage : [{
        name : "Demonomicon of Iggwilv",
        note : [
            "\nFiendish Scourging",
            "Your magic causes pain to fiends. While carrying the book, when you make a damage roll for a spell you cast against a fiend, you use the maximum possible result instead of rolling.",
            "\nEnsnarement",
            "While carrying the book, whenever you cast the magic circle spell naming only fiends, or the planar binding spell targeting a fiend, the spell is cast at 9th level, regardless of what level spell slot you used, if any. Additionally, the fiend has disadvantage on its saving throw against the spell.",
            "\nContainment",
            "The first 10 pages of the Demonomicon are blank. As an action while holding the book, you can target a fiend that you can see that is trapped within a magic circle. The fiend must succeed on a DC 20 Charisma saving throw with disadvantage or become trapped within one of the Demonomicon's empty blank pages, which fills with writing detailing the trapped creature's widely known name and depravities. Once Used, this action can't be used again until the next dawn.\n  When you finish a long rest, if you and the Demonomicon are on the same plan of existence, the trapped creature of the highest challenge rating within the book can attempt to possess you. You must make a DC 20 Charisma saving throw. On a failure, you are possessed by the creature, which controls you like a puppet. The possessing creature can release you as an action, appearing in the closest unoccupied space. On a successful save, the fiend can't try to possess you again for 7 days.\n  When the tome is discovered it has 1d4 fiends occupying its pages, typically an assortment of demons.",
            "\nDestroying the Demonomicon",
            "To destroy the book, six different demon lords must each tear out a sixth of the book's pages. If this occurs, the pages reappear after 24 hours. Before all those hours pass, anyone who opens the book's remaining binding is transported to a nascent layer of the Abyss that lies hidden within the book. At the heart of this dadly, semi-sentient domain lies a long-lost artifact, Fraz-Urb'luu's Staff. If the staff is dragged from the pocket plane, the tome is reduced to a mundane and quite out-of-date copy of the Tome of Zyx, the work that served as the foundation for the Demonomicon. Once the staff emerges, the demon lord Fraz-Urb'luu instantly knows.",
        ]
    }],
    usages : 8,
    recovery : "dawn",
    action : ["action", "Containment"],
    spellcastingBonus : [{
        name : "Magic Circle",
        spells : ["magic circle"],
        selection : ["magic circle"],
        firstCol : "1c",
        allowUpCasting : true,
        fixedDC : 20,
    },{
        name : "Magic Jar",
        spells : ["magic jar"],
        selection : ["magic jar"],
        firstCol : "3c",
        allowUpCasting : true,
        fixedDC : 20,
    },{
        name : "Planar Ally",
        spells : ["planar ally"],
        selection : ["planar ally"],
        firstCol : "3c",
        allowUpCasting : true,
        fixedDC : 20,
    },{
        name : "Planar Binding",
        spells : ["planar binding"],
        selection : ["planar binding"],
        firstCol : "2c",
        allowUpCasting : true,
        fixedDC : 20,
    },{
        name : "Plane Shift (Abyss)",
        spells : ["plane shift"],
        selection : ["plane shift"],
        firstCol : "3c",
        allowUpCasting : true,
        fixedDC : 20,
    },{
        name : "Summon Fiend",
        spells : ["summon fiend"],
        selection : ["summon fiend"],
        firstCol : "3c",
        allowUpCasting : true,
        fixedDC : 20,
    }]
}

MagicItemsList["devotee's censer"] = {
    name : "Devotee's Censer",
    source : ["TCoE", 126],
    type : "weapon",
    rarity : "rare",
    attunement : true,
    prerequisite : "Requires attunement by a cleric or paladin",
    prereqeval : function(v) {
        return (classes.known.cleric ? true : false || classes.known.paladin ? true : false);
    },
    description : "While using this flail, when I hit with an attack roll the target takes 1d8 extra radiant damage. As an action I can speak the command word to emanate a 10 foot radius cloud for 1 minute that heals 1d4 hit points at the beginning of my turn.",
    descriptionFull : "The rounded head of this flail is perforated with tiny holes, arranged in symbols and patterns. The flail counts as a holy symbol for you. When you hit with an attack using this magic flail, the target takes an extra 1d8 radiant damage.\n  As a bonus action you can speak the command word to cause the flail to emanage a thin cloud of incense out to 10 feet for 1 minute. At the start of each of your turns, you and any other creatures in the incense each regain 1d4 hit points. This property can't be used again until the next dawn.",
    usages : 1,
    recovery : "dawn",
    action : ["bonus action", "Incense Cloud"],
    weaponOptions : [{
        name : "Devotee's Censer",
        source : ["TCoE", 126],
        regExpSearch : /^(?=.*devotee's)(?=.*censer).*$/i,
        description : "+1d8 radiant damage",
        type : "Martial",
        ability : 1,
        abilitytodamage : true,
        damage : [1,8, "bludgeoning"],
        range : "Melee",
        weight : 2,
        baseWeapon : "flail"
    }]
}

MagicItemsList["duplicitous manuscript"] = {
    name : "Duplicitous Manuscript",
    source : ["TCoE",126],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "I can use an action to change the book's appearance or plot. I can use the book as a spellcasting focus. I can spend 1 minute and 1 charge to replace a prepared spell with one from the book. I can expend 1 charge to impose disadvantage on checks against my illusion spells.",
    descriptionFull : "To you, this book is a magical spellbook. To anyone else, the book appears to be a volume of verbose romance fiction. As an action, you can change the book's appearance and alter the plot of the romance.\n  When found, the book contains the following spells: hallucinatory terrain, major image, mirror image, mislead, Nystul's magic aura, phantasmal force and silent image. It functions as a spellbook for you.\n  While you are holding the book, you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n  If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepard wizard spells with a different spell in the book. The new spell must be of the illusion school.\n  When a creature you can see makes an Intelligence (Investigation) check to discern the true nature of an illusion spell you cast, or makes a saving throw against an illusion spell you cast, you can use your reaction and expend 1 charge to impose disadvantage on the roll.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : [
        ["reaction", "Add Disadvantage (1 chg)"],
        ["action", "Change Book"]
    ],    
    spellcastingBonus : [{
        name : "Hallucinatory Terrain",
        spells : ["hallucinatory terrain"],
        selection : ["hallucinatory terrain"],
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Major Image",
        spells : ["major image"],
        selection : ["major image"],
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Mirror Image",
        spells : ["mirror image"],
        selection : ["mirror image"],
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Mislead",
        spells : ["mislead"],
        selection : ["mislead"],
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Nystul's Magic Aura",
        spells : ["nystul's magic aura"],
        selection : ["nystul's magic aura"],
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Phantasmal Force",
        spells : ["phantasmal force"],
        selection : ["phantasmal force"],
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Sient Image",
        spells : ["silent image"],
        selection : ["silent image"],
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["eldritch claw tattoo"] = {
    name : "Eldritch Claw Tattoo",
    source : ["TCoE",126],
    type : "wondrous item",
    rarity : "uncommon",
    description : "While this tattoo is on my skin, my unarmed strikes count as magical attacks and gain a +1 bounus to attack and damge rolls. Once per day I can empower the tattoo and hit creatures 15 feet away with a weapon or unarmed strike and deal an additional 1d6 force damage on a hit.",
    descriptionFull : "Produced by a special needle, this magic tatoo depicts clawlike forms and other jagged shapes.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Magical Strikes. While the tattoo is on your skin, your unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks, and you gain a +1 bonus to attack and damage rolls with unarmed strikes.\n  Eldritch Maul. As a bonus action, you can empower the tattoo for 1 minute. For the duration, each of your melee attacks with a weapon or an unarmed strike can reach a target up to 15 feet away from you, as inky tendrils launch toward the target. In addition, your melee attacks dal an extra 1d6 force damage on a hit. Once used, this bonus action can't be used again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    action : ["bonus action", "Eldritch Maul"],
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (v.baseWeaponName == "unarmed strike") {
                    fields.Description += (fields.Description ? '; ' : '') + '+1 to damage and hit from Eldritch Claw Tattoo';
                    fields.to_Hit_Bonus = '+1';
                    fields.Damage_Bonus = '+1';
                };
            },
            "If I include the words 'Fire Snake' in the name of an unarmed strike, it gets +10 ft reach, does fire damage, and gains the option to deal +1d10 fire damage by spending 1 additional ki point."
        ]
    }
}

MagicItemsList["elemental essence shard"] = {
    name : "Elemental Essence Shard",
    source : ["TCoE", 127],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;},
    description : "While I hold or wear this crystal, I can attach it to an Tiny object or remove it.",
    descriptionFull : "This crackling crystal contains the essence of an elemental plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.\n  Roll a d4 and consult the Elemental Essence Shards table to determine the shard's essence and property. When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.\n  Elemental Essence Shards\nd4\tProperty\n 1\tAir. You can immediately fly up to 60 feet without\n\tprovoking opportunity attacks\n 2\tEarth. You gain resistance to a damage type of\n\tyour choice until the start of your next turn.\n 3\tFire. One target of the spell that you can see\n\tcatches fire. The burning target takes 2d10 fire\n\tdamage at the start of its next turn, and then the\n\tflames go out.\n 4\tWater. You create a wave of water that bursts out\n\tfrom you in a 10-foot-radius. Each creature of\n\tyour choice that you can see in that area takes\n\t2d6 cold tdamage and must succeed on a\n\tStrength saving throw against your spell save DC\n\tor be tpushed 10 feet away from you and fall\n\tprone.",
    choices : ["air", "earth", "fire", "water"],
    "air" : {
        name : "Air Essence Shard",
        description : "Whie I hold or wear this crystal, when I use a Metamagic option I can immediately fly up to 60 feet without provoking opportunity attacks."
    },
    "earth" : {
        name : "Earth Essence Shard",
        description : "Whie I hold or wear this crystal, when I use a Metamagic option I gain resistance to a damage type of my choice until the start of my next turn."
    },
    "fire" : {
        name : "Fire Essence Shard",
        description : "Whie I hold or wear this crystal, when I use a Metamagic option one target of the spell that I can see catches fire. The target takes 2d10 fire damage at the start of its next turn."
    },
    "water" : {
        name : "Water Essence Shard",
        description : "Whie I hold or wear this crystal, when I use a Metamagic option I create a wave of water effects a 10-foot-radius. Each crature I choose in that area takes 2d6 cold damage and is pushed back 10 feet if it fails a Strength saving throw."
    }
}
