var iFileName = "pub_20200915_IDRotF.js";
RequiredSheetVersion(13);

// Define the source
SourceList.I={
	name : "Icewind Dale: Rime of the Frostmaiden",
	abbreviation : "IDRotF",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/icewind-dale-rime-frostmaiden",
	date : "2020/09/15"
};

// Creatures
CreatureList["awakened white moose"] = {
	name : "Awakened White Moose",
	source : ["IDRotF", 82],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Neutral Evil",
	ac : 11,
	hp : 68,
	hd : [8, 10], //[#, die]
	speed : "40 ft",
	scores : [19, 11, 16, 10, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 14,
	languages : "Druidic",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Antlers",
			ability : 1,
			damage : [2, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One antlers and one hooves as one Attack action; If used after moving 20 ft straight in the same round, see Charge trait"
		}, {
			name : "Hooves",
			ability : 1,
			damage : [2, 4, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One antlers and one hooves as one Attack action"
		}
	],
	traits : [{
		name : "Charge",
		description : "If the moose moves at least 20 feet straight toward a target and then hits it with an antlers attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
	}, {
		name : "Sure-Footed",
		description : "The moose has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
	}]
};

CreatureList["chimeric baboon"] = {
	name : "Chimeric Baboon",
	source : ["IDRotF", 246],
	size : 4, //Small
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 3,
	hd : [1, 6], //[#, die]
	speed : "30 ft,\nclimb 30 ft",
	scores : [8, 14, 11, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 11,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Deals an additional 1d6 poison damage"
		}
	],
	traits : [{
			name : "Pack Tactics",
			description : "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}
	]
};

CreatureList["chimeric cat"] = {
	name : "Chimeric Cat",
	source : ["IDRotF", 246],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "40 ft,\nclimb 30 ft",
	scores : [3, 15, 10, 3, 12, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3,
		"stealth" : 4
	},
	senses : "Darkvision 60 ft; Tremorsense 60 ft",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claws",
			ability : 1,
			damage : [1, "", "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [2, "", false]
		}
	],
	traits : [{
			name : "Keen Smell",
			description : "The cat has advantage on Wisdom (Perception) checks that rely on smell."
		}
	],
};

CreatureList["chimeric fox"] = {
	name : "Chimeric Fox",
	source : ["IDRotF", 246],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "30 ft,\nburrow 5 ft",
	scores : [2, 16, 11, 3, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	senses : "",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false]
		}
	],
	traits : [{
			name : "Chimeric Creation",
			description : "The fox has fur that changes color to match its surroundings, giving it advantage on Dexterity (Stealth) checks."
		}, {
			name : "Keen Hearing",
			description : "The fox has advantage on Wisdom (Perception) checks that rely on hearing."
		}
	]
};

CreatureList["chimeric hare"] = {
	name : "Chimeric Hare",
	source : ["IDRotF", 246],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4], //[#, die]
	speed : "20 ft,\nburrow 5 ft,\nfly 30 ft",
	scores : [1, 17, 9, 2, 11, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2,
		"stealth" : 5
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	attacks : [],
	traits : [{
			name : "Escape",
			description : "The hare can take the Dash, Disengage, or Hide action as a bonus action on each of its turns."
		}
	]
};

CreatureList["chimeric rat"] = {
	name : "Chimeric Rat",
	source : ["IDRotF", 246],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 1,
	hd : [1, 4], //[#, die]
	speed : "40 ft,\nclimb 30 ft",
	scores : [2, 11, 9, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3,
		"stealth" : 4
	},
	senses : "Darkvision 60 ft; Tremorsense 60 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [2, "", false]
		}
	],
	traits : [{
			name : "Chimeric Creation",
			description : "The rat has gills, iridescent scales, and the ability to breathe air and water."
		}, {
			name : "Keen Smell",
			description : "The rat has advantage on Wisdom (Perception) checks that rely on smell."
		}
	]
};

CreatureList["chimeric weasel"] = {
	name : "Chimeric Weasel",
	source : ["IDRotF", 246],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4], //[#, die]
	speed : "30 ft",
	scores : [3, 16, 8, 2, 12, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	senses : "",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false]
		}
	],
	traits : [{
			name : "Chimeric Creation",
			description : "The weasel has glowing eyes that emit bright light out in a 20-foot radius and dim light for an additional 20 feet."
		}, {
			name : "Keen Hearing and Smell",
			description : "The rat has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}
	]
};

CreatureList["fox"] = {
	name : "Fox",
	companion : "familiar",
	source : ["IDRotF", 288],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "30 ft,\nburrow 5 ft",
	scores : [2, 16, 11, 3, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	senses : "Darkvision 60 ft",
	passivePerception : 13,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false]
		}
	],
	traits : [{
			name : "Keen Hearing",
			description : "The fox has advantage on Wisdom (Perception) checks that rely on hearing."
		}
	]
};

CreatureList["hare"] = {
	name : "Hare",
	source : ["IDRotF", 294],
	companion : "familiar",
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4], //[#, die]
	speed : "20 ft,\nburrow 5 ft",
	scores : [1, 17, 9, 2, 11, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2,
		"stealth" : 5
	},
	senses : "",
	passivePerception : 12,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	attacks : [],
	traits : [{
			name : "Escape",
			description : "The hare can take the Dash, Disengage, or Hide action as a bonus action on each of its turns."
		}
	]
};

