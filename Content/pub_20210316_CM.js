var iFileName = "pub_20210316_CM.js";
RequiredSheetVersion(13);

// Define the source
SourceList.CM = {
	name: "Candlekeep Mysteries ",
	abbreviation: "CM",
	group: "Adventure Books",
	url: "https://dnd.wizards.com/products/candlekeep-mysteries",
	date: "2021/03/16"
};

MagicItemsList["book flail"] = {
	name : "Book Flail",
	source : ["CM"],
	type : "weapon (flail)",
	rarity : "uncommon",
	magicItemTable : "F",
	attunement : false,
	description : "A remnant from Fistania's animated library, this book is connected to a length of chain and is entitled Martial Attack Techniques. It may be used as a magical flail that grants a +1 bonus to attack and damage rolls.",
	weight : 2,
	weaponsAdd : ["Book Flail"],
	weaponOptions : {
		baseWeapon : "flail",
		regExpSearch : /^(?=.*book)(?=.*flail).*$/i,
		name : "Book Flail",
		source : ["CM"],
		range : "Melee",
		modifiers : [1,1]
	}
}

MagicItemsList["radiance"] = {
	name : "Radiance, Wand of the War Mage +1",
	source : ["CM"],
	type : "wand",
	rarity : "unique",
	attunement : true,
	description : "While holding this golden hand mirror, you gain a +1 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack. While in darkness, Radiance sheds dim light in a 5-foot radius. An attuned creature can use a bonus action while holding the mirror to cast the enhance ability spell, chosing itself and no other creature as the spell’s target. Once this property is used, it can’t be used again until the next dawn.",
	descriptionFull : "This wand of the war mage takes the form of an exquisite golden hand mirror and graints a +1 bonus to spell attack rolls while you are holding it. In addition, you ignore half cover when making a spell attack. When surrounded by darkness, it sheds dim light in a 5-foot radius. A creature that is attuned to Radiance can use a bonus action while holding the mirror to cast the enhance ability spell, chosing itself and no other creature as the spell’s target. Once this property of the wand is used, it can’t be used again until the next dawn.",
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	usages : 1,
	recovery : "dawn",
	limfeaname : "Radiance (Cast Enhance Ability)",
	action : [["bonus action", ""]],
	spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["enhance ability"],
			selection : ["enhance ability"],
			firstCol : "oncelr"}],
	spellChanges : {
		"enhance ability" : {
			time : "1 ba",
			range : "Self",
			changes : "Casting time is one bonus action and the range is self."
			},
		},
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type == "attack") return 1;
				},
				"I gain a +1 bonus to spell attack rolls."
				]
			}
}

MagicItemsList["orcus figurine"] = {
	name : "Orcus Figurine",
	source : ["CM"],
	type : "wondrous item",
	rarity : "",
	storyItemAL : true,
	attunement : false,
	description: "The figurine is a Tiny object with AC 17, 3 hit points, and immunity to all dmg types except radiant. It has the following properties: 1. Undead w/i 30 ft of the figurine can’t be turned. 2. Dead creatures w/i 30 ft of the figurine can’t be returned to life. 3. A creature that holds the figurine while praying to Orcus for 1+ hours has a 10 % chance of summoning an avatar of Orcus. The avatar can’t be summoned again for 30 days and has the statistics of a wraith except that it’s chaotic evil. It attacks all non-undead creatures, and disappears after 1 hour or when reduced to 0 hp.",
	descriptionFull : "Vinique the wereraven stole this six-inch-tall sculpture from an evil merchant before it could be sold at auction in a major city. Carved from an ogre’s petrified heart, the gray figurine depicts the Demon Prince of Undeath in ghastly detail, clutching his skull-topped wand in one hand and three severed heads by the hair in the other. The figurine smells like decaying flesh, and this scent is detectable out to a range of 5 feet." + "\n   " + "The figurine is a Tiny object with AC 17, 3 hit points, and immunity to all types of damage except radiant damage. A detect evil and good spell or similar magic reveals that the figurine has been desecrated. As long as it has at least 1 hit point, the figurine has the following magical properties:" + "\n   " + "1.Undead within 30 feet of the figurine can’t be turned." + "\n   " + "2.Dead creatures within 30 feet of the figurine can’t be brought back to life." + "\n   " + "3.A creature that holds the figurine while praying to Orcus for at least 1 hour has a 10 percent chance of summoning a smoky avatar of the demon lord. Once this avatar is summoned, it can’t be summoned again for 30 days. Orcus’s avatar has the statistics of a wraith except that it’s chaotic evil. It attacks all non-undead creatures it encounters, and it disappears after 1 hour or when reduced to 0 hit points.",
}

