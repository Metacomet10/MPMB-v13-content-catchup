var iFileName = "ua_20210414_Draconic-Options.js";
RequiredSheetVersion(13);

// Define the source
SourceList["UA:DO"] = {
	name : "Unearthed Arcana: Draconic Options",
	abbreviation : "UA:DO",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2021/downloads/Unearthed-Arcana-2021-Draconic-Options.pdf",
	date : "2021/04/14"
};
//New Draconic Option Spells
SpellsList["icingdeath's frost"] = {
	name : "Icingdeath's Frost",
	classes : ["warlock", "wizard"],
	source : ["UA:DO", 6],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "S,M\u2020",
	compMaterial : "A vial of water",
	duration : "Instantaneous",
	save : "Con",
	description : "15-ft cone centered on you 3d8+1d8/SL Cold dmg \u0026 spd 0; save half and no speed reduction.",
	descriptionMetric : "5-m cone centered on you 3d8+1d8/SL Cold dmg \u0026 spd 0; save half and no speed reduction.",
	descriptionFull : "A burst of icy cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 cold damage and is covered in ice for 1 minute or until a creature uses its action to break the ice off itself or another creature. A creature covered in ice has its speed reduced to 0. On a successful save, a creature takes half as much damage with no additional effects." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, increase the cold damage by 1d8 for each slot level above 2nd."
};

RaceList["draconic kobold"] = {
	regExpSearch : /kobold/i,
	name : "Draconic Kobold",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood at age 6 and can live up to 120 years, but rarely do so",
	height : " are between 2 and 3 feet tall (2'1\" + 2d4\")",
	weight : " weigh between 25 and 35 lb (25 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 65 and 90 cm tall (63 + 5d4 cm)",
	weightMetric : " weigh between 10 and 15 kg (11 + 5d4 \xD7 2 / 10 kg)",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	features : {
		"draconic roar" : {
			name : "Draconic Roar",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		},
	},
	trait : "Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
};

RaceList["draconic kobold"] = {
	regExpSearch : /kobold/i,
	name : "Draconic Kobold",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood at age 6 and can live up to 120 years, but rarely do so",
	height : " are between 2 and 3 feet tall (2'1\" + 2d4\")",
	weight : " weigh between 25 and 35 lb (25 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 65 and 90 cm tall (63 + 5d4 cm)",
	weightMetric : " weigh between 10 and 15 kg (11 + 5d4 \xD7 2 / 10 kg)",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	features : {
		"draconic roar" : {
			name : "Draconic Roar",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		},
	},
trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice)\n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
};

AddRacialVariant("draconic kobold", "brave", {
	regExpSearch : /brave/i,
	name : "Draconic Kobold-Brave",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	savetxt : { adv_vs : ["frightened"] },
	trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice) \n \u2022 I have advantage on saving throws to avoid or end the frightened condition on myself. \n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
});

AddRacialVariant("draconic kobold", "tail", {
	regExpSearch : /tail/i,
	name : "Draconic Kobold-Tail",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice) \n \u2022 I can make unarmed strikes with my tail. The Draconic Tail deals 1d6 + my Strength modifier bludgeoning damage. \n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*draconic)(?=.*tail).*$/i,
		name : "draconic tail",
		source : ["UA:DO", 4],
		damage : [1, 6, "bludgeoning"]
	},
	weaponsAdd : ["Draconic Tail"],
});

AddRacialVariant("draconic kobold", "cantrip (Intelligence)", {
	regExpSearch : /cantrip/i,
	name : "Draconic Kobold-Cantrip",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice) \n \u2022 Cantrip. I know one cantrip from the sorcerer spell list. Intelligence is my spellcasting ability for that cantrip (chosen when I selected this race). \n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
	spellcastingBonus : {
		name : "Draconic Legacy",
		"class" : "sorcerer",
		level : [0, 0],
		firstCol : 'atwill'
	},
	spellcastingAbility : 4,
});

AddRacialVariant("draconic kobold", "cantrip (Wisdom)", {
	regExpSearch : /cantrip/i,
	name : "Draconic Kobold-Cantrip",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice) \n \u2022 Cantrip. I know one cantrip from the sorcerer spell list. Wisdom is my spellcasting ability for that cantrip (chosen when I selected this race). \n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
	spellcastingBonus : {
		name : "Draconic Legacy",
		"class" : "sorcerer",
		level : [0, 0],
		firstCol : 'atwill'
	},
	spellcastingAbility : 5,
});

AddRacialVariant("draconic kobold", "cantrip (Charisma)", {
	regExpSearch : /cantrip/i,
	name : "Draconic Kobold-Cantrip",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice) \n \u2022 Cantrip. I know one cantrip from the sorcerer spell list. Charisma is my spellcasting ability for that cantrip (chosen when I selected this race). \n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
	spellcastingBonus : {
		name : "Draconic Legacy",
		"class" : "sorcerer",
		level : [0, 0],
		firstCol : 'atwill'
	},
	spellcastingAbility : 6,
});