CreatureList["knucklehead trout"] = {
	name : "Knucklehead Trout",
	source : ["IDRotF", 295],
	size : 4, //Small
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 7,
	hd : [2, 6], //[#, die]
	speed : "0 ft,\nswim 30 ft",
	scores : [14, 14, 11, 1, 6, 1], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 60 ft",
	passivePerception : 8,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}, {
			name : "Tail",
			ability : 1,
			damage : [1, 4, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Water Breathing",
			description : "The trout can breathe only underwater"
		}
	]
};

CreatureList["demos magen"] = {
	name : "Demos Magen",
	source : ["IDRotF", 300],
	size : 3, //Medium
	type : "Construct",
	subtype : "",
	alignment : "Unaligned",
	ac : 16,
	hp : 51,
	hd : [6, 8], //[#, die]
	speed : "30 ft",
	scores : [14, 14, 18, 10, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, poisoned",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Greatsword",
			ability : 1,
			damage : [2, 6, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two greatsword attacks as an Attack action"
		}, {
			name : "Light Crossbow",
			ability : 2,
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "80/320 ft",
			description : "One light crossbow attack as an Attack action"
		}
	],
	traits : [{
		name : "Fiery End",
		description : "If the magen dies, its body disintegrates in a harmless burst of fire and smoke, leaving behind anything it was wearing or carrying."
	}, {
		name : "Magic Resistance",
		description : "The magen has advantage on saving throws against spells and other magical effects."
	}, {
		name : "Unusual Nature",
		description : "The magen doesn't require air, food, drink, or sleep."
	}],
	features : [{
		name : "Create Magen",
		description : "When the magen appears, your hit point maximum decreases by an amount equal to the magen's challenge rating (minimum reduction of 1). Only a wish spell can undo this reduction to your hit point maximum."
	}]
};

CreatureList["galvan magen"] = {
	name : "Galvan Magen",
	source : ["IDRotF", 301],
	size : 3, //Medium
	type : "Construct",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 68,
	hd : [8, 8], //[#, die]
	speed : "30 ft,\nfly 30ft (hover)",
	scores : [10, 18, 18, 12, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	damage_immunities : "lightning, poison",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, poisoned",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Shocking Touch",
			ability : 2,
			damage : [1, 6, "lightning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two shocking touch attacks as an Attack action; Adv. if target wearing metal armor"
		}, {
			name : "Static Discharge (Recharge 5–6)",
			ability : 2,
			damage : [4, 10, "lightning"], //[#, die, type] "" for die is allowed
			modifiers : ["", "", false],
			range : "60 ft line",
			dc : true,
			description : "60 ft line, 5 ft wide; ; Dex save: success― half damage; Disadv. if wearing metal armor",
			tooltip : "The magen discharges a lightning bolt in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw (with disadvantage if the creature is wearing armor made of metal), taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
		}
	],
	traits : [{
		name : "Fiery End",
		description : "If the magen dies, its body disintegrates in a harmless burst of fire and smoke, leaving behind anything it was wearing or carrying."
	}, {
		name : "Magic Resistance",
		description : "The magen has advantage on saving throws against spells and other magical effects."
	}, {
		name : "Unusual Nature",
		description : "The magen doesn't require air, food, drink, or sleep."
	}],
	features : [{
		name : "Create Magen",
		description : "When the magen appears, your hit point maximum decreases by an amount equal to the magen's challenge rating (minimum reduction of 1). Only a wish spell can undo this reduction to your hit point maximum."
	}]
};

CreatureList["hypnos magen"] = {
	name : "Hypnos Magen",
	source : ["IDRotF", 301],
	size : 3, //Medium
	type : "Construct",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 34,
	hd : [4, 8], //[#, die]
	speed : "30 ft",
	scores : [10, 14, 18, 14, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, poisoned",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak, telepathy 30 ft",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Psychic Lash",
			ability : 4,
			dc : true,
			damage : [2, 10, "psychic"], //[#, die, type] "" for die is allowed
			modifiers : ["", "", false], //[to hit, to damage, add ability to damage] "" means ignore
			range : "60 ft",
			description : "One creature in sight; Wis save: fail- no damage"
		}
	],
	traits : [{
		name : "Fiery End",
		description : "If the magen dies, its body disintegrates in a harmless burst of fire and smoke, leaving behind anything it was wearing or carrying."
	}, {
		name : "Magic Resistance",
		description : "The magen has advantage on saving throws against spells and other magical effects."
	}, {
		name : "Unusual Nature",
		description : "The magen doesn't require air, food, drink, or sleep."
	}],
	features : [{
		name : "Create Magen",
		description : "When the magen appears, your hit point maximum decreases by an amount equal to the magen's challenge rating (minimum reduction of 1). Only a wish spell can undo this reduction to your hit point maximum."
	}],
	actions : [{
			name : "Suggestion",
			description : "The magen casts the suggestion spell (save DC 12), requiring no material components. The target must be a creature that the magen can communicate with telepathically. If it succeeds on its saving throw, the target is immune to this magen's suggestion spell for the next 24 hours. The magen's spellcasting ability is Intelligence."
		}
	]
};

CreatureList["mountain goat"] = {
	name : "Mountain Goat",
	source : ["IDRotF", 304],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 11,
	hp : 13,
	hd : [2, 8], //[#, die]
	speed : "40 ft,\nclimb 30 ft",
	scores : [14, 12, 14, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Ram",
			ability : 1,
			damage : [1, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Charge trait"
		}
	],
	traits : [{
		name : "Charge",
		description : "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 12 Strength saving throw or be knocked prone."
	}, {
		name : "Sure-Footed",
		description : "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
	}]
};