MagicItemsList["serpent scale armor"] = {
	name : "Serpent Scale Armor",
	source : ["CM"],
	type : "armor (scale mail)",
	rarity : "uncommon",
	attunement : false,
	description : "This suit of magic armor is made from shimmering scales. While wearing it, you can apply your full Dexterity modifier when determining your AC. In addition, this armor does not impose disadvantage on your Dexterity (Stealth) checks.",
	descriptionFull : "This suit of magic armor is made from shimmering scales. While wearing it, you can apply your full Dexterity modifier (instead of a maximum of +2) when determining your Armor Class. In addition, this armor does not impose disadvantage on your Dexterity (Stealth) checks.",
	eval : function () {
		Value('Medium Armor Max Mod', 6);
		ApplyArmor(What("AC Armor Description"));
	},
	removeeval : function () {
		tDoc.resetForm(['Medium Armor Max Mod']);
		ApplyArmor(What("AC Armor Description"));
	},
	armorAdd : "Serpent Scale Armor",
	armorOptions : [{
		regExpSearch : /^(?=.*serpent)(?=.*scale).*$/i,
		name : "Serpent Scale Armor",
		source: ["CM"],
		type : "medium",
		ac : 14,
		stealthdis : false,
		weight : 45
		}]
}

MagicItemsList["serpent's fang"] = {
	name : "Serpent's Fang",
	source : ["CM"],
	type : "weapon (longsword)",
	rarity : "rare",
	attunement : false,
	description : "This single-edged magic sword is made from the scrimshawed fang of a giant serpent. The weapon deals an extra 1d10 poison damage to any target it hits.",
	descriptionFull : "This single-edged magic sword is made from the scrimshawed fang of a giant serpent. Its hilt changes shape to adjust to the grasp of any creature that picks it up. The weapon deals an extra 1d10 poison damage to any target it hits.",
	weight : 2,
	weaponsAdd : ["Serpent's Fang"],
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*serpent)(?=.*fang).*$/i,
		name : "Serpent's Fang",
		source : ["CM"],
		description : "Versatile (d10), +1d10 poison dmg per hit",
	}
}

MagicItemsList["gloves of soul catching"] = {
	name : "Gloves of Soul Catching",
	source : ["CM"],
	type : "wondrous item",
	rarity : "legendary",	
	notLegalAL : true,
	attunement : true,
	scoresOverride : [0, 0, 20, 0, 0, 0],
	description : "Your Constitution score is 20 while you wear these gloves. This property has no effect on you if your Constitution is already 20 or more. After hitting w/ an unarmed strike while wearing these gloves, you can deal an extra 2d10 force dmg to target. You also regain a number of hp equal to the force dmg dealt or you can gain advantage on one atk roll, ability check, or saving throw you make before the end of your next turn.",
	descriptionFull : "Your Constitution score is 20 while you wear these gloves. This property of the gloves has no effect on you if your Constitution is already 20 or higher" + "\n   " + "After making a successful unarmed strike while wearing these gloves, you can use the gloves to deal an extra 2d10 force damage to the target, and you regain a number of hit points equal to the force damage dealt. Alternatively, instead of regaining hit points in this way, you can choose to gain advantage on one attack roll, ability check, or saving throw you make before the end of your next turn.",
	weight : 2,
	weaponsAdd : ["Gloves of Soul Catching"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*gloves)(?=.*soul)(?=.*catching).*$/i,
		name : "Gloves of Soul Catching",
		source : ["CM"],
		range : "Melee",
		description : "+2d10 force dmg. Regain hp equal to force dmg OR adv. on 1 atk/ability chk/saving throw before end of next turn",
	}
}

