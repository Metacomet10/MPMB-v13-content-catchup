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