CreatureList["reindeer"] = {
	name : "Reindeer",
	source : ["IDRotF", 0],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 10,
	hp : 13,
	hd : [2, 10], //[#, die]
	speed : "50 ft",
	scores : [16, 10, 12, 2, 10, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Ram",
			ability : 1,
			damage : [1, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Charge trait"
		}, {
			name : "Hooves",
			ability : 1,
			damage : [2, 4, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Can only be used against a prone creature"
		}
	],
	traits : [{
		name : "Charge",
		description : "If the reindeer moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
	}]
};

CreatureList["seal"] = {
	name : "Seal",
	source : ["IDRotF", 308],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 11,
	hp : 9,
	hd : [2, 8], //[#, die]
	speed : "20 ft,\nswim 40 ft",
	scores : [10, 12, 11, 3, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 60 ft",
	passivePerception : 11,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false]
		}
	],
	traits : [{
		name : "Hold Breath",
		description : "The seal can hold its breath for 15 minutes."
	}, {
		name : "Keen Smell",
		description : "The seal has advantage on Wisdom (Perception) checks that rely on smell."
	}]
};

CreatureList["sperm whale"] = {
	name : "Sperm Whale",
	source : ["IDRotF", 309],
	size : 0, //Gargantuan
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 189,
	hd : [14, 20], //[#, die]
	speed : "0 ft,\nswim 60 ft",
	scores : [26, 8, 17, 3, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Blindsight 120 ft",
	passivePerception : 11,
	languages : "",
	challengeRating : "8",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [3, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "1 bite \u0026 1 tail attack as Attack action; Target DC 14 Dex save or swallowed; See Swallow feature"
		}, {
			name : "Tail",
			ability : 1,
			damage : [3, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (15 ft)",
			description : "1 bite \u0026 1 tail attack as Attack action; Object target takes 6d6 + 16 damage instead"
		}
	],
	features : [{
		name : "Swallow",
		description : "A swallowed creature has total cover against attacks and other effects outside the whale, and it takes 3 (1d6) acid damage at the start of each of the whale's turns. If the whale takes 30 damage or more on a single turn from a creature inside it, the whale must succeed on a DC 16 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the whale. If the whale dies, a swallowed creature can escape from the corpse by using 20 feet of movement, exiting prone."
	}],
	traits : [{
		name : "Echolocation",
		description : "The whale can't use its blindsight while deafened."
	}, {
		name : "Hold Breath",
		description : "The whale can hold its breath for 90 minutes."
	}, {
		name : "Keen Hearing",
		description : "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
	}]
};

CreatureList["walrus"] = {
	name : "Walrus",
	source : ["IDRotF", 312],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 9,
	hp : 22,
	hd : [3, 10], //[#, die]
	speed : "20 ft,\nswim 40 ft",
	scores : [15, 9, 14, 3, 11, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Tusks",
			ability : 1,
			damage : [2, 4, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
		name : "Hold Breath",
		description : "The walrus can hold its breath for 10 minutes."
	}]
};

CreatureList["giant walrus"] = {
	name : "Giant Walrus",
	source : ["IDRotF", 312],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 9,
	hp : 85,
	hd : [9, 12], //[#, die]
	speed : "20 ft,\nswim 40 ft",
	scores : [22, 9, 16, 3, 11, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 60ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Body Flop",
			ability : 1,
			damage : [2, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One body flop and one tusks attack as an Attack action"
		},
		{
			name : "Tusks",
			ability : 1,
			damage : [3, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One body flop and one tusks attack as an Attack action"
		}
	],
	traits : [{
		name : "Hold Breath",
		description : "The walrus can hold its breath for 30 minutes."
	}]
};

//Magic Items
MagicItemsList["abracadabrus"] = {
	name : "Abracadabrus",
	source : ["IDRotF", 314],
	type : "wondrous item",
	rarity : "very rare",
	description : "This gemstone-studded wooden chest has a volume of 1.5 cu ft. and 20 charges. I can touch it to use an action and a charge to cause up to 1gp of nonmagical objects to form inside, provided they fit and the chest is empty. Regains 1d20 charges at dawn. See Notes page.",
	descriptionLong : "This gemstone-studded chest has a volume of 1.5 cu ft. and 20 charges. I can use an action and a charge to cause up to 1gp of mundane objects to form inside, provided they fit and the chest is empty. Food/drink produced by the chest is delicious and spoils after 24 hrs. Gems/precious metals produced by the chest disappear after 1 min. Regains 1d20 charges at dawn. If the last charged is used, there is a 5% chance the chest loses its magic, becoming a mundane chest, and the gemstones turn to dust.",
	descriptionFull : "An abracadabrus is an ornate, gemstone-studded wooden chest that weighs 25 pounds while empty. Its interior compartment is a cube measuring 1½ feet on a side." + "\n" + "The chest has 20 charges. A creature can use an action to touch the closed lid of the chest and expend 1 of the chest's charges while naming one or more nonmagical objects (including raw materials, foodstuffs, and liquids) worth a total of 1 gp or less. The named objects magically appear in the chest, provided they can all fit inside it and the chest doesn't contain anything else. For example, the chest can conjure a plate of strawberries, a bowl of hot soup, a flagon of water, a stuffed animal, or a bag of twenty caltrops. Food and drink conjured by the chest are delicious, and they spoil if not consumed after 24 hours. Gems and precious metals created by the chest disappear after 1 minute." + "\n" + "The chest regains 1d20 expended charges daily at dawn. If the item's last charge is expended, roll a d20. On a 1, the chest loses its magic (becoming an ordinary chest), and its gemstones turn to dust.",
	toNotesPage : [{
		name : "Abracadabrus Details",
		popupName : "Abracadabrus Details",
		note : [
			" \u2022 Food/drink made by the chest are delicious; spoil after 24 hrs if not eaten",
			" \u2022 Gems/precious metals made by the chest disappear after 1 min",
			" \u2022 If last charge is used, roll d20; on a 1 it loses its magic & gems turn to dust"
		]
	}],
	attunement : false,
	weight : 25,
	allowDuplicates : true,
	usages : 20,
	recovery : "dawn",
	action : [["action", " (create objects)"]]
};

MagicItemsList["cauldron of plenty"] = {
	name : "Cauldron of Plenty",
	source : ["IDRotF", 314],
	type : "wondrous item",
	rarity : "rare",
	description : "This cauldron is 4 ft wide, 3.5 ft in diameter, and holds 30 gal. It has a lid, handles, and 5 feet. I can stir water in it for 1 min to make a hot stew for 4 people per gal. Stew stays hot in the cauldron, cools if removed; surface of the cauldron remains cool. Can be used 3 times per day, regaining all uses at dawn.",
	descriptionLong : "This thick copper cauldron is 4ft wide, has a 3.5 ft diameter mouth, and holds 30 gal. It has a lid, handles, and 5 clawed feet. I can stir water in it for 1 min to turn it into a hot, hearty stew that feeds 4 people per gal. The stew stays hot while in the cauldron, cooling normally if it's removed. The surface of the cauldron remains cool, despite keeping the stew hot. It can be used 3 times a day, regaining all uses at dawn.",
	descriptionFull : "This cauldron is made of thick copper that has turned green with age. It is 4 feet wide, has a mouth 3½ feet in diameter, weighs 50 pounds, and can hold up to 30 gallons of liquid. Embossed on its bulging sides are images of satyrs and nymphs in repose, holding ladles. The cauldron comes with a lid and has side handles. It sits on five little clawed feet that keep it from tipping." + "\n" + "If water is poured into the cauldron and stirred for 1 minute, it transforms into a hearty, hot stew, which can provide one nourishing meal for up to four people per gallon. The stew remains hot while in the cauldron, then cools naturally after it is removed. The outside of the cauldron remains safe to touch despite the heat of the stew." + "\n" + "The cauldron can create stew three times. It then ceases to function until the next dawn, when it regains all its uses.",
	attunement : false,
	weight : 50,
	allowDuplicates : true,
	usages : 3,
	recovery : "dawn"
};

MagicItemsList["chwinga charm"] = {
	name : "Chwinga Charm",
	source : ["IDRotF"],
	type : "wondrous item",
	rarity : "rare",
	descriptionFull : "This tiny object looks like a snowflake. Different types of chwinga charms exist, each with a different effect.",
	allowDuplicates : true,
	choices : ["Animal Conjuring", "Biting Cold", "Bounty", "Cold Resistance", "Heroism", "Snowball Strike", "The Ice Troll", "The Snow Walker", "The Traveler's Haven", "Vitality"],
	"animal conjuring" : {
		name : "Chwinga Charm - Animal Conjuring",
		description : "This tiny object looks like a snowflake. As an action, I can cast the Conjure Animals spell (3rd-level version). The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["conjure animals"],
		selection : ["conjure animals"],
		firstCol : "1",
		}],
		action : [["action", ""]]
	},
	"biting cold" : {
		name : "Chwinga Charm - Biting Cold",
		description : "This tiny object looks like a snowflake. As a bonus action, I can can expend 1 of the charm's charges to wreathe my weapon attacks with biting cold for 1 minute. Until this effect ends, I deal an extra 1d6 cold damage when I hit with a melee or ranged weapon attack. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		action : [["bonus action", ""]]
	},
	"bounty" : {
		name : "Chwinga Charm - Bounty",
		description : "This tiny object looks like a snowflake. As an action, I can can expend 1 of the charm's charges to cast the Create Food And Water spell, requiring no components. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["create food and water"],
		selection : ["create food and water"],
		firstCol : "1",
		}],
		action : [["action", ""]]
	},
	"cold resistance" : {
		name : "Chwinga Charm - Cold Resistance",
		description : "This tiny object looks like a snowflake. As an action, I can can expend the charm to give myself resistance to cold damage for 24 hours.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	},
	"heroism" : {
		name : "Chwinga Charm - Heroism",
		description : "This tiny object looks like a snowflake. As an action, I can can expend the charm to give myself the benefit of a Potion of Heroism. I gain 10 temporary hit points that last for 1 hour and am under the effect of the Bless spell (no concentration required).",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	},
	"snowball strike" : {
		name : "Chwinga Charm - Snowball Strike",
		description : "As a bonus action, I can can expend 1 of the charm's charges to create a magical snowball in my hand and throw it. The snowball is a magic ranged weapon , has a 20/60 range, deals 1d4 cold damage, and scores a critical hit on a roll of 19 or 20. On a critical hit, the target is blinded until the end of its next turn",
		usages : 5,
		recovery : "never",
		action : [["bonus action", ""]]
	},
	"the ice troll" : {
		name : "Chwinga Charm - The Ice Troll",
		description : "This tiny object looks like a snowflake. As a reaction when I take cold damage, I can expend the charm to reduce the damage to 0. I regain a number of hit points equal to half the cold damage I would have taken.",
		usages : 1,
		recovery : "never",
		action : [["reaction", "Chwinga Charm (cold damage)"]]
	},
	"the snow walker" : {
		name : "Chwinga Charm - The Snow Walker",
		description : "As an action, I can expend 1 of the charm's charges to gain these 24 hour benefits: I can see 60 ft through areas heavily obscured by snow, I am immune to the effects of extreme cold (described in DMG), and I and my allies within 15 feet of me ignore snow/ice difficult terrain. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		action : [["action", ""]]
	},
	"the traveler's haven" : {
		name : "Chwinga Charm - The Traveler's Haven",
		description : "This tiny object looks like a snowflake. As an action, I can expend 1 of the charm's charges to cast the Leomund's Tiny Hut spell, no components required. The charm disappears after 3 uses.",
		usages : 3,
		recovery : "never",
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
		name : "1 charge",
		spells : ["leomund's tiny hut"],
		selection : ["leomund's tiny hut"],
		firstCol : "1",
		}],
	},
	"vitality" : {
		name : "Chwinga Charm - Vitality",
		description : "As an action, I can can expend the charm to give myself the benefit of a Potion of Vitality. I remove any exhaustion I am suffering and am cured of any disease or poison affecting me. For the next 24 hours, I regain the maximum number of hit points for any Hit Die I spend.",
		usages : 1,
		recovery : "never",
		action : [["action", ""]]
	}
};