MagicItemsList["watchful helm"] = {
	name : "Watchful Helm",
	source : ["CM"],
	type : "wondrous item",
	rarity : "very rare",	
	attunement : true,
	description : "While you wear this helm, you gain a +1 bonus to AC, remain aware of your surroundings even while asleep, and have advantage on Wisdom (Perception) checks that rely on sight. As a bonus action, you can cast the see invisibility spell from the helm. Once this property of the helm is used, it can’t be used again until the next dawn.",
	descriptionFull : "While you wear this helm, you gain a +1 bonus to AC and remain aware of your surroundings even while you’re asleep, and you have advantage on Wisdom (Perception) checks that rely on sight." + "\n   " + "As a bonus action, you can cast the see invisibility spell from the helm. Once this property of the helm is used, it can’t be used again until the next dawn.",
	weight : 1,
	extraAC : [{name : "Watchful Helm", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
	usages : 1,
	recovery : "dawn",
	limfeaname : "Watchful Helm (Cast See Invis.)",
	action : ["bonus action", ""],
	advantages : ["Perception", true],
	vision : [["Adv. on Perception checks that rely on sight", 0]],
	spellcastingBonus : {
			name : "Once per dawn",
			spells : ["see invisibility"],
			selection : ["see invisibility"],
			firstCol : "oncelr",
		},
	spellChanges : {
		"see invisibility" : {
			time : "1 ba",
			changes : "Casting time is one bonus action."
		}
	}
}

MagicItemsList["staff of fate"] = {
	name : "Staff of Fate",
	source : ["CM"],
	type : "staff (quarterstaff)",
	rarity : "very rare",
	attunement : true,
	description : "This crystal staff can be wielded as a magic quarterstaff that grants a +3 bonus to atk & dmg rolls. The staff has 6 charges. As a bns action, you can expend 1 charge to give a creature you can see a d4. The recipient can roll the d4 & add the result to 1 ability chk, atk roll, dmg roll, or saving throw made before the start of your next turn. If the extra die isn't used by then, it is lost. If you use the last charge, roll a d20. On a 9 or lwr, the staff becomes a nonmagical quarterstaff & breaks the 1st time it deals dmg. On a roll of 10+, the staff regains 1d6 charges.",
	descriptionFull : "This transparent crystal staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it." + "\n   " + "Altered Outcome. The staff has 6 charges. As a bonus action, you can expend 1 of the staff's charges to give yourself or one other creature that you can see a d4. The recipient can roll this d4 and add the number rolled to one ability check, attack roll, damage roll, or saving throw it makes before the start of your next turn. If this extra die is not used before then, it is lost." + "\n   " + "If you expend the staff's last charge, roll a d20. On a roll of 9 or lower, the staff becomes a nonmagical quarterstaff that breaks the first time it scores a hit and deals damage. On a roll of 10 or higher, the staff regains 1d6 of its expended charges." + "\n   " + "Proficiency with a quarterstaff allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
	weight : 4,
	usages : 6,
	recovery : "special",
	limfeaname : "Staff of Fate (Alter Outcome)",
	action : ["bonus action", ""],
	weaponsAdd : ["Staff of Fate"],
	weaponOptions : {
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*staff)(?=.*fate).*$/i,
		name : "Staff of Fate",
		source : ["CM"],
		range : "Melee",
		modifiers : [3,3],
	}
}

MagicItemsList["nether scroll"] = {
	name : "Nether Scroll of Azumar",
	source : ["CM"],
	type : "scroll",
	rarity : "legendary",
	storyItemAL : true,
	attunement : false,
	description : "After 30 days of study (8+ hrs/day), make a DC 25 Int (Arcana) check. If fail, take 16d10 psychic dmg & you must study scroll for another 30 days before repeating the attempt. On a success, your Int score increases to a max of 22, you gain adv. on saving throws against spells & magical effects, a stone golem appears w/i 60 ft in unoccupied space & acts as ally. If you die, the golem turns to dust.",
	descriptionFull : "Unlike most scrolls, a Nether Scroll of Azumar is not a consumable magic item. It takes 30 days of concentrated study—at least 8 hours per day—to attempt to understand this scroll. After completing this study, you must make a DC 25 Intelligence (Arcana) check. If this check fails, you take 16d10 psychic damage, and you can attempt the check again after another 30 days of concentrated study." + "\n   " + "When you succeed on the check, you gain the following benefits:" + "\n   " + "Your Intelligence score increases by 2, to a maximum of 22. Once you gain this benefit, you can’t use this scroll to increase your Intelligence again. You gain advantage on saving throws against spells and other magical effects." + "\n   " + "When you gain the scroll’s benefits, a stone golem magically appears in an unoccupied space within 60 feet of you and acts as your ally. If you die, the golem turns to dust.",
	scorestxt : "Int max changed based on score when used",
	scores : [0, 0, 0, 2, 0, 0],
	savetxt : { text : ["Adv. on saves vs. spells and other magical effects"] },
	choices : ["Int < 19", "Int = 19", "Int > 19"],
	"int < 19" : {
			scoresMaximum : [0, 0, 0, 0, 0, 0]
		},
	"int = 19" : {
			scoresMaximum : [0, 0, 0, 21, 0, 0]
		},
	"int > 19" : {
			scoresMaximum : [0, 0, 0, 22, 0, 0]
		},
}
	
MagicItemsList["candlekeep alchemy jug"] = {
	name : "Alchemy Jug (Candlekeep)",
	source : ["CM"],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "B",
	description : "As an action, command the jug to produce liquid; or an action to uncork it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal), Boiling Hot tea (1 qt - blue jug only), Soy Sauce (1 gal - orange jug only).",
	descriptionFull : "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty." + "\n   " + "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named." + "\n   " + "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.\n\n" + toUni("Max\tLiquid\t\tMax\tLiquid") + "\n1 quart\tOil\t\t1 quart\tBoiling Tea (Bl. J.)\n1 gallon\tSoy Sauce (Or. J.)\t2 gallons\tVinegar\n4 gallons\tBeer\t\t8 gallons\tWater, fresh\n1 gallon\tHoney\t\t12 gallons\tWater, salt\n2 gallons\tMayonnaise\t1 gallon\tWine",
	weight : 12,
	allowDuplicates : true,
	choices : ["Alchemy Jug (Blue)", "Alchemy Jug (Orange)"],
	"alchemy jug (blue)" : {
		name : "Alchemy Jug (Blue)",
		description: "As an action, command the jug to produce liquid; or an action to uncork it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal), Boiling Hot Tea (1 qt).",
		descriptionLong: "A heavy ceramic jug. As an action, the jug can be commanded to hold a chosen liquid. With another action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\rLiquids (with maximum): beer (4 gallons), boiling hot tea (1 quart), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon)."
		},
	"alchemy jug (orange)" : {
		name : "Alchemy Jug (Orange)",
		description: "As an action, command the jug to produce liquid; or an action to uncork it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal), Soy Sauce (1 gal).",
		descriptionLong: "A heavy ceramic jug. As an action, the jug can be commanded to hold a chosen liquid. With another action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\rLiquids (with maximum): beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), soy sauce (1 gallon), wine (1 gallon)."
		},
};
