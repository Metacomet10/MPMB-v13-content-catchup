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
	scorestxt : "Fairy (+2 to one ability score of my choice, and +1 to a different score of my choice)",
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
	trait : "Fairy (+2 to one ability score of my choice, and +1 to a different score of my choice)\nType: I am Fey.\nFairy Flight: I have a magical fly speed equal to my walking speed and can hover. \nFairy Magic: I know the druidcraft and faerie fire spells, and can cast the latter without using a spell slot once per long rest, as well as using any slots I have. \nFey Passage: I can squeeze through a space as narrow as 1 inch wide.",
};

RaceList["rabbitfolk"] = {
	regExpSearch : /rabbitfolk/i,
	name : "Rabbitfolk",
	sortname : "Rabbitfolk",
	source : ["UA:FF", 2],
	plural : "Rabbitfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
			},
	skills : ["Perception"],
	addMod : { type : "skill", field : "Init", mod : "prof" , text : "I can add my proficency modifer to initiative rolls." },
	languageProfs : [1, "Common"],
	scorestxt : "Rabbitfolk (+2 to one ability score of my choice, and +1 to a different score of my choice)",
	features : {
		"lucky footwork" : {
			name : "Lucky Footwork",
			action : ["reaction", ""],
		},
	},
	trait : "Rabbitfolk (+2 to one ability score of my choice, and +1 to a different score of my choice)\n  Size: I am Small or Medium (my choice)\nWhen I fail a dexterity saving throw, I can use my reaction to add a D4 to the result, potentially making it a success. \nOnce during each of my turns when i walk at least 5 feet, I can hop an extra D12 feet without costing any movement ",
};

AddRacialVariant("rabbitfolk", "medium", {
	regExpSearch : /rabbitfolk medium/i,
	name : "Rabbitfolk (medium)",
	source : ["UA:GL", 2],
	size : 3,
});

AddRacialVariant("rabbitfolk", "small", {
	regExpSearch : /rabbitfolk small/i,
	name : "Rabbitfolk (small)",
	source : ["UA:GL", 2],
	size : 4,
	});