var hookOfFishersDelightDescription = [
	"This tiny silver fishhook has a little gold feather attached to it. For it to function, the feathered hook must be tied to the end of a fishing line and immersed in enough water to fill at least a 10-foot cube. At the end of each uninterrupted hour of immersion, roll a d6. On a 6, a floppy, 6-inch-long magical fish appears on the end of the hook. The color and properties of the conjured fish are determined by rolling on the Hook of Fisher's Delight table. Once the hook conjures a fish, it can't do so again until the next dawn.",
	">>d20\tFish color\t\tResult<<",
	"  1-10!!\tGreen with copper bands\tThis tasty fish provides a day's worth of nourishment to one creature that eats it. The fish loses this property and rots if it's not eaten within 24 hours of being caught.",
	"  11-14\tYellow with black stripes\t" + (typePF ? "" : "\t") + "Once removed from the hook, this awful-tasting fish can be thrown up to 120 feet, targeting a creature the thrower can see. The target must succeed on a DC 15 Strength saving throw or be knocked prone. The fish then disappears.",
	"  15-18\tBlue with white bands\t@@When released from the hook, this fish squirms free, sprouts wings, follows you around, and sings a beautiful tune in Aquan. It disappears after 2d4 hours or when reduced to 0 hit points. The fish uses the quipper stat block, except that it can breathe air and has a flying speed of 30 feet.",
	"  19-20\tGold with silver stripes\t##This tasty fish provides a day's worth of nourishment to one creature that eats it and grants 2d10 temporary hit points to that creature. The fish loses these properties and rots if it's not eaten within 24 hours of being caught."
];

