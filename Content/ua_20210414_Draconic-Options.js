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
SpellsList["flame stride"] = {
	name : "Flame Stride",
	classes : ["artificer", "ranger", "sorcerer", "wizard"],
	source : [["UA:DO", 6]],
	level : 3,
	school : "Tran",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
    description : "+20 ft +5 ft/SL speed, no opp att, 1d6+1d6/SL Fire damage to creature/object within 5 ft of my path",
    descriptionShorter : "+20 ft +5 ft/SL speed, no opp att, 1d6+1d6/SL Fire damage to creature/object within 5 ft of my path",
	descriptionFull : "The billowing flames of a dragon cover my feet, granting me explosive speed. For the duration, my speed increases by 20 feet and moving doesn’t provoke opportunity attacks."+
	"\n   When I move within 5 feet of a creature or object that isn’t being worn or carried, it takes 1d6 fire damage from my trail of heat. A creature or object can take this damage only once during a turn."+
	AtHigherLevels + "When I cast this spell using a spell slot of 4th level or higher, my speed increases by 5 feet for each spell slot level above 3rd. Additionally, the spell deals an additional 1d6 fire damage for each slot level above 3rd.",
};
// Add Draconic Kobolds
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
AddRacialVariant("draconic kobold", "brave", {
	regExpSearch : /brave/i,
	name : "Draconic Kobold-Brave",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	savetxt : { adv_vs : ["frightened"] },
	trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice) \n \u2022 Draconic Legacy (Brave). I have advantage on saving throws to avoid or end the frightened condition on myself. \n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
});
AddRacialVariant("draconic kobold", "tail", {
	regExpSearch : /tail/i,
	name : "Draconic Kobold-Tail",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice) \n \u2022 Draconic Legacy (Tail). I can make unarmed strikes with my tail. The Draconic Tail deals 1d6 + my Strength modifier bludgeoning damage. \n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
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
	name : "Draconic Legacy",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice) \n \u2022 Draconic Legacy (Cantrip). I know one cantrip from the sorcerer spell list. Intelligence is my spellcasting ability for that cantrip (chosen when I selected this race). \n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
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
	name : "Draconic Legacy",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice) \n \u2022 Draconic Legacy (Cantrip). I know one cantrip from the sorcerer spell list. Wisdom is my spellcasting ability for that cantrip (chosen when I selected this race). \n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
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
	name : "Draconic Legacy",
	source : ["UA:DO", 4],
	plural : "Draconic Kobolds",
	trait : "Draconic Kobold (+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice) \n \u2022 Draconic Legacy (Cantrip). I know one cantrip from the sorcerer spell list. Charisma is my spellcasting ability for that cantrip (chosen when I selected this race). \n \u2022 Draconic Roar. As a bonus action, draconic roar at enemies within 10 feet of me. Until the end of my next turn, my allies and I have advantage on attack rolls against any of those enemies who could hear the roar.",
	spellcastingBonus : {
		name : "Draconic Legacy",
		"class" : "sorcerer",
		level : [0, 0],
		firstCol : 'atwill'
	},
	spellcastingAbility : 6,
});

// Add Draconic Feats
FeatsList["gift of the chromatic dragon"] = {
	name : "Gift of the Chromatic Dragon",
	source : ["UA:DO", 4],
	descriptionFull : "You’ve manifested some of the power of chromatic dragons, granting you the following benefits:\n \u2022 As a bonus action, you can touch a simple or martial weapon and infuse it with one of the following damage types: acid, cold, fire, lightning, or poison. For the next minute, the weapon deals an extra 1d4 damage of the chosen type when it hits. After you use this ability, you can’t do so again until you finish a long rest.\n \u2022 When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "As a bonus action, I touch and infuse a simple or martial weapon with acid, cold, fire, lightning, or poison. The weapon deals an extra 1d4 damage of the chosen type for one minute. As a reaction, I gain resistance to an instance of acid, cold, fire, lightning, or poison damage I just took.",
	action : [
	["reaction", "Chromatic Gift (Resistance)"],
	["bonus action", "Chromatic Gift (Infuse Weapon)"],
	],
	extraLimitedFeatures : [{
		name : "Chromatic Gift (Infuse Weapon)",
		usages : 1,
		recovery : "long rest"
	},
		{
		name : "Chromatic Gift (Resistance)",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
	}],	
};

FeatsList["gift of the metallic dragon"] = {
	name : "Gift of the Metallic Dragon",
	source : ["UA:DO", 4],
	descriptionFull : "You’ve manifested some of the power of metallic dragons, granting you the following benefits:\n \u2022 You learn the cure wounds spell. You can cast this spell without expending a spell slot. Once you cast this spell in this way, you can’t do so again until you finish a long rest. You can also cast this spell using spell slots you have. The spell’s spellcasting ability is Intelligence, Wisdom, or Charisma when you cast it with this feat (choose when you gain the feat).\n \u2022 You can manifest protective wings that can shield you or others from attacks. When you or another creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to manifest spectral wings from your back for a moment. Roll a d4 and grant a bonus to the target’s AC equal to the number rolled against that attack roll, potentially causing it to miss. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest",
	description : "I learn the Cure Wounds spell. I can cast it at level one once per long rest without expending a spell slot, and can cast it by expending a spell slot as normal. My spellcasting ability is choosen when I gain this feat. As a reaction when I or another creature within 5 ft is hit by an attack, add a d4 to the target's AC.",
	action : [["reaction", "Metallic Gift (Spectral Wings)"]],
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",	
	spellcastingBonus : [{
		name : "Cure Wounds",
		spells : ["cure wounds"],
		selection : ["cure wounds"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description : "I learn the Cure Wounds spell. I can cast it at level one once per long rest without expending a spell slot, and can cast it by expending a spell slot as normal. Intelligence is my spellcasting ability for this spell. As a reaction when I or another creature within 5 feet is hit by an attack, I can add a d4 to the target's AC.",
		spellcastingAbility : 4,
	},
	"wisdom": {
		description : "I learn the Cure Wounds spell. I can cast it at level one once per long rest without expending a spell slot, and can cast it by expending a spell slot as normal. Wisdom is my spellcasting ability for this spell. As a reaction when I or another creature within 5 feet is hit by an attack, I can add a d4 to the target's AC.",
		spellcastingAbility : 5,
	},
	"charisma": {
		description : "I learn the Cure Wounds spell. I can cast it at level one once per long rest without expending a spell slot, and can cast it by expending a spell slot as normal. Charisma is my spellcasting ability for this spell. As a reaction when I or another creature within 5 feet is hit by an attack, I can add a d4 to the target's AC.",
		spellcastingAbility : 6,
	}
};

FeatsList["gift of the gem dragon"] = {
	name : "Gift of the Gem Dragon",
	source : ["UA:DO", 5],
	descriptionFull : "You’ve manifested some of the power of gem dragons, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 When you take damage from a creature that is within 10 feet of you, you can use your reaction to emanate telekinetic energy. The creature that dealt damage to you must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or take 2d8 force damage and be pushed 10 feet away from you. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "As a reaction when I take damage from a creature that is within 10 ft of me, I can emanate telekinetic energy. The creature must succeed on a Strength save (DC equals 8 + my prof bonus + the ability mod of the score increased by this feat) or take 2d8 force damage and be pushed 10 ft away from me. [+1 Int, Wis or Cha]",
	action : [["reaction", "Gem Gift (Telekinetic Energy)"]],
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",	
};
