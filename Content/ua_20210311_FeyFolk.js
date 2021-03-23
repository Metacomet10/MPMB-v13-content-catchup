var iFileName = "ua_20210311_FeyFolk.js";
RequiredSheetVersion(13);

// Define the source
SourceList["UA:FF"] = {
	name : "Unearthed Arcana: Fey Folk",
	abbreviation : "UA:FF",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2021/dnd/downloads/UA2021_FeyFolk.pdf",
	date : "2021/03/11"
};

RaceList["fairy"] = {
	regExpSearch : /fairy/i,
	name : "Fairy",
	sortname : "Fairy",
	source : ["UA:FF", 2],
	plural : "Faries",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : "walk" }
			},
	languageProfs : [1, "Common"],
	scorestxt : "Fairy (+2/+1 to or +1/+1/+1 to ability scores of my choice)",
	features : {
		"fairy magic (druidcraft)" : {
			name : "Fairy Magic (druidcraft)",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["druidcraft"],
				selection : ["druidcraft"],
			},
		},
		"fairy magic (faerie fire)" : {
			name : "Fairy Magic (faerie fire)",
			spellcastingBonus : {
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				oncelr : true,
			},
		},
	},
	trait : "Fairy (+2/+1 to or +1/+1/+1 to ability scores of my choice)\nType: I am Fey.\nFairy Flight: I have a magical fly speed equal to my walking speed and can hover. \nFairy Magic: I know the druidcraft and faerie fire spells, and can cast the latter without using a spell slot once per long rest, as well as using any slots I have. \nFey Passage: I can squeeze through a space as narrow as 1 inch wide.",
};

RaceList["feywild hobgoblin"] = {
	regExpSearch : /^(?=.*feywild)(?=.*hobgoblin).*$/i,
	name : "Feywild Hobgoblin",
	sortname : "Hobgoblin, Feywild",
	source : ["UA:FF", 2],
	plural : "Feywild Hobgoblins",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : [1, "Common"],
	vision : [["Darkvision", 60]],
	savetxt : {
		adv_vs : ["charmed"]
	},
	scorestxt : "Feywild Hobgoblin (+2/+1 to or +1/+1/+1 to ability scores of my choice)",
	features : {
		"fortune from the many" : {
			name : "Fortune from the Many",
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",
		},
		"fey gift (help)" : {
			name : "Fey Gift (help)",
			usages : "Proficiency bonus per ",
			action : ["bonus action", ""],
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",
		}
	},
	trait : "Hobgoblin (+2/+1 to or +1/+1/+1 to ability scores of my choice)\nFey Gift: I can take the help action as a bonus action a number of times equal to my proficency bonus per long rest. When I take the Help action, I can produce additional effects. \nFortune from the Many: When I miss an attack roll or fail an ability check or a saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 feet (max +5). I can do this a number of times equal to my proficiency bonus per long rest."
};

RaceList["owlfolk"] = {
	regExpSearch : /owlfolk/i,
	name : "Owlfolk",
	sortname : "Owlfolk",
	source : ["UA:FF", 3],
	plural : "Owlfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : "walk" }
			},
	skills : ["Stealth"],
	languageProfs : [1, "Common"],
		vision : [["Darkvision", 60]],
	scorestxt : "Owlfolk (+2/+1 to or +1/+1/+1 to ability scores of my choice)",
	features : {
		"nimble flight" : {
			name : "Nimble Flight",
			action : ["reaction", ""],
		},
		"magic sight" : {
			name : "Magic Sight",
			minlevel : 1,
			spellcastingBonus : {
				spells : ["detect magic"],
				selection : ["detect magic"],
			},
		},
	},
	trait : "Owlfolk (+2/+1 to or +1/+1/+1 to ability scores of my choice) \n Size: I am Small or Medium (my choice)\nWhen I fall, I can make a DC 10 dex save to stop falling  \nI can cast the Detect Magic spell as a ritual, as well as with any spell slots I may have",
};

AddRacialVariant("owlfolk", "medium", {
	regExpSearch : /owlfolk medium/i,
	name : "Owlfolk (medium)",
	source : ["UA:GL", 2],
	size : 3,
	trait : "Owlfolk (+2/+1 to or +1/+1/+1 to ability scores of my choice) \n Size: I am Medium \nWhen I fall, I can make a DC 10 dex save to stop falling  \nI can cast the Detect Magic spell as a ritual, as well as with any spell slots I may have",
});

AddRacialVariant("owlfolk", "small", {
	regExpSearch : /owlfolk small/i,
	name : "Owlfolk (small)",
	source : ["UA:GL", 2],
	size : 4,
	trait : "Owlfolk (+2/+1 to or +1/+1/+1 to ability scores of my choice) \n Size: I am Small \nWhen I fall, I can make a DC 10 dex save to stop falling  \nI can cast the Detect Magic spell as a ritual, as well as with any spell slots I may have",
});

RaceList["rabbitfolk"] = {
	regExpSearch : /rabbitfolk/i,
	name : "Rabbitfolk",
	sortname : "Rabbitfolk",
	source : ["UA:FF", 3],
	plural : "Rabbitfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
			},
	skills : ["Perception"],
	addMod : { type : "skill", field : "Init", mod : "prof" , text : "I can add my proficency modifer to initiative rolls." },
	languageProfs : [1, "Common"],
	scorestxt : "Rabbitfolk (+2/+1 to or +1/+1/+1 to ability scores of my choice)",
	features : {
		"lucky footwork" : {
			name : "Lucky Footwork",
			action : ["reaction", ""],
		},
	},
	trait : "Rabbitfolk (+2/+1 to or +1/+1/+1 to ability scores of my choice)\n  Size: I am Small or Medium (my choice)\nWhen I fail a dexterity saving throw, I can use my reaction to add a D4 to the result, potentially making it a success. \nOnce during each of my turns when I walk at least 5 feet, I can hop an extra D12 feet without costing any movement ",
};

AddRacialVariant("rabbitfolk", "medium", {
	regExpSearch : /rabbitfolk medium/i,
	name : "Rabbitfolk (medium)",
	source : ["UA:GL", 2],
	size : 3,
	trait : "Rabbitfolk (+2/+1 to or +1/+1/+1 to ability scores of my choice) \nSize: I am Medium \nWhen I fail a dexterity saving throw, I can use my reaction to add a D4 to the result, potentially making it a success. \nOnce during each of my turns when I walk at least 5 feet, I can hop an extra D12 feet without costing any movement ",
});

AddRacialVariant("rabbitfolk", "small", {
	regExpSearch : /rabbitfolk small/i,
	name : "Rabbitfolk (small)",
	source : ["UA:GL", 2],
	size : 4,
	trait : "Rabbitfolk (+2/+1 to or +1/+1/+1 to ability scores of my choice) \nSize: I am Small \nWhen I fail a dexterity saving throw, I can use my reaction to add a D4 to the result, potentially making it a success. \nOnce during each of my turns when I walk at least 5 feet, I can hop an extra D12 feet without costing any movement ",
	});