MagicItemsList["hook of fisher's delight"] = {
	name : "Hook of Fisher's Delight",
	source : ["IDRotF", 314],
	type : "wondrous item",
	rarity : "rare",
	description : "For this hook to work, I must attach it to the end of a fishing line and immerse it in enough water to fill at least 10 ft cube. Then, at the end of each uninterrupted hour of immersion, I roll a d6. On a 6, a fish appears on the hook; roll a d20 to determine the fish's properties. See Notes page.",
	descriptionFull : hookOfFishersDelightDescription.join("\n   ").replace("!!", "").replace("@@", "").replace("##", "").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Fish Properties Table",
		popupName : "Hook of Fisher's Delight Fish Table",
		note : desc(hookOfFishersDelightDescription.slice(1)).replace("!!", "").replace("@@", "\t").replace("##", "\t").replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); })
	}],
	attunement : false,
	allowDuplicates : true,
	usages : 1,
	recovery : "dawn"
};

var lanternOfTrackingFullDescription = [
	"This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet." + "\n" + "Each lantern of tracking is designed to track down a certain type of creature, which is determined by rolling on the Lantern of Tracking table. Once determined, this creature type can't be changed. While the lantern is within 300 feet of any creature of that type, its flame turns bright green. The lantern doesn't pinpoint the creature's exact location, however.",
	">>d10\tCreature Type<<",
	"  1\tAberrations",
	"  2\tCelestials",
	"  3\tConstructs",
	"  4\tDragons",
	"  5\tElementals",
	"  6\tFey",
	"  7\tFiends",
	"  8\tGiants",
	"  9\tMonstrosities",
	"  10\tUndead"
];

var lanternOfTrackingDescription = "This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30 ft radius and dim light for an additional 30 ft. While this lantern is within 300 ft of any !!, its flame turns bright green.";

