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
    }]
}

MagicItemsList["baba yaga's mortar and pestle"] = {
    name : "Baba Yaga's Mortar and Pestle",
    source : ["TCoE", 121],
    type : "wondrous item",
    rarity : "artifact",
    description : "I can make the mortar expand to fit up to a Large creature. I can extend the pestle to the size of a quarterstaff or shrink it back at will. I can expend up to 3 charges when hitting with a melee attack and add 1d8 force for each charge. While holding both I can fill the mortar with any nonmagical plant, fluid or mineral  worth up to 10 gp by speaking its name.",
    descriptionFull : "The creations of the immortal Bab Yaga defy the laws of mortal magic. Among the notorious implements that cement her legend on countless worlds are the artifacts that propel her through the planes: Baba Yaga's Mortar and Pestle. These signature tools of Baba Yaga are a single artifact for purposes of attunement. Should the two objects become separated, the pestle appears next to the mortar at the next dawn.\n  Random Properties. This artifact has the following random properties, which you can determine by rolling on the teables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor beneficial properties\n  1 major beneficial property\n  1 minor detrimental property\n  Properties of the Mortar. The mortar is a Tiny wooden bowl. However, the mortar increases in size to accommodate anything you place inside, expanding--if there's enough space--up to Large size, meaning it can hold even a Large creature.\n  Properties of the Pestle. The pestle is a 6-inch-long, worn wooden tool. Once during your turn while you are holding the pestle, you can extend it into a quarterstaff or shrink it back into a pestle (no action required). As a quarterstaff, the pestle is a magic weapon that grants a +3 bonus to attack and damage rolls made with it.\n  The pestle has 12 charges. When you hit with a melee attack using the pestle, you can expend up to 3 of its charges to deal an extra 1d8 force damage for each charge expended. The pestle regains all expended charges daily at dawn.\n  Perfect Tools. While holding the mortar and pestle, you can use your action to say the name of any nonmagical plant, mineral, or fluid worth 10 gp or less. The mortar instantly fills with the desired amount of that material. Once you use this action you can't do so again until you finish a short or long rest.\n  You can also use the artifact as alchemist's supplies, brewer's supplies, cook's utensils, an herbalism kit, and a poisoner's kit. You have advantage on any check you make using the artifact as one of these tools.\n  Primal Parts. As an action while the pestle and the mortar is within 5 geet of you, you can command the pestle to grind. For the next minute, or until you use your action to verbally command it to stop, the pestle moves on its own, grinding the contents of the mortar into a mush or fine powder that's equally useful for cooking or alchemy. At the start of each of your turns, whatever is in the mortar takes 4d10 force damage. If this reduces the target's hit points to 0, the target is reduce to powder, pulp, or paste, as appropriate. Only magic items are unaffected. If you wish, when the pestle stops, you can have the mortar separate its contents--like powdered bone, crushed herbs, pulped organs--into separate piles.\n  Traverse the Night. If you are holding the pestle while you are inside the mortar, you can use your action to verbally command the mortar to travel to a specific place or creature. You don't need to know where your destination is, but it must be a specific destination--not just the nearest river or a red dragon's lair. If the stated destination is within 1,000 miles of you, the mortar lifts into the air and vanishes. You and any creatures in the mortar travel through a dreamlike sky, with hazy reflections of the world passing by below. Creatures might see images of you streaking through the sky between your point of origin and the destination. You arrive at the location 1 hour later or, if it is night, 1 minute later.\n  Bones Know Their Home. When you command the mortar to travel, you can instead throw out the dust or paste of something ground by the mortar and name a location on a different plane of existence or a different world on the Material Plane. If that material came from a creature native to the named plane or world, the mortar travels through an empty night sky to an unoccupied space at that destination, arriving in 1 minute.\n  Destroying the Mortar and Pestle. The mortar and pestle are destroyed if they are crushed underfoot by the Dancing Hut of Baba Yaga or by Baba Yaga herself.",
    attunement : true,
    usages : 12,
    recovery : "dawn"
}