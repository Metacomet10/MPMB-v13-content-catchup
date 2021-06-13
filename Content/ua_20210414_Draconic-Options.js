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
	source : ["UA:DO", 2],
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