MagicItemsList["lantern of tracking"] = {
	name : "Lantern of Tracking",
	source : ["IDRotF", 314],
	type : "wondrous item",
	rarity : "common",
	description : "This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. While this lantern is within 300 ft of a specified creature type, its flame turns bright green.",
	descriptionFull : lanternOfTrackingFullDescription.join("\n   ").replace("!!", "").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : false,
	allowDuplicates : true,
	usages : 1,
	recovery : "dawn",
	choices : ["Aberrations", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Undead"],
	"aberrations" : {
		name : "Lantern of Tracking (Aberrations)",
		description : lanternOfTrackingDescription.replace("!!", "Aberrations")
	},
	"celestials" : {
		name : "Lantern of Tracking (Celestials)",
		description : lanternOfTrackingDescription.replace("!!", "Celestials")
	},
	"constructs" : {
		name : "Lantern of Tracking (Constructs)",
		description : lanternOfTrackingDescription.replace("!!", "Constructs")
	},
	"dragons" : {
		name : "Lantern of Tracking (Dragons)",
		description : lanternOfTrackingDescription.replace("!!", "Dragons")
	},
	"elementals" : {
		name : "Lantern of Tracking (Elementals)",
		description : lanternOfTrackingDescription.replace("!!", "Elementals")
	},
	"fey" : {
		name : "Lantern of Tracking (Fey)",
		description : lanternOfTrackingDescription.replace("!!", "Fey")
	},
	"fiends" : {
		name : "Lantern of Tracking (Fiends)",
		description : lanternOfTrackingDescription.replace("!!", "Fiends")
	},
	"giants" : {
		name : "Lantern of Tracking (Giants)",
		description : lanternOfTrackingDescription.replace("!!", "Giants")
	},
	"monstrosities" : {
		name : "Lantern of Tracking (Monstrosities)",
		description : lanternOfTrackingDescription.replace("!!", "Monstrosities")
	},
	"undead" : {
		name : "Lantern of Tracking (Undead)",
		description : lanternOfTrackingDescription.replace("!!", "Undead")
	}
};

MagicItemsList["professor orb"] = { // contains contributions by Pengsloth
	name : "Professor Orb",
	source : ["IDRotF", 0],
	type : "wondrous item",
	rarity : "rare",
	description : "This orb is sentient with the personality of a scholar, but no will of its own. It has Int 18, Wis and Cha of 3d6 each. It knows and reads 4 languages, can see/hear as a human out to 60 ft, and has extensive knowledge of 4 narrow academic subjects (+9 on checks). It knows Mage Hand, which it uses to move around.",
	descriptionFull : "Each professor orb takes the form of a smooth, solid, 5-pound sphere of smoky gray quartz about the size of a grapefruit. Close examination reveals two or more pinpricks of silver light deep inside the sphere.\n   A Professor Orb is sentient and has the personality of a scholar. Its alignment is determined by rolling on the alignment table in the \"Sentient Magic Items\" section in chapter 7 of the Dungeon Master's Guide. Regardless of its disposition, the orb has an Intelligence of 18, and Wisdom and Charisma scores determined by rolling 3d6 for each ability. The orb speaks, reads, and understands four languages, and can see and hear normally out to a range of 60 feet. Unlike most sentient items, the orb has no will of its own and can't initiate a conflict with the creature in possession of it.\n   A Professor Orb has extensive knowledge of four narrow academic subjects. When making an Intelligence check to recall lore from any of its areas of expertise, the orb has a +9 bonus to its roll (including its Intelligence modifier).\n   In addition to the knowledge it possesses, a professor orb can cast the Mage Hand cantrip at will. It uses the spell only to transport itself. Its spellcasting ability is Intelligence."
};

MagicItemsList["professor skant"] = { // contains contributions by Pengsloth
	name : "Professor Skant",
	source : ["IDRotF", 315],
	type : "wondrous item",
	rarity : "rare",
	description : "This orb is sentient with the personality of a scholar, but no will of its own. It has Int 18, Wis 11, and Cha 9. It knows and reads 4 languages, can see/hear as a human out to 60 ft, and has expertise in 4 academic subjects (+9 on checks). It knows Mage Hand, which it uses to move around. See Notes Page.",
	descriptionLong: "This sentient orb, which calls itself Professor Skant, has the personality of a scholar, but no will of its own. It's alignment is lawful good and has Int 18, Wis 11, and Cha 9. It knows and reads Common, Draconic, Elvish, and Loross. It has expertise in the following academic topics: history of Netheril, vampirism and the traits of vampires, rituals surrounding the making, bottling, and drinking of Elverquisst, and the tarrasque (+9 on checks).",
	descriptionFull : "The professor orb owned by Vellynne Harpell and stolen by Nass Lantomir calls itself Professor Skant. It is lawful good, and it has a Wisdom of 11 and a Charisma of 9. It speaks and reads Common, Draconic, Elvish, and Loross (the dead language of the Empire of Netheril). Professor Skant is a chatterbox and assumes all humanoids are dunderheads. When elaborating on its areas of expertise, it adopts an unintentionally patronizing tone. It has the following four areas of expertise:" + "\n" + "\u2022 The history of Netheril (see the \"Fate of Netheril\" sidebar)" + "\n" + "\u2022 Vampirism and the traits of vampires" + "\n" + "\u2022 Rituals surrounding the making, bottling, and drinking of Elverquisst (a rare, ruby-colored elven liquor distilled from sunshine and rare summer fruits)" + "\n" + "\u2022 The tarrasque (see the Monster Manual)",
	toNotesPage : [{
		name : "Traits",
		popupName : "Professor Skant Traits",
		note : [
			"Professor Skant is a sentient, lawful good orb with the following traits:",
			" \u2022 Knows and reads Common, Draconic, Elvish, and Loross",
			" \u2022 Has expertise on 4 academic topics, which are:",
			"    \u2022 History of Netheril",
			"    \u2022 Vampirism and the traits of vampires",
			"    \u2022 Rituals surrounding the making, bottling, and drinking of Elverquisst",
			"    \u2022 The tarrasque",
		]
	}]
};

var psiCrystalFullDescription = [
	"This crystal grants you telepathy for as long as you remain attuned to it. See the introduction of the Monster Manual for rules on how this telepathy works.",
	"The crystal also glows with a purplish inner light while you are attuned to it.",
	"The higher your intelligence, the greater the light's intensity and the greater the range of the telepathy (see the Psi Crystal Properties table).",
	">>Intelligence Score    Range of Telepathy    Light Intensity<<",
	" 3-7\t\t    15 feet\t\t       !!Dim light out to a range of 5 feet",
	" 8-11\t\t    30 feet\t\t       @@Bright light in a 5-foot radius and dim light for an additional 5 feet",
	" 12-15\t\t    60 feet\t\t       ##Bright light in a 10-foot radius and dim light for an additional 10 feet",
	" 16 or higher\t   120 feet\t\t       $$Bright light in a 15-foot radius and dim light for an additional 15 feet"
];

MagicItemsList["psi crystal"] = {
	name : "Psi Crystal",
	source : ["IDRotF", 315],
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	prerequisite : "Requires attunement by a creature with an intelligence score of 3 or higher",
	prereqeval : function(v) { return Number(What("Int")) >= 3; },
	description : "While attuned to this orb, it glows with an inner purplish light and gives me telepathy. The range of telepathy and intensity of light are determined by my Intelligence score. See Notes page.",
	descriptionFull : psiCrystalFullDescription.join("\n   ").replace("!!", "  ").replace("@@", "  ").replace("##", "  ").replace("$$", "  ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Psi Crystal Properties Table",
		popupName : "Psi Crystal Properties Table",
		note : desc(psiCrystalFullDescription.slice(3)).replace("!!", "").replace("@@", "").replace("##", "").replace("$$", "").replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); })
	}],
};

