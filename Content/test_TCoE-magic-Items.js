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

MagicItemsList["testing testy"] = {
    name : "Testing testy",
    source : ["TCoE", 1],
    type : "wondrous item",
    rarity : "common",
    description : "This is a test",
    descriptionFull : "This is a longer test"
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
    prerequisite : "Requires attunement by an cleric or paladin",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.cleric ? true : false && classes.known.paladin ? true : false;
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
MagicItemsList["Astral Shard"] = {
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
MagicItemsList["Astromancy Archive"] = {
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