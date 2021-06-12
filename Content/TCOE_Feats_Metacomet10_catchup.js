/*
NOT the official MPMB release, just content gathered from reddit and discord. All work is third party and not endorsed by MPMB.
Work was originally gathered and compiled by Nod_Hero#2046 on Discord
-----
Most recent update : https://github.com/Metacomet10/MPMB-v13-content-catchup/projects/1
-----
Missing stuff:
https://github.com/Metacomet10/MPMB-v13-content-catchup/projects/1#column-12792419
-----
Has code but Incomplete or Needs Fixing stuff:
https://github.com/Metacomet10/MPMB-v13-content-catchup/projects/1#column-12792400
*/

// This is just the feats from Metacomet10's content catchup.


var iFileName = "pub_20201117_TCoE.js";
RequiredSheetVersion(13);
// Define the source
SourceList.T = { 
	name : "Tasha's Cauldron of Everything", 
	abbreviation : "TCoE",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tashas-cauldron-everything",
	date : "2020/11/17",
};

// Add Feats
FeatsList["artificer initiate"] = {
	name: "Artificer Initiate",
	source: ["T", 79],
	descriptionFull : "You’ve learned some of an artificer’s inventiveness:\n \u2022You learn one cantrip of your choice from the artificer spell list, and you learn one 1st-level spell of your choice from that list. Intelligence is your spellcasting ability for these spells. Whenever you gain a level, you can replace one of these spells with another spell of the same level from the artificer spell list.\n \u2022You can cast this feat’s 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.\n \u2022You gain proficiency with one type of artisan’s tools of your choice, and you can use that type of tool as a spellcasting focus for any spell you cast that uses Intelligence as its spellcasting ability.",
	description: "I learn one cantrip and one 1st-level spell of my choice from the artificer's spell list. I can cast the 1st-level spell at its lowest level once per long rest without using a spell slot. Int is my spellcasting ability. I gain proficiency in one artisan's tool that I can use as focus.",
	spellcastingBonus: [{
		name: "Artificer cantrip",
		spellcastingAbility: 4,
		class: 'artificer',
		level: [0, 0],
		atwill: true,
		times: 1
	}, {
		name: "Artificer 1st-level spell",
		class: 'artificer',
		level: [1, 1],
		oncelr: true
	}],
	toolProfs: [
		["Artisan's tools", 1]
	]
};
FeatsList["chef"] = {
	name: "Chef",
	source: ["T", 79],
	descriptionFull : "Time spent mastering the culinary arts has paid off, granting you the following benefits:\n \u2022Increase your Constitution or Wisdom score by 1, to a maximum of 20.\n \u2022You gain proficiency with cook’s utensils if you don’t already have it.\n \u2022As part of a short rest, you can cook special food, provided you have ingredients and cook’s utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra 1d8 hit points.\n \u2022With one hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to your proficiency bonus.",
	description: "During a short rest, I can make food for 4 + my proficiency bonus creatures; if they eat it and spend 1+ Hit Die they regain 1d8 HP. During a long rest I can make snacks equal to my proficiency bonus that give my proficiency bonus temp HP [+1 Constitution or Wisdom]",
	toolProfs: ["Chef's utensils"],
	improvements: "Chef (feat): +1 Constitution or Wisdom;"
};
FeatsList["crusher"] = {
	name: "Crusher",
	source: ["T", 79],
	descriptionFull : "You are practiced in the art of crushing your enemies, granting you the following benefits:\n \u2022Increase your Strength or Constitution by 1, to a maximum of 20.\n \u2022Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.\n \u2022When you score a critical hit that deals bludgeoning damage to a creature, attack rolls against that creature are made with advantage until the start of your next turn.",
	description: (typePF ? "Once per turn, when I hit a creature with an attack that deals bludgeoning damage, I can move it 5 ft to an unoccupied space, if it is no more than one size larger than me. On a critical hit that deals bludgeoning damage to a creature, attacks vs. it have adv. until the start of my next turn. [+1 Strength or Constitution]" : "Once per turn, when I hit a creature with bludg. attack, I can move it 5 ft to an unoccupied space, if it is no more than one size larger than me. On a critical bludg. hit on a creature, attacks vs. it have adv. until the start of my next turn. [+1 Str or Con]"),
	improvements: "Crusher (feat): +1 Strength or Constitution;"
};
FeatsList["eldritch adept"] = { // <-- not complete
	name: "Eldritch Adept",
	source: ["T", 79],
	descriptionFull : "Studying occult lore, you have unlocked eldritch power within yourself: you learn one Eldritch Invocation option of your choice from the warlock class. If the invocation has a prerequisite of any kind, you can choose that invocation only if you're a warlock who meets the prerequisite. Whenever you gain a level, you can replace the invocation with another one from the warlock class.",
	description: "I learn one Eldritch Invocation option of my choice from the Warlock class. If it has a prerequisite, I can only take it if I am a warlock and meet the prerequisite. I can replace the invocation whenever I gain a level.",
	prerequisite: "Spellcasting or Pact Magic feature",
	prereqeval: function (v) {
		return What('Class Features').toLowerCase().indexOf('spellcasting') !== -1 || What('Class Features').toLowerCase().indexOf('pact magic') !== -1;
	}
};
FeatsList["fey touched"] = {
	name: "Fey Touched",
	source: ["T", 79],
	descriptionFull : "Your exposure to the Feywild's magic has changed you, granting you the following benefits:\n \u2022Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022You learn the misty step spell and one 1st-level spell of your choice. The 1st-level spell must be from the divination or enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can’t cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells’ spellcasting ability is the ability increased by this feat.",
	description: "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so.",
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description: "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingBonus: [{
			name: "Fey Touched",
			spellcastingAbility: 4,
			class: "any",
			school: ["Ench", "Div"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Fey Touched",
			spells: ["misty step"],
			selection: ["misty step"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingBonus: [{
			name: "Fey Touched",
			spellcastingAbility: 5,
			class: "any",
			school: ["Ench", "Div"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Fey Touched",
			spells: ["misty step"],
			selection: ["misty step"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingBonus: [{
			name: "Fey Touched",
			spellcastingAbility: 6,
			class: "any",
			school: ["Ench", "Div"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Fey Touched",
			spells: ["misty step"],
			selection: ["misty step"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 0, 0, 1],
	}
};
FeatsList["fighting initiate"] = { // <-- not complete
	name: "Fighting Initiate",
	source: ["T", 80],
	descriptionFull : "Your martial training has helped you develop a particular style of fighting. As a result, you learn one Fighting Style option of your choice from the fighter class. If you already have a style, the one you choose must be different. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace this feat's fighting style with another one from the fighter class that you don't have.",
	description: "I learn one Fighting Style from the fighter class. If I already have one, the new one must be different. I can replace the fighting style whenever I gain an Ability Score Improvement level.",
	prerequisite: "Proficiency with a martial weapon",
	prereqeval : function(v) {
		return v.martialWeaponsProf;
	},
};
FeatsList["gunner"] = {
	name: "Gunner",
	source: ["T", 80],
	descriptionFull : "You have a quick hand and keen eye when employing firearms, granting you the following benefits:\n \u2022Increase your Dexterity score by 1, to a maximum of 20.\n \u2022You gain proficiency with firearms (see “Firearms” in the Dungeon Master’s Guide).\n \u2022You ignore the loading property of firearms.\n \u2022Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls.",
	description: "I gain proficiency with firearms. I ignore the loading property of firearms. I don't suffer disadvantage on ranged attack rolls for being within 5 ft of a hostile creature. [+1 Dexterity]",
	scores: [0, 1, 0, 0, 0, 0],
	weaponProfs: {
		primary: [false, false, ["Firearms"]]
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.isRangedWeapon && ((/firearm/i).test(v.theWea.type) || (/firearm/i).test(v.theWea.list)) && fields.Proficiency) {
					fields.Description = fields.Description.replace(/(,? ?loading|loading,? ?)/i, '');
				};
			},
			"I ignore the loading quality of firearms."
		]
	}
};
FeatsList["metamagic adept"] = { // This feels wrong
	name: "Metamagic Adept",
	source: ["T", 80],
	descriptionFull : "You’ve learned how to exert your will on your spells to alter how they function:\n \u2022You learn two Metamagic options of your choice from the sorcerer class. You can use only one Metamagic option on a spell when you cast it, unless the option says otherwise. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace one of these Metamagic options with another one from the sorcerer class.\n \u2022You gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source but can be used only on Metamagic). You regain all spent sorcery points when you finish a long rest.",
	description: "I learn two metamagic options from the sorcerer class. I can use only one option on a spell unless the option says otherwise. I gain 2 sorcery points, and regain all expended points on a long rest.",
	prerequisite: "Spellcasting or Pact Magic feature",
	prereqeval: function (v) {
		return What('Class Features').toLowerCase().indexOf('spellcasting') !== -1 || What('Class Features').toLowerCase().indexOf('pact magic') !== -1;
	},
	usages: 2,
	recovery: "long rest",
	extraname: "Metamagic Option",
	extrachoices: ["Careful Spell", "Distant Spell", "Empowered Spell", "Extended Spell", "Heightened Spell", "Quickened Spell", "Subtle Spell", "Twinned Spell", "Elemental Spell", "Seeking Spell", "Unnerring Spell"],
	"careful spell": {
		name: "Careful Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point]" + "\n   " + "If the spell allows a saving throw, I can protect Cha modifier number of creatures" + "\n   " + "The selected creatures automatically succeed on their saving throws vs. the spell"
	},
	"distant spell": {
		name: "Distant Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point]" + "\n   " + "I double the range of the spell or make the range 30 ft if the range was touch"
	},
	"empowered spell": {
		name: "Empowered Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point]" + "\n   " + "If the spell uses damage dice, I can reroll my Charisma modifier number of damage dice" + "\n   " + "I can Empower a spell even if I use another Metamagic option on it"
	},
	"extended spell": {
		name: "Extended Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point]" + "\n   " + "If the spell has a duration of at least 1 min, I can double it, up to 24 hours"
	},
	"quickened spell": {
		name: "Quickened Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [2 sorcery points]" + "\n   " + "If the spell has a casting time of 1 action, I can cast it as a bonus action",
		action: ["bonus action", ""]
	},
	"subtle spell": {
		name: "Subtle Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point]" + "\n   " + "I can cast the spell without the need to use somatic or verbal components"
	},
	"twinned spell": {
		name: "Twinned Spell",
		source: [
			["SRD", 44],
			["P", 102]
		],
		description: " [1 sorcery point per spell level, minimum 1]" + "\n   " + "If spell/cantrip has a target of one and not self, I can aim it at second target within range"
	},
	"elemental spell": {
		name: "Elemental Spell",
		source: ["UA:CFV", 10],
		description: " [1 sorcery point]" + desc([
			"I can change the damage type of a spell to acid, cold, fire, lightning, or thunder instead",
			"I can only do this if the spell originally deals one of these damage types"
		])
	},
	"seeking spell": {
		name: "Seeking Spell",
		source: ["UA:CFV", 10],
		description: " [1 sorcery point]" + desc([
			"I can ignore half- and three-quarters cover for the one spell I'm casting",
			"This applies both to my spell attack rolls as to the Dexterity saving throws of the targets"
		])
	},
	"unerring spell": {
		name: "Unerring Spell",
		source: ["UA:CFV", 10],
		description: " [2 sorcery points]" + desc([
			"If I make an attack roll for a spell and miss, I can use this to reroll the attack once",
			"I can use unerring spell even if I already used another metamagic option for the spell"
		])
	},
};
FeatsList["piercer"] = {
	name: "Piercer",
	source: ["T", 80],
	descriptionFull : "You have achieved a penetrating precision in combat, granting you the following benefits:\n \u2022Increase your Strength or Dexterity by 1, to a maximum of 20.\n \u2022Once per turn, when you hit a creature with an attack that deals piercing damage, you can reroll one of the attack’s damage dice, and you must use the new roll.\n \u2022When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage the target takes.",
	description: "Once per turn when I deal piercing damage to a target, I can reroll one of the damage die and use the new roll. If I deal piercing damage on a critical hit to a target I can roll one additional damage die. [+1 Strength or Dexterity]",
	improvements: "Piercer (feat): +1 Strength or Dexterity;"
};
FeatsList["poisoner"] = {
	name: "Poisoner",
	source: ["T", 80],
	descriptionFull : "You can prepare and deliver deadly poisons, granting you the following benefits:\n \u2022When you make a damage roll that deals poison damage, it ignores resistance to poison damage.\n \u2022You can apply poison to a weapon or piece of ammunition as a bonus action, instead of an action.\n \u2022You gain proficiency with the poisoner's kit if you don't already have it. With one hour of work using a poisoner's kit and expending 50 gp worth of materials, you can create a number of doses of potent poison equal to your proficiency bonus. Once applied to a weapon or piece of ammunition, the poison retains its potency for 1 minute or until you hit with the weapon or ammunition. When a creature takes damage from the coated weapon or ammunition, that creature must succeed on a DC 14 Constitution saving throw or take 2d8 poison damage and become poisoned until the end of your next turn.",
	description: "I ignore poison resist when rolling for poison damage. I apply poison to a weapon or ammo as a bonus action. I gain prof. with a poisoner's kit, and can make my prof. bonus number of poisons. DC 14 Con save or 2d8 poison damage and poisoned until the end of my next turn. ",
};
FeatsList["shadow touched"] = {
	name: "Shadow Touched",
	source: ["T", 80],
	descriptionFull : "Your exposure to the Shadowfell's magic has changed you, granting you the following benefits:\n \u2022Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022You learn the invisibility spell and one 1st-level spell of your choice. The 1st-level spell must be from the illusion or necromancy school of magic. You learn the invisibility spell and one 1st-level spell of your choice. The 1st-level spell must be from the illusion or necromancy school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description: "I learn Invisibility and one 1st level illusion or necromancy spell. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so.",
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description: "I learn Invisibility and one 1st level illusion or necromancy spell. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingBonus: [{
			name: "Shadow Touched",
			spellcastingAbility: 4,
			class: "any",
			school: ["Illus", "Necro"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Shadow Touched",
			spells: ["invisibility"],
			selection: ["invisibility"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: "I learn Invisibility and one 1st level illusion or necromancy spell. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingBonus: [{
			name: "Shadow Touched",
			spellcastingAbility: 5,
			class: "any",
			school: ["Illus", "Necro"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Shadow Touched",
			spells: ["invisibility"],
			selection: ["invisibility"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: "I learn Invisibility and one 1st level illusion or necromancy spell. I can cast each once per lost rest without expending a spell slot, and can cast them if I have the slot to do so. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingBonus: [{
			name: "Shadow Touched",
			spellcastingAbility: 6,
			class: "any",
			school: ["Illus", "Necro"],
			level: [1, 1],
			firstCol: "oncelr"
		}, {
			name: "Shadow Touched",
			spells: ["invisibility"],
			selection: ["invisibility"],
			firstCol: "oncelr"
		}],
		scores: [0, 0, 0, 0, 0, 1],
	}
};
FeatsList["skill expert"] = {
	name: "Skill Expert",
	source: ["T", 80],
	descriptionFull : "You have honed your proficiency with particular skills, granting you the following benefits:\n \u2022Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022You gain proficiency in one skill of your choice.\n \u2022Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus.",
	description: "I gain proficiency in one skill or tool. I choose one skill or tool, and my proficiency bonus is doubled for any ability check I make that uses that proficiency. [+1 to Any]",
	skillstxt : "Choose any one skill",
	improvements: "Skill Expert (feat): +1 to Any;"
};
FeatsList["slasher"] = {
	name: "Slasher",
	source: ["T", 81],
	descriptionFull : "You’ve learned where to cut to have the greatest results, granting you the following benefits:\n \u2022Increase your Strength or Dexterity by 1, to a maximum of 20.\n \u2022Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce the speed of the target by 10 feet until the start of your next turn.\n \u2022When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls.",
	description: "Once per turn when I deal slashing damage to a target, I can reduce its speed by 10 feet until the start of my next turn. If I deal slashing damage on a critical hit to a target, it has disadvantage on attack rolls until the start of my next turn. [+1 Strength or Dexterity]",
	improvements: "Slasher (feat): +1 Strength or Dexterity;"
};
FeatsList["telekinetic"] = {
    name : "Telekinetic",
    source : ["T", 81],
    description : "I cast the mage hand cantrip without verbal or somatic components and the hand can be invisible. I can shove a creature to or from me if they fail a Strength save. DC 8 + proficiency bonus + ability score increased by feat [+1  Intelligence, Wisdom, or Charisma]",
    descriptionFull : "You learn to move things with your mind. You gain the following benefits: \n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20. \n \u2022 You learn the mage hand cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible. If you already know this spell, its range grows by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat. \n \u2022 As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward you or away from you. A creature can willingly fail this save.",
    choices : ["Intelligence", "Wisdom", "Charisma"],
    "intelligence" : {
        description : "I cast the mage hand cantrip without verbal or somatic components and the hand can be invisible. I can shove a creature to or from me if they fail a Strength save. DC 8 + proficiency bonus + Intelligence modifier [+1 Intelligence]",
        scores : [0, 0, 0, 1, 0, 0],
        improvements : "Telekinetc (feat): +1 Intelligence;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 4,
            spells : ["mage hand"],
            selection : ["mage hand"]
        }
    },
    "wisdom" : {
        description : "I cast the mage hand cantrip without verbal or somatic components and the hand can be invisible. I can shove a creature to or from me if they fail a Strength save. DC 8 + proficiency bonus + Wisdom modifier [+1 Wisdom]",
        scores : [0, 0, 0, 0, 1, 0],
        improvements : "Telekinetc (feat): +1 Wisdom;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 5,
            spells : ["mage hand"],
            selection : ["mage hand"]
        }
    },
    "charisma" : {
        description : "I cast the mage hand cantrip without verbal or somatic components and the hand can be invisible. I can shove a creature to or from me if they fail a Strength save. DC 8 + proficiency bonus + Charisma modifier [+1 Charisma]",
        scores : [0, 0, 0, 0, 0, 1],
        improvements : "Telekinetc (feat): +1 Charisma;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 6,
            spells : ["mage hand"],
            selection : ["mage hand"]
        }
    }
};
FeatsList["telepathic"] = {
    name : "Telepathic",
    source : ["T", 81],
    description : "I can telepathically speak to a creature within 30 ft in a language I know and the creature can understand if it knows the language. I can shrink my Psionic Talents die to cast detect thoughts, using the ability score increased [+1 Intelligence, Wisdom, or Charimsa]",
    descriptionFull : "You awaken the ability to mentally connect with others, granting you the following benefits: \n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20. \n \u2022 You can speak telepathically to any creature you can see within 30 feet of you. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn’t give the creature the ability to respond to you telepathically. \n \u2022 You can cast the detect thoughts spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them.",
    choices : ["Intelligence", "Wisdom", "Charisma"],
    "intelligence" : {
        description : "I can telepathically speak to a creature within 30 ft in a language I know and the creature can understand if it knows the language. I can cast detect thoughts, requiring no spell slot or components,  using my Intelligence [+1 Intelligence]",
        scores : [0, 0, 0, 1, 0, 0],
        improvements : "Telekinetc (feat): +1 Intelligence;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 4,
            spells : ["detect thoughts"],
            selection : ["detect thoughts"]
        }
    },
    "wisdom" : {
        description : "I can telepathically speak to a creature within 30 ft in a language I know and the creature can understand if it knows the language. I can cast detect thoughts, requiring no spell slot or components,  using my Wisdom [+1 Wisdom]",
        scores : [0, 0, 0, 0, 1, 0],
        improvements : "Telekinetc (feat): +1 Wisdom;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 5,
            spells : ["detect thoughts"],
            selection : ["detect thoughts"]
        }
    },
    "charisma" : {
        description : "I can telepathically speak to a creature within 30 ft in a language I know and the creature can understand if it knows the language. I can cast detect thoughts, requiring no spell slot or components,  using my Charisma [+1 Charisma]",
        scores : [0, 0, 0, 0, 0, 1],
        improvements : "Telekinetc (feat): +1 Charisma;",
        spellcastingBonus : {
            name : "Telekinetic",
            spellcastingAbility : 6,
            spells : ["detect thoughts"],
            selection : ["detect thoughts"]
        }
    }
};