MagicItemsList["scroll of tarrasque summoning"] = {
	name : "Scroll of Tarrasque Summoning",
	source : ["IDRotF", 315],
	type : "scroll",
	rarity : "legendary",
	description : "Once as an action, I can use this to cause the tarrasque to appear in an unoccupied space I can see within 1 mile. The tarrasque disappears when it drops to 0 hit points and is hostile toward all creatures other than itself.",
	descriptionFull : "Using an action to read the scroll causes the tarrasque (see the creature's entry in the Monster Manual) to appear in an unoccupied space you can see within 1 mile of you. The tarrasque disappears when it drops to 0 hit points and is hostile toward all creatures other than itself."
};

MagicItemsList["scroll of the comet"] = {
	name : "Scroll of the Comet",
	source : ["IDRotF", 315],
	type : "scroll",
	rarity : "legendary",
	description : "Once as an action outdoors, I can use this to cause a comet to fall on a point I can see within 1 mile, which creates a 50 ft deep, 500 ft radius crater. Any creature in the radius makes a DC 20 Dex save, taking 30d10 force damage on a failure, or half as much on a success. Destroys nonmagical objects within the area.",
	descriptionFull : "By using an action to read the scroll, you cause a comet to fall from the sky and crash to the ground at a point you can see up to 1 mile away from you. You must be outdoors when you use the scroll, or nothing happens and the scroll is wasted." + "\n" + "The comet creates a 50-foot-deep, 500-foot-radius crater on impact. Any creature in that radius must make a DC 20 Dexterity saving throw, taking 30d10 force damage on a failed saving throw, or half as much damage on a successful one. All structures in the crater are destroyed, as are all nonmagical objects that aren't being worn or held."
};

MagicItemsList["thermal cube"] = {
	name : "Thermal Cube",
	source : ["IDRotF", 316],
	type : "wondrous item",
	rarity : "common",
	description : "This 3-inch cube of solid brimstone generates enough dry heat to keep the temperature within 15 feet of it at 95 degrees Fahrenheit (35 degrees Celsius).",
	descriptionFull : "This 3-inch cube of solid brimstone generates enough dry heat to keep the temperature within 15 feet of it at 95 degrees Fahrenheit (35 degrees Celsius)."
};

MagicItemsList["ythryn mythallar"] = {
	name : "Ythryn Mythallar",
	source : ["IDRotF", 316],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	description : "This 50 ft diameter crystal ball sheds light in a 300 ft radius and dim light for an additional 300 ft. Up to 8 creatures can attune to it at one time, a 9th creature's attunement fails. All those attuned to it can sense when it is used and they all must agree to any properties being used. See Notes page.",
	descriptionFull : "A mythallar looks like an enormous crystal ball held in an ornate cradle. The globe sheds bright light in a 300-foot radius and dim light for an additional 300 feet. The globe draws magic from the Weave that can be harnessed for various purposes. For example, Netherese mages used mythallars to keep their cities aloft and empower their magic items. The bigger the mythallar, the more magic it can hold. The largest mythallars are 150 feet in diameter." + "\n" + "The Ythryn mythallar is a relatively small device—a mere 50 feet in diameter. To attune to this mythallar, a creature must finish a short rest within 30 feet of it, meditating on the mythallar. Up to eight creatures can be attuned to it at one time; otherwise, the Ythryn mythallar follows the attunement rules in the Dungeon Master's Guide. If a ninth creature tries to attune to the mythallar, nothing happens." + "\n" + "All creatures attuned to the Ythryn mythallar can sense when the device is being used. A creature attuned to the device can use any of its properties, but only if all other creatures attuned to the device agree to allow it. The Ythryn mythallar's properties are as follows:" + "\n" + " \u2022 While you're on the same plane of existence as the Ythryn mythallar, you can use an action to cause it to fly in any direction you choose at a speed of 30 feet. All matter within 500 feet of the device moves with it. The Ythryn mythallar and all structures held aloft by it hover in place when not in motion." + "\n" + "\u2022 As an action, you can cause one magic item you are holding within 30 feet of the Ythryn mythallar to immediately regain all its expended charges or uses. A magic item recharged in this manner can't be recharged by the Ythryn mythallar again until after the item regains expended charges or uses on its own." + "\n" + "\u2022 You can use the Ythryn mythallar to cast the control weather spell without requiring any components and without the need for you to be outdoors. This casting of the spell has a 50-mile radius. For the duration of the spell's casting time, you must be within 30 feet of the Ythryn mythallar or the spell fails." + "\n" + toUni("Touching the Mythallar") + ". Any creature that touches the globe of the mythallar must make a DC 22 Constitution saving throw, taking 180 (20d10 + 70) radiant damage on a failed save, or half as much damage on a successful one. Undead have disadvantage on this saving throw. Any object that touches the globe, other than an artifact or the mythallar's cradle, is disintegrated instantly (no save).",
	toNotesPage : [{
		name : "Ythryn Mythallar Properties",
		popupName : "Ythryn Mythallar Properties",
		note : [
			"The Ythryn Mythallar is a 50 ft diamter crystal ball that sits on a cradle",
			"It has the following properties:",
			" \u2022 Sheds light in a 300 ft radius and dim light for an additional 300 ft",
			" \u2022 Up to 8 creatures can attune to it, a 9th attunement fails",
			"   \u2022 To attune, a creature must short rest within 30 ft of it",
			" \u2022 All those attuned to it can sense when sense when it is being used",
			" \u2022 All those attuned must agree to allow any properties to be used",
			" \u2022 You can use an action to use the Ythryn Mythallar in the following ways:",
			"   \u2022 While on the same plane, give it a flying speed of 30 ft",
			"     All matter within 500 ft of it moves with it",
			"     The ball and all structures held aloft by it hover in place when not in motion",
			"   \u2022 Cause one magic item to regain all charges/uses",
			"     I must be within 30 ft of the ball and holding the item",
			"     It cannot be recharged again until all charges/uses are expended",
			"   \u2022 Case the control weather spell without components or spell slots",
			"     It has a radius of 50 miles and can be cast inside",
			"     I must be within 30 ft of the ball for the casting time, or it will fail",
			"Any creature that touches the ball must make a DC 22 Constitution save",
			"On a failure, they take 20d10 + 70 radiant damage, or half that on a success",
			"Undead have disadvantage on this saving throw",
			"Any object touching the ball, except artifacts or the cradle, is destroyed"
		]
	}]
};

// Spells
SpellsList["blade of disaster"] = {
	name : "Blade of Disaster",
	source : ["IDRotF", 318],
	classes : ["wizard"],
	level : 9,
	school : "Conj",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Create weapon; 2 spell atks 4d12 Force dmg each; crit on 18+; bns a to move 30 ft and/or attack",
	descriptionFull : "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage)." + "\n   " + "As a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again." + "\n   " + "The blade can harmlessly pass through any barrier, including a wall of force."
};

SpellsList["create magen"] = {
	name : "Create Magen",
	source : ["IDRotF", 318],
	classes : ["wizard"],
	level : 7,
	school : "Trans",
	time : "1 hr",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "A vial of quicksilver worth 500 gp and a life-sized human doll, both of which the spell consumes, and an intricate crystal rod worth at least 1,500 gp that is not consumed",
	duration : "Instantaneous",
	description : "Transform doll into magen of my choice; my HP max is reduced by its CR; see book (500gp)",
	descriptionFull : "While casting the spell, you place a vial of quicksilver in the chest of a life-sized human doll stuffed with ash or dust. You then stitch up the doll and drip your blood on it. At the end of the casting, you tap the doll with a crystal rod, transforming it into a magen clothed in whatever the doll was wearing. The type of magen is chosen by you during the casting of the spell. See appendix C for different kinds of magen and their statistics." + "\n   " + "When the magen appears, your hit point maximum decreases by an amount equal to the magen's challenge rating (minimum reduction of 1). Only a wish spell can undo this reduction to your hit point maximum." + "\n   " + "Any magen you create with this spell obeys your commands without question."
};

SpellsList["frost fingers"] = {
	name : "Frost Fingers",
	source : ["IDRotF", 318],
	classes : ["wizard"],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "15-ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "All in area 2d8+1d8/SL Cold dmg; save halves; unattended nonmagical liquids freeze",
	descriptionFull : "Freezing cold blasts from your fingertips in a 15-foot cone. Each creature in that area must make a Constitution saving throw, taking 2d8 cold damage on a failed save, or half as much damage on a successful one." + "\n   " + "The cold freezes nonmagical liquids in the area that aren't being worn or carried." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};