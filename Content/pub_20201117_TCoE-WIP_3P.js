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

var iFileName = "pub_20201117_TCoE.js";
RequiredSheetVersion(13);
// Define the source
SourceList["TCoE"] = { 
	name : "Tasha's Cauldron of Everything", 
	abbreviation : "TCoE",
	group : "Primary Sources",
	date : "2020/11/17",
};

// Add Custom Lineage
RaceList["custom lineage"] = {
	regExpSearch : /^(?=.*custom)(?=.*lineage).*$/i,
	name : "Custom lineage",
	sortname : "Custom Lineage",
	source : ["TCoE", 8],
	plural : "",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : "",
	height : "",
	weight : "",
	heightMetric : "",
	weightMetric : "",
	scorestxt : "Custom Lineage (+2 to one ability score of my choice)",
	eval : function() { AddString('Feat Note 1', 'Custom lineage bonus feat', '; '); },
	removeeval : function() { RemoveString('Feat Note 1', 'Custom lineage bonus feat'); },
	trait : "Custom Lineage (+2 to one ability score of my choice)" + desc([
		"Size: I am Small or Medium (my choice)",
		"Feat: I gain one feat of my choice for which I qualify",
		"Variable Trait: I gain either darkvision with a range of 60 ft or proficiency in a skill of my choice",
	])
};
AddRacialVariant("custom lineage", "medium darkvision", {
	regExpSearch : /medium darkvision/i,
	source : ["TCoE", 8],
	size : 3,
	vision : [["Darkvision", 60]],
	trait : "Custom Lineage (+2 to one ability score of my choice)" + desc([
		"Size: My size is Medium",
		"Feat: I gain one feat of my choice for which I qualify",
		"Variable Trait: I gain darkvision with a range of 60 ft"
	])
});
AddRacialVariant("custom lineage", "medium skill proficiency", {
	regExpSearch : /medium skill proficiency/i,
	source : ["TCoE", 8],
	size : 3,
	skillstxt : "Choose any one skill",
	trait : "Custom Lineage (+2 to one ability score of my choice)" + desc([
		"Size: My size is Medium",
		"Feat: I gain one feat of my choice for which I qualify",
		"Variable Trait: I gain proficiency in a skill of my choice"
	])
});
AddRacialVariant("custom lineage", "small darkvision", {
	regExpSearch : /small darkvision/i,
	source : ["TCoE", 8],
	size : 4,
	vision : [["Darkvision", 60]],
	trait : "Custom Lineage (+2 to one ability score of my choice)" + desc([
		"Size: My size is Small",
		"Feat: I gain one feat of my choice for which I qualify",
		"Variable Trait: I gain darkvision with a range of 60 ft"
	])
});
AddRacialVariant("custom lineage", "small skill proficiency", {
	regExpSearch : /small skill proficiency/i,
	source : ["TCoE", 8],
	size : 4,
	skillstxt : "Choose any one skill",
	trait : "Custom Lineage (+2 to one ability score of my choice)" + desc([
		"Size: My size is Small",
		"Feat: I gain one feat of my choice for which I qualify",
		"Variable Trait: I gain proficiency in a skill of my choice"
	])
});

// Add Subclasses
AddSubClass("barbarian", "path of the beast", {
	regExpSearch : /^(?=.*\bbarbarian\b)(?=.*\bpath\b)(?=.*\bbeast\b).*$/i,
	subname : "Path of the Beast",
	source : ["TCoE", 24],
	features : {
		"subclassfeature3" : {
			name : "Form of the Beast",
			source : ["TCoE", 24],
			minlevel : 3,
			description : "\n   Whenever I enter my rage, I can transform using an option from the Form of the Beast table (see Notes page)",
			toNotesPage : [{
				name : "Form of the Beast Table",
				source : ["TCoE", 24],
				popupName : "Form of the Beast",
				note : [
				"When I enter my rage, I can transform, revealing the bestial power within me.",
				" Until the rage ends, I manifest a natural weapon. It counts as a simple melee weapon for me, and I add my Strength modifier to the attack and damage rolls when I attack with it, as normal.",
				" I choose the weapon's form each time I rage:",
				"Bite. My mouth transforms, which deals ld8 piercing damage on a hit. Once on each of my turns when I damage a creature with this bite, I regain a number of hit points equal to my proficiency bonus, provided I have less than half my hit points when I am hit.", 
				"Claws. My hands transform into claws which deal ld6 slashing damage, which I can use as weapons if they are empty. Once on each of my turns when I attack with a claw using the Attack action, I can make one additional claw attack as part of the same action.",
				"Tail. I grow a tail, which deals ld8 piercing damage on a hit and has the reach property. If a creature I can see within 10 feet of me hits me with an attack roll, I can use my reaction to swipe your tail and roll a d8, applying a bonus to your AC equal to the number rolled, potentially causing the attack to miss."
				]
			}]
		},
		"subclassfeature6" : {
			name : "Beastial Soul",
			source : ["TCoE", 25],
			minlevel : 6,
			description : desc([
				"The natural weapons of my Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
				"I can also alter my form to help adapt to my surroundings. When finishing a short or long rest, I may choose one of the following benefits until my next short or long rest:",
				" - Swimming: Gain swimming speed equal to walking speed, and can breathe underwater.",
				" - Climbing: Gain climbing speed equal to walking speed, and can climb difficult surfaces without need to make an ability check.",
				" - Jumping: Once per turn, when I jump, I can make a Strength(Athletics) check to extend the distance equal to the check's total."
			]),
			usages: 1,
			recovery: "short rest",
			action : [["action", ""]]
		},
		"subclassfeature10" : {
			name : "Infectious Fury",
			source : ["TCoE", 25],
			minlevel : 10,
			description : desc([
				"When I hit a creature with my natural weapons while raging, the target must succeed on a Wisdom saving throw (DC equal to 8 + my Constitution mod + Proficiency bonus) or suffer one of the following effects of my choice:",
				" - The target must use its reaction to make a melee attack against another creature of your choice that you can see.",
				" - The target takes 2d 1 2 psychic damage.",
				"I can use this feature a number of times equal to my Proficiency bonus, and regain all expended uses when I finish a long rest."
			]),
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",
		},
		"subclassfeature14" : {
			name : "Call of the Hunt",
			source : ["TCoE", 25],
			minlevel : 14,
			description : desc([
				"Whenever I rage, I can choose a number of other willing creatures I can see within 30 feet of me equal to your Constitution modifier (minimum of one creature).",
				"I gain 5 temporary hit points for each creature that accepts this feature.",
				"Until the rage ends, the chosen creatures can each use the following benefit once on each of their turns:",
				"when the creature hits a target with an attack roll and deals damage to it, the creature can roll a d6 and gain a bonus to the damage equal to the number rolled.",
				"I can use this feature a number of times equal to my Proficiency bonus, and regain all expended uses when I finish a long rest."
			]),
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",
		},
	}
});
AddSubClass("barbarian", "path of wild magic", {
	regExpSearch : /^(?=.*\bwild\b)(?=.*\bmagic\b).*$/i,
	subname : "Path of Wild Magic",
	source : ["TCoE", 25],
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Magic Awareness",
			source : ["TCoE", 25],
			minlevel : 3,
			description : desc([
				"As an action, until the end of my next turn, I know any spell or magic item within 60 ft",
				"I learn the school and location of the magic I detect", 
				"I can't sense the magic if it is behind total cover"
			]),
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",
			action : [["action", ""]]
		},
		"subclassfeature3.1" : {
			name : "Wild Surge",
			source : ["TCoE", 25],
			minlevel : 3,
			description : "\n   Whenever I enter my rage, I roll on the Wild Magic table (see Notes page)",
			toNotesPage : [{
				name : "Wild Magic Table",
				source : ["TCoE", 26],
				popupName : "Wild Magic Table",
				note : [
					"Magic erupts from me while I rage. Whenever I enter my rage, I have to roll on the table below to see what happens.",
					"If the effect calls for a saving throw, the DC is equal to 8 + my proficiency bonus + my Constitution modifier.\n",
					"d8\tEFFECT",
					" 1\tShadowy tendrils lash around me. Each creature of my choice that I can see within 30 feet of me must succeed on a Constitution saving throw or take 1dl2 necrotic damage. I also gain 1d12 temporary hit points.",
					" 2\tI teleport up to 30 feet to an unoccupied space I can see. Until my rage ends, I can use this effect again on each of my turns as a bonus action.",
					" 3\tAn intangible spirit, which looks like a flumph or a pixie (my choice), appears within 5 feet of one creature of my choice that I can see within 30 feet of me. At the end of the current turn, the spirit explodes, and each creature within 5 feet of it must succeed on a Dexterity saving throw or take ld6 force damage. Until my rage ends, I can use this effect again, summoning another spirit, on each of my turns as a bonus action.",
					" 4\tMagic infuses one weapon of my choice that I am holding. Until my rage ends, the weapon's damage type changes to force, and it gains the light and thrown properties, with a normal range of 20 feet and a long range of 60 feet. If the weapon leaves my hand, the weapon reappears in my hand at the end of the current turn.",
					" 5\tWhenever a creature hits me with an attack roll before my rage ends, that creature takes ld6 force damage, as magic lashes out in retribution.",
					" 6\tUntil my rage ends, I am surrounded by multicolored, protective lights; I gain a +l bonus to AC, and while within 10 feet of me, my allies gain the same bonus.",
					" 7\tFlowers and vines temporarily grow around me; until my rage ends, the ground within 15 feet of me is difficult terrain for my enemies.",
					" 8\tA bolt of light shoots from my chest. Another creature of my choice that I can see within 30 feet of me rust succeed on a Constitution Saving throw or take ld6 radiant damage and be blinded until the start of my next turn. Until my rage ends, I can use this effect again on each of my turns as a bonus action."
				]
			}]
		},
		"subclassfeature6" : {
			name : "Bolstering Magic",
			source : ["TCoE", 26],
			minlevel : 6,
			description : desc([
				"As an action, I can touch a creature or myself and confer one of the following benefits:",
				" - For 10 minutes, they can add 1d3 to any attack roll or ability check",
				" - Roll 1d3. They regain an expended spell slot of a level equal to or lower than the roll",
				"A creature that receives the second benefit can't receive it again until after a long rest"
			]),
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",			
			action : [["action", ""]]
		},
		"subclassfeature10" : {
			name : "Unstable Backlash",
			source : ["TCoE", 26],
			minlevel : 10,
			description : desc([
				"After taking damage or failing a saving throw while raging, I can change my wild surge",
				"I reroll my effect on the Wild Magic table and immediately produce the results rolled",
				"This replaces the current wild surge effect with a new one"
			]),
			action : [["reaction", " (in Rage after taking damage or failing save)"]]
		},
		"subclassfeature14" : {
			name : "Controlled Surge",
			source : ["TCoE", 26],
			minlevel : 14,
			description : desc([
				"Whenever I roll for my wild surge, I can roll the die twice and choose which result to use",
				"If I roll the same on both dice, I can choose any effect on the Wild Magic table"
			])
		}
	}
});
AddSubClass("bard", "college of creation", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*creation).*$/i,
	subname : "College of Creation",
	source : [["TCoE", 26]],
	features : {
		"subclassfeature3" : {
			name : "Mote of Potential",
			source : [["TCoE", 26]],
			minlevel : 3,
			description : desc([
				"I can also grant a mote of potential to whomever I give a bardic inspiration die",
				"This tiny, invulnerable object orbits in 5 ft; It enhances the use of the inspiration die:",
				"\u2022 Attack Roll: others within 5 ft must make a Con save",
				"  If failed, they take the die roll in thunder damage; This uses my spell save DC",
				"\u2022 Saving Throw: Grants temp HP equal to the roll + my Cha mod",
				"\u2022 Ability Check: Roll the die twice and choose which result to use"
			])
		},
		"subclassfeature3" : {
			name : "Performance of Creation",
			source : [["TCoE", 26]],
			minlevel : 3,
			description : desc([
				"As an action, I can create one nonmagical, medium or smaller item of my choice in an unoccupied space within 10'",
				"The item must appear on a surface or in a liquid that can support it",
				"The gp value of the item can't be more than 20 times my bard level",
				"It disappears after a number of hours equal to my proficiency bonus",
				"I can only make one item per long rest unless I expend a spell slot of 2nd level or higher",
				"I can only have one item created by this feature at a time, if I make another the first one will vanish",
				"The size of the item created increases by level: 6th (Large) and 14th (Huge)"
			])
		},
		"subclassfeature6" : {
			name : "Animating Performance",
			source : [["TCoE", 1]],
			minlevel : 6,
			description : desc([
				"As an action, I can animate a Large or smaller nonmagical item I can see within 30 ft",
				"It lasts for 1 hour or until it has 0 HP; I control it and it acts on my initiative, after me",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"When I use bardic inspiration, I can command the item as part of the same bonus action",
				"I can't have multiple at once; Select \"Dancing Item\" on a companion page for its stats",
				"I can do this once per long rest, or by expending a 3rd-level or higher spell slot (SS 3+)"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 3+",
			eval : function (lvl, chc) {
				var useFunct = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.bard.artificerCompFunc;
				useFunct.add("Dancing Item");
			},
			removeeval : function (lvl, chc) {
				var useFunct = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.bard.artificerCompFunc;
				useFunct.remove("dancing item");
				if (CreatureList["dancing item-ua"]) CreatureList["dancing item-ua"].removeeval();
			}
		},
		"subclassfeature14" : {
			name : "Creative Crescendo",
			source : [["TCoE", 26]],
			minlevel : 14,
			description : desc([
				"I can create more than one item with Performance of Creation equal to my Cha modifier",
				"If I create an item that would exceed that number, I choose which of the previously created items disappears",
				"Only one of these items can be of the maximum size you can create; the rest must be Small or Tiny",
				"I am no longer limited by gp value when creating items with Performance of Creation"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 5+",
			additional : levels.map(function (n) {
				return n < 14 ? "" : n * 20 + " gp";
			})
		}
	}
});
AddSubClass("bard", "college of eloquence", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*eloquence).*$/i,
	subname : "College of Eloquence",
	source : ["TCoE", 54],
	features : {
		"subclassfeature3" : {
			name : "Silver Tongue",
			source : ["TCoE", 30],
			minlevel : 3,
			description : desc([
				"When I make a Persuasion or Deception check, I can treat a roll of 9 or lower as a 10"
			])
		},
		"subclassfeature3.1" : {
			name : "Unsettling Words",
			source : ["TCoE", 30],
			minlevel : 3,
			description : desc([
				"As a bonus action I can choose one creature I can see within 60 feet",
				"They subtract my inspiration die from their first saving throw before my next turn"
			]),
			additional : "1 bardic inspiration die",
			action : [["bonus action", ""]]
		},
		"subclassfeature6" : {
			name : "Unfailing Inspiration",
			source : ["TCoE", 30],
			minlevel : 6,
			description : desc([
				"When a creature adds my inspiration die to a roll and fails, they keep the die"
			])
		},
		"subclassfeature6.1" : {
			name : "Universal Speech",
			source : ["TCoE", 30],
			minlevel : 6,
			description : desc([
				"As an action I can choose up to my Charisma mod (min 1) creatures within 60 feet",
				"Those creatures magically understand any language I speak for an hour",
				"I can expend a spell slot of any level to use this feature again"
			]),
			recovery : "long rest",
			usages : 1,
			action : [["action", ""]],
      altresource : "SS 1+"
		},
		"subclassfeature14" : {
			name : "Infectious Inspiration",
			source : ["TCoE", 30],
			minlevel : 14,
			description : desc([
				"As a reaction when a creature uses my inspiration die and succeeds, I can inspire another",
				"I give a creature within 60 ft that can hear me an inspiration die without expending any",
				"I can use this reaction a number of times per long rest equal to my Cha mod (min 1)"
			]),
			action : [["reaction", ""]],
			usages : "Charisma mod per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		}
	}
});
AddSubClass("cleric", "order domain-tcoe", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*order).*$/i,
	subname : "Order Domain",
	source : ["TCoE", 31],
	spellcastingExtra : ["command", "heroism", "hold person", "zone of truth", "mass healing word", "slow", "compulsion", "locate creature", "commune", "dominate person"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["TCoE", 32],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor, and either the Intimidation or Persuasion skill",
			armorProfs : [false, false, true, false],
			skillstxt : "Choose one from Intimidation or Persuasion"
		},
		"subclassfeature1.1" : {
			name : "Voice of Authority",
			source : ["TCoE", 32],
			minlevel : 1,
			description : desc([
				"Whenever I use a spell slot to cast a spell on an ally, it can use its reaction to attack",
				"The ally makes one weapon attack against a target of my choice that I can see",
				"If the spell targets multiple allies, I can choose which one can make the attack"
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Order's Demand",
			source : ["TCoE", 32],
			minlevel : 2,
			description : desc([
				"As an action, all chosen targets in 30 ft that can see or hear me must make a Wis save",
				"If failed, it is charmed by me until the end of my next turn or it takes any damage",
				"Also, I can choose to have a charmed target drop what its holding when it fails its save"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Embodiment of the Law",
			source : ["TCoE", 32],
			minlevel : 6,
			description : desc([
				"When I cast an enchantment spell using a spell slot, I can reduce its casting time",
				"If the spell normally has a casting time of an action, I can now cast it as a bonus action"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (CurrentSpells[spName].refType == "class" && spellObj.school == "Ench" && spellObj.time == "1 a") {
							spellObj.time = "1a/bns"
							return true;
						};
					},
					"When I cast an enchantment spell using a spell slot that normally requires 1 action to cast, I can reduce its casting time to a bonus action."
				]
			}
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["TCoE", 32],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Order's Wrath",
			source : ["TCoE", 32],
			minlevel : 17,
			description : desc([
				"If I deal my Divine Strike damage to a creature, it is cursed until my next turn starts",
				"The next time it is hit by a weapon attack from my allies, it takes +2d8 psychic damage"
			])
		}
	}
});
AddSubClass("cleric", "peace domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*peace).*$/i,
	subname : "Peace Domain",
	source : ["TCoE", 32],
	spellcastingExtra : ["heroism", "sanctuary", "aid", "warding bond", "beacon of hope", "sending", "aura of purity", "Otiluke's resilient sphere", "greater restoration", "Rary's telepathic bond"],
	features : {
		"subclassfeature1" : {
			name : "Implement of Peace",
			source : ["TCoE", 33],
			minlevel : 1,
			description : "\n   " + "I gain proficiency Insight, Performance, or Persuasion skill",
			skillstxt : "Choose one from Insight or Performance or Persuasion"
		},
		"subclassfeature1.1" : {
			name : "Emboldening Bond",
			source : ["TCoE", 33],
			minlevel : 1,
			description : desc([
				"As an ation, I choose a number of willing creatures (can include myself) within",
				"30 feet of me equal to proficiency bonus, For 10 minutes or until I use the",
				"feature again, once per turn, targets within 30 ft of each other can gain",
				"bonus to attack roll, ability check, or saving throw equal to 1d4.",
				"Can use a number of times per long rest equal to my proficiency bonus."
			]),
			//additional : levels.map(function(n) {
			//	return n < 5 ? "2" : n < 9 ? "3" : n < 13 ? "4" : n < 17 ? "5" : "6";
			//}),
			action : ["action", "Emboldening Bond"],
			usages : "Prof. Bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Balm of Peace",
			source : ["TCoE", 33],
			minlevel : 2,
			description : desc([
				"As an action, I can move up to my speed without provoking attcks of opportunity",
				"and when I move within 5 ft of another creature during this action, I can restore",
				"a number of hit points to it equal to 2d6 + my Wisdom modifier (min. 1 hit point).",
				"A creature can only benefit once when using this action."
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Protective Bond",
			source : ["TCoE", 33],
			minlevel : 6,
			description : desc([
				"When a creature affected by Emboldening Bond is attacked, a second bonded creature",
				"within 30 ft of the 1st creature can use reaction: teleport to unoccupied space",
				"within 5 ft of the 1st creature and take all the damage instead."
			]),
			action : ["reaction", "Protective Bond"]
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["P", 60],
			minlevel : 8,
			description : "\n   " + "I can add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
							output.extraDmg += What('Wis Mod');
						};
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("cleric") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
						if (spellKey == "shillelagh") {
							spellObj.description = spellObj.description.replace("1d8", "1d8+" + What("Wis Mod"));
							return true;
						}
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis", true);
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Expansive Bond",
			source : ["TCoE", 33],
			minlevel : 17,
			description : desc([
				"Emboldening Bond and Protective Bond work when bonded creatures are within 60 ft",
				"of each other. Also, when a creature uses Protective Bond to take damage for another",
				"bonded creature, it has resistance to that damage."
			])
		}
	}
});
AddSubClass("cleric", "twilight domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(twilight|transition)).*$/i,
	subname : "Twilight Domain",
	source : ["TCoE", 1],
	spellcastingExtra : ["faerie fire", "sleep", "moonbeam", "see invisibility", "aura of vitality", "leomund's tiny hut", "aura of life", "greater invisibility", "circle of power", "mislead"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiencies",
			source : ["TCoE", 1],
			minlevel : 1,
			description : desc([
				"I gain proficiency with martial weapons and heavy armor"
			]),
			armorProfs : [false, false, true, false],
			weaponProfs : [false, true]
		},
		"subclassfeature1.1" : {
			name : "Eyes of Night",
			source : ["TCoE", 1],
			minlevel : 1,
			description : desc([
				"I gain darkvision out to 300 ft and can magically share it with willing creatures",
				"As an action, I can choose up to my Wis" + (typePF ? "dom" : "") + " mod (min 1) creatures I can see within 10 ft",
				"The chosen creatures then gain this darkvision for 1 hour",
				"If I have no more uses of this feature, I can expend a spell slot to use it again"
			]),
			vision : [["Darkvision", 300]],
			additional : "extend to others",
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]]
		},
		"subclassfeature1.2" : {
			name : "Vigilant Blessing",
			source : ["TCoE", 1],
			minlevel : 1,
			description : desc([
				"As an action, I can grant myself or a creature I touch adv. on the next initiative roll",
				"This benefit ends immediately after the roll or when I use this feature again"
			]),
			action : [["action", ""]]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Twilight Sanctuary",
			source : ["TCoE", 1],
			minlevel : 2,
			description : desc([
				"As an action, I can use my holy symbol to create a 30-ft radius sphere around myself",
				"It moves with me, is filled with dim light, and lasts for 1 min or until I'm incapacitated",
				"When a creature, including me, ends its turn inside the sphere, I can grant it a benefit:",
				" \u2022 I grant it temporary hit points equal to 1d6 + my cleric level",
				" \u2022 I end one effect on it causing it to be charmed or frightened"
			]),
			action : [["action", ""]]
		},
		"subclassfeature6" : {
			name : "Steps of Night",
			source : ["TCoE", 1],
			minlevel : 6,
			description : desc([
				"As a bonus action, when in dim light/darkness, I can magically grant myself flight",
				"I gain flying speed equal to my walking speed for 1 minute"
			]),
			additional : levels.map(function(n) {
				return n < 5 ? "2" : n < 9 ? "3" : n < 13 ? "4" : n < 17 ? "5" : "6";
			}),
			recovery : "long rest",
			action : [["bonus action", " (in dim light/darkness)"]]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["TCoE", 1],
			minlevel : 8,
			description : desc([
				"Once per turn, when I hit a creature with a weapon attack, I can do extra damage"
			]),
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Twilight Shroud",
			source : ["TCoE", 2],
			minlevel : 17,
			description : desc([
				"Me and my allies have half cover while in the sphere created by my Twilight Sanctuary"
			])
		}
	}
});
AddSubClass("druid", "circle of spores-tcoe", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*spores).*$/i,
	subname : "Circle of Spores",
	source : ["TCoE", 36],
	features : {
		"subclassfeature2" : {
			name : "Circle Spells",
			source : ["TCoE", 36],
			minlevel : 2,
			description : desc([
				"I learn the Chill Touch cantrip and gain the ability to cast certain spells",
				"These are always prepared, but don't count against the number of spells I can prepare"
			]),
			spellcastingBonus : {
				name : "Circle Spells",
				spells : ["chill touch"],
				selection : ["chill touch"]
			},
			spellcastingExtra : ["blindness/deafness", "gentle repose", "animate dead", "gaseous form", "blight", "confusion", "cloudkill", "contagion"]
		},
		"subclassfeature2.1" : {
			name : "Halo of Spores",
			source : ["TCoE", 36],
			minlevel : 2,
 			description : desc([
				"As a reaction when someone I can see in 10 ft starts its turn or moves, I can have it save",
				"It must succeed on a Constitution save or take necrotic damage from my cloud of spores"
			]),
			additional : levels.map(function (n) { return n < 2 ? "" : 'Con save or 1d' + (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : 10) + " necrotic damage"; }),
			action : ["reaction", ""]
		},
		"subclassfeature2.2" : {
			name : "Symbiotic Entity",
			source : ["TCoE", 37],
			minlevel : 2,
			description : desc([
				"As an action, I expend a Wild Shape use to boost my spores instead of transforming",
				"I gain 4 temporary hit points per druid level and my Halo of Spores damage increases",
				"Also, my melee weapon attacks do +1d6 necrotic damage with every hit",
				"This lasts for 10 min, until these temporary HP run out, or until I use Wild Shape again"
			]),
			additional : levels.map(function (n) {
				return n < 2 ? "" : Math.floor(n*4) + " temp HP; Halo of Spores: 2d" + (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : 10);
			}),
			action : ["action", ""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (((v.isMeleeWeapon && !v.isNaturalWeapon) || v.baseWeaponName == "unarmed strike") && (/\b(spore|symbiotic)\b/i).test(v.WeaponText)) {
							fields.Description += (fields.Description ? '; ' : '') + '+1d6 necrotic damage';
						};
					},
					"If I include the word 'Spore' or 'Symbiotic' in a melee weapon's name, it gets treated as a weapon that is infused by my Symbiotic Entity feature, adding +1d6 necrotic damage in the description."
				]
			}
		},
		"subclassfeature6" : {
			name : "Fungal Infestation",
			source : ["TCoE", 37],
			minlevel : 6,
			description : desc([
				"As a reaction when a Small/Medium beast/humanoid dies in 10 ft, I can animate it",
				"It rises as a zombie with 1 HP that follows my mental commands and dies after 1 hour",
				"It can only take the attack action for one melee attack; It takes its turns after mine"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Spreading Spores",
			source : ["TCoE", 37],
			minlevel : 10,
			description : " [only while Symbiotic Entity is active]" + desc([
				"As a bonus action, I create a 10-ft cube of fungal spores within 30 ft, lasting for 1 min",
				"Any creature moving into or starting its turn in it must save against my Halo of Spores",
				"The cube ends if I use this feature again; While it persists, I can't use my Halo of Spores"
			]),
			action : ["bonus action", " (start/end)"]
		},
		"subclassfeature14" : {
			name : "Fungal Body",
			source : ["TCoE", 38],
			minlevel : 14,
			description : desc([
				"I'm immune to being blinded, deafened, frightened, poisoned, and critical hits"
			]),
			savetxt : { immune : ["blinded", "deafened", "frightened", "poisoned", "critical hits (unless incapacitated)"] }
		}
	}
});
AddSubClass("druid", "circle of stars", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*circle)(?=.*stars).*$/i,
	subname : "Circle of Stars",
	source : [["TCoE", 3]],
	features : {
		"subclassfeature2" : {
			name : "Star Map",
			source : [["TCoE", 3]],
			minlevel : 2,
			description : desc([
				"I've created a star map, a Tiny object which I can use as my spellcasting focus",
				"If I lose it, I can preform a 1-hour (over a rest) ceremony during a rest to create a replacement",
				"I can use it to cast Guidance or Guiding Bolt, even unprepared, without using a spell slot"
			]),
			spellcastingBonus : {
				name : "Star Map",
				spells : ["guiding bolt", "guidance"],
				selection : ["guiding bolt", "augury"],
				firstCol : "Sp",
				times: 2
			},
			usages : "Proficiency Bonus per ",
			usagescalc :  "event.value = Number(What('Proficiency Bonus'));",
			recovery : "long rest",

			extraLimitedFeatures : [{
				name : "Guiding Bolt",
				usages : "Proficiency Bonus per ",
				recovery : "long rest",
				usagescalc : "event.value = Number(What('Proficiency Bonus'));"
			}],
		},
		"subclassfeature2.1" : {
			name : "Starry Form",
			source : [["TCoE", 3]],
			minlevel : 2,
			description : desc([
				"As an action, I can expend a use of wild shape to take on a starry form for 10 minutes",
				"In that form I shed bright light in a 10-ft radius and dim light for an extra 10-ft radius",
				"It ends if I choose to end it, am incapacitated, die, or use it again.",
				"When I do so, I choose one constellation below to grant me benefits in my starry form:",
				"\u2022 Chalice: When I use a spell slot to cast a healing spell, I also heal a creature in 30 ft",
				"  This can be myself or the original target; I restore 1d8 + my wisdom mod in HP",
				"\u2022 Archer: As a bonus action, I can make a ranged spell attack to hurl a luminous arrow",
				"  This has a range of 60 ft and deals radiant damage equal to 1d8 + my Wisdom mod",
				"\u2022 Dragon: I can treat a roll below 10 as a 10 for Int/Wis checks and concentration saves"
			]),
			action : [["bonus action", " (Archer Constellation)"]],
			weaponOptions : {
				regExpSearch : /^(?=.*luminous)(?=.*arrow).*$/i,
				name : "Luminous Arrow",
				source : [["TCoE", 3]],
				ability : 5,
				type : "Spell",
				damage : [1, 8, "radiant"],
				range : "60 ft",
				description : "Use as bonus action",
				abilitytodamage : true,
				luminousarrow : true
			},
			weaponsAdd : ['Luminous Arrow'],
		},
		"subclassfeature6" : {
			name : "Cosmic Omen",
			source : [["TCoE", 3]],
			minlevel : 6,
			description : desc([
				"When I finish a long rest, I can roll a die to gain an omen based on the result (odd/even)",
				"As a reaction when a creature I can see in 30 ft makes an attack, check, or save, I can:",
				"\u2022 Weal (even): add 1d6 to the number rolled for the attack, check, or save",
				"\u2022 Woe (odd): subtract 1d6 from the number rolled for the attack, check, or save"
			]),
			action : [["reaction", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = Number(What('Proficiency Bonus'));",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Twinkling Constellations",
			source : [["TCoE", 3]],
			minlevel : 10,
			description : desc([
				"I can now switch constellation at the start of my turn, additionally, my constellations improve",
				"\u2022 The 1d8 of the Chalice and Archer become 2d8",
				"\u2022 While Dragon is Active, I have a 10ft fly speed with hover."
			]),
			calcChanges : {
											atkAdd : [
													function (fields, v) {
															if (classes.known.druid && classes.known.druid.level > 9 && ( v.theWea.luminousarrow )) {
															fields.Damage_Die = '2d8';
															};
													}
											]
									}
		},
		"subclassfeature14" : {
			name : "Full of Stars",
			source : [["TCoE", 3]],
			minlevel : 14,
			description : "\n   While in my starry form, I have resistance to bludgeoning, piercing, and slashing damage",
			dmgres : [
				["Bludgeoning", "Bludgeon. (in form)"],
				["Piercing", "Piercing (in form)"],
				["Slashing", "Slashing (in form)"]
			]}

		}
});
AddSubClass("druid", "circle of wildfire", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*wild.{0,1}fire).*$/i,
	subname : "Circle of Wildfire",
	source : ["TCoE", 1],
	features : {
		"subclassfeature2" : {
			name : "Circle Spells",
			source : ["TCoE", 1],
			minlevel : 2,
			description : desc([
				"My mystical bond with a wildfire spirit gives me with the ability to cast certain spells",
				"These are always prepared, but don't count against the number of spells I can prepare",
				"In addition, I learn the Fire Bolt cantrip"
			]),
			spellcastingExtra : ["burning hands", "cure wounds", "flaming sphere", "scorching ray", "plant growth","revivify", "aura of life", "fire shield", "flame strike", "mass cure wounds"]
		},
		"subclassfeature2.1" : {
			name : "Summon Wildfire",
			source : ["TCoE", 1],
			minlevel : 2,
			description : desc([
				"As an action, I can expend a use of wild shape to summon a wildfire spirit within 30 ft",
				"All within 10 ft of where it manifests must make a Dex save or take 2d6 fire damage",
				"It disappears after 1 hour, when it is reduced to 0 HP, or I summon another or die",
				"It obeys my commands, is friendly to my allies and I, and acts on my initiative, after me",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"If I am incapacitated, it can take any action, not just dodge",
				"Its HP maximum is equal to 5 + five times my druid level"
			]),
			action : [["action", ""], ["bonus action", "Command Wildfire"]],
			eval : function () {
				var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
				var prefix = false;
				if (AScompA) {
					for (var a = 1; a < AScompA.length; a++) {
						if (!What(AScompA[a] + 'Comp.Race')) {
							prefix = AScompA[a];
							break;
						}
					}
				}
				if (!prefix) prefix = DoTemplate('AScomp', 'Add');
				Value(prefix + 'Comp.Race', "Wildfire Spirit");
				Value(prefix + 'Comp.Type', "Wildfire");
				var changeMsg = "The Wildfire Spirit has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
				CurrentUpdates.types.push("notes");
				if (!CurrentUpdates.notesChanges) {
					CurrentUpdates.notesChanges = [changeMsg];
				} else {
					CurrentUpdates.notesChanges.push(changeMsg);
				}
			},
			removeeval : function () {
				var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
				if (!AScompA) return;
				for (var a = 1; a < AScompA.length; a++) {
					if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf("wildfire spirit") !== -1) {
						DoTemplate("AScomp", "Remove", AScompA[a], true);
					}
				}
			},
			changeeval : function (lvlA) {
				var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
				if (!AScompA) return;
				var newHP = Math.round(lvlA[1] * 5 + 5);
				var newProf = ProficiencyBonusList[classes.totallevel - 1];
				for (var a = 1; a < AScompA.length; a++) {
					if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf("wildfire spirit") !== -1) {
						Value(AScompA[a] + "Comp.Use.HP.Max", newHP );
						Value(AScompA[a] + "Comp.Use.Proficiency Bonus", newProf);
					}
				}
			}
		},
		"subclassfeature6" : {
			name : "Enhanced Bond",
			source : ["TCoE", 1],
			minlevel : 6,
			description : desc([
				"While my wildfire spirit is present, I can have my spells originate from it (no range 'self')",
				"Also, I can add 1d8 to a single roll of my spells that restore HP or deal fire damage"
			])
		},
		"subclassfeature10" : {
			name : "Cauterizing Flames",
			source : ["TCoE", 1],
			minlevel : 10,
			description : desc([
				"As a reaction when a creature dies in 30 ft of me/wildfire spirit, I can have flames erupt",
				"The creature has to be Small or larger; The flames last for 1 minute or until I extinguish",
				"As a reaction when I see someone enters its space, it heals or takes fire damage for 2d10 + Wis mod"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Blazing Revival",
			source : ["TCoE", 1],
			minlevel : 14,
			description : desc([
				"If I drop to 0 HP and don't die, and my wildfire spiris is within 120 ft, it can save me",
				"I can have it drop to 0hp, and I regain half my hit points and immediately rise to my feet"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});
CreatureList["wildfire spirit"] = { // Add the Cirle of Wildfire companion spirit
	name : "Wildfire Spirit",
	source : ["TCoE", 1],
	size : 4,
	type : "Elemental",
	subtype : "",
	alignment : "Chaotic",
	ac : 13,
	hp : 12,
	hd : [2, 6],
	speed : "20 ft, fly 30 ft (hover)",
	scores : [10, 14, 14, 13, 15, 11],
	saves : ["", 4, 4, "", 4, ""],
	skills : {
		"nature" : 4
	},
	damage_immunities : "fire",
	condition_immunities : "charmed, frightened, grappled, prone, restrained",
	senses : "Darkvision 60 ft",
	passivePerception : 12,
	languages : "understands the languages of its creator",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Flame Seed",
		ability : 2,
		damage : [1, 6, "fire"],
		range : "30 ft",
		modifiers : ["oWis-Dex", "Prof", false],
		description : "Ranged weapon attack"
	}, {
		name : "Fiery Teleportation",
		ability : 5,
		damage : [1, 6, "fire"],
		range : "10 ft",
		modifiers : ["dc-Wis+oWis", "Prof", false],
		description : "Dex save for all within 10 ft of teleportation origin, success - no damage; See traits"
	}],
	features : [{
		name : "Creator",
		description : "The spirit obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It only takes the Dodge action, unless its creator takes a bonus action to command to do otherwise, in which case it can only take the Flame Seed, Fiery Teleportation, Dash, Disengage, Help, or Hide action."
	}],
	actions : [{
		name : "Fiery Teleportation",
		description : "The spirit and each willing creature of its creator's choice within 5 ft of it teleport up to 15 ft to unoccupied spaces its creator can see. Each creature within 10 ft of the space that the spirit left must succeed on a Dexterity saving throw against its creator's spell save DC or take fire damage equal to 1d6 + its proficiency bonus."
	}]
};
AddSubClass("fighter", "psi warrior", {
regExpSearch: /^(?=.*(fighter))(?=.*(psi))(?=.*(warrior)).*$/i,
	subname : "Psi Warrior",
	source : ["TCoE", 42],
	features : {
		"subclassfeature3" : {
			name : "Psionic Power",
			source : ["TCoE", 43],
			minlevel : 3,
			description : desc([
				"I gain twice my proficiency bonus of Psionic Energy Dice (PsiD); 3rd lvl (d6), 5th lvl (d8),",
				"11th lvl (d10), and 17th lvl (d12). I regain all expended Psionic Energy dice at the end", 
				"of a long rest. I can use these PsiD to fuel my psionic abilities:",
				"\u25C6 Protective Field - Use reaction and expend one PsiD to reduce damage equal to",
				"PsiD roll + Int mod when I or another creature within 30 ft of me takes damage",
				"\u25C6 Psionic Strike - Once on each of my turns, after I hit a target within 30 ft and deal dmg",
				"with a weapon, expend one PsiD to deal PsiD + Int mod extra force damage.",
				"\u25C6 Telekinetic Movement - Once per short rest, I can use an action to move a Large or",
				"smaller loose object or one willing creature (other than myself) within 30 ft that I can",
				"see up to 30 ft in any direction to an unoccupied space. If Tiny object I can move it",
				" to or from my hand. I can also expend one PsiD to use this action again."
			]),
			additional : ["", "", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12"],
			action : ["reaction","Protective Field"],
			action : ["action","Telekinetic Movement"],
			usages : "2x Proficiency Bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')*2",
//			usages : [0, 0, 4, 4, 6, 6, 6, 6, 8, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12, 12],
			recovery : "long rest"
		},
		"subclassfeature3.1" : {
			name : "Regain Psionic Energy dice",
			Source : ["TCoE",43],
			minlevel : 3,
			description : desc([
				"Once per short rest, I can regain one expended PsiD as a bonus action"
			]),
			action : ["bonus acttion","regain 1 Psionic Energy die"],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature7.1" : {
			name : "Telekinetic Adept - Psi-Powered Leap",
			source : ["TCoE", 43],
			minlevel : 7,
			description : desc([
				"Once per short rest, I can use a bonus action to gain fly speed equal to twice my walking",
				"speed until end of current turn. I can also expend one PsiD to use this bonus action again."
			]),
			action : ["bonus action","Psi-Powered Leap"],
			recovery : "short rest"
		},
		"subclassfeature7.2" : {
			name : "Telekinetic Adept - Telekinetic Thrust",
			source : ["TCoE", 43],
			minlevel : 7,
			description : desc([
				"When I deal damage with Psionic Strike, target must pass a Strength save",
				"(DC 8 + Prof + INT mod) or I can chose to either knock it prone or move it 10 feet in",
				"any horizontal direction I chose."
			]),
		},
		"subclassfeature10" : {
			name : "Guarded Mind",
			source : ["TCoE", 43],
			minlevel : 10,
			description : desc([
				"I gain resistance to Psychic damage. If I am charmed or frightened at the start of my turn,",
				"I can expend one PsiD to end all effects causing charmed & frightened conditions on me."
			]),
			dmgres : ["Psychic"]
		},
		"subclassfeature15" : {
			name : "Bulwark of Force",
			source : ["TCoE", 44],
			minlevel : 15,
			description : desc([
				"Once per long rest, I can use a bonus action to give half cover to up to my INT mod",
				"(min 1) creatures within 30 ft (including myself) for 1 minute or I am incapacitated.",
				"I can also expend one PsiD to use this bonus action again."
			]),
			action : ["bonus action",""],
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Telekinetic Master",
			source : ["TCoE",44],
			minlevel : 18,
			description : desc([
				"Once per long rest, I can cast Telekinesis (needing no components), using Intelligence",
				"as my spellcasting ability. While concentrating on this spell, once on each of my turns",
				"(including the turn I cast it), I can make one weapon attack as a bonus action.",
				"I can also expend one PsiD to cast it again."
			]),
			spellcastingBonus : {
				name : "Telekinetic Master",
				spellcastingAbility : 4,
				spells : ["telekinesis"],
				selection : ["telekinesis"],
				//firstCol : "(R)"
			},
			spellChanges : {
				"telekinesis" : {
					// time : "11 min",
					changes : "I can cast this spell without using any components."
				}
			},
			action : ["bonus action", "Telekinetic Master weapon attack"],
			recovery : "long rest"
		}
	}
});
AddSubClass("fighter", "rune knight", {
	regExpSearch: /^(?=.*(fighter))(?=.*(rune))(?=.*(knight)).*$/i,
	subname: "Rune Knight",
	source: ["TCoE", 44],
  abilitySave : 3,
	features: {
		"subclassfeature3": {
			name: "Rune Carver",
			source: ["TCoE", 44],
			minlevel: 3,
			description : desc([
					"I have learned to inscribe magic runes on my gear.",
					"While wearing or carrying gear inscribed by these runes I gain a passive benefit. Moreover, I may invoke a rune to gain its active benefit, they recharge following a short rest."
			])
		},
    "subclassfeature3.runes" : {
      name : "Runes",
      source : ["TCoE",44],
      minlevel : 3,
      description : "\n   " + 'Use the "Choose Feature" button above to add a Rune to the third page',
      addtional : levels.map(function (n){
        return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : 5) + "known";
      }),
      extraname : "Rune",
			extrachoices : ["Cloud Rune", "Fire Rune", "Frost Rune", "Stone Rune", "Hill Rune (prereq: level 7 fighter)", "Storm Rune (prereq: level 7 fighter)"],
      extraTimes : levels.map(function (n) {
        return n < 3 ? 0 : n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : 5;
      }),
      "cloud rune" : {
        name : "Cloud Rune",
        source : ["TCoE", 44],
        description : desc([
					"While I wear an object inscribed with this, I gain a deceptiveness reminiscent of cloud giants",
					"I always gain advantage on Dexterity (Sleight of Hand) and Charisma (Deception) checks",
					"As a reaction when I or a target I see get hit by an attack within 30 ft, I can invoke this",
					"This causes the attack to target another within 30 ft with the same roll (ignore range)"
				]),
        action : ["reaction"," (invoke)"],
        // limfeaname : ["Cloud Rune"],
        // additional : "invoke",
        usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
        recovery : "short rest",
        advantages : [["Sleight of Hand", true], ["Deception", true]]
      },
      "fire rune" : {
        name : "Fire Rune",
        source : ["TCoE", 44],
        description : desc([
          "While I wear an object inscribed with this, I gain craftmanship reminiscent of fire giants",
          "I always double my proficiency bonus when making an ability check with a tool",
          "When I hit a creature with a weapon attack, I can invoke it to summon fiery shackles",
          "The target takes 2d6 extra fire damage and must make a Str save or be restrained for 1 min",
          "While restrained, the creature takes 2d6 fire damage at the start of each of its turns",
          "They can repeat the save at the end of each of their turns, banishing the shackles on a success"
        ]),
        // limfeaname : ["Fire Rune"],
        // additional : "invoke",
        usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
        recovery : "short rest",
        skillstxt : "expertise with all tools I am proficient with",
				eval : function () { Checkbox('Too Exp', true); },
				removeeval : function () { Checkbox('Too Exp', false); }
      },
      "frost rune" : {
        name : "Frost Rune",
        source : ["TCoE", 45],
        description : desc([
					"While I wear an object inscribed with this, I gain a stoic calm reminiscent of frost giants",
					"I always gain advantage on Wisdom (Animal Handling) and Charisma (Intimidation) checks",
					"As a bonus action, I can invoke this rune to gain +2 to Str & Con checks and saves for 10 mins"
				]),
        action : ["bonus action"," (invoke)"],
        // limfeaname : ["Frost Rune"],
        // additional : "invoke",
        usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
        recovery : "short rest",
        advantages : [["Animal Handling", true], ["Intimidation", true]]
      },
      "stone rune" : {
        name : "Stone Rune",
        source : ["TCoE", 45],
        description : desc([
					"While I wear an object inscribed with this, I gain insightfulness reminiscent of stone giants",
					"I always gain adv. on Wisdom (Insight) checks and I gain 120ft darkvision",
					"As a reaction when a creature I can see ends it turn within 30 ft, I can invoke this rune",
					"This causes the creature to make a Wisdom save or be charmed by me for 1 minute",
					"While charmed, it descends into a dreamy stupor, becoming incapacitated and has speed 0",
					"The creature can repeat the save at the end of each of its turns, breaking free on a success"
				]),
        action : ["reaction"," (invoke)"],
        // limfeaname : ["Stone Rune"],
        // additional : "invoke",
        usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
        recovery : "short rest",
        advantages : [["Insight", true]],
        vision : [["Darkvision", "120"]]
      },
      "hill rune (prereq: level 7 fighter)" : {
        name : "Hill Rune",
        source : ["TCoE", 45],
        description : desc([
					"While I wear an object inscribed with this rune, I gain a resilience reminiscent of hill giants",
					"I always gain advantage on saves against being poisoned and resistance to poison damage",
					"As a bonus action, I can invoke it to gain resistance to bludg/slash/pierc damage for 1 min"
				]),
        action : ["bonus action"," (invoke)"],
        // limfeaname : ["Hill Rune"],
        // additional : "invoke",
        usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
        recovery : "short rest",
        dmgres : ["Poison"],
				prereqeval : function(v) { return classes.known.fighter.level >= 7; },
				savetxt : { adv_vs : ["poison"] }
      },
      "storm rune (prereq: level 7 fighter)" : {
        name : "Storm Rune",
        source : ["TCoE", 45],
        description : desc([
					"While I wear an object inscribed with this rune, I can glimpse the future like storm giants",
					"I always gain adv. on Int (Arcana) checks and I can't be surprised while not incapacitated",
					"As a bonus action, I can invoke it to enter a prophetic state for 1 min or till incapacitated",
					"While in this state, I can use a reaction to cause a roll to gain advantage or disadvantage",
					"I can only do this for attacks, saves, and checks of other creatures I can see within 60 ft"
				]),
        action : ["bonus action"," (invoke)"],
        // limfeaname : ["Storm Rune"],
        // additional : "invoke",
        usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
        recovery : "short rest",
        advantages : [["Arcana", true]],
				prereqeval : function(v) { return classes.known.fighter.level >= 7; },
        savetxt : {immune : ["surprised"]}
      }
    },

		"subclassfeature3.1": {
			name: "Giant's Might",
			source : ["TCoE",45],
			minlevel: 3,
      description : desc([
				"As a bonus action, I can imbue myself with giant magic for 1 minute and gain benefits:",
				" \u2022 Space permitted, I grow to Large size along with everything I'm wearing",
				" \u2022 Advantage on Strength checks and saves",
        " \u2022 My unarmed strikes and weapon attacks deal extra damage"
			]),
      additional : levels.map(function (n){
				return n < 3 ? "" : "+1d" + (n < 10 ? 6 : n < 18 ? 8 : 10) + " damage"
			}),
			action: ["bonus action",""],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest",
      savetxt : { text : ["Adv. on Str saves in giant might"] },
      calcChanges : {
										atkAdd : [
													function (fields, v) {
                            v.extradie = function (n) { return n < 10 ? 6 : n < 18 ? 8 : 10}(classes.known.fighter.level);
															if (v.isMeleeWeapon || v.baseWeaponName == "unarmed strike" ) {
															fields.Description += (fields.Description ? '; ' : '') + '1d' + v.extradie + " extra damage in giant's might";
															};
													}
											]
									}
		},
		"subclassfeature7": {
			name: "Runic Shield",
			source : ["TCoE",45],
			minlevel: 7,
			description: desc([
				"When a creature I see within 60-ft is hit by an attack roll, my runes protect them.",
        "I can use my reaction to force the attacker to reroll the d20 and use the new roll."
      ]),
			action: ["reaction",""],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature10": {
			name: "Great Stature",
			source : ["TCoE",46],
			minlevel: 10,
			description: desc([
				"When I gain this feature, roll 3d4, accordingly I grow that number of inches.",
				"Moreover, increase the damage I deal with my Giant's Might feature to 1d8."
			])
		},
		"subclassfeature15": {
			name: "Master of Runes",
			source : ["TCoE",46],
			minlevel: 15,
			description: desc([
				"I can invoke my Rune Carver runes twice, instead of just once per short rest."
			])
		},
		"subclassfeature18": {
			name: "Runic Juggernaut",
			source : ["TCoE",46],
			minlevel: 18,
			description: desc([
				"Increase the damage dealt with my Giant's Might feature to 1d10.",
				"In Giant's Might, my size increases to Huge and my reach increases by 5ft."
			])
		}
	}
}); // rune knight
AddSubClass("monk", "way of mercy", {
	regExpSearch : /^(?=.*mercy)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of Mercy",
	source : [["TCoE", 49]],
	features : {
		"subclassfeature3" : {
			name : "Implements of Mercy",
			source : [["TCoE", 49]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with the herbalism kit and the Insight and Medicine skills",
				'I also gain a special mask, which I often wear when using my subclass features'
			]),
			toolProfs : ["Herbalism kit"],
			skills : ["Insight", "Medicine"],
			extraname : "Way of Mercy 3",
			"hand of healing" : {
				name : "Hand of Healing",
				source : [["TCoE", 49]],
				description : function () {
					var a = [
						"As an action, I can spend 1 ki point to touch a creature and restore a number of its HP",
						"When I do Flurry of Blows, I can do this instead of one unarmed strike (no extra ki cost)"
					];
					var b = desc(a);
					var c = desc([a[0], "It also recovers from one disease or the blinded, deafened, paralyzed, poisoned or stunned", a[1]]);
					var d = desc([a[0],"It also recovers from one disease or the blinded, deafened, paralyzed, poisoned or stunned", "When I do flurry of Blows, I can do this instead of each strike (no extra ki cost)"]);
					return levels.map(function (n) {
						return n < 6 ? b : n < 11 ? c : d;
					});
				}(),
				action : [["action", ""]],
				additional : levels.map(function (n) {
					return n < 3 ? "" : "1 ki point; heal 1d" + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10) + " + Wisdom modifier";
				})
			},
			"hand of harm" : {
				name : "Hand of Harm",
				source : [["TCoE", 50]],
				description : function () {
					var a = [
						"When I hit a creature with an unarmed strike, I can spend 1 ki point to deal extra damage",
						"I can apply this extra damage only once per turn"
					];
					var b = desc(a);
					var c = desc([a[0], "I can also subject the target to the poisoned condition until the end of my next turn", a[1]]);
					var d = desc([a[0], "I can also subject the target to the poisoned condition until the end of my next turn", "When I do Flurry of Blows, I can do this with one unarmed strike (no extra ki cost)",a[1]]);
					return levels.map(function (n) {
						return n < 6 ? b : n < 11 ? c : d;
					});
				}(),

				additional : levels.map(function (n) {
					return n < 3 ? "" : "1 ki point; 1d" + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10) + " necrotic damage";
				})
			},
		autoSelectExtrachoices : [{
			extrachoice : "hand of healing"
		}, {
			extrachoice : "hand of harm"
		}]
	},
	"subclassfeature6" : {
		name : "Physician's touch",
		source : [["TCoE", 50]],
		minlevel : 6,
		description :  desc([
			"With hand of healing I can also end: 1 disease, blind., deaf., paralyz., poisoned or stunned",
			"With hand of harm I can also subject the target to poisoned until the end of my next turn"

		]),
		action : [["bonus action", ""]]
	},
	"subclassfeature11" : {
		name : "Flurry of Healing and Harm",
		source : [["TCoE", 50]],
		minlevel : 11,
		description : desc([
			"When I use flurry of blows, each unarmed strike can be a hand of healing at no extra ki cost",
			"Also, I can use hand of harm without ki with flurry of blows (still only once per turn)"
		]),
		extraname : "Way of Mercy 17",
		"hand of ultimate mercy" : {
			name : "Hand of Ultimate Mercy",
			source : [["TCoE", 50]],
			description : desc([
				"As an action, I can use 5 ki to touch a creature that died in the last 24 hours",
				"The creature returns to life with hp equal to 4d10+ Wis modifier",
				"The creature is cured of blinded, deafened, paralyzed, poisoned or stunned"
			]),
			action : [["action", " (5 ki)"]],
			additional : "5 ki",
			usages : 1,
			recovery : "long rest"
		},
		autoSelectExtrachoices : [{
			extrachoice : "hand of ultimate mercy",
			minlevel : 17
		}]
	}
}
});
AddSubClass("monk", "way of the astral self", {
	regExpSearch : /^(?=.*astral)(?=.*(self|projection|travel))((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of the Astral Self",
	source : ["TCoE", 1],
	features : {
		"subclassfeature3" : {
			name : "Arms of the Astral Self",
			source : ["TCoE", 1],
			minlevel : 3,
			description : "\n   My ki mastery allows me to summon portions of my astral self; See 3rd page notes",
			action : [["bonus action", "Summon Astral Arms"]],
			weaponsAdd : ["Astral Arms"],
			weaponOptions : {
				regExpSearch : /^(?=.*\bastral\b)(?=.*\barms?\b).*$/i,
				name : "Astral Arms",
				source : ["TCoE", 1],
				ability : 5,
				type : "Natural",
				damage : [1, "", typePF ? "Force" : "force"],
				range : "Melee",
				astralarms : true,
				description : "10 ft reach",
				monkweapon : true,
				abilitytodamage : true
			},
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (( v.theWea.astralarms ))  {
						v.monkdie = function (n) { return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10; }(classes.known.monk.level);

						fields.Description += (fields.Description ? '; ' : '') + 'When summoned, Dex save or 2d' + v.monkdie + ' Force damage to all in 10ft of my choice';
					};
					}
				]},
			extraname : "Way of the Astral Self 3",
			"astral arms" : {
				name : "Astral Arms",
				source : ["TCoE", 1],
				description : desc([
					"As a bonus action, I can summon my astral arms for 10 minutes; I choose their appearance",
					"While they are summoned, I can use Wisdom instead of Strength for Strength checks/saves",
					"Can use the arms for unarmed strike with +5 ft reach and can use Wis instead of Str/Dex",
					"When I summon the arms, all creatures of my choice within 10ft take 2 M.A force damage",
					"Attacks made with the arms deal force damage",
				]),
				additional : levels.map(function (n) {
					return n < 3 ? "" : "1 ki point"
				})
			},
			autoSelectExtrachoices : [{ extrachoice : "astral arms" }]
		},
		"subclassfeature6" : {
			name : "Visage of the Astral Self",
			source : ["TCoE", 1],
			minlevel : 6,
			description : "\n   I can now also summon the visage of my astral self; See third page notes section",
			action : [["bonus action", "Summon Astral Arms and/or Visage", "Summon Astral Arms"]],
			extraname : "Way of the Astral Self 6",
			"astral visage" : {
				name : "Astral Visage",
				source : ["TCoE", 1],
				description : " [1 ki point]" + desc([
					"As a bonus action (or when summoning my astral arms), I can summon my astral visage",
					"It covers my face like a helmet or mask and choose its appearance; It lasts for 10 minutes",
					"It grants adv. on Insight \u0026 Intimidation, and the ability to see 120 ft in (magical) darkness",
					"When I speak, I can choose to be heard only by one creature in 60ft, or by all in 300ft"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "astral visage" }]
		},
		"subclassfeature11" : {
			name : "Body of the Astral Self",
			source : ["TCoE", 1],
			minlevel : 11,
			description : "\n   I can cause my astral body to join my arms and visage; see third page notes",
			action : [["bonus action", "Summon Astral Arms, Visage, or Complete", "Summon Astral Arms and/or Visage"]],
			extraname : "Way of the Astral Self 11",
			"deflect energy" : {
				name : "Deflect Energy",
				source : ["TCoE", 1],
				description : " [if astral body present]" + desc([
					"As a reaction when I take acid, cold, fire, force, thunder or lightning damage, I can deflect it",
					"By doing so, the damage is reduced by 1d10 + my Wisdom modifier"
				])
			},
			"empowered arms" : {
				name : "Empowered Arms",
				source : ["TCoE", 1],
				description : " [if astral body present]" + desc([
					"Once per turn when I hit an astral arms attack, I can add a martial arts die to its damage"
				])
			},
			autoSelectExtrachoices : [
				{ extrachoice : "deflect energy" },
				{ extrachoice : "empowered arms" },
			]
		},
		"subclassfeature17" : {
			name : "Awakened Astral Self",
			source : ["TCoE", 1],
			minlevel : 17,
			description : desc([
				"I can now summon my complete astral self; See third page notes section"
			]),
			action : [["bonus action","Summon Awakened Astral Self"]],
			extraname : "Way of the Astral Self 17",
			"awakened astral self" : {
				name : "Awakened Astral Self",
				source : ["TCoE", 1],
				description : " [5 ki points]" + desc([
					"As a bonus action, I can summon the arms, visage, and body of my astral self for 10 min",
					"In this awakened state, I have +2 bonus to AC while not incapacitated, and",
					"When I take the Attack action I can choose to make 3 attacks with my astral arms instead",
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "awakened astral self" }]
		}
	}
});
AddSubClass("paladin", "oath of glory", {
    regExpSearch : /^(((?=.*(glory|destined))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
    subname : "Oath of Glory",
    source : ["TCoE", 53],
    features : {
        "subclassfeature3" : {
            name : "Channel Divinity: Peerless Athlete",
            source : ["TCoE", 54],
            minlevel : 3,
            description : desc([
                "As a bonus action, I can gain the following benefits for 10 minutes:",
                "\u2022 Advantage on my Dex (Acrobatics) and Str (Athletics) checks",
                "\u2022 I can carry/push/drag/lift twice as much as normal and I add 10ft to long/high jumps"
            ]),
            action : ["bonus action", ""],
            spellcastingExtra : ["guiding bolt", "heroism", "enhance ability", "magic weapon", "haste", "protection from energy", "compulsion", "freedom of movement", "commune", "flame strike"]
        },
        "subclassfeature3.1" : {
            name : "Channel Divinity: Inspiring Smite",
            source : ["TCoE", 54],
            minlevel : 3,
            description : desc([
                "I can use a bonus action after dealing damage with Divine Strike to grant temporary HP",
                "I divide 2d8 + paladin level temporary HP across creatures within 30ft, including me"
            ]),
            additional : levels.map(function (n) {
                if (n < 3) return "";
                return "2d8 + " + n + " temporary HP";
            }),
            action : ["bonus action", ""]
        },
        "subclassfeature7" : {
            name : "Aura of Alacrity",
            source : ["TCoE", 54],
            minlevel : 7,
            description : desc([
                "If I'm not incapacitated, allies starting within range get extra movement for their turn"
            ]),
            changeeval : function (v) {
                var alacritySpd = '+' + (v[1] < 7 ? 0 : 10);
                SetProf('speed', alacritySpd !== '+0', {allModes : alacritySpd}, "Oath of Glory: Aura of Alacrity");
            },
            additional : levels.map(function (n) {
                if (n < 7) return "";
                return (n < 18 ? 5 : 10) + "-foot aura; +10ft movement";
            })
        },
        "subclassfeature15" : {
            name : "Glorious Defense",
            source : ["TCoE", 54],
            minlevel : 15,
            description : desc([
                "When I or a creature I can see within 10ft is hit, I can use a reaction to give it bonus AC",
                "The bonus AC is equal to my Charisma modifier (min 1)",
                "If the attack misses, I can also attack the attacker as long as it's within weapon range"
            ]),
            usages : "Charisma modifier per ",
            usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            action : ["reaction", ""],
            recovery : "long rest"
        },
        "subclassfeature20" : {
            name : "Living Legend",
            source : ["TCoE", 54],
            minlevel : 20,
            description : desc([
                "As a bonus action, I can gain the following benefits for 1 minute:",
                "\u2022 I have advantage on Charisma checks",
                "\u2022 Once per turn, I can cause a missed weapon attack I make to hit instead",
                "\u2022 If I fail a saving throw, I can use my reaction to reroll it; I must use the new roll"
            ]),
            recovery : "long rest",
            usages : 1,
            action : ["bonus action", ""],
            altresource : "SS 5"
        }
    }
});
AddSubClass("paladin", "oath of the watchers", {
	regExpSearch : /^(?=.*watchers)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Watchers",
	source : [["TCoE", 3]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Watcher's Will",
			source : [["TCoE", 4]],
			minlevel : 3,
			description : "\n   As an action, Cha mod of creatures I see in 30 ft plus me adv. on Int/Wis/Cha saves for 1 min",
			action : [["action", ""]],
			spellcastingExtra : [ "alarm", "detect magic", "see invisibility", "moonbeam", "counterspell", "nondetection", "aura of purity", "banishment", "hold monster", "scrying"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Abjure the Extraplanar",
			source : [["TCoE", 4]],
			minlevel : 3,
			description : desc([
				"As an action, celestials, elementals, fey, fiends, and aberrations within 30 ft make a Wis save",
				"Succeeds if it can't hear me; On fail, turned for 1 minute or until it takes any damage",
				"Turned: move away, never within 30 ft of me, no reactions or actions other than Dash",
				"Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds"
			]),
			action : [["action", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of the Sentinel",
			source : [["TCoE", 4]],
			minlevel : 7,
			description : "\n   If I'm not incapacitated, chosen creatures in range and I add my proficiency to Initiative",
			additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			addMod : [{ type : "skill", field : "Init", mod : "Prof", text : "I can add my Proficiency Bonus to initiative rolls." }]
		},
		"subclassfeature15" : {
			name : "Vigilant Rebuke",
			source : [["TCoE", 4]],
			minlevel : 15,
			description : desc([
				"As a reaction when I or another I can see makes an int/wis/cha save, I can damage the source",
				"Has to succeed save within 30 ft of me vs. unwanted spell; 2d8 + Cha mod force damage"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature20" : {
			name : "Mortal Bulwark",
			source : [["TCoE", 4]],
			minlevel : 20,
			description : desc([
				"As a bonus action, I can gain the following benefits for 1 minute: (recharge lvl 5 spell slot)",
				" \u2022 Truesight out to 120 ft and adv. on attacks vs. celestials, elementals, fey, fiends, aberrations",
				" \u2022 I can force creatures I hit and damage with an attack to make a Charisma save",
				"   If failed, the target is banished to its native plane of existence if it's not currently there",
				"   If successful, the creature can't be banished by this feature for 24 hours"
			]),
			recovery : "long rest",
			usages : 1,
			action : [["bonus action", ""]],
			altresource : "SS 5+"
		}
	}
});
AddSubClass("ranger", "fey wanderer", { 
		regExpSearch : /^(?=.*fey)(?=.*wanderer).*$/i,
		subname : "Fey Wanderer",
		source : ["TCoE", 58],
		fullname : "Fey Wanderer",
		features : {
			"subclassfeature3.1" : {
				name : "Dreadful Strikes",
				source : ["TCoE", 58],
				minlevel : 3,
				description : "\n   " + "When I hit a creature with a weapon, once per turn I can deal extra psychic damage to" + "\n   " + "the target.",
				additional : ["", "", "1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6"],
			},
			"subclassfeature3.2" : {
				name : "Fey Wanderer Magic",
				source : ["TCoE", 58],
				minlevel : 3,
				description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "These count as ranger spells," + "\n   " + "but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power, use the \"Choose Feature\" button" + "\n   " + "above for this.",
				spellcastingExtra : ["charm person", "misty step", "dispel magic", "dimension door", "mislead"],
				spellcastingExtraApplyNonconform : true,
				choices : ["Illusory Butterflies", "Seasonal Flowers", "Herb or Spice Scent", "Dancing Shadow", "Horns or Antlers", "Seasonal Hair and Skin"],
				"illusory butterflies" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: illusory butterflies flutter" + "\n   " + "around me while I take a short or long rest..",
				},
				"seasonal flowers" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: fresh, seasonal flowers" + "\n   " + "sprout from my hair each dawn..",
				},
				"herb or spice scent" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: I faintly smell of cinnamon," + "\n   " + "lavender, nutmeg, or another comforting herb or spice.",
				},
				"dancing shadow" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: my shadow dances while no one" + "\n   " + "is looking directly at it.",
				},
				"horns or antlers" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: horns or antlers sprout" + "\n   " + "from my head.",
				},
				"seasonal hair and skin" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: my skin and hair change" + "\n   " + "color to match the season at each dawn.",
				},
			},
			"subclassfeature3.3" : {
				name : "Otherworldly Glamour",
				source : ["TCoE", 59],
				minlevel : 3,
				description : "\n   " + "My fey qualities let me add my wisdom modifier (min. +1) to any charisma check." + "\n   " + "I also gain proficiency in Deception, Performance, or Persuasion.",
				skillstxt : "Choose Deception, Performance, or Persuasion.",
				addMod : [
                    			{type : "skill", field : ["Persuasion"], mod : "max(Wis|1)", text : "I can add my Wisdom modifier to any Charisma checks"},
                   			{type : "skill", field : ["Deception"], mod : "max(Wis|1)", text : "I can add my Wisdom modifier to any Charisma checks"},
                    			{type : "skill", field : ["Performance"], mod : "max(Wis|1)", text : "I can add my Wisdom modifier to any Charisma checks"},
                    			{type : "skill", field : ["Intimidation"], mod : "max(Wis|1)", text : "I can add my Wisdom modifier to any Charisma checks"},            
                			],
				},
			"subclassfeature7" : {
				name : "Beguiling Twist",
				source : ["TCoE", 59],
				minlevel : 7,
				description : ["\n   " + "My connection to the fey guards my mind, I have advantage against being charmed or" + "\n   " + "frightened. When I or a creature I can see within 120 feet succeeds on a save" + "\n   " + "against being charmed or frightened, I can use my reaction to force a different creature I" + "\n   " + "can see within 120 feet to make a Wisdom save against my spell DC. Upon failure I can" + "\n   " + "charm or frightened them for 1 minute. The creature can repeat the save each turn to end the effect."],
				savetxt : { adv_vs : ["charmed", "frightened"] },
				action : [["reaction", ""]],
				},
			"subclassfeature11" : {
				minlevel : 11,
				name : "Fey Reinforcements",
				source : ["TCoE", 59],
				description : "\n   " + "I learn and can cast \"Summon Fey\" without a material component, and I can modify it" + "\n   " + "to not require concentration by reducing the duration to 1 minute." + "\n   " + "I can also cast it without using a spell slot once per long rest.",
				extraname : "Fey Wanderer 11",
				"fey reinforcements" : {
					name : "Fey Reinforcements",
					source : [["TCoE", 59]],
					description : desc([
						"I can cast \"Summon Fey\" without using a spell slot once per long rest."]),
					action : [["action", "bonus action"]],
					usages : 1,
					recovery : "long rest",
					altResource : "SS 3+"
				},
				autoSelectExtrachoices : [{
					extrachoice : "fey reinforcements",
					minlevel : 11
				}]
			},
			"subclassfeature15" : {
				name : "Misty Wanderer",
				source : ["TCoE", 59],
				minlevel : 15,
				description : "\n   " + "I can cast \"Misty Step\" without using a spell slot a number of times equal to my Wisdom modifier" + "\n   " + "per long rest." + "\n   " +  "When casting \"Misty Step\" I can bring take willing creature I can see within 5 feet of me" + "\n   " + "to anywhere within 5 feet of my destination.",
				extraname : "Fey Wanderer 15",
				"misty wanderer" : {
					name : "Misty Wanderer",
					source : [["TCoE", 59]],
					description : desc([ 
						"I can cast \"Misty Step\" without using a spell slot a number of times equal to my Wisdom modifier per long rest."]),
					action : [["bonus action", ""]],
					usages : "Wisdom modifier per ",
					usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
					recovery : "long rest",
					altResource : "SS 2+"
				},
				autoSelectExtrachoices : [{
					extrachoice : "misty wanderer",
					minlevel : 15
				}]
			},
		},
	}
);
AddSubClass("ranger", "swarmkeeper", {
	regExpSearch : /swarmkeeper/i,
	subname : "Swarmkeeper",
	source : ["TCoE", 59],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	fullname : "Swarmkeeper",
	features : {
		"subclassfeature3" : {
			name : "Swarmkeeper Magic",
			source : ["TCoE", 60],
			minlevel : 3,
			description : desc([
				"I learn Mage Hand; When I cast it, the hand takes the form of swarming nature spirits",
				"I get bonus spells known, which do not count against the number of spells I can know"
			]),
			spellcastingBonus : {
				name : "Swarmkeeper Magic",
				spells : ["mage hand"],
				selection : ["mage hand"],
				firstCol : "atwill"
			},
			spellcastingExtra : ["faerie fire", "web", "gaseous form", "arcane eye", "insect plague"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.1" : {
			name : "Gathered Swarm",
			source : ["TCoE", 60],
			minlevel : 3,
			description : desc([
				"I constantly have a swarm of fey spirits crawling in my space, see 3rd page for effects"
			]),
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+1" + (n < 11 ? "d6" : "d8") + " piercing dmg";
			}),
			extraname : "Swarmkeeper 3",
			"gathered swarm" : {
				name : "Gathered Swarm",
				source : ["TCoE", 60],
				minlevel : 3,
				description : desc([
					"Once per turn when I hit a creature with an attack, choose one effect:",
					"The swarm causes the target to takes extra piercing damage, starting at 1d6",
					"The target makes a Str. save or is moved by the swarm 15ft horizontally in any direction",
					"The swarm moves me 5ft horizontally in any direction"
				])
			},
			autoSelectExtrachoices : [{
				extrachoice : "gathered swarm",
				minlevel : 14
			}],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (( classes.known.ranger && classes.known.ranger.level > 2 && !v.isDC ))  {
							v.extradie = function (n) { return n < 11 ? "1d6" : "1d8"; }(classes.known.ranger.level);
						fields.Description += (fields.Description ? '; ' : '') + 'Once per turn, +' + v.extradie + ' piercing damage ';
					};
					}
				]}
		},
		"subclassfeature7" : {
			name : "Writhing Tide",
			source : ["TCoE", 60],
			minlevel : 7,
			description : desc([
				"I can condense my swarm into a mass that lifts me up.",
				"As a bonus action, I gain a 10 ft fly speed and I can hover",
			]),
			action : [["bonus action", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = Number(What('Proficiency Bonus'));",
			recovery : "long rest",
		},
		"subclassfeature11" : {
			name : "Mighty Swarm",
			source : ["TCoE", 60],
			minlevel : 11,
			description : desc([
				"My Gathered Swarm grows mightier in the following ways:",
				"The damage from gathered swarm increases to 1d8",
				"I can also cause a creature that fails its save against being moved to fall prone",
				"When I am moved by the swarm, I gain half cover until the start of my next turn"
			])
		},
		"subclassfeature15" : {
			name : "Swarming Dispersal",
			source : ["TCoE", 60],
			minlevel : 15,
			description : desc([
				"I can discorporate into my swarm, avoiding danger:",
				"As a reaction to taking damage, I can vanish into the swarm and teleport 30ft",
				"to an unoccupied space I can see, and I gain resistance to the triggering damage"
			]),
			action : [["reaction", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = Number(What('Proficiency Bonus'));",
			recovery : "long rest",
		}
	}
});
AddSubClass("rogue", "phantom", {
	regExpSearch : /^(?=.*rogue)(?=.*phantom).*$/i,
	subname : "Phantom",
	Source : ["TCoE",62],
	features : {
		"subclassfeature3" : {
			name : "Whispers of the Dead",
			source : ["TCoE", 62],
			minlevel : 3,
			description : desc([
			"Whenever I finish a short or long rest, I gain one skill or tool proficiency of my choice.",
			"This proficiency lasts until I use this feature again"
			])
		},
		"subclassfeature3.1" : {
			name : "Wails from the Grave",
			source : ["TCoE",62],
			minlevel : 3,
			description : desc([
			"Immediately after I deal Sneak Attack damage on my turn, I can target a second",
			"creature that I can see within 30 ft of the first creature.  I roll half the number of",
			"Sneak Attack dice for my level \(round up\). and the second creature takes psychic",
			"damage equal to the roll's total.",
			"I can use this feature a number of times equal to my proficiency bonus and regain",
			"all expended uses when I finish a long rest."
			]),
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature9" : {
			name : "Tokens of the Departed",
			source : ["TCoE", 63],
			minlevel : 9,
			description : desc([
			"As a reaction when a creature I can see dies within 30 ft of me, I get a Tiny trinket,",
			"a soul trinket. DM chooses the trinket's form or have me roll on the Trinkets table",
			"in the Player's Handbook.",
			"I can have a max number of soul trinkets equal to my proficiency bonus, and I cannot",
			"create a new one while at my max.",			
			"While the soul trinket is on my person, I have advantage on death saving throws", 
			"and Constitution saving throws.",
			"When I deal Sneak Attack damage on my turn, I can destroy a soul trinket and",
			"immediately use Wail of the Grave feature without expending a use of that feature.",
			"As an action, I can destroy one of my soul trinkets, no matter where it's located.",
			"When I do, I can ask the spirit associated with the trinket one question.  The spirit",
			"appears and answers in a language it knew in life.  It doesn't have to be truthful and",
			"it answers as concisely as possible before departing. It knows only what it knew in life."
			]),
			action : [["reaction","create a soul trinket"],["action","destroy a soul trinket"]]
		},
		"subclassfeature13" : {
			name : "Ghost Walk",
			source : "TCoE,63",
			minlevel : 13,
			description : desc([
			"As a bonus action, I assume a spectral form.  While in this form, I have a fly speed",
			"of 10 ft, can hover, and attack rolls have disadvantage against me. I can move through",
			"creatures and objects as if difficult terrain; I take 1d10 force damage if I end my",
			"turn inside a creature or an object.",
			"I stay in this form for 10 minutes or until I end it as a bonus action. To use this",
			"feature again, I must finish a long rest or destroy a soul trinket as part of the",
			"bonus action to activate Ghost Walk."
			]),
			usages : "destroy soul trinket or 1x per ",
			recovery : "long rest",
			action : ["bonus action","begin/end Ghost Walk"]
		},
		"subclassfeature17" : {
			name : "Death's Friend",
			source : ["TCoE",63],
			minlevel : 17,
			description : desc([
			"\u25C6 When I use my Wails from the Grave feature, I can now deal the psychic damage",
			"to both the first and second creature.",
			"\u25C6 I get a soul trinket at the end of a long rest as spirits of the dead are",
			"drawn to me."
			])
		}
	}
});
AddSubClass( // this is the function you will be calling to add the variant

	"rogue", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"soulknife", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /^(?=.*soul)(?=.*knife).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Soulknife", //required; the name of the subclass

		source : ["TCoE", 63], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 3415]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Soulknife Rogue", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		abilitySave : 2, //overwrites the abilitySave that was defined in the ClassList
		abilitySaveAlt : 4,//overwrites the abilitySaveAlt that was defined in the ClassList
		spellcastingFactor : 6, //overwrites the spellcastingFactor that was defined in the ClassList

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

			"subclassfeature3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Psionic Power",
				source : ["TCoE", 64],
				minlevel : 3,
                description : desc([ 
                                        "I have twice my proficiency bonus of Psionic Energy dice that start as d6's.They fuel",
                                        "various psionic powers, and I can't use a power that needs a psionic die if I don't",
                                        "have any left. The die goes up as you gain levels: at 5th (d8), 341th (d10), 347th (d12).",
                                        "Psi-Bolstered Knack. If I fail an ability check using a skill or tool that I'm",
                                        "proficient with, roll one Psionic Energy die and add the number to the check.",
                                        "You expend the die only if the roll succeeds.",
                                        "Psychic Whispers. Establish a telepathic link between yourself and others. As an action",
                                        "choose one or more creatures you can see, up to a number of creatures equal to your",
                                        "proficiency bonus. Roll one Psionic energy die for a number of hours equal to the",
                                        "number rolled, you can telepathically speak to each other. Sending or recieving a msg",
                                        "(no action needed) requires you to be within 1 mile of each other. The connection can",
                                        "be ended at any time by any member. No action req.",
                                        "The first time you use this power after each long rest, you don't expend the Energy die",
                                        "All other times you use the power, you expend the die."
                                        ]),
				additional : ["", "", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d9", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12"],
				action : ["action", "Psychic Whispers"],
			},
			"subclassfeature3.1" : {
				name : "Psychic Blades",
				source : ["TCoE", 64],
				minlevel : 3,
                description :  desc([
                                        "You manifest a Psychic Blade in your free hand and make an attack with that blade.",
                                        "It is a simple melee weapon with finesse and thrown properties; 60ft thrown range,", 
                                        "and no long range. On a hit it deals 1d6 + STR/DEX. The blade vanishes after it hits",
                                        "or misses its target when thrown and leaves no mark on its target if it deals damage."
                                        
                                    ]),
            weaponprofs : [true, false, ["psychic blade", "psychic blade bonus"]],
            weaponsAdd : ["Psychic Blade", "Psychic Blade Bonus"],
			weaponOptions : [{
				regExpSearch : /^(?=.*psychic)(?=.*blade).*$/i,
				name : "Psychic Blade",
				ability : 2,
				type : "Simple",
				damage : [1, 6, "psychic"],
				range : "Melee, 60/0 ft",
				description : "Finesse, light, thrown",
				abilitytodamage : true,
				isSoulknifePsychicBlade : true
            }],
            },
            "subclassfeature3.2" : {
				name : "Psychic Blades Bonus",
				source : ["TCoE", 64],
                minlevel : 3,
                description : desc([
                    "After you attack with the blade, you can make a melee or ranged attack with a second",
                    "psychic blade as a bonus action on the same turn, provided your other hand is free to",
                    "create it. The damage die of this bonus attack is 1d4, instead of 1d6."
				]),
				action : ["bonus action", "Psychic Blades Offhand"],
			    weaponOptions : [{
				regExpSearch : /^(?=.*psychic)(?=.*blade)(?=.*bonus).*$/i,
				name : "Psychic Blade Bonus",
				ability : 2,
				type : "Simple",
				damage : [1, 4, "psychic"],
				range : "Melee, 60/0 ft",
				description : "Finesse, light, thrown",
				abilitytodamage : true,
				isSoulknifePsychicBlade : true
            }],
			},
			"subclassfeature9" : {
				name : "Soul Blades",
				source : ["TCoE", 65],
				minlevel : 9,
                description : desc([
                              "You have the following powers that use your Psionic Energy dice.", 
                              "Homing Strikes. If you maiss an attack with Psychic Blades, you can roll one Psionic",
                              "Energy and add the number to the attack roll. You only expend the die if the attack hits.",
                              "Psychic Teleportation. As a bonus action, manifest a Psychic Blade, expend one Psionic",
                              "Energy die. Throw the blade at an unoccupied space up to a number of feet away",
                              "equal to 10 times the number rolled to teleport to that space, and the blade vanishes."
							]),
							action : ["bonus action", "Psychic Teleportation"],
			},
			"subclassfeature13" : {
				name : "Psychic Veil",
				source : ["TCoE", 65],
				minlevel : 13,
                description : desc([
                              "As an action, you any anything you are wearing or carrying becomes invisible, for 1 hr", 
                              "or until you dismiss this effect (no action required). This invisiblity ends immediately",
                              "after you deal damage to a creature or you force a creature to make a saving throw.",
                              "Once you use this feature, you can't do so again until you finish a long rest, unless you",
                              "expend a Psionic Energy die to use this feature again."
							  ]),
							  action : ["action", "Psychic Veil"],
            },
            "subclassfeature17" : {
				name : "Rend Mind",
				source : ["TCoE", 65],
				minlevel : 17,
                description : desc([
                              "When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can", 
                              "force the target to make a WIS save (DC 8 + prof + DEX). The target is stunned for",
                              "1 min on a failed save. The save can be repeated at the end of each of their turns.",
                              "Once you use this feature, you can't do so again until you finish a long rest, unless you",
                              "expend a Psionic Energy die to use this feature again."
                              ]),
			},
		}
	}
);
AddSubClass("sorcerer", "aberrant mind", { //incomplete - psionic spells needs work
	regExpSearch : /^(?=.*aberrant)(?=.*mind).*$/i,
	subname : "Aberrant Mind",
	source : ["TCoE", 1],
	features : {
		"subclassfeature1" : {
			name : "Telepathic Speech",
			source : ["TCoE", 1],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can telepathic link myself with a creature within 30 ft that I can see",
				"The target and I can telepathically communicate; We must share a language to be understood",
				"and to communicate we must be within a number of miles equal to my Cha mod (min 1 mile)",
				"The communication ends early if I am incapacitated, I die or if I use this feature again"
			]),
			action : [["bonus action", ""]],
			additional : levels.map(function (n) {
				return (n) + " minutes";
			})
		},
		"subclassfeature1.1" : {
			name : "Psionic Spells",
			source : ["TCoE", 1],
			minlevel : 1,
			description : desc([
				"I learn additional spells, which do not count towards the number of spell I can know",
				"When I level up I can replace one of these spells with another of the same level",
				"and from the div. or ench. schools from the wizard, sorcerer or warlock lists."
			]),
			spellcastingBonus : { // Need to find a way to add the base psionic spells to the spells from the class and school list
				name : "Psionic Spells",
				extraspells : ["mind sliver", "arms of hadar", "dissonant whispers", "calm emotions", "detect thoughts", "hunger of hadar", "sending", "evard's black tentacles", "summon abberation", "rary's telepathic bond", "telekinesis"],
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				selection : ["mind sliver", "arms of hadar", "dissonant whispers", "calm emotions", "detect thoughts", "hunger of hadar", "sending", "evard's black tentacles", "summon abberation", "rary's telepathic bond", "telekinesis"],
				firstCol : "SP",
				level : [0,5],
				times : [3,3,5,5,7,7,9,9,11,11,11,11,11,11,11,11,11,11,11,11]
			}
		},
		"subclassfeature6" : {
			name : "Psionic Sorcery",
			source : ["TCoE", 2],
			minlevel : 6,
			description : desc([
				"I can expend sorcery points instead of a spell slot to cast a spell from my Psionic Spells",
				"This costs the spell's level in sorcery points, but the spell requires no other components",
				"unless the material components are consumed by the spell."
			])
		},
		"subclassfeature6.1" : {
			name : "Psychic Defenses",
			source : ["TCoE", 2],
			minlevel : 6,
			description : "\n   I gain resistance to psychic damage and adv. on saves vs. being charmed or frightened",
			dmgres : ["Psychic"],
			savetxt : { adv_vs : ["charmed", "frightened"] }
		},
		"subclassfeature14" : {
			name : "Revelation in Flesh",
			source : ["TCoE", 2],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can expend 1 or more sorcery points to transform for 10 minutes",
				"For each sorcery point used, I gain one of the following benefits of my choice:",
				"\u2022 I gain a swimming speed equal to my walking speed and the ability to breathe water",
				"\u2022 I gain a flying speed equal to my walking speed and I can hover",
				"\u2022 I can move, with equipment, through any space as narrow as 1 inch without squeezing",
				"  I can spend 5 ft of movement to escape form a grapple or from nonmagical restraints",
				"\u2022 I can see any invisible creatures within 60 ft of me not behind total cover"
			]),
			action : [["bonus action", ""]],
			additional : "1+ sorcery points"
		},
		"subclassfeature18" : {
			name : "Warping Implosion",
			source : ["TCoE", 2],
			minlevel : 18,
			description : desc([
				"As an action, I can teleport to an unoccupied space i can see within 120ft",
				"Creatures within 30ft of the space I left must make a strength save or take",
				"3d10 force damage and be pulled to the nearest unoccupied space from where I left",
				"On a successful save, a creature takes half damage and isn't pulled"
			]),
			action : [["action", ""]],
			recovery : "long rest",
			usages : 1,
			altResource : "5 SP"
		}
	}
});
AddSubClass("sorcerer", "clockwork soul", { //incomplete - clockwork magic needs work
	regExpSearch : /^((?=.*(sorcerer|witch))(?=.*mechanus)|(?=.*clockwork)(?=.*soul)).*$/i,
	subname : "Clockwork Soul",
	source : [["TCoE", 4]],
	fullname : "Clockwork Soul",
	features : {
		"subclassfeature1" : {
			name : "Clockwork Magic",
			source : [["TCoE", 4]],
			minlevel : 1,
			description : desc([
				"I learn additional spells, which do not count towards the number of spell I can know",
				"When I level up I can replace one of these spells with another of the same level",
				"and from the abj. or trans. schools from the wizard, sorcerer or warlock lists."
			]),
			spellcastingBonus : { // Need to find a way to add the base clockwork spells to the spells from the class and school list
				name : "Clockwork Magic",
				extraspells : ["alarm", "protection from evil and good", "aid", "lesser restoration", "dispel magic", "protection from energy", "freedom of movement", "summon construct", "greater restoration", "wall of force"],
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				selection : ["alarm", "protection from evil and good", "aid", "lesser restoration", "dispel magic", "protection from energy", "freedom of movement", "summon construct", "greater restoration", "wall of force"],
				firstCol : "markedbox",
				level : [1,5],
				times : [2,2,4,4,6,6,8,8,10,10,10,10,10,10,10,10,10,10,10,10]
			}
		},
		"subclassfeature1.1" : {
			name : "Restore Balance",
			source : [["TCoE", 4]],
			minlevel : 1,
			description : desc([
				"As a reaction when a creature I can see in 60 ft is about to roll a d20 with adv./disadv.,",
				"I can prevent that roll from being affected by advantage and disadvantage."
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Number(What('Proficiency Bonus'));",
			recovery : "long rest",
			action : [["reaction", ""]],

			extraLimitedFeatures : [{
				name : "Restore Balance",
				usages : "Proficiency Bonus per ",
				recovery : "long rest",
				usagescalc : "event.value = Number(What('Proficiency Bonus'));"
			}]
		},
		"subclassfeature6" : {
			name : "Bulwark of Law",
			source : [["TCoE", 4]],
			minlevel : 6,
			description : desc([
				"As an action, I can imbue a creature I can see within 30 ft with a magical ward",
				"I grant it a number of d8s equal to the number of sorcery points I expend when I do this",
				"When it takes damage, it can use its reaction to spend and roll any number of those dice",
				"The dice roll reduces the damage; The ward lasts until I finish a long rest or do this again"
			]),
			additional : "1-5 sorcery points; 1d8 per point",
			action : [["action", ""]]
		},
		"subclassfeature14" : {
			name : "Trance of Order",
			source : [["TCoE", 4]],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can enter a state of clockwork consciousness for 1 minute",
				"While in this state, attack rolls against me can't benefit from advantage",
				"Also, I can then treat a d20 roll below 9 as a 10 for my attack rolls, checks, and saves",
				"I can do this once per long rest, or by expending a 5 sorcery points (5 SP)"
			]),
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "5 SP",

			extraLimitedFeatures : [{
				name : "Trance of Order",
				usages : 1,
				recovery : "long rest",
			}]
		},
		"subclassfeature18" : {
			name : "Clockwork Cavalcade",
			source : [["TCoE", 5]],
			minlevel : 18,
			description : desc([
				"As an action, I can call spirits to bring balance in a 30-ft cube originating from me",
				"Inside the cube, the intangible spirits do all the following before vanishing:",
				" \u2022 Restore up to 100 HP, divided among the creatures in the cube as I choose",
				" \u2022 Repair all damaged objects entirely in the cube",
				" \u2022 End spells of my choice of 6th-level or lower on objects or creatures in the cube",
				"I can do this once per long rest, or by expending a 7 sorcery points (7 SP)"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "7 SP",

			extraLimitedFeatures : [{
				name : "Clockwork Cavalcade",
				usages : 1,
				recovery : "long rest",
			}]

		}
	}
});
AddSubClass("warlock", "the fathomless", {
	regExpSearch : /^(?=.*warlock)(?=.*fathomless).*$/i,
	subname : "The Fathomless",
	source : ["TCoE",72],
	features : {
		"subclassfeature1" : {
			name : "Tentacle of the Deep",
			source : ["TCoE",72],
			minlevel : 1,
			description : desc([
			"Bonus action to create a 10 foot-long tentacle within 60 feet.",
			"Can attack with it when created and when I use a bonus action to move it 30'",
			"Melee spell attack that does 1d8 cold dmg and -10 to its speed.",
			"Tentacle lasts for 1 minute and can be summoned a number of times equal to my","Proficiency bonus per long rest"
			]),
			action : ["bonus action","summon/move tentacle"],
			usages : "Prof. Bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature1.1" : {
			name : "Expanded Spell List",
			source : ["TCoE",72],
			minlevel : 1,
			spellcastingExtra : ["create or destroy water", "thunderwave", "gust of wind", "silence", "lightning bolt", "sleet storm", "control water", "summon elemental", "bigby's hand", "cone of cold"],
			description : desc([
			"My patron grants me extra spells I can choose from. Water only for",
			"Summon Elemental and Bigby's Hand appears as a tentacle."
			]),
		},
		"subclassfeature1.2" : {
			name : "Gift of the Sea",
			source : ["TCoE",72],
			minlevel : 1,
			description : desc([
			"I gain a swim speed of 40' and can breathe underwater."
			]),
		},
		"subclassfeature6" : {
			name : "Oceanic Soul",
			minlevel : 6,
			source : ["TCoE",73],
			description : desc ([
			"I gain resistance to cold damage.  In addition, while completely",
			"submerged under water, othe submerged creatures understand me."
			]),
			dmgres : ["Cold"]
		},
		"subclassfeature6.1" : {
			name : "Guardian Coil",
			minlevel : 6,
			source : ["TCoE",73],
			description : desc([
			"With Tentacle of the Deep summoned, reaction when me or any",
			"creature that I see within 10 feet of it to reduce dmg by 1d8",
			"This increases to 2d8 at level 10."
			]),
			/* action : ["reaction","reduce dmg by 1d8"], */
		},
		"subclassfeature10" : {
			name : "Grasping Tentacles",
			source : ["TCoE",73],
			minlevel : 10,
			description : desc([
			"I learn Evard's Black Tentacles spell, it counts as a Warlock spell",
			"but doesn't count against number of spells known.  Can cast it once",
			"per long rest without using a spell slot",
			"I gain temporary hit points equal to my Warlock level and damage",
			"doesn't break concentration on this spell"
			]),
			spellcastingBonus : {
			name: "Grasping Tentacles",
			spells: ["evard's black tentacles"],
			selection: ["evard's black tentacles"],
			firstCol: "oncelr"
			},
			usages : "1x per ",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Fathomless Plunge",
			source : ["TCoE",73],
			minlevel : 14,
			description : desc ([
			"As an action, I teleport myself and up to 5 willing creatures up to 1 mile to a body",
			"of water I've seen (pond or larger) or within 30 feet of it, appearing within 30'",
			"of each other. Must finish short or long rest to use again."
			]),
			action : ["action",""],
			usages : "1x per ",
			recovery : "short rest"
		}
	}
});
AddSubClass("warlock", "the genie", {
	regExpSearch : /^(?=.*warlock)((?=.*genie)|(?=.*dao)(?=.*djinni)(?=.*efreeti)(?=.*marid)).*$/i,
	subname : "The Genie",
	source : ["TCoE", 2],
	features : {
		"subclassfeature1" : {
			name : "Choose your patron",
			source : ["TCoE", 2],
			minlevel : 1,
			description : "\n   " + "Use the \"Choose Feature\" button above to choose your Genie Patron",
			extraname : "Genie Kind",
			choices : ["dao", "djinni", "efreeti", "marid"],
			"dao" : {
				name : "Dao",
				source : ["TCoE", 2],
				spellcastingExtra : ["detect evil and good", "sanctuary", "phantasmal force", "spike growth", "create food and water", "meld into stone", "phantasmal killer", "creation", "stone shape", "wall of stone", "wish"],
				description : "\n   " + "My Genie patron is a Dao, associated with Earth"
			},
			"djinni" : {
				name : "Djinni",
				source : ["TCoE", 2],
				spellcastingExtra : ["detect evil and good", "thunderwave", "phantasmal force", "gust of wind", "create food and water", "wind wall", "phantasmal killer", "greater invisibility", "creation", "seeming", "wish"],
				description : "\n   " + "My Genie patron is a Djinni, associated with Air"
			},
			"efreeti" : {
				name : "Efreeti",
				source : ["TCoE", 2],
				spellcastingExtra : ["detect evil and good", "burning hands", "phantasmal force", "scorching ray", "create food and water", "fireball", "phantasmal killer", "fire shield", "creation", "flame strike", "wish"],
				description : "\n   " + "My Genie patron is an Efreeti, associated with Fire"
			},
			"marid" : {
				name : "Marid",
				source : ["TCoE", 2],
				spellcastingExtra : ["detect evil and good", "fog cloud", "phantasmal force", "blur", "create food and water", "sleet storm", "phantasmal killer", "control water", "creation", "cone of cold", "wish"],
				description : "\n   " + "My Genie patron is a Marid, associated with Water"
			},
			choiceDependencies : [{
				feature : "subclassfeature6"
			}, {
				feature : "subclassfeature1.2"
			}]
		},
		"subclassfeature1.1" : {
			name : "Expanded Spell List",
			source : ["TCoE", 3],
			minlevel : 1,
/*			description : "\n   " + "I gain additional spells which I can choose from when selecting my Warlock spells" + "\n   " + "These additional spells are determined by my Genie patron.",*/
			calcChanges : {
				spellList : [
					function(spList, spName, spType) {
					// don't add if this is not a class or a list of spells is already given
					if (!ClassList[spName] || spList.spells || spList.psionic) return;
					// if this is an 'extra spell', also test if it uses the class' spell list or not
					if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
					spList.extraspells = spList.extraspells.concat(["wish"]);
					},
				"The Genie Patron adds Wish as a spell available as a 9th level Mystic Arcanum."
				]
			},
		},
		"subclassfeature1.2" : {
			name : "Genie's Vessel",
			source : ["TCoE", 3],
			minlevel : 1,
			description : desc([
			"My patron gifts me a magical vessel that grants me a measure of my patron's power.",
			"Tiny object; spellcasting focus for my Warlock spells",
			"While I am touching the vessel, I can use Bottled Respite or Genie's Wrath \(See Notes.\).",
			"The Vessel's AC equals my spell save DC. Its hit points equal my Warlock level plus my",
			"prof. bonus, and it is immune to poison and psychic damage.",
			"If destroyed, I can perform a 1 hour ritual to reclaim. It vanishes when I die."
			]),
			"dao" : {
				name : "Genie's Vessel",
				additional : "Genie's Wrath: bludgeoning"
			},
			"djinni" : {
				name : "Genie's Vessel",
				additional : "Genie's Wrath: thunder"
			},
			"efreeti" : {
				name : "Genie's Vessel",
				additional : "Genie's Wrath: fire"
			},
			"marid" : {
				name : "Genie's Vessel",
				additional : "Genie's Wrath: cold"
			},
			toNotesPage : [{
				name : "Genie's Vessel",
				source : ["TCoE",3],
				popupName : "Genie's Vessel",
				note : [
				"Bottled Respite",
				"As an action, I can magically vanish and enter my vessel, which remains in the space I left.",
				"The interior of the vessel is an extradimensional space in the shape of a 20-foot-radius",
				"cylinder, 20 feet high, and resembles my vessel. The interior is comfortably appointed with",
				"cushions and low tables and is a comfortable temperature. While inside, I can hear the area",
				"around my vessel as if I were in its space. I can remain inside the vessel up to a number of",
				"hours equal to twice my proficiency bonus. I exit the vessel early if I use a bonus action",
				"to leave, if I die, or if the vessel is destroyed. When I exit the vessel, I appear in the",
				"unoccupied space closest to it. Any objects left in the vessel remain there until carried",
				"out, and if the vessel is destroyed, every object stored there harmlessly appears in the",
				"unoccupied spaces closest to the vessel’s former space. Once I enter the vessel, I can’t",
				"enter again until I finish a long rest.",
				"Genie's Wrath",
				"Once during each of my turns when I hit with an attack roll, I can deal extra damage to", 
				"the target equal to my proficiency bonus. The type of this damage is determined by",
				"my patron: bludgeoning \(dao\), thunder \(djinni\), fire \(efreeti\), or cold \(marid\)."
				]
			}],
			action :["action","Bottled Respite"],
			usages : "Enter 1x per ",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Elemental Gift",
			minlevel : 6,
			"dao" : {
				name : "Elemental Gift",
				source : ["TCoE", 3],
				description : desc ([
					"I gain resistance to bludgeoning damage. Bonus action to gain a fly speed of 30 ft",
					"which lasts for 10 min and I can hover. I can use this bonus action as number of",
					"times equal to my prof. bonus and I regain all uses after a long rest.",
				]),
				dmgres : "Bludgeoning"
			},
			"djinni" : {
				name : "Elemental Gift",
				source : ["TCoE", 3],
				description : desc ([
					"I gain resistance to thunder damage. Bonus action to gain a fly speed of 30 ft",
					"which lasts for 10 min and I can hover. I can use this bonus action as number of",
					"times equal to my prof. bonus and I regain all uses after a long rest.",
				]),
				dmgres : ["Thunder"]
			},
			"efreeti" : {
				name : "Elemental Gift",
				source : ["US:SR0512",3],
				description : desc ([
					"I gain resistance to fire damage. Bonus action to gain a fly speed of 30 ft",
					"which lasts for 10 min and I can hover. I can use this bonus action as number of",
					"times equal to my prof. bonus and I regain all uses after a long rest.",
				]),
				dmgres : ["Fire"]
			},
			"marid" : {
				name : "Elemental Gift",
				source : ["TCoE",3],
				description : desc ([
					"I gain resistance to cold damage. Bonus action to gain a fly speed of 30 ft",
					"which lasts for 10 min and I can hover. I can use this bonus action as number of",
					"times equal to my prof. bonus and I regain all uses after a long rest.",
				]),
				dmgres : ["Cold"]
			},
			action : ["bonus action","30 ft Fly Speed"],
			usages : "Prof. Bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Sanctuary Vessel",
			source : ["TCoE", 3],
			minlevel : 10,
			description : desc([
			"When I enter my Genie’s Vessel via the Bottled Respite feature, I can now choose up to",
			"five willing creatures that I can see within 30 feet of me, and the chosen creatures are",
			"drawn into the vessel with me. As a bonus action, I can eject any number of creatures",
			"from the vessel, and everyone is ejected if I leave or the vessel is destroyed.",
			"In addition, anyone (including me) who remains within the vessel for at least 10 minutes",
			"gains the benefit of finishing a short rest, and anyone can add my proficiency bonus",
			"to the number hit points they regain if they spend Hit Dice as part of a short rest there."
			])
		},
		"subclassfeature14" : {
			name : "Limited Wish",
			source : ["TCoE", 4],
			minlevel : 14,
			description : desc ([
			"I entreat my patron to grant me a small wish. As an action, I can speak my desire to my",
			"Genie’s Vessel, requesting the effect of one spell that is 6th level or lower and has a",
			"casting time of 1 action. The spell can be from any class’s spell list, and I don’t need to",
			"meet the requirements in that spell, including costly components; the spell simply takes",
			"effect as part of this action.",
			"Once I use this feature, I can’t use it again until I finish 1d4 long rests."
			]),
			action : ["action",""],
			usages : "1d4 ",
			recovery : "long rest"
		}
	}
});
AddSubClass("wizard", "bladesinging", {
	regExpSearch : /(bladesinging|bladesinger)/i,
	subname : "Tradition of Bladesinging",
	fullname : "Bladesinger",
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	source : ["TCoE", 76],
	features : {
		"subclassfeature2" : {
			name : "Training in War and Song",
			source : ["TCoE", 76],
			minlevel : 2,
			description : "\n   " + "I gain proficiency with light armor, a one-handed melee weapon, and Performance",
			armor : [true, false, false, false],
			skills : ["Performance"],
			skillstxt : "\n\n" + toUni("Bladesinger") + ": Performance"
		},
		"subclassfeature2.1" : {
			name : "Bladesong",
			source : ["TCoE", 76],
			minlevel : 2,
			description: desc([
			"As a bonus action, I can start the bladesong for 1 minute; I can dismiss it at any time",
			"It stops when I wear a shield, medium or heavy armor, or attack with two hands",
			"While the bladesong is active I have the following benefits:",
			" \u2022 " + "Armor Class bonus equal to my Intelligence modifier (minimum of 1)",
			" \u2022 " + "My base walking speed increases by 10 feet",
			" \u2022 " + "Advantage on Dexterity (Acrobatics) checks",
			" \u2022 " + "Intelligence modifier bonus (minimum of 1) to Constitution saving throws to maintain concentration"
			]),
			action : ["bonus action", " (start)"],
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus')",
			recovery: "long rest",
		},
		"subclassfeature6" : {
			name : "Extra Attack",
			source : ["TCoE", 77],
			minlevel : 6,
			description: desc([
				"I can attack twice instead of once when I take the Attack action on my turn",
				"Moreover, I can cast one of my cantrips in place of one of those attacks."
			]),
		},
		"subclassfeature10" : {
			name : "Song of Defense",
			source : ["TCoE", 77],
			minlevel : 10,
			description : "\n   " + "As a reaction while my bladesong is active, I can expand a spell slot to reduce damage" + "\n   " + "The damage I take is reduced by 5 for every level of the spell slot I expand",
			action : ["reaction", " (in bladesong)"]

		},
		"subclassfeature14" : {
			name : "Song of Victory",
			source : ["TCoE", 77],
			minlevel : 14,
			description : "\n   " + "While my bladesong is active, I can add my Int mod to melee weapon attack damage",
			calcChanges : {
				atkCalc : ["if (classes.known.wizard && classes.known.wizard.level > 13 && isMeleeWeapon && (/blade.?song/i).test(WeaponText)) { output.extraDmg += What('Int Mod'); }; ", "If I include the word 'Bladesong' in the name or description of a melee weapon, it gets my Intelligence modifier added to its Damage."]
			}
		}
	}
});
AddSubClass("wizard","order of scribes", {
	regExpSearch : /^(?=.*wizard)(?=.*order)(?=.*scribes).*$/i,
	subname : "Order of Scribes",
	source : ["TCoE",77],
	features : {
		"subclassfeature2" : {
			name : "Wizardly Quill",
			source : ["TCoE",77],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can magically create a Tiny quill. It disappears if I ",
				"create another one or I die.  It has the following properties:",
				"\u25C6 It doesn't require ink; produces ink in color of my choice",
				"\u25C6 If used for spell transcribing, 2 minutes per spell level",
				"\u25C6 As a bonus action, I can erase any text I've written with the quill",
				"  as long as it's within 5 ft",
			]),
			action : [["bonus action","create quill"],["bonus action","erase text"]]
		},
		"subclassfeature2.1" : {
			name : "Awakened Spellbook",
			source :["TCoE",77],
			minlevel : 2,
			description : desc ([
				"I have awakened an arcane sentience within my spellbook.",
				"While I am holding the book, it grants me the followings benefits",
				"\u25C6 I can use the book as a spellcasting focus for my wizard spells",
				"\u25C6 When I cast a wizard spell with a spell slot, I can temp. replace its",
				"  damage type with another type of a spell in my spellbook of the same",
				"  level as the slot used to cast this spell",
				"\u25C6 When I cast a wizard spell as a ritual, I can use the spell's normal",
				"  casting time, rather than adding 10 minutes to it.  Once I use this benefit",
				"  I can't use it again until I take a long rest.",
				"Can replace the book over a short rest by using my Wizardly Quill to write arcane",
				"sigils in a blank book or a spellbook to which I am attuned. All spells vanish from",
				"previous book if it exists somewhere."
			]),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Master Scrivener",
			source : ["TCoE",79],
			minlevel : 10,
			description : desc([
				"Whenever I finish a long rest, I can create a magic scroll by touching my Wizardly",
				"Quill to a blank piece of paper or parchment and causing one spell from my Awakened",
				"Spellbook to be copied onto the scroll.  The spellbook must be within 5 ft to do this.",
				"Chosen spell must be 1st or 2nd level and have a casting time of 1 action.  Once in the",
				"scroll, the spell's power is enhanced counting as 1 level higher than normal.  I can",
				"cast this spell as an action by reading the scroll.  No one else can read it and it",
				"vanishes when I cast it or finish my next long rest.",
				"When I craft spell scrolls, gold and time are halved when using my Wizardly Quill."
			]),
			usages : 1,
			recovery : "long rest",
			action : ["action","cast Scrivener scroll"]
	},
	"subclassfeature6" : {
		name : "Manifest Mind",
		source : ["TCoE",78],
		minlevel : 6,
		description : desc([
			"As a bonus action, I can cause my Awakened Spellbook to manifest. See \"Notes\" page",
			"Once conjured, I can't do so again until I finish a long rest or expend a spell",
			"slot of any level."
		]),
		toNotesPage : [{
			name : "Manifest Mind",
			source : ["TCoE",78],
			popupName : "Manifest Mind",
			page3notes : false,
			note : desc (["As a bonus action with my Awakened Spellbook on my person, I can cause the mind to",
			"manifest as a Tiny spectral object, hovering in an unoccupied space of my choice within",
			"60 ft. It is intangible and doesn't occupy its space, and it sheds dim light in a 10 ft radius.",
			"It looks like a ghostly tome, a cascade of text, or a scholar from the past \(my choice.\).",
			"\(See Companion Page for statistics for this construct.\)",
			"While manifested, it can hear and see and has darkvision with a range of 60 ft.  It can",
			"share what it sees and hears with me (no action required).",
			"Whenever I cast a wizard spell on my turn, I can cast it as if I were in the spectral mind's",
			"space, using its senses.  I can do this a number of times per day equal to my proficiency",
			"bonus, and I regain all uses when I finish a long rest.",
			"As a bonus action, I can cause it to hover up to 30 ft to an unoccupied space that I or it",
			"can see. It can pass through creatures but not objects.  It stops manifesting if it is ever",
			"more than 300 ft away from me, if it drops to 0 hit points, if I die, or if I dismiss it as",
			"a bonus action."
			])
		}],
/*		eval : function() {
			var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.wizard.artificer.CompFunc;
			companionFunctions.add("Manifest Mind");
			ClassList.wizard.wizardCompFunc.update(10, What('Int mod'),What('AC'),What('Str mod'),What('Dex mod'),What('Con mod'),What('Wis mod'),What('Cha mod'));
		},
		removeeval : function() {
			var companionFunctions = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.wizard.artificerCompFunc;
			companionFunctions.remove("Manifest Mind");
		},
*/
		action : [["bonus action",""],["bonus action","Hover spellbook 30ft"],["bonus action","dismiss Manifestation"]],
		//usages : "Prof. Bonus per ",
		//usagescalc : "event.value = What('Proficiency Bonus');",
		recovery : "long rest"
		
	},
	"subclassfeature14" : {
		name : "One with the Word",
		source : ["TCoE",79],
		minlevel : 14,
		description : desc([
			"While Awakened Spellbook is on my person, advantage on Intelligence (Arcana) checks.",
			"If I take damage while Awakened Spellbook is manifested, I can use reaction to dismiss",
			"the manifected book to prevent all damage. Roll 3d6 and temporarily lose combined",
			"spells of that level in Awakened spellbook. If not enough spells, I drop to 0 hp.",
			"I must finish 1d6 long rests to regain lost spells (cannot cast them from scrolls"
		]),
		action : ["reaction","dismiss/prevent dmg"],
		//usages : "Prof. Bonus per ",
		//usagescalc : "event.value = What('Proficiency Bonus');",
		usages : "1x per 1d6 ",
		recovery : "long rest"
		}
	}
});
// Add a subclass for the Artificer (but after all other scripts, so that all armor options are present)
// Artificer class
ClassList.artificer = {
	regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
	name : "Artificer",
	source : [["TCoE", 10]],
	primaryAbility : "Intelligence",
	abilitySave : 4,
	prereqs : "Intelligence 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skillstxt : {
		primary : "Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand"
	},
	toolProfs : {
		primary : [["Thieves' tools", "Dex"], "Tinker's tools", ["Artisan's tools", 1]],
		secondary : [["Thieves' tools", "Dex"], "Tinker's tools"]
	},
	armorProfs : {
		primary : [true, true, false, true],
		secondary : [true, true, false, true]
	},
	weaponProfs : {
		primary : [true, false, ["Firearms"]]
	},
	equipment : "Artificer starting equipment:" +
		"\n \u2022 Any two simple weapons;" +
		"\n \u2022 A light crossbow and 20 bolts;" +
		"\n \u2022 Studded leather armor -or- scale mail;" +
		"\n \u2022 Thieves' tools and a dungeoneer's pack;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Artificer Specialist", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 2,
	spellcastingFactorRoundupMulti : true,
	spellcastingTable : [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(levels.map(function (n) {
		return defaultSpellTable[Math.ceil(n / 2)];
	})),
	spellcastingKnown : {
		cantrips : [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
		spells : "list",
		prepared : true
	},
	features : {
		"magical tinkering" : {
			name : "Magical Tinkering",
			source : [["TCoE", 11]],
			minlevel : 1,
			description : desc([
				"As an action, I use tinker's or theives' tools to give max 1 property to a nonmagical tiny object:",
				" \u2022 Emit light (5-ft radius bright light, equal dim), an odor, or a nonverbal sound",
				" \u2022 Static visual effect on one surface, or emit a 6-second recorded message when tapped",
				"If I instill a property in more objects than I can have active, the oldest loses its property"
			]),
			additional : "Intelligence modifier of active objects",
			action : [["action", " (add/remove)"]],
			extraname : "Artificer 2",
			"infuse item" : {
				name : "Infuse Item",
				source : [["E:RLW", 57]],
				description : desc([
					"When I finish a long rest, I can turn nonmagical objects into magic items using my infusions",
					"I can attune to it immediately; If I infuse too many items, the oldest loses its magic",
					"The infusion lasts until my death + my Int mod in days, but ends if I unlearn the infusion",
					"Each infusion can only be used in one item at a time and only in appropriate items",
					"Whenever I gain an artificer level, I can replace an infusion I know with another",
					"“If an infusion ends on a container (like a bag of holding) its contents harmlessly appear in and around its space",
					"I can use an infused item as a spellcasting focus"
				]),
				additional : levels.map(function (n) {
					return n < 2 ? "" : (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12) + " infusions known; max " + (n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6) + " infused items";
				})
			},
			autoSelectExtrachoices : [{
				extrachoice : "infuse item",
				minlevel : 2
			}]
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : [["TCoE", 11]],
			minlevel : 1,
			description : desc([
				"I can cast prepared artificer cantrips/spells, using Intelligence as my spellcasting ability",
				"To cast, I must use thieves' or artisan's tools I'm proficient with as a spellcasting focus",
				"I can cast my prepared artificer spells as rituals if they have the ritual tag",
				"Whenever I gain an artificer level, I can swap one artificer cantrip I know for another"
			]),
			additional : levels.map(function (n, idx) {
				return [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4][idx] + " cantrips known";
			}),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (!spellObj.psionic && spName == "artificer" && spellObj.compMaterial === SpellsList[spellKey].compMaterial) {
							spellObj.compMaterial = (spellObj.compMaterial ? spellObj.compMaterial + ".\n\nAlso a" : "A") + "lways requires my artificer spellcasting focus: thieves' tools, any set of artisan's tools I'm proficient with, " + (classes.known.artificer.subclass.indexOf("artillerist") !== -1 && classes.known.artificer.level > 4 ? "my arcane firearm, " : "") + "or an item infused by me.";
							if (GetFeatureChoice("classes", "artificer", "spellcasting", true).indexOf("don't change component column on spell sheet") != -1) {
								// do nothing if set to do so
							} else if (!spellObj.components) {
								spellObj.components = "M\u0192";
							} else if (spellObj.components.indexOf("M") == -1) {
								spellObj.components += ",M\u0192";
							} else if ((/M([^\u0192\u2020]|$)/).test(spellObj.components)) {
								spellObj.components = spellObj.components.replace("M", "M\u0192");
							}
							return true;
						}
						return false;
					},
					"My artificer spells always require me to use a spellcasting focus: thieves' tools, artisan's tools I'm proficient with, or an item infused by me."
				]
			},
			extrachoices : ["Don't change component column on spell sheet"],
			extraname : "Artificer Spellcasting",
			"don't change component column on spell sheet" : {
				name : "[Meta] Don't alter spell sheets",
				source : [["E:RLW", 55]],
				description : "\n   The automation will not add M\u0192 to each artificer spell on the generated spell sheets"
			}
		},
		"infuse item" : {
			name : "Infuse Item",
			source : [["TCoE", 12]],
			minlevel : 2,
			description : '\n   Use the "Choose Feature" button above to add Artificer Infusions to the third page',
			additional : levels.map(function (n) {
				return n < 2 ? "" : (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12) + " infusions known; max " + (n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6) + " infused items";
			}),
			extraname : "Artificer Infusion",
			extrachoices : ["Arcane Propulsion Armor (prereq: level 14 artificer)", "Armor of Magical Strength", "Boots of the Winding Path (prereq: level 6 artificer)", "Enhanced Arcane Focus", "Enhanced Defense (armor)", "Enhanced Defense (shield)", "Enhanced Weapon", "Helm of Awareness (prereq: level 10 artificer)", "Homunculus Servant", "Mind Sharpener", "Radiant Weapon (prereq: level 6 artificer)", "Repeating Shot", "Repulsion Shield (prereq: level 6 artificer)", "Resistant Armor (prereq: level 6 artificer)", "Returning Weapon", "Spell-Refueling Ring (prereq: level 6 artificer)"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 0 : n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12;
			}),
			"arcane propulsion armor (prereq: level 14 artificer)" : {
				name : "Arcane Propulsion Armor",
				source : [["TCoE", 20]],
				description : desc([
					"The wearer's walking speed increases by 5 feet",
                    "The armor includes gauntlets that may be used as proficient melee weapons when empty handed",
                    "The gauntlets each deal 1d8 forcedamage on a hit and have the thrown property, with a normal with a normal range of 20 feet and a long range of 60 feet",
                    "The armor can't be romoved against the wearer's will",
                    "the armor funtionally replaces missing limbs"
				]),
				additional : "suit of armor; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 14; },
				eval : function (lvl, chc) { AddMagicItem("Arcane Propulsion Armor"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("Arcane Propulsion Armor");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"armor of magical strength" : {
				name : "Armor of Magical Strength",
				source : [["TCoE", 20]],
				description : desc([
					"This armor has 6 charges. The wearer can expend the armor's charges in the following ways:",
                    "When the wearer makes a Strength check or a Strength saving throw, it can expend 1 charge to add a bonus to the roll equal to its Intelli­gence modifier.",
                    "If the creature would be knocked prone, it can use its reaction to expend 1 charge to avoid being knocked prone",
                    "The armor regains ld6 expended charges daily at dawn."
				]),
				additional : "suit of armor; requires attunement",
				eval : function (lvl, chc) { AddMagicItem("Armor of Magical Strength"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("armor of magical strength");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"boots of the winding path (prereq: level 6 artificer)" : {
				name : "Boots of the Winding Path",
				source : [["TCoE", 21]],
				description : desc([
					"The wearer can use a bonus action to teleport up to 15 ft to an unoccupied space it can see",
					"It must be a space that the wearer had occupied some time during the current turn"
				]),
				additional : "pair of boots; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 6; },
				eval : function (lvl, chc) { AddMagicItem("Boots of the Winding Path"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("boots of the winding path");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced arcane focus" : {
				name : "Enhanced Arcane Focus",
				source : [["TCoE", 21]],
				description : "\n   The holder has a bonus to spell attack rolls and ignores half cover with spell attacks",
				additional : levels.map(function (n) {
					return "rod/staff/wand; attunement; +" + (n < 10 ? 1 : 2);
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Enhanced Arcane Focus +" + (classes.known.artificer.level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("wand of the war mage, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced defense (armor)" : {
				name : "Enhanced Defense",
				source : [["TCoE", 21]],
				description : "",
				additional : levels.map(function (n) {
					return "armor/shield; +" + (n < 10 ? 1 : 2) + " magical";
				}),
				prereqeval : function(v) {
					return GetFeatureChoice("classes", "artificer", "infuse item", true).indexOf("enhanced defense (shield)") == -1;
				},
				eval : function (lvl, chc) {
					AddMagicItem("Armor +" + (classes.known.artificer.level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("armor, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced defense (shield)" : {
				name : "Enhanced Defense",
				source : [["TCoE", 21]],
				description : "",
				additional : levels.map(function (n) {
					return "armor/shield; +" + (n < 10 ? 1 : 2) + " magical";
				}),
				prereqeval : function(v) {
					return GetFeatureChoice("classes", "artificer", "infuse item", true).indexOf("enhanced defense (armor)") == -1;
				},
				eval : function (lvl, chc) {
					AddMagicItem("Shield +" + (classes.known.artificer.level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("shield, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced weapon" : {
				name : "Enhanced Weapon",
				source : [["TCoE", 21]],
				description : "",
				additional : levels.map(function (n) {
					return "simple/martial weapon; +" + (n < 10 ? 1 : 2) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Weapon +" + (classes.known.artificer.level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("weapon, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"helm of awareness (prereq: level 10 artificer)" : {
				name : "Helm of Awareness",
				source : [["TCoE", 21]],
				description : desc([
					"The wearer gains advantage on initiative rolls and cannot be surprised"
				]),
				additional : "helmet; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 6; },
				eval : function (lvl, chc) { AddMagicItem("Helm of Awareness"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("helm of awareness");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"homunculus servant" : {
				name : "Homunculus Servant",
				source : [["TCoE", 21]],
				description : desc([
					"The item I infuse becomes the heart of a homunculus that immediately forms around it",
					"I determine its appearance; It is friendly to me and my allies and obeys my commands",
					'Select "Homunculus Servant" on a companion page to see its game statistics'
				]),
				additional : "gem or crystal of 100+ gp value",
				eval : function (lvl, chc) {
					ClassList.artificer.artificerCompFunc.add("Homunculus Servant");
				},
				removeeval : function (lvl, chc) {
					ClassList.artificer.artificerCompFunc.remove("homunculus servant");
					if (CreatureList["homunculus servant"]) CreatureList["homunculus servant"].removeeval();
				}
			},
			"mind sharpener" : {
				name : "Mind Sharpener",
				source : [["TCoE", 22]],
				description : desc([
					"This suit of armor or set of robes has 4 charges, regaining ld4 expended charges daily at dawn",
                    "When the wearer fails a concentration check on a spell, it can expend 1 charge to succeed instead."
				]),
				additional : "suit of armor or robes",
				eval : function (lvl, chc) { AddMagicItem("Mind Sharpener"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("mind sharpener");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"radiant weapon (prereq: level 6 artificer)" : {
				name : "Radiant Weapon",
				source : [["TCoE", 22]],
				description : desc([
					"The weapon has a +1 bonus to attack and damage rolls made with it and it sheds light",
					"As a bonus action, its wielder can start/stop the light, 30-ft radius bright + 30 ft dim light",
					"The weapon has 4 charges, regaining 1d4 expended charges daily at dawn",
					"As a reaction when hit by an attack, the wielder can expend 1 charge to blind its attacker",
					"The attacker makes a Con save (my spell save DC) or is blinded until its next turn ends"
				]),
				additional : "simple/martial weapon; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 6; },
				eval : function (lvl, chc) { AddMagicItem("Radiant Weapon"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("radiant weapon") != -1 ? CurrentMagicItems.known.indexOf("radiant weapon") : CurrentMagicItems.known.indexOf("radiant weapon-ua");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"repeating shot" : {
				name : "Repeating Shot",
				source : [["TCoE", 22]],
				description : desc([
					"The weapon requiring ammunition has a +1 bonus to attack and damage rolls made with it",
					"It magically produces one piece of ammunition whenever it is used to make a ranged attack",
					"Thus, it doesn't require ammunition and ignores the loading property if it has it"
				]),
				additional : "weapon with ammo; requires attunement",
				eval : function (lvl, chc) { AddMagicItem("Repeating Shot"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("repeating shot");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"repulsion shield (prereq: level 6 artificer)" : {
				name : "Repulsion Shield",
				source : [["TCoE", 23]],
				description : desc([
					"The shield gives its wearer an extra +1 bonus to AC; It has 4 charges, regaining 1d4 daily",
					"As a reaction when hit in melee, the wearer can use 1 charge to push the attacker 15 ft"
				]),
				additional : "shield; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 6; },
				eval : function (lvl, chc) { AddMagicItem("Repulsion Shield"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("repulsion shield") != -1 ? CurrentMagicItems.known.indexOf("repulsion shield") : CurrentMagicItems.known.indexOf("repulsion shield-ua");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"resistant armor (prereq: level 6 artificer)" : {
				name : "Resistant Armor",
				source : [["TCoE", 23]],
				description : desc([
					"The armor gives its wearer resistance to one type of damage, chosen at the time of infusion",
					"Choose from: acid,	cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder"
				]),
				additional : "suit of armor; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 6; },
				eval : function (lvl, chc) { AddMagicItem("Armor of Resistance"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("armor of resistance");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"returning weapon" : {
				name : "Returning Weapon",
				source : [["TCoE", 23]],
				description : "After being used for a ranged attack, the weapon returns immediately; +1 magical bonus",
				additional : "weapon with the thrown property",
				eval : function (lvl, chc) { AddMagicItem("Returning Weapon"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("returning weapon");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"spell-refueling ring (prereq: level 6 artificer)" : {
				name : "Spell-Refueling Ring",
				source : [["TCoE", 23]],
				description : desc([
					"While wearing this ring, once per day you can recover one spell slot of 3-",					
				]),
				additional : "ring; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 6; },
				eval : function (lvl, chc) { AddMagicItem("Spell-Refueling Ring"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("spell-refueling ring");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			}
		},
		"the right tool for the job" : {
			name : "The Right Tool for the Job",
			source : [["TCoE", 13]],
			minlevel : 3,
			description : "\n   In 1 hour (during a rest) I can create a set of artisan's tools that last until I do so again"
		},
		"subclassfeature3" : {
			name : "Artificer Specialist",
			source : [["TCoE", 13]],
			minlevel : 3,
			description : desc([
				'Choose a specialism and put it in the "Class" field on the first page',
				"Choose either alchemist, artillerist, or battle smith"
			])
		},
		"tool expertise" : {
			name : "Tool Expertise",
			source : [["TCoE", 13]],
			minlevel : 6,
			description : " [expertise with all tools I'm proficient with]",
			skillstxt : "Expertise with all tools I'm proficient with",
			eval : function () { Checkbox('Too Exp', true); },
			removeeval : function () { Checkbox('Too Exp', false); }
		},
		"flash of genius" : {
			name : "Flash of Genius",
			source : [["TCoE", 13]],
			minlevel : 7,
			description : "\n   As a reaction when I or another in 30 ft make a check/save, I can add my Int mod to it",
			action : [["reaction", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"magic item adept" : {
			name : "Magic Item Adept",
			source : [["TCoE", 13]],
			minlevel : 10,
			description : "\n   It takes me half the normal time and gold to craft common and uncommon magic items",
			additional : levels.map(function (n) {
				return n < 10 ? "" : "attune to " + (n < 14 ? 4 : n < 18 ? 5 : 6) + " magic items";
			})
		},
		"spell-storing item" : {
			name : "Spell-Storing Item",
			source : [["TCoE", 13]],
			minlevel : 11,
			description : desc([
				"When I finish a long rest, I can infuse a 1st-/2nd-level artificer spell into an item I touch",
				"It has to be a weapon or spellcasting focus for me; Stored spells are lost if I do this again",
				"The spell must have a casting time of 1 action, but I need not have it prepared",
				"A creature holding an infused item can use an action to cast the spell, using my abilities"
			]),
			additional : "cast stored spell",
			usages : "2\u00D7 Int mod per ",
			usagescalc : "event.value = Math.max(2, Number(What('Int Mod')) * 2);",
			recovery : "long rest"
		},
		"magic item savant" : {
			name : "Magic Item Savant",
			source : [["TCoE", 14]],
			minlevel : 14,
			description : " [ignore class/race/spell/level attune require.]"
		},
		"soul of artifice" : {
			name : "Soul of Artifice",
			source : [["TCoE", 14]],
			minlevel : 20,
			description : " [+1 on all saves per attuned magic item]\n   As a reaction when I'm reduced to 0 HP, I can end one infusion to drop to 1 HP instead",
			action : [["reaction", ""]],
			savetxt : {
				text : ["+1 to all saves per attuned magic item"]
			}
		}
	},
	artificerCompFunc : {
		add : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefix = false;
			if (AScompA) {
				for (var a = 1; a < AScompA.length; a++) {
					if (!What(AScompA[a] + 'Comp.Race')) {
						prefix = AScompA[a];
						break;
					}
				}
			}
			if (!prefix) prefix = DoTemplate('AScomp', 'Add');
			Value(prefix + 'Comp.Race', compName);
			var changeMsg = "The " + compName + " has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
			CurrentUpdates.types.push("notes");
			if (!CurrentUpdates.notesChanges) {
				CurrentUpdates.notesChanges = [changeMsg];
			} else {
				CurrentUpdates.notesChanges.push(changeMsg);
			}
			return prefix;
		},
		remove : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			if (!AScompA) return;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
					DoTemplate("AScomp", "Remove", AScompA[a], true);
				}
			}
		},
		find : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefixes = [];
			if (!AScompA) return prefixes;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) prefixes.push(AScompA[a]);
			}
			return prefixes;
		}
	}
};
// Set the Artificer class spell and infusion lists
RunFunctionAtEnd(function(){
	var artSp = [
		"acid splash",
		"booming blade",
		"create bonfire",
		"dancing lights",
		"fire bolt",
		"frostbite",
		"green-flame blade",
		"guidance",
		"light",
		"lightning lure",
		"mage hand",
		"magic stone",
		"mending",
		"message",
		"poison spray",
		"prestidigitation",
		"ray of frost",
		"resistance",
		"shocking grasp",
		"spare the dying",
		"thorn whip",
		"thunderclap",
		// level 1
		"absorb elements",
		"alarm",
		"catapult",
		"cure wounds",
		"detect magic",
		"disguise self",
		"expeditious retreat",
		"faerie fire",
		"false life",
		"feather fall",
		"grease",
		"identify",
		"jump",
		"longstrider",
		"purify food and drink",
		"sanctuary",
		"snare-xgte",
		"tasha's caustic brew",
		// level 2
		"aid",
		"alter self",
		"arcane lock",
		"blur",
		"continual flame",
		"darkvision",
		"enhance ability",
		"enlarge/reduce",
		"heat metal",
		"invisibility",
		"lesser restoration",
		"levitate",
		"magic mouth",
		"magic weapon",
		"protection from poison",
		"pyrotechnics",
		"rope trick",
		"see invisibility",
		"skywrite",
		"spider climb",
		"web",
		// level 3
		"blink",
		"catnap",
		"create food and water",
		"dispel magic",
		"elemental weapon",
		"flame arrows",
		"fly",
		"glyph of warding",
		"haste",
		"intellect fortress",
		"protection from energy",
		"revivify",
		"tiny servant",
		"water breathing",
		"water walk",
		// level 4
		"arcane eye",
		"elemental bane",
		"fabricate",
		"freedom of movement",
		"leomund's secret chest",
		"mordenkainen's faithful hound",
		"mordenkainen's private sanctum",
		"otiluke's resilient sphere",
		"stone shape",
		"stoneskin",
		"summon construct",
		// level 5
		"animate objects",
		"bigby's hand",
		"creation",
		"greater restoration",
		"skill empowerment",
		"transmute rock",
		"wall of stone",
	];
	for (var a = 0; a < artSp.length; a++) {
		var aArtSp = SpellsList[artSp[a]];
		if(aArtSp && aArtSp.classes && aArtSp.classes.indexOf("artificer") === -1) aArtSp.classes.push("artificer");
	};
	var artMi = [
		// 10th-level artificer
		["necklace of adaptation", 10],
		// 14th-level artificer
		["arcane propulsion armor", 14],
	];
	var theObj = ClassList.artificer.features["infuse item"];
	for (var a = 0; a < artMi.length; a++) {
		var MI0 = artMi[a][0];
		var MI1 = artMi[a][1];
		var MI2 = artMi[a][2];
		var anArtMi = MagicItemsList[MI0];
		if (!anArtMi) continue;
		if (MI2) {
			anArtMi = {
				name : MagicItemsList[MI0][MI2].name ? MagicItemsList[MI0][MI2].name : MagicItemsList[MI0].name + " [" + MI2.capitalize() + "]",
				source : MagicItemsList[MI0][MI2].source ? MagicItemsList[MI0][MI2].source : MagicItemsList[MI0].source,
				attunement : MagicItemsList[MI0][MI2].attunement !== undefined ? MagicItemsList[MI0][MI2].attunement : MagicItemsList[MI0].attunement
			}
		}
		var theI = "Replicate: " + anArtMi.name + (MI1 ? " (prereq: level " + MI1 + " artificer)" : "");
		var theILC = theI.toLowerCase();
		theObj[theILC] = {
			name : anArtMi.name,
			description : "",
			source : anArtMi.source,
			eval : 'AddMagicItem("' + anArtMi.name + '");',
			removeeval : MI2 ? 'if (CurrentMagicItems.choices.indexOf("' + MI2 + '") != -1) { MagicItemClear(CurrentMagicItems.choices.indexOf("' + MI2 + '") + 1, true); };' : 'if (CurrentMagicItems.known.indexOf("' + MI0 + '") != -1) { MagicItemClear(CurrentMagicItems.known.indexOf("' + MI0 + '") + 1, true); };'
		};
		if (anArtMi.attunement) theObj[theILC].additional = "requires attunement";
		if (MI1) theObj[theILC].prereqeval = "classes.known.artificer.level >= " + MI1;
		theObj.extrachoices.push(theI);
	};
});
// Add the Alchemist specialism
AddSubClass("artificer", "alchemist", {
	regExpSearch : /^(?=.*alchemist)(?!.*wizard).*$/i,
	subname : "Alchemist",
	fullname : "Alchemist",
	source : [["TCoE", 14]],
	features : {
		"subclassfeature3" : {
			name : "Tools Proficiency",
			source : [["TCoE", 14]],
			minlevel : 3,
			description : " [proficient with alchemist's supplies]",
			toolProfs : ["Alchemist's supplies"],
			spellcastingExtra : ["healing word", "ray of sickness", "flaming sphere", "melf's acid arrow", "gaseous form", "mass healing word", "blight", "death ward", "cloudkill", "raise dead"]
		},
		"subclassfeature3.1" : {
			name : "Experimental Elixir",
			source : [["TCoE", 14]],
			minlevel : 3,
			description : desc([
				"When I finish a long rest I can produce a number of elixirs in empty flasks I touch",
				"Also, as an action, I can expend a spell slot to create one elixir in a touched empty flask",
				"I need alchemist supplies on my person to do this; An elixir lasts until my next long rest",
				"For their effects, see the experimental elixir table on a Notes page; They work like potions"
			]),
			additional : levels.map(function (n) {
				return n < 3 ? "" : "create " + (n < 6 ? 1 : n < 15 ? 2 : 3) + " elixir" + (n < 6 ? "" : "s") + " after finishing a long rest";
			}),
			action : [["action", ""]],
			toNotesPage : [{
				name : "Experimental Elixir Table",
				note : [
					"Whenever I finish a long rest, I can magically produce a number of experimental elixir in empty flasks I touch. I can create one at 3rd level, two at 6th level, and three at 15th level.",
					"Creating an experimental elixir requires me to have alchemist's supplies on my person, and any elixir created like this lasts until it is drunk or until the end of my next long rest.",
					"I can create additional experimental elixirs by expending a spell slot of 1st level or higher for each one. When I do so, I use my action to create the elixir in an empty flask I touch.",
					"As an action, a creature can drink the elixir or administer it to an incapacitated creature.",
					"The effect of an elixir when someone drinks it is found on the table below. Roll to determine the effect for each elixir I create when finishing a long rest. I can choose the effect from the table for those created by expending a spell slot.",
					"\n  D6\tEFFECT",
					"1\tHealing: The drinker regains a number of hit points equal to 2d4 + my Intelligence modifier.",
					"2\tSwiftness: The drinker's walking speed increases by 10 ft for 1 hour.",
					"3\tResilience: The drinker gains a +1 bonus to AC for 10 minutes.",
					"4\tBoldness: The drinker can roll a d4 and add the number rolled to every attack roll and saving throw they make for the next minute.",
					"5\tFlight: The drinker gains a flying speed of 10 ft for 10 minutes.",
					"6\tTransformation: The drinker's body is transformed as if by the alter self spell. The drinker determines the transformation caused by the spell, the effects of which last for 10 minutes."
				]
			}]
		},
		"subclassfeature5" : {
			name : "Alchemical Savant",
			source : [["TCoE", 15]],
			minlevel : 5,
			description : desc([
				"When I cast spells using alchemist's supplies as my spellcasting focus, I can enhance them",
				"I add my Int mod to one roll of acid, fire, necrotic, or poison damage, or restoring HP"
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer") !== -1 && (/acid|fire|necrotic|poison/i).test(fields.Damage_Type)) {
							output.extraDmg += Math.max(Number(What("Int Mod")), 1);
						}
					},
					"Artificer spells that deal acid, fire, necrotic, or poison damage which I cast while using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one damage die roll."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.psionic || spName !== "artificer" || (/color spray|sleep/).test(spellKey)) return;
						var startDescr = spellObj.description;
						var toAdd = Math.max(Number(What("Int Mod")), 1);
						if ((/healing spirit|aura of vitality/i).test(spellKey)) {
							spellObj.description += " (+" + toAdd + " once)";
							return true;
						} else if (genericSpellDmgEdit(spellKey, spellObj, "acid|fire|necro\\.?|necrotic|poison", toAdd, true, true)) {
							return true;
						} else {
							// other healing spells
							var testRegex = /(.*?\d+d\d+)(\+\d+)?((\+\d+d?\d*\/\d?SL)?(\+spell(casting)? (ability )?mod(ifier)?|(\+|-)\d+ \(.{3}\))? hp.*)/i;
							var theMatch = spellObj.description.match(testRegex);
							if (!theMatch) return false;
							if (theMatch[2]) {
								var theMid = Number(theMatch[2]) + toAdd;
								if (theMid > -1) theMid = "+" + theMid;
							} else {
								var theMid = "+" + toAdd;
							}
							spellObj.description = spellObj.description.replace(testRegex, "$1" + theMid + "$3");
						}
						return startDescr !== spellObj.description;
					},
					"Artificer spells I cast using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one die rolled for dealing acid, fire, necrotic, or poison damage, or when restoring hit points."
				]
			}
		},
		"subclassfeature9" : {
			name : "Restorative Reagents",
			source : [["TCoE", 15]],
			minlevel : 9,
			description : desc([
				"Drinking my experimental elixirs now also grants 2d6 + my Int mod in temp HP (min 1)",
				"I can cast Lesser Restoration with alchemist's supplies without a spell slot (Int mod times)"
			]),
			usages : "Int mod per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			limfeaname : "Restorative Reagents: Lesser Restoration",
			spellcastingBonus : {
				name : "Restorative Reagents",
				spells : ["lesser restoration"],
				selection : ["lesser restoration"],
				firstCol : "Sp"
			},
			spellChanges : {
				"lesser restoration" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					changes : "When using my Restorative Reagents class feature, I can cast Lesser Restoration a number of times per long rest equal to my Intelligence modifier. To do so, I have to use alchemist's supplies as my spellcasting focus."
				}
			}
		},
		"subclassfeature15" : {
			name : "Chemical Mastery",
			source : [["TCoE", 15]],
			minlevel : 15,
			description : " [each spell 1\xD7 per long rest]" + desc([
				"I have resistance to acid and poison damage and immunity to being poisoned",
				"I can cast Greater Restoration and Heal each once per long rest without a spell slot",
				"I need alchemist's supplies as a focus for it, but the spells require no material components"
			]),
			dmgres : ["Acid", "Poison"],
			savetxt : { immune : ["poisoned condition"] },
			extraLimitedFeatures : [{
				name : "Chemical Mastery: Greater Restoration",
				usages : 1,
				recovery : "long rest"
			}, {
				name : "Chemical Mastery: Heal",
				usages : 1,
				recovery : "long rest"
			}],
			spellcastingBonus : {
				name : "Chemical Mastery",
				spells : ["greater restoration", "heal"],
				selection : ["greater restoration", "heal"],
				firstCol : "oncelr",
				times : 2
			},
			spellChanges : {
				"greater restoration" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					description : "Reduce exhaustion 1 lvl or end charm, petrify, curse, one ability score reduction, or max HP reduction",
					changes : "When using my Chemical Mastery class feature and alchemist's supplies as my spellcasting focus, I can cast Greater Restoration once per long rest without using a spell slot or requiring other material components."
				},
				"heal" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					description : "1 living creature heals 70 HP and is cured of blindness, deafness, and all diseases",
					changes : "When using my Chemical Mastery class feature and alchemist's supplies as my spellcasting focus, I can cast Heal once per long rest without using a spell slot."
				}
			}
		}
	}
});
// Add the Artillerist specialism
AddSubClass("artificer", "artillerist", {
	regExpSearch : /^(?=.*artillerist)(?!.*wizard).*$/i,
	subname : "Artillerist",
	fullname : "Artillerist",
	source : [["TCoE", 17]],
	features : {
		"subclassfeature3" : {
			name : "Tools Proficiency",
			source : [["TCoE", 17]],
			minlevel : 3,
			description : " [proficient with woodcarver's tools]",
			toolProfs : ["Woodcarver's tools"],
			spellcastingExtra : ["shield", "thunderwave", "scorching ray", "shatter", "fireball", "wind wall", "ice storm", "wall of fire", "cone of cold", "wall of force"]
		},
		"subclassfeature3.1" : {
			name : "Eldritch Cannon",
			source : [["TCoE", 17]],
			minlevel : 3,
			description : desc([
				"As an action, I can use woodcarver's or smith's tools to create an eldritch cannon in 5 ft",
				"I can do this once per long rest, or by expending a spell slot to create one cannon",
				"I decide its size (Small/Tiny), appearance, type: flamethrower, force ballista, or protector",
				"It disappears after 1 hour, when reduced to 0 HP, or if I dismiss it as an action",
				"As a bonus action when within 60 ft of it, I can activate it to move and do its action",
				"I can't have multiple cannons; Select \"Eldritch Cannon\" on a companion page for its stats"
			]),
			usages : 1,
			recovery: "long rest",
			altResource : "SS 1+",
			additional : levels.map(function(n) {
				return n < 3 ? "" : n < 15 ? "create 1 cannon" : "create 2 cannons";
			}),
			action: [["action", " (summon/dismiss)"]],
			eval : function (lvl, chc) {
				ClassList.artificer.artificerCompFunc.add("Eldritch Cannon");
			},
			removeeval : function (lvl, chc) {
				ClassList.artificer.artificerCompFunc.remove("eldritch cannon");
				if (CreatureList["eldritch cannon"]) CreatureList["eldritch cannon"].removeeval();
			}
		},
		"subclassfeature5" : {
			name : "Arcane Firearm",
			source : [["TCoE", 18]],
			minlevel : 5,
			description : " [lasts until I use this feature again]" + desc([
				"After a long rest, I can use woodcarver's tools to enhance a wand, staff, or rod",
				"If I use this as my spellcasting focus for an artificer spell, I add +1d8 to one damage"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer") !== -1) {
							fields.Damage_Die = fields.Damage_Die.replace(/D/g, 'd');
							var d8Regex = /(\d+)d8/;
							if (fields.Damage_Die.indexOf('Bd8') != -1) {
								fields.Damage_Die = fields.Damage_Die.replace('Bd8', 'Cd8');
							} else if (fields.Damage_Die.indexOf('Cd8') != -1) {
								fields.Damage_Die = fields.Damage_Die.replace('Cd8', 'Qd8');
							} else if (d8Regex.test(fields.Damage_Die)) {
								fields.Damage_Die = fields.Damage_Die.replace(d8Regex, Number(fields.Damage_Die.replace(d8Regex, '$1')) + 1 + 'd8');
							} else if (v.thisWeapon[3] == "eldritch blast") {
								fields.Description += (fields.Description ? '; ' : '') + "One ray +1d8 dmg";
							} else {
								fields.Damage_Die += '+1d8';
							}
						}
					},
					"If I use my arcane firearm as a spellcasting focus for an artificer spell, I can add +1d8 to one of the spell's damage rolls."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.psionic || spName !== "artificer") return;
						return genericSpellDmgEdit(spellKey, spellObj, "acid|bludg\\.?|bludgeoning|cold|fire|force|lightn\\.?|lightning|necro\\.?|necrotic|pierc\\.?|piercing|poison|psychic|radiant|slash\\.?|slashing|thunder", "1d8", true, true);
					},
					"If I use my arcane firearm as a spellcasting focus for an artificer spell, I can add +1d8 to one of the spell's damage rolls."
				]
			}
		},
		"subclassfeature9" : {
			name : "Explosive Cannon",
			source : [["TCoE", 18]],
			minlevel : 9,
			description : "\n   My eldritch cannons deal +1d8 damage; As an action, I can detonate a cannon in 60 ft",
			action : [["action", "Eldritch Cannon (detonate)"]],
			eval : function (lvl, chc) {
				if (lvl[0] < 3) return; // Creature's own eval will take care of it
				var crea = ClassList.artificer.artificerCompFunc.find("eldritch cannon");
				for (var c = 0; c < crea.length; c++) {
					var prefix = crea[c];
					for (var i = 1; i <= 3; i++) {
						Value(prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die", "3d8");
					}
				}
			},
			removeeval : function (lvl, chc) {
				if (lvl[1] < 3) return; // Removing all creatures anyway
				var crea = ClassList.artificer.artificerCompFunc.find("eldritch cannon");
				for (var c = 0; c < crea.length; c++) {
					var prefix = crea[c];
					for (var i = 1; i <= 3; i++) {
						if (What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection").toLowerCase().indexOf('detonate') != -1) continue;
						Value(prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die", "2d8");
					}
				}
			}
		},
		"subclassfeature15" : {
			name : "Fortified Position",
			source : [["TCoE", 18]],
			minlevel : 15,
			description : " [cannons grant half cover in 10 ft to allies]" + desc([
				"I can now have two cannons at the same time and activate both with one bonus action",
				"I can create 2 eldritch cannons with the same action (still only one with a spell slot)"
			])
		}
	}
});
// Add the Battle Smith specialism
AddSubClass("artificer", "battle smith", {
	regExpSearch : /^(?=.*battle)(?=.*smith)(?!.*wizard).*$/i,
	subname : "Battle Smith",
	fullname : "Battle Smith",
	source : [["TCoE", 19]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Battle Ready \u0026 Tool Proficiency",
			source : [["TCoE", 19]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with martial weapons and smith's tools",
				"I can use my Intelligence modifier instead of Strength or Dexterity for magic weapons"
			]),
			toolProfs : ["Smith's tools"],
			spellcastingExtra : ["heroism", "shield", "branding smite", "warding bond", "aura of vitality", "conjure barrage", "aura of purity", "fire shield", "banishing smite", "mass cure wounds"],
			weaponProfs : [false, true],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && (v.theWea.isMagicWeapon || v.thisWeapon[1]) && fields.Mod > 0 && fields.Mod < 3 && Number(What("Int")) > Number(What(fields.Mod == 1 ? "Str" : "Dex"))) {
							fields.Mod = 4;
						}
					},
					'I can use my Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls of magic weapons.'
				]
			}
		},
		"subclassfeature3.1" : {
			name : "Steel Defender",
			source : [["TCoE", 19]],
			minlevel : 3,
			description : desc([
				"When I end a long rest, I can use smith's tools to create a steel defender",
				"I determine its appearance; It obeys my commands and it acts on my initiative, after me",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"It can take reactions and move on its turn even if I don't command it",
				"I can't have multiple at once; Select \"Steel Defender\" on a companion page for its stats"
			]),
			eval : function (lvl, chc) {
				ClassList.artificer.artificerCompFunc.add("Steel Defender");
			},
			removeeval : function (lvl, chc) {
				ClassList.artificer.artificerCompFunc.remove("steel defender");
				if (CreatureList["steel defender"]) CreatureList["steel defender"].removeeval();
			}
		},
		"subclassfeature9" : {
			name : "Arcane Jolt",
			source : [["TCoE", 20]],
			minlevel : 9,
			description : function () {
				var descr9 = desc([
					"Once per turn when my steel defender or magic weapon hits a target, I can have it:",
					" \u2022 Deal an extra +2d6 force damage to the target",
					" \u2022 Restore 2d6 HP to another target within 30 ft of the one that was hit"
				]);
				var descr15 = descr9.replace(/2d6/g, '4d6');
				return levels.map(function (n) {
					return n < 9 ? "" : n < 15 ? descr9 : descr15;
				});
			}(),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return n < 9 ? "" : (n < 15 ? 2 : 4) + "d6";
			}),
			eval : function (lvl, chc) {
				if (lvl[0] < 3) return; // Creature's own eval will take care of it
				var crea = ClassList.artificer.artificerCompFunc.find("steel defender");
				for (var c = 0; c < crea.length; c++) {
					var prefix = crea[c];
					Value(prefix + "Comp.Use.Attack.1.Description", "Arcane Jolt (2d6): On hit, deal force damage or heal target in 30 ft");
				}
			},
			removeeval : function (lvl, chc) {
				if (lvl[1] < 3) return; // Removing all creatures anyway
				var crea = ClassList.artificer.artificerCompFunc.find("steel defender");
				for (var c = 0; c < crea.length; c++) {
					var prefix = crea[c];
					Value(prefix + "Comp.Use.Attack.1.Description", "");
				}
			},
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.isMagicWeapon || v.thisWeapon[1]) {
							fields.Description += (fields.Description ? '; ' : '') + 'Arcane Jolt (' + (classes.known.artificer && classes.known.artificer.level >= 15 ? 4 : 2) + 'd6)';
						}
					},
					"Once per turn when I hit with a magic weapon or my steel defender hits with its attack, I can use my Arcane Jolt class feature to have the hit either deal extra force damage or heal somebody within 30 ft of the target hit."
				]
			}
		},
		"subclassfeature15" : {
			name : "Improved Defender",
			source : [["TCoE", 20]],
			minlevel : 15,
			description : desc([
				"My defender's Deflect Attack now deals its attacker 1d4 + my Int mod force damage",
				"My arcane jolt damage/healing increases to 4d6; My steel defender gains +2 AC"
			]),
			eval : function (lvl, chc) {
				if (lvl[0] < 3) return; // Creature's own eval will take care of it
				var crea = ClassList.artificer.artificerCompFunc.find("steel defender");
				for (var c = 0; c < crea.length; c++) {
					var prefix = crea[c];
					var ACfld = prefix + "Comp.Use.AC";
					if (What(ACfld)) Value(ACfld, Number(What(ACfld) + 2));
					Value(prefix + "Comp.Use.Attack.1.Description", "Arcane Jolt (4d6): On hit, deal force damage or heal target in 30 ft");
					Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "Deflect Attack (reaction)");
				}
			},
			removeeval : function (lvl, chc) {
				if (lvl[1] < 3) return; // Removing all creatures anyway
				var crea = ClassList.artificer.artificerCompFunc.find("steel defender");
				for (var c = 0; c < crea.length; c++) {
					var prefix = crea[c];
					var ACfld = prefix + "Comp.Use.AC";
					if (What(ACfld)) Value(ACfld, Number(What(ACfld) - 2));
					Value(prefix + "Comp.Use.Attack.1.Description", "Arcane Jolt (2d6): On hit, deal force damage or heal target in 30 ft");
					Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
				}
			}
		}
	}
});
// Add a subclass for the Artificer (but after all other scripts, so that all armor options are present)
RunFunctionAtEnd(function () {
	var artificerSubclassArmorer = AddSubClass("artificer", "armorer", {
		regExpSearch : /^(?=.*armou?rer)(?!.*wizard).*$/i,
		subname : "Armorer",
		fullname : "Armorer",
		source : [["TCoE", 1]],
		attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		features : {
			"subclassfeature3" : {
				name : "Tools of the Trade",
				source : [["TCoE", 1]],
				minlevel : 3,
				description : " [proficient with heavy armor \u0026 smith's tools]",
				toolProfs : ["Smith's tools"],
				armorProfs : [false, false, true, false],
				spellcastingExtra : ["magic missile", "thunderwave", "mirror image", "shatter", "hypnotic pattern", "lightning bolt", "fire shield", "greater invisibility", "passwall", "wall of force"]
			},
			"subclassfeature3.1" : {
				name : "Arcane Armor",
				source : [["TCoE", 1]],
				minlevel : 3,
				description : desc([
					"As an action, I can use smith's tool to turn a suit of heavy armor into arcane armor",
					"It continues to be power armor until I doff it, don another armor, or I die",
					"It can't be removed against my will, covers entire body, and even replaces missing limbs",
					"I ignore the Strength requirement of power armor and can use it as a spellcasting focus",
				  "I can don/doff the armor as an action, and retract the helmet as a bonus action"
				]),
				action : [["action",""], ["action", "Don/Doff Arcane Armor"], ["bonus action", "Retract Helmet"]]
			},
			"subclassfeature3.2" : {
				name : "Armor Model",
				source : [["TCoE", 2]],
				minlevel : 3,
				description : desc([
					"When I finish a rest, I can use smith's tools to change the model of my power armor",
					'Use the "Choose Feature" button above to select the model currently in use',
					'Each model has their own integrated weapon and extra features, see the "Notes" page'
				]),
				additional : "also see notes page",
				toNotesPage : [{
					name : "Power Armor Model Features",
					note : desc([
						"I can customize my power armor to the guardian or infiltrator model whenever I finish a short or long rest, provided I have smith’s tools in hand.",
						"Each model includes a special weapon. When I attack with that weapon, I can use my Intelligence modifier, instead of Strength or Dexterity, for the attack and damage rolls."
					]) + "\n\n\u25C6 Guardian Power Armor (Armorer 3, TCoE 2)" + desc([
						"\u2022 Thunder Gauntlets: The armored fists of the guardian power armor each count as a simple melee weapon, and each deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than me until the start of me next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.",
						"\u2022 Defensive Field: As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
					]) + "\n\n\u25C6 Infiltrator Power Armor (Armorer 3, TCoE 2)" + desc([
						"\u2022 Lightning Launcher: A gemlike node on one of the armored fists or on the chest (my choice) counts as a simple ranged weapon, with a normal range of 90 ft and a long range of 300 ft. It deals 1d6 lightning damage on a hit. Once on each of my turns when I hit a creature with it, I can deal an extra 1d6 lightning damage to that target.",
						"\u2022 Powered Steps: My walking speed increases by 5 feet.",
						"\u2022 Dampening Field: I have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal."
					])
				}],
				choices : [],
				choiceDependencies : [{
					feature : "subclassfeature15",
					choiceAttribute : true
				}],
				weaponOptions : [{
					regExpSearch : /^(?=.*lightning)(?=.*launcher).*$/i,
					name : "Lightning Launcher",
					source : [["TCoE", 2]],
					ability : 4,
					type : "Simple",
					damage : [1, 6, "lightning"],
					range : "90/300 ft",
					description : "Once per turn on hit, +1d6 lightning damage",
					abilitytodamage : true,
					isLightningLauncher : true
				}, {
					regExpSearch : /^(?=.*thunder)(?=.*gauntlet).*$/i,
					name : "Thunder Gauntlets",
					source : [["TCoE", 2]],
					ability : 4,
					type : "Simple",
					damage : [1, 8, "thunder"],
					range : "Melee",
					description : "Target hit disadv. on attacks vs. others than me until my next turn starts",
					abilitytodamage : true,
					monkweapon : true
				}],
				extraLimitedFeatures : [{
					name : "Defensive Field: Guardian",
					usages : "Proficiency Bonus per ",
					recovery : "long rest",
					usagescalc : "event.value = Number(What('Proficiency Bonus'));"
				}],
				// Do this in the parent object, so that it is always visible and people printing the sheet can more easily switch between the two models
				action : [["bonus action", "Defensive Field (Guardian Model)"]]
			},
			"subclassfeature9" : {
				name : "Armor Modifications",
				source : [["TCoE", 2]],
				minlevel : 9,
				description : desc([
					"Arcane armor now counts as armor, boots, helmet, and a weapon for holding infusions",
					"I can infuse two of those after a rest without counting towards the number of items"
				]),
				additional : "+2 infused items, if used on power armor"
			},
			"subclassfeature15" : {
				name : "Perfected Armor",
				source : [["TCoE", 2]],
				minlevel : 15,
				description :  desc([
					'My armor gets additional features, based on the model; Use "Choose Features" to select it',
					"The guardian gets the ability to pull a creature closer as a reaction and make an attack",
					"The infiltrator gets an upgrade to its lightning launcher weapon attack"
				]),
				toNotesPage : [{
					popupName : "Perfected Armor: Model Features",
					name : "Guardian Perfected Armor Features",
					note : desc([
						"When a Huge or smaller creature you can see ends its turn within 30 feet of me, I can use my reaction to magically force the creature to make a Strength saving throw against my spell save DC, pulling the creature up to 30 feet toward you to an unoccupied space. If I pull the target to a space within 5 feet of you, I can make a melee weapon attack against it as part of this reaction.",
						"I can use this reaction a number of times equal to my Proficiency Bonus. I regain all expended uses of it when I finish a long rest."
					]) + "\n\n\u25C6 Infiltrator Perfected Armor Features (Armorer 15, TCoE 2)" + desc([
						"Any creature that takes lightning damage from my Lightning Launcher glimmers with magical light until the start of my next turn.",
						"The glimmering creature sheds dim light in a 5 ft radius, and it has disadvantage on attack rolls against me, as the light jolts it if it attacks me.",
						"In addition the next attack roll against it by a creature other than me has advantage. If that attack hits, it deals an extra 1d6 lightning damage."
					]),
					amendTo : "Power Armor Model Features"
				}],
				"guardian" : {
					name : "Perfected Armor: Guardian",
					description : " [Proficiency Bonus per long rest]" + desc([
						"As a reaction when a creature I can see ends its turn in 30 ft, I have it make a Str save",
						"If it fails, I pull it up to 30 ft towards me to an empty space",
						"If I pull it within 5 ft, I can make a melee weapon attack vs. it as part of this reaction"
					])
				},
				"infiltrator" : {
					name : "Perfected Armor: Infiltrator",
					description :  desc([
						"Those hit by my lightning launcher shed 5-ft radius dim light until my next turn starts",
						"Glimmering creature has disadvantage on attacks against me",
						"Also, the next attack roll made by another than me vs. the target has advantage",
						"If that attack hits, it deals an extra 1d6 lightning damage"
					])
				},
				// Do these in the parent object, so that they are always visible and people printing the sheet can more easily switch between the two models
				// Also, the armor model can be changed on a short rest, but the limited feature only resets on a long rest, so shouldn't be removed
				action : [["reaction", "Perfected Armor: Guardian"]],
				extraLimitedFeatures : [{
					name : "Perfected Armor: Guardian",
					usages : "Proficienct Bonus per ",
					recovery : "long rest",
					usagescalc : "event.value = Number(What('Proficiency Bonus'));"
				}],
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.theWea.isLightningLauncher) {
								fields.Description = fields.Description.replace("lightning damage", "damage") + (fields.Description ? '; ' : '') + "+1d6 lightning damage and adv. on next attack vs. target not by me";
							}
						},
						"A target hit by my Lightning Launcher attack will shed dim light in a 5-ft radius, and the next attack roll against it by a creature other than me has advantage. If that attack hits, it deals an extra 1d6 lightning damage."
					]
				}
			}
		}
	});
	var itsFea = ClassSubList[artificerSubclassArmorer].features["subclassfeature3.2"];
	var guardianTxt = desc([
		"Both fists are Thunder Gauntlets, simple melee weapons that distract those hit by it",
		"As a bonus action, I can activate a defensive shield to gain my artificer level in temp HP"
	])
	var guardianAdditional = levels.map(function (n) {
		return n + " temp HP; see notes page";
	})
	var infiltratorTxt = desc([
		"+5 ft walking speed; Gemlike node in fist/chest is a ranged weapon, Lightning Launcher",
		"The power armor is formfitting, has negligible weight, and doesn't give disadv. on Stealth"
	])
	for (var armor in ArmourList) {
		var anArm = ArmourList[armor];
		if (anArm.isMagicArmor || !anArm.weight) continue;
		// Add the Guardian variant of the armor
		var gArmName = "Guardian Arcane " + anArm.name;
		itsFea[gArmName.toLowerCase()] = {
			name : (typePF || anArm.name.length < 16 ? "Armor " : "") + "Model: Guardian " + anArm.name,
			description : guardianTxt,
			source : [["TCoE", 2]],
			additional : guardianAdditional,
			armorAdd : gArmName,
			weaponsAdd : ["Thunder Gauntlets"],
			prereqeval : 'testSource("' + armor + '", ArmourList["' + armor + '"], "armorExcl") ? "skip" : true;',
			dependentChoices : "guardian"
		}
		// And now add the Infiltrator variant of the armor
		var iArm = newObj(anArm); iArm.name = "Infiltrator Arcane " + anArm.name;
		iArm.weight = 0; iArm.stealthdis = false; iArm.strReq = 0;
		if (iArm.regExpSearch.indexOf(".*$/") == -1) {
			iArm.regExpSearch = iArm.regExpSearch.replace(/^/, "infiltrator.*");
		} else {
			iArm.regExpSearch = iArm.regExpSearch.replace(/\.\*\$$/, "(?=.infiltrator).*$");
		};
		itsFea[iArm.name.toLowerCase()] = {
			name : "Armor Model: Infiltrator " + anArm.name,
			description : infiltratorTxt,
			source : [["TCoE", 2]],
			speed : { walk : {spd : "+5", enc : "+5" } },
			armorAdd : iArm.name,
			weaponsAdd : ["Lightning Launcher"],
			prereqeval : 'testSource("' + armor + '", ArmourList["' + armor + '"], "armorExcl") ? "skip" : true;',
			armorOptions : [iArm],
			dependentChoices : "infiltrator"
		}
		// Lastly push both choices to the array
		itsFea.choices.push(gArmName, iArm.name);
	}
});
// Add the new special magic items for the artificer class (infusions)
MagicItemsList["arcane propulsion armor"] = {
	name : "Arcane Propulsion Armor",
	source : [["TCoE", 20]],
	type : "armor (any)",
	rarity : "very rare",
	description : "Replaces any missing limbs. Increases walking speed by 5 feet. It can't be removed against my will. I can use either empty-handed gauntlet as a proficient melee weapon with the thrown property. After a throwing attack with it, it returns and reattaches immediately.",
	descriptionFull : "While worn, the armor provides these benefits:\n \u2022 The armor replaces any missing limbs.\n \u2022 The wearer's walking speed increases by 5 feet.\n \u2022 An empty-handed gauntlet is a magic melee weapon with which you're proficient. It deals 1d8 force damage on a hit and has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When thrown, the prosthetic detaches and flies at the target of the attack, then immediately returns to you and reattaches.",
	attunement : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["prefix", "armor"]
	},
	speed : { walk : {spd : "+5", enc : "+5" } },
	weaponsAdd : ["Arcane Propulsion Armor"],
	weaponOptions : {
		regExpSearch : /^(?=.*arcane)(?=.*propulsion)(?=.*armor).*$/i,
		name : "Arcane Propulsion Armor",
		source : [["TCoE", 20]],
		ability : 1,
		type : "AlwaysProf",
		damage : [1, 8, "force"],
		range : "Melee, 20/60 ft",
		description : "Thrown gauntlet; Returns immediately after thrown",
		abilitytodamage : true
	}
}
MagicItemsList["armor of magical strength"] = {
	name : "Armor of Magical Strength",
	source : [["TCoE", 20]],
	type : "armor (any)",
	description : "This armor has 6 charges and regains 1d6 expended charges daily at dawn. If I would be knocked prone, as a reaction I can expend 1 charge to avoid being knocked prone. When I make a strength check, I can expend one charge to add my intelligence modifier.",
	descriptionFull : "This armor has 6 charges and regains 1d6 expended charges daily at dawn. If the wearer would be knocked prone, as a reaction the wearer can expend 1 charge to avoid being knocked prone. When the wearer makes a strength check, they can expend one charge to add their intelligence modifier to that check.",
	attunement : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["prefix", "armor"]
	},
	usages : 6,
	additional : "regains 1d6",
	recovery : "dawn",
	action : [["reaction", " (1 charge, no prone)"],["action", " (1 charge, add Int to Str)"]],
}
MagicItemsList["boots of the winding path"] = {
	name : "Boots of the Winding Path",
	source : [["TCoE", 21]],
	type : "wondrous item",
	description : "While wearing these boots, I can teleport up to 15 ft as a bonus action to an unoccupied space I can see, as long as I occupied that space at some point during the current turn.",
	descriptionFull : "While wearing these boots, a creature can teleport up to 15 feet as a bonus action to an unoccupied space the creature can see. The creature must have occupied that space at some point during the current turn.",
	attunement : true,
	action : [["bonus action", ""]]
}
MagicItemsList["helm of awareness"] = {
	name : "Helm of Awareness",
	source : [["TCoE", 21]],
	type : "helmet",
	description : "I get advantage on initiative rolls and cannot be surprised.",
	descriptionFull : "The wearer of this helmet gains advantage on initiative rolls. Additionally, they cannot be surprised provided they are not incapacitated.",
	attunement : true,
}
MagicItemsList["mind sharpener"] = {
	name : "Mind Sharpener",
	source : [["TCoE", 22]],
	type : "robes or armor (any)",
	description : "This infused item has 4 charges and regains 1d4 expended charges daily at dawn. If I fail a concentration check on a spell, as a reaction I can expend 1 charge to succeed instead.",
	descriptionFull : "This armor has 4 charges and regains 1d4 expended charges daily at dawn. If the wearer would fail a Constitution saving throw to maintain concentration on a spell, as a reaction the wearer can expend 1 charge to succeed at that check instead.",
	usages : 4,
	additional : "regains 1d4",
	recovery : "dawn",
	action : [["reaction", " (1 charge)"]],
}
MagicItemsList["radiant weapon"] = {
	name : "Radiant Weapon",
	nameTest : "Radiant",
	source : [["TCoE", 22]],
	type : "weapon (any)",
	description : "This item adds a +1 on its to hit and damage, has 4 charges, and regains 1d4 at dawn. As a bonus action, I can have it start/stop shedding light, bright in 30 ft, dim in another 30 ft. As a reaction if hit by an attack, I can use 1 charge to blind the attacker until the end of its next turn unless it makes a Con save (my spell DC).",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it. While holding it, the wielder can take a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet. The wielder can extinguish the light as a bonus action.\n   The weapon has 4 charges. As a reaction immediately after being hit by an attack, the wielder can expend 1 charge and cause the attacker to be blinded until the end of the attacker's next turn, unless the attacker suc­ceeds on a Constitution saving throw against your spell save DC. The weapon regains ld4 expended charges daily at dawn. ",
	attunement : true,
	usages : 4,
	recovery : "dawn",
	additional : "blind attacker; regains 1d4",
	action : [["bonus action", " (start/stop light)"], ["reaction", " (1 charge; after hit)"]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/radiant/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Reaction to blind attacker';
				}
			},
			'If I include the word "Radiant" in the name of a weapon, it will be treated as the magic weapon Radiant Weapon. It has +1 to hit and damage and can be used to shed light and to blind an attacker.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && !v.isSpell && (/radiant/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}
		]
	}
}
MagicItemsList["repeating shot"] = {
	name : "Repeating Shot",
	source : [["TCoE", 22]],
	type : "weapon (any with ammunition)",
	description : "When I use this magic weapon to make a ranged attack, it magically produces one piece of ammunition and grants a +1 bonus to its attack and damage rolls. Thus, it doesn't require ammunition and ignores the loading property if it has it. The produced ammunition vanishes once it hits or misses a target.",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it when it's used to make a ranged attack, and it ignores the loading property if it has it.\n   If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic am­munition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target.",
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/ammunition/i).test(inObj.description);
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '').replace(/(;|,)? ?loading/i, '');
				}
			},
			'If I include the words "Repeating Shot" in the name of a weapon with the ammunition property, it will be treated as the magic weapon Repeating Shot. It has +1 to hit and damage and produces its own ammunition, thus its loading property is removed if it has it.'
		],
		atkCalc : [
			function (fields, v, output) {
				if ((/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText) && !v.isSpell) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
}
MagicItemsList["repulsion shield"] = {
	name : "Repulsion Shield",
	source : [["TCoE", 23]],
	type : "shield",
	description : "I gain an additional +1 bonus to Armor Class while wielding this shield. The shield has 4 charges and regains 1d4 expended charges daily at dawn. As a reaction immediately after being hit by a melee attack, I can expend 1 charge to push the attacker up to 15 ft away.",
	descriptionFull : "A creature gains a + 1 bonus to Armor Class while wield­ing this shield.\n   The shield has 4 charges. While holding it, the wielder can use a reaction immediately after being hit by a me­lee attack to expend 1 of the shield's charges and push the attacker up to 15 feet away. The shield regains ld4 expended charges daily at dawn. ",
	weight : 6,
	attunement : true,
	usages : 4,
	additional : "regains 1d4",
	recovery : "dawn",
	action : [["reaction", " (1 charge)"]],
	shieldAdd : ["Repulsion Shield", 3, 6]
}
MagicItemsList["spell-refueling ring"] = {
	name : "Spell-Refueling Ring",
	source : [["TCoE", 23]],
	type : "ring",
	description : "Once per day as an action, I can recover one 3rd level or lower spell slot.",
	descriptionFull : "While wearing this ring, once per day as an action a creature can recover one 3rd level or lower spell slot.",
	attunement : true,
	usages : 1,
	recovery : "dawn",
	action : [["action", " (1 charge)"]],
}
MagicItemsList["returning weapon"] = {
	name : "Returning Weapon",
	nameTest : "Returning",
	source : [["TCoE", 23]],
	type : "weapon (any thrown)",
	description : "This magic weapon grants a +1 bonus to attack and damage rolls I make with it. It returns to my hand immediately after I use it to make a ranged attack.",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it, and it returns to the wielder's hand immediately after it is used to make a ranged attack.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/melee/i).test(inObj.range) || !(/thrown/i).test(inObj.description);
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/^(?=.*returning)(?=.*thrown).*$/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Returns immediately after ranged attack';
				}
			},
			'If I include the word "Returning" in the name of a thrown weapon, it will be treated as the magic weapon Returning Weapon. It has +1 to hit and damage and returns to my hand immediately after I use it to make a ranged attack.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/^(?=.*returning)(?=.*thrown).*$/i).test(v.WeaponText)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
// Add the special artificer constructs, the Homunculus Servant and Steel Defender
CreatureList["homunculus servant"] = {
	name : "Homunculus Servant",
	source : [["TCoE", 21]],
	size : 5,
	type : "Construct",
	subtype : "",
	alignment : "Neutral",
	ac : 13,
	hp : 1,
	hd : [2,4],
	speed : "20 ft, fly 30 ft",
	scores : [4, 15, 12, 10, 10, 7],
	saves : ["", 4, "", "", "", ""],
	skills : {
		"perception" : 4,
		"stealth" : 4
	},
	damage_immunities : "poison",
	condition_immunities : "exhaustion, poisoned",
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Force Strike",
		ability : 0,
		damage : [1, 4, "force"],
		range : "30 ft",
		modifiers : ["oInt", "Prof", ""]
	}],
	features : [{
		name : "Creator",
		description : "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command to do otherwise, in which case it can only take the Force Strike, Dash, Disengage, Help, Hide, or Search action."
	}],
	traits : [{
		name : "Healing",
		description : "The homunculus regains 2d6 hit points whenever the Mending spell is cast on it. Its HP total is equal to its creator's artificer level + its creator's Intelligence modifier + its Constitution modifier. If it dies, it vanishes, leaving its heart in its space."
	}, {
		name : "Evasion",
		description : "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
	}],
	actions : [{
		name : "Channel Magic",
		description : "As a reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 feet of its creator to do so."
	}],
	eval : function(prefix) {
		// set type in the top right
		Value(prefix + 'Comp.Type', "Construct");
		// auto calculate HP
		var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
		HPmaxFld.setAction("Calculate", "event.value = (classes.known.artificer ? classes.known.artificer.level : classes.totallevel) + Number(What('Int Mod')) + Number(What('" + prefix + "Comp.Use.Ability.Con.Mod'));");
		HPmaxFld.readonly = true;
		Hide(prefix + "Buttons.Comp.Use.HP.Max");
		// auto calculate proficiency bonus
		var ProfFld = tDoc.getField(prefix + "Comp.Use.Proficiency Bonus");
		ProfFld.setAction("Calculate", "event.value = Number(How('Proficiency Bonus'));");
		ProfFld.readonly = true;
		ProfFld.calcOrderIndex = tDoc.getField(prefix + "Comp.Use.Attack.1.To Hit").calcOrderIndex - 1;
		// auto calculate hit die
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "event.value = (classes.known.artificer ? classes.known.artificer.level : classes.totallevel);");
		// add bonus action to first page
		processActions(true, "Homunculus Servant", [["bonus action", " (command)"]], "Homunculus Servant");
	},
	removeeval : function(prefix) {
		if (prefix) {
			// reset type in top right
			Value(prefix + 'Comp.Type', "Companion");
			// reset HP, HD and proficiency bonus calculation
			var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
			HPmaxFld.setAction("Calculate", "1");
			HPmaxFld.readonly = false;
			DontPrint(prefix + "Buttons.Comp.Use.HP.Max");
			var ProfFld = tDoc.getField(prefix + "Comp.Use.Proficiency Bonus");
			ProfFld.setAction("Calculate", "1");
			ProfFld.readonly = false;
			tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "1");
		}
		// remove action
		if (!ClassList.artificer || ClassList.artificer.artificerCompFunc.find("homunculus servant").length < (prefix ? 2 : 1)) processActions(false, "Homunculus Servant", [["bonus action", " (command)"]], "Homunculus Servant");
	}
};
CreatureList["eldritch cannon"] = {
	name : "Eldritch Cannon",
	source : [["TCoe", 17]],
	size : 5,
	type : "Construct",
	subtype : "",
	alignment : "Neutral",
	ac : 18,
	hp : 5,
	hd : [],
	speed : "15 ft, climb 15 ft",
	scores : [10, 10, 10, 10, 10, 10],
	saves : ["", "", "", "", "", ""],
	damage_immunities : "poison, psychic",
	condition_immunities : "all conditions",
	passivePerception : 10,
	senses : "",
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 0,
	attacksAction : 0,
	attacks : [{
		name : "Flamethrower",
		ability : 0,
		damage : [2, 8, "fire"],
		range : "15-ft cone",
		description : "Dex save, success - half damage; Unattended flammable objects ignite",
		dc : true,
		abilitytodamage : false,
		tooltip : "The cannon exhales fire in an adjacent 15-ft cone that its creator designates. Each creature in that area must make a Dexterity saving throw against its creator's artificer spell save DC, taking 2d8 fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried."
	}, {
		name : "Force Ballista",
		ability : 0,
		damage : [2, 8, "force"],
		range : "120 ft",
		description : "Creature hit is pushed 5 ft away",
		abilitytodamage : false,
		tooltip : "The cannon's creator makes a ranged spell attack, originating from the cannon, at one creature or object within 120 ft of it. On a hit, the target takes 2d8 force damage, and if the target is a creature, it is pushed up to 5 ft away from the cannon."
	}, {
		name : "Detonate",
		ability : 0,
		damage : [3, 8, "force"],
		range : "20-ft radius",
		description : "Dex save, success - half damage; Destroys cannon; [prereq: 9th level artificer]",
		dc : true,
		abilitytodamage : false,
		tooltip : "As an action, its creator can command the cannon to deto­nate if its creator is within 60 ft of it. Doing so destroys the cannon and forces each creature within 20 ft of it to make a Dexterity saving throw against its creator's artificer spell save DC, taking 3d8 force damage on a failed save or half as much damage on a successful one."
	}],
	features : [{
		name : "Healing",
		description : "The cannon regains 2d6 HP whenever Mending is cast on it."
	}, {
		name : "Cannon Type",
		description : "Upon creation, the creator decides what type of cannon it is: Flamethrower, Force Ballista, or Protector. What feature/attack it can use depends on its type."
	}, {
		name : "Protector",
		description : "The cannon emits a burst of positive energy that grants itself and each creature of its creator's choice within 10 ft of it a number of temporary hit points equal to 1d8 + its creator's Intelligence modifier (minimum of +1)."
	}],
	traits : [{
		name: "Creator",
		description: "The cannon doesn't act unless activated by its creator. It uses its creator's artificer spell attack, spell save DC, and has five times the artificer level in HP. It disappears after 1 hour, when reduced to 0 HP, or when its creator dismisses it as an action."
	}, {
		name: "Activation",
		description: "The creator of the cannon can activate it as a bonus action while within 60 ft of it. Once activated, the cannon does as instructed, moves and uses the action associated with its type: flamethrower attack, force ballista attack, or protector feature."
	}, {
		name: "Detonate",
		description: "The creator of the cannon, if a 9th level artificer (artillerist), can use an action to detonate the cannon when within 60 ft of it, see the attack section."
	}, {
		name: "Shimmering Field",
		description: "If the creator of the cannon is a 15th level artificer (artillerist), they and their allies have half cover while within 10 ft of the cannon."
	}],
	eval : function(prefix) {
		// set type in the top right
		Value(prefix + 'Comp.Type', "Construct");
		// auto calculate HP
		var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
		HPmaxFld.setAction("Calculate", "event.value = 5 * (classes.known.artificer ? classes.known.artificer.level : classes.totallevel);");
		HPmaxFld.readonly = true;
		Hide(prefix + "Buttons.Comp.Use.HP.Max");
		// set attacks
		var artLvl9 = classes.known.artificer && classes.known.artificer.subclass == "artificer-artillerist" && classes.known.artificer.level >= 9;
		for (var i = 1; i <= 3; i++) {
			var ToHitFld = tDoc.getField(prefix + "BlueText.Comp.Use.Attack." + i + ".To Hit Bonus");
			ToHitFld.setAction("Calculate", "var fldVal = What(event.target.name.replace('BlueText.', '').replace('To Hit Bonus', 'Weapon Selection'));\nif (fldVal) {\nvar atkType = fldVal.toLowerCase().indexOf('force ballista') == -1 ? 'dc' : 'attack';\nvar curSp = CurrentSpells.artificer && CurrentSpells.artificer.calcSpellScores && CurrentSpells.artificer.calcSpellScores[atkType] ? CurrentSpells.artificer.calcSpellScores[atkType] : false;\nevent.value = atkType == 'dc' ? (curSp ? 'dc+' + (curSp - 8) : 'dc+oProf+oInt') : (curSp ? curSp : 'oProf+oInt');\n};");
			ToHitFld.calcOrderIndex = tDoc.getField(prefix + "Comp.Use.Attack." + i + ".To Hit").calcOrderIndex - 1;
			ToHitFld.readonly = true;
			if (artLvl9) Value(prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die", "3d8");
		}
		// add bonus action to first page
		processActions(true, "Eldritch Cannon", [["bonus action", " (activate)"]], "Eldritch Cannon");
	},
	removeeval : function(prefix) {
		if (prefix) {
			// reset type in top right
			Value(prefix + 'Comp.Type', "Companion");
			// reset HP and proficiency bonus calculation
			var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
			HPmaxFld.setAction("Calculate", "1");
			HPmaxFld.readonly = false;
			DontPrint(prefix + "Buttons.Comp.Use.HP.Max");
			// reset attacks
			for (var i = 1; i <= 3; i++) {
				var ToHitFld = tDoc.getField(prefix + "BlueText.Comp.Use.Attack." + i + ".To Hit Bonus");
				ToHitFld.setAction("Calculate", "1");
				ToHitFld.readonly = false;
			}
		}
		// remove action
		if (!ClassList.artificer || ClassList.artificer.artificerCompFunc.find("eldritch cannon").length < (prefix ? 2 : 1)) processActions(false, "Eldritch Cannon", [["bonus action", " (activate)"]], "Eldritch Cannon");
	}
};
CreatureList["steel defender"] = {
	name : "Steel Defender",
	source : [["TCoE", 19]],
	size : 3,
	type : "Construct",
	subtype : "",
	alignment : "Neutral",
	ac : 15,
	hp : 7,
	hd : [3, 8],
	speed : "40 ft",
	scores : [14, 12, 14, 4, 10, 6],
	saves : ["", 3, 4, "", "", ""],
	skills : {
		"athletics" : 4,
		"perception" : 4
	},
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, poisoned",
	passivePerception : 14,
	senses : "Darkvision 60 ft",
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Force-Empowered Rend",
		ability : 0,
		damage : [1, 8, "force"],
		range : "Melee (5 ft)",
		modifiers : ["oInt", "Prof", ""]
	}, {
		name : "Deflect Attack (reaction)",
		ability : 0,
		damage : [1, 4, "force"],
		range : "Melee (5 ft)",
		modifiers : ["-Prof", "oInt", ""],
		description : "After using the reaction, the attacker takes this damage, no attack roll required"
	}],
	features : [{
		name : "Creator",
		description : "The steel defender obeys the commands of its creator and shares its proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command to do otherwise, in which case it can only take the Repair, Dash, Force-Empowered Rend, Disengage, Help, Hide, or Search action."
	}, {
		name : "Vigilant",
		description : "The " + (typePF ? "" : "steel ") + "defender can't be surprised."
	}],
	actions : [{
		name : "Healing",
		description : "The steel defender regains 2d6 HP whenever the Mending spell is cast on it. Its HP total is equal to its creator's artificer level times five + its creator's Intelligence modifier + its Constitution modifier. Within an hour of its death, while within 5 ft, its creator can take an action to use smith's tools and expend a spell slot to have it return to full HP after 1 minute."
	}, {
		name : "Repair (3/Day)",
		description : "As an action, the " + (typePF ? "" : "magical mechanisms inside the ") + "steel defender restore" + (typePF ? "s" : "") + " 2d8 + its proficiency bonus in HP to itself or to one construct or object within 5 ft of it."
	}, {
		name : "Deflect Attack (reaction)",
		description : "As a reaction, the steel defender imposes disadvantage on the attack roll of one creature it can see that is within 5 ft of it, provided the attack roll is against a creature other than the steel defender. If its creator is a 15th level artificer (battle smith), this also deals 1d4 + its creator's Int modifier in force damage to the attacker."
	}],
	eval : function(prefix) {
		// set type in the top right
		Value(prefix + 'Comp.Type', "Construct");
		// auto calculate HP
		var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
		HPmaxFld.setAction("Calculate", "event.value = (classes.known.artificer ? classes.known.artificer.level : classes.totallevel) * 5 + Number(What('Int Mod')) + Number(What('" + prefix + "Comp.Use.Ability.Con.Mod'));");
		HPmaxFld.readonly = true;
		Hide(prefix + "Buttons.Comp.Use.HP.Max");
		// auto calculate proficiency bonus
		var ProfFld = tDoc.getField(prefix + "Comp.Use.Proficiency Bonus");
		ProfFld.setAction("Calculate", "event.value = Number(How('Proficiency Bonus'));");
		ProfFld.readonly = true;
		ProfFld.calcOrderIndex = tDoc.getField(prefix + "Comp.Use.Attack.1.To Hit").calcOrderIndex - 1;
		// auto calculate hit die
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "event.value = (classes.known.artificer ? classes.known.artificer.level : classes.totallevel);");
		// add bonus action to first page
		processActions(true, "Steel Defender", [["bonus action", " (command)"], ["action", " (restore)"]], "Steel Defender");
		// set extra abilities from artificer level
		var artLvl = classes.known.artificer && classes.known.artificer.subclass == "artificer-battle smith" ? classes.known.artificer.level : 0;
		if (artLvl >= 9) {
			// Extra damage or healing on attack hit
			Value(prefix + "Comp.Use.Attack.1.Description", "Arcane Jolt (" + (artLvl < 15 ? 2 : 4) + "d6): On hit, deal force damage or heal target in 30 ft");
		}
		if (artLvl >= 15) {
			// +2 AC if level 15 "artificer-battle smith" or higher
			Value(prefix + "Comp.Use.AC", 17);
		} else {
			// Remove Deflect Attack
			Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
		}
	},
	removeeval : function(prefix) {
		if (prefix) {
			// reset type in top right
			Value(prefix + 'Comp.Type', "Companion");
			// reset HP, HD and proficiency bonus calculation
			var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
			HPmaxFld.setAction("Calculate", "1");
			HPmaxFld.readonly = false;
			DontPrint(prefix + "Buttons.Comp.Use.HP.Max");
			var ProfFld = tDoc.getField(prefix + "Comp.Use.Proficiency Bonus");
			ProfFld.setAction("Calculate", "1");
			ProfFld.readonly = false;
			tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "1");
		}
		// remove action
		if (!ClassList.artificer || ClassList.artificer.artificerCompFunc.find("steel defender").length < (prefix ? 2 : 1)) processActions(false, "Steel Defender", [["bonus action", " (command)"], ["action", " (restore)"]], "Steel Defender");
	}
};
//Add special Beastmaster companions, Beast of Land, Sea, and Sky
CreatureList["beast of the sky"] = {
	name : "Beast of the Sky",
	source : ["TCoE", 61],
	size : 4,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 5,
	hd : [1, 6],
	speed : "10 ft, fly 60 ft",
	scores : [6, 16, 13, 8, 14, 11],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 12,
	languages : "understands the languages of its master (me)",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Shred",
		ability : 2,
		damage : [1, 6, "slashing"],
        range : "Melee (5 ft)"
	}],
	features : [{
		name : "Primal Rebirth",
		description : "If the beast has died within the last hour, I can use my action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored."
	}],
	traits : [{
		name : "Flyby",
		description : "The beast doesn't provoke opportunity attacks when it flies out of an enemy's reach."
	}, {
		name : "Primal Bond",
		description : "I can add my proficiency bonus to any ability check or saving throw that the beast makes."
	}],
	eval : function(prefix) {
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "event.value = (classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1) * 5 + 5;");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "event.value = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1;");
	},
	removeeval : function(prefix) {
		if (!prefix) return;
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "");
	}
};
CreatureList["beast of the land"] = {
	name : "Beast of the Land",
	source : ["TCoE", 61],
	size : 3,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 5,
	hd : [1, 8],
	speed : "40 ft, climb 40 ft",
	scores : [14, 14, 15, 8, 14, 11],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "understands the languages of its master (me)",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Maul",
		ability : 1,
		damage : [1, 6, "slashing"],
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Charge trait"
	}],
	features : [{
		name : "Primal Rebirth",
		description : "If the beast has died within the last hour, I can use my action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored."
	}],
	traits : [{
		name : "Charge",
		description : "If the beast moves at least 20 ft straight toward a target and then hits it with a maul attack on the same turn, the target takes an extra 1d6 slashing damage. If the target is a creature, it must succeed on a Strength saving throw against my spell save DC or be knocked prone."
	}, {
		name : "Primal Bond",
		description : "I can add my proficiency bonus to any ability check or saving throw that the beast makes."
	}],
	eval : function(prefix) {
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "event.value = (classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1) * 5 + 5;");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "event.value = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1;");
	},
	removeeval : function(prefix) {
		if (!prefix) return;
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "");
	}
};
CreatureList["beast of the sea"] = {
	name : "Beast of the Sea",
	source : ["TCoE", 61],
	size : 3,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 5,
	hd : [1, 8],
	speed : "5 ft, swim 60 ft",
	scores : [14, 14, 15, 8, 14, 11],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 12,
	languages : "understands the languages of its master (me)",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Binding Strike",
		ability : 1,
		damage : [1, 6, "pierc./bludgeon"],
		range : "Melee (5 ft)",
		description : "On hit, target is grappled (escape DC is spell DC) and beast can't use attack on other target"
	}],
	features : [{
		name : "Primal Rebirth",
		description : "If the beast has died within the last hour, I can use my action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored."
	}],
	traits : [{
        name : "Amphibious",
        description : "The beast can breathe both air and water."
	}, {
		name : "Primal Bond",
		description : "I can add my proficiency bonus to any ability check or saving throw that the beast makes."
	}],
	eval : function(prefix) {
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "event.value = (classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1) * 5 + 5;");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "event.value = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua ? classes.known.rangerua.level : 1;");
	},
	removeeval : function(prefix) {
		if (!prefix) return;
		tDoc.getField(prefix + "Comp.Use.HP.Max").setAction("Calculate", "");
		tDoc.getField(prefix + "Comp.Use.HD.Level").setAction("Calculate", "");
	}
};

// Add Optional Class Features
// Barbarian Optional Class Features
AddFeatureChoice(ClassList.barbarian.features["danger sense"],true,"Primal Knowledge",{
	name:"Primal Knowledge",
	source:["TCoE",24],
	description:desc(["At 3rd level and again at 10th level I gain proficiency with one skill of my choice","I can choose from Animal Handling, Athletics, Intimidation, Nature, Perception and Survival"]),
	skillstxt:"Proficiency with one from Animal Handling, Athletics, Intimidation, Nature, Perception and Survival. Another at 10th level"},
	"Optional Class Features");
AddFeatureChoice(ClassList.barbarian.features["feral instinct"],true,"Instinctive Pounce", {
	name:"Instinctive Pounce",
	source:["TCoE",24],
	description:desc(["As part of the bonus action I take to rage, I can move up to half my speed."]),
	action:[["bonus action","Rage (Instinctive Pounce)"]]},
	"Optional Class Features");

// Bard Optional Class Features
AddFeatureChoice(ClassList.bard.features.spellcasting,true,"Additional Bard Spells",{
	name:"Additional Bard Spells",
	source:["TCoE",27],
	description:"",
	calcChanges:{spellList:[function(e,a,t){"bard"===a&&-1===t.indexOf("bonus")&&(e.extraspells=e.extraspells.concat(["color spray","command","aid","enlarge/reduce","mirror image","intellect fortress","mass healing word","slow","phantasmal killer","rary's telepathic bond","heroes' feast","dream of the blue veil","prismatic spray","antipathy/sympathy","prismatic wall"]))},
	"This optional class feature expands the spells list of the bard class."]}},
	"Optional Class Features");
AddFeatureChoice(ClassList.bard.features["bardic inspiration"],true,"Magical Inspiration",{
	name:"Magical Inspiration",
	source:["TCoE",27],
	description:desc(["A bardic inspiration die recipient can also use it when casting a damaging or healing spell","They can expend the die and add its result to the hit points regained or the damage dealt"])},
	"Optional Class Features");
AddFeatureChoice(ClassList.bard.features.spellcasting,true,"Bardic Versatility",{
	name:"Bardic Versatility",
	source:["TCoE",28],
	description:desc(["When I reach a level that grants the ASI feature I can do one of the following","• Replace one of the skills I chose for the Expertise feature with one of my other skill proficiencies that isn't benefitting from Expertise","• Replace one cantrip I learned from this class's Spellcasting feature with another cantrip from the bard spell list"])},
	"Optional Class Features");

// Cleric Optional Class Features
AddFeatureChoice(ClassList.cleric.features.spellcasting,true,"Additional Cleric Spells",{
	name:"Additional Cleric Spells",
	source:["TCoE",30],
	description:"",
	calcChanges:{spellList:[function(e,a,t){"cleric"===a&&-1===t.indexOf("bonus")&&(e.extraspells=e.extraspells.concat(["aura of vitality","spirit shroud","aura of life","aura of purity","summon celestial","sunbeam","sunburst","power word heal"]))},"This optional class feature expands the spells list of the cleric class."]}},
	"Optional Class Features");
AddFeatureChoice(ClassList.cleric.features["channel divinity"],true,"Harness Divine Power",{
	name : "Channel Divinity: Harness Divine Power",
	source : ["TCoE",30],
	description : "\n   As a bonus action, I can expend one use of Channel Divinity to regain 1 used spell slot, the level of which can be no higher than half my proficient bonus rounded up",
	usages : [0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3],
	recovery : "long rest",
	action : [["bonus action", "Harness Divine Power"]]},
	"Optional Class Features");
RunFunctionAtEnd(function() {
	for (var i = 0; i < ClassList.cleric.subclasses[1].length; i++) {
		var aDomain = ClassSubList[ClassList.cleric.subclasses[1][i]];
		if (!aDomain || !aDomain.features.subclassfeature8 || !(/divine strike|potent spellcasting/i).test(aDomain.features.subclassfeature8.name)) continue;
		CreateClassFeatureVariant(ClassList.cleric.subclasses[1][i], "subclassfeature8", "Blessed Strikes", {
			name : "Blessed Strikes",
			source : ["TCoE",31],
			description : desc([
				"When a creature is damaged by my cantrip/weapon attack, I can do +1d8 radiant damage","Once I deal this extra damage, I can't do so again until the start of my next turn"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isDC) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per round +1d8 radiant damage';
						}
					},
					"Once per turn when a creature takes damage from one of my cantrips or weapon attacks, I can also deal 1d8 radiant damage to the target."
				]} }); } });
AddFeatureChoice(ClassList.cleric.features.spellcasting,true,"Cantrip Versatility",{
	name:"Cantrip Versatility",
	source:["TCoE",31],
	description:"\n   When I reach a level that grants the ASI feature I can replace one cantrip I learned from this class's Spellcasting feature with another cantrip from the cleric spell list"},
	"Optional Class Features");

// Druid Optional Class Features
AddFeatureChoice(ClassList.druid.features.spellcasting,true,"Additional Druid Spells",{
	name:"Additional Druid Spells",
	source:["TCoE",35],
	description:"",
	calcChanges:{spellList:[function(e,a,t){"druid"===a&&-1===t.indexOf("bonus")&&(e.extraspells=e.extraspells.concat(["protection from evil and good","augury","continual flame","enlarge/reduce","summon beast","aura of vitality","elemental weapon","revivify","summon fey","divination","fire shield","summon elemental","cone of cold","flesh to stone","symbol","incendiary cloud"]))},"This optional class feature expands the spells list of the druid class."]}},
	"Optional Class Features");
var wildCompanionObject = {
		name : "Wild Companion",
		source : ["TCoE",35],
		description : desc([
			"I can expend a use of wild shape to cast Find Familiar without material components",
			"The familiar always has the Fey type and disappears after half my druid level in hours"
		]),
		additional : levels.map(function (n) {
			return n < 2 ? "" : Math.floor(n/2) + " hours";
		}),
		spellcastingBonus : {
			name : "Wild Companion",
			spells : ["find familiar"],
			selection : ["find familiar"],
			firstCol : "Sp"
		},
		spellChanges : {
			"find familiar" : {
				components : "V,S",
				compMaterial : "",
				description : "Gain the services of a fey familiar; can see through its eyes; it can deliver touch spells; see B;",
				duration : "\u00BD druid lvl h",
				changes : "By using my Wild Companion class feature, I can expend a use of wild shape to cast Find Familiar without material components. The familiar created this way always has the Fey type and disappears after a number of hours equal to half my druid level."
			} } };
AddFeatureChoice(ClassList.druid.features["subclassfeature2.wild shape"], true, "Wild Companion", wildCompanionObject, "Optional Class Features");
	if (ClassSubList["druid-circle of the moon"]) {
	AddFeatureChoice(ClassSubList["druid-circle of the moon"].features["subclassfeature2.wild shape"], true, "Wild Companion", wildCompanionObject, "Optional Class Features");
};
AddFeatureChoice(ClassList.druid.features.spellcasting,true,"Cantrip Versatility",{
	name:"Cantrip Versatility",
	source:["TCoE",36],
	description:"\n   When I reach a level that grants the ASI feature I can replace one cantrip I learned from this class's Spellcasting feature with another cantrip from the druid spell list"},
	"Optional Class Features");

// Fighter Optional Class Features
AddFeatureChoice(ClassList.fighter.features["fighting style"], true, "Martial Versatility", {
	name:"Martial Versatility",
	source:["TCoE", 42],
	description:desc(["When I reach a level that grants the ASI feature I can do one of the following","• Replace a Fighting Style I know with another one available to fighters","• If I know any maneauvers from the Battle Master, I can replace one maneauver I know for another"])},
	"Optional Class Features");
//Includes fighting styles that are shared with rangers and paladins
AddFightingStyle(["fighter", "ranger", "paladin"], "Blind Fighting", {
		name : "Blind Fighting Style",
		source : ["TCoE",41],
		description : desc([
			"I have blindsight within a range of 10ft","Within this range I can see anything that isn't behind total cover, even if I am blinded or in darkness",
			"However, this doesn't help me if the creature successfully hides from me",
		]),
		vision:[["Blindsight","fixed 10"]]
	});
AddFightingStyle(["fighter", "paladin"], "Interception", {
		name : "Interception Fighting Style",
		source : ["TCoE",41],
		description : desc([
			"As a reaction when a creature I can see hits a target within 5 ft of me, I can intercept",
			"I reduce the damage the target takes by 1d10 + my Proficiency Bonus (min 0 damage)",
			"I can only do this while wielding a shield, or a simple or martial weapon"
		]),
		action : [["reaction", ""]]
	});
AddFightingStyle(["fighter", "ranger"], "Thrown Weapon Fighting", {
		name : "Thrown Weapon Fighting Style",
		source : ["TCoE",42],
		description : desc([
			"I can draw a weapon with the thrown property as part of the attack I make with it",
			"In addition, my ranged attacks made with thrown weapons deal +2 damage"
		]),
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.isMeleeWeapon && (/thrown/i).test(fields.Description)) {
						if (v.isMeleeWeapon) fields.Description += (fields.Description ? '; ' : '') + '+2 damage when thrown';
					};
				},
				"I deal +2 damage when I hit a ranged attack made with a thrown weapon."
			] } });
AddFightingStyle(["fighter"], "Unarmed Fighting", {
		name : "Unarmed Fighting Style",
		source : ["TCoE",42],
		description : desc([
			"My unarmed strikes deal 1d6 bludgeoning damage, or 1d8 damage when I have both hands free",
			"When I successfully grapple a creature, I can deal 1d4 damage to the target at the start of each of my turns"
		]),
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike") {
						if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4") fields.Damage_Die = '1d6';
						fields.Description += (fields.Description ? '; ' : '') + 'Versatile (d8)';
					};
				},
				"My unarmed strikes deal 1d6 bludgeoning damage instead of 1, which increases to 1d8 if I have both hands free to make an unarmed strike with."
			] } });
if (ClassSubList["fighter-battle master"]) {
	// Fighter alternative class features and enhancements (only if Battle Master subclass exists)
	AddFightingStyle(["fighter"], "Superior Technique", {
		name : "Superior Technique",
		source : ["TCoE",42],
		description : " [1 maneuver; d6, 1\xD7 per short rest]" + desc([
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice",
			'Use the "Choose Feature" button above to add a Maneuver to the third page'
		]),
		eval : function () {
			AddFeature('Combat Superiority ', 1, '(d6)', 'short rest', 'Fighter: Superior Technique Fighting Style', 'bonus');
			DontPrint("Class Features Menu");
		},
		removeeval : function () {
			RemoveFeature('Combat Superiority ', 1);
			if (!MakeClassMenu()) Hide("Class Features Menu");
		}
	});


//Fighter Maneauvers	
	
AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Ambush", {
	name : "Ambush",
	source : ["TCoE", 42],
	description : "\n   When I make an initiative roll or a Dex (Stealth) check, I can add a superiority die to it provided I'm not incapacitated"
	});
	
AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Bait and Switch", {
	name : "Bait and Switch",
	source : ["TCoE", 42],
	description : desc([
			"On my turn, I can expend a superiority die to swap places with a creature within 5 ft, that is willing and isn't incapacitated",
			"Doing this costs me 5 ft of movement, but this doesn't provoke opportunity attacks",
			"Me or the creature then add the superiority die as a bonus to the AC until the start of my next turn"
		])
	});
	
AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Brace", {
	name : "Brace",
	source : ["TCoE", 42],
	description : desc(["As a reaction when a creature I can see moves within the reach of the melee weapon I am holding, I can attack it","I expend a superiority die and make one weapon attack, adding the die to the damage"
		]),
	action : [["reaction", ""]]
	});
	
AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Commanding Presence", {
	name : "Commanding Presence",
	source : ["TCoE", 42],
	description : "\n   When I make a Cha (Intimidation) or Cha (Performance) or Cha (Persuasion) check, I can add a superiority die to it"
	});	
	
	
AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Grappling Strike", {
	name : "Grappling Strike",
	source : ["TCoE", 42],
	description : desc(["Immediately after hitting with a melee weapon attack on my turn, I can use a bonus action to grapple","I add the superiority die to the Str (Athletics) check","The target is also restrained while grappled in this way"]),
	action : [["bonus action", " (after melee weapon hit)"]]
	});
	
AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Quick Toss", {
	name : "Quick Toss",
	source : ["TCoE", 42],
	description : desc(["As a bonus action, I can expend a superiority die and make a ranged weapon attack with a weapon that has the thrown property","I can draw the thrown weapon as part of making this attack; If I hit I add the die to the damage"]),
	action : [["bonus action", ""]]
	});
	
	
AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Tactical Assessment", {
	name : "Studious Eye",
	source : ["TCoE", 42],
	description : "\n   When I make a Wis (Insight) or Int (Investigation) or Int (History) check, I can add a superiority die to it"});
}

// Monk Optional Class Features
CreateClassFeatureVariant("monk", "martial arts", "Choose Monk Weapons", {
	name : "Dedicated Weapon",
	source : ["TCoE", 48],
	minlevel : 2 ,
	description : desc([
		"Whenever I finish a short or long rest, I can touch one weapon and focus my ki on it to make it count as a monk weapon until I use this feature again",
		"The chosen weapon must meet these criteria: The weapon must be a simple or martial weapon; I must be proficient with it; It must lack the heavery and special properties",
	]),
	eval : function() {
		ClassList.monk.features["martial arts"].extrachoicesNotInMenu = false;
	},
	removeeval : function() {
		ClassList.monk.features["martial arts"].extrachoicesNotInMenu = true;
		var monkWeapons = GetFeatureChoice("classes", "monk", "martial arts", true);
		for (var i = 0; i < monkWeapons.length; i++) {
			ClassFeatureOptions(['monk', 'martial arts', monkWeapons[i], 'extra'], "remove");
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				var monkWeapons = ["unarmed strike"].concat(GetFeatureChoice("classes", "monk", "martial arts", true));
				if (classes.known.monk && classes.known.monk.level && (monkWeapons.indexOf(v.baseWeaponName) != -1 || (/monk weapon/i).test(v.WeaponText))) {
					var aMonkDie = function (n) { return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10; }(classes.known.monk.level);
					try {
						var curDie = eval_ish(fields.Damage_Die.replace('d', '*'));
					} catch (e) {
						var curDie = 'x';
					};
					if (isNaN(curDie) || curDie < aMonkDie) {
						fields.Damage_Die = '1d' + aMonkDie;
					};
					if (fields.Mod == 1 || fields.Mod == 2 || What(AbilityScores.abbreviations[fields.Mod - 1] + " Mod") < What(AbilityScores.abbreviations[v.StrDex - 1] + " Mod")) {
						fields.Mod = v.StrDex;
					}
				};
			},
			"I can use either Strength or Dexterity and my Martial Arts damage die in place of the normal damage die for any 'Monk Weapons', which include unarmed strike and 5 + my Wisdom modifier of simple or martial weapons of my choice that I'm proficient with and that don't have the two-handed, heavy, or special property.\n   I can select these weapon using the \"Choose Feature\" button on the 2nd page, or have them count as such by including the words \"Monk Weapon\" in the name of the weapon."
		]
	}
});
// Add the monk weapon options as extrachoices
var origMartialArts = ClassList.monk.features["martial arts"];
origMartialArts.extrachoices = [];
origMartialArts.extraname = "Monk Weapon";
origMartialArts.extraTimes = ["5 + Wisdom Modifier"];
origMartialArts.extrachoicesNotInMenu = GetFeatureChoice("classes", "monk", "martial arts") != "choose monk weapons";
RunFunctionAtEnd(function () {
	for (var weapon in WeaponsList) {
		var aWea = WeaponsList[weapon];
		// skip attacks that are not simple or martial weapons, that have the heavy, two-handed, or special property, are magic weapons, or those that are spells or cantrips
		if (aWea.isMagicWeapon || !(/simple|martial/i).test(aWea.type) || (/heavy|special|((^|[^+-]\b)2|\btwo).?hand(ed)?s?/i).test(aWea.description) || (/spell|cantrip/i).test(aWea.list)) continue;
		origMartialArts.extrachoices.push(aWea.name);
		origMartialArts[aWea.name.toLowerCase()] = {
			name : aWea.name,
			description : "",
			source : aWea.source,
			weaponsAdd : [aWea.name],
			prereqeval : 'testSource("' + weapon + '", WeaponsList["' + weapon + '"], "weapExcl") ? "skip" : isProficientWithWeapon("' + weapon + '", WeaponsList["' + weapon + '"]);'
		}
	}
});
// Because the original Martial Arts feature was moved into a choice, but we want to keep its original "additional", "action", "eval", "removeeval" attributes, move some stuff around
if (origMartialArts["\x1B[original] martial arts"]) {
	["additional", "action", "eval", "removeeval"].forEach(function (n) {
		origMartialArts[n] = origMartialArts["\x1B[original] martial arts"][n];
		delete origMartialArts["\x1B[original] martial arts"][n];
	});
}
// Ki enhancements
AddFeatureChoice(ClassList.monk.features.ki, true, "Ki-Fueled Attack", {
	name : "Ki-Fueled Attack",
	source : ["TCoE", 48],
	minlevel : 3 ,
	description : "\n   If I spend a ki point during my action, I can make an unarmed strike as a bonus action before the end of my turn",
	action : [["bonus action", ""]]
}, "Ki Enhancement");
AddFeatureChoice(ClassList.monk.features.ki, true, "Focused Aim (1-3 ki points)", {
	name : "Focused Aim",
	source : ["TCoE", 49],
	minlevel : 5 ,
	description : " [1-3 ki points]\n   When I miss an attack roll, I can spend 1 to 3 ki points to increase my attack roll by 2 for each of these ki points I spend, potentially turning the miss into a hit"
}, "Ki Enhancement");
AddFeatureChoice(ClassList.monk.features.ki, true, "Quickened Healing (2 ki points)", {
	name : "Quickened Healing",
	source : ["TCoE", 49],
	minlevel : 4 ,
	description : " [2 ki points]\n   As an action, I can regain a number of hit points equal to the roll of my martial arts die plus my proficiency bonus",
	action : [["action", ""]]
}, "Ki Enhancement");

// Paladin Optional Class Features

AddFeatureChoice(ClassList.paladin.features.spellcasting, true, "Additional Paladin Spells", {
	name : "Additional Paladin Spells",
	source : ["TCoE", 52],
	description : "",
	calcChanges : {spellList : [function(spList, spName, spType) {if (spName !== "paladin" || spType.indexOf("bonus") !== -1) return;spList.extraspells =spList.extraspells.concat(["gentle repose", "prayer of healing", "warding bond","spirit shroud", "summon celestial"]); },
	"This optional class feature expands the spells list of the paladin class."] } },
	"Optional Class Features");
AddFightingStyle(["paladin"], "Blessed Warrior", {
	name : "Blessed Warrior Fighting Style",
	source : ["TCoE", 52],
	description : desc([
		"I learn two cleric cantrips that count as paladin spells for me and use Cha for spellcasting",
		"Whenever I gain a paladin level, I can swap one of these for another cleric cantrip"
	]),
	spellcastingBonus : {
		name : "Blessed Warrior",
		"class" : "cleric",
		level : [0, 0],
		times : 2
	}
});
AddFeatureChoice(ClassList.paladin.features["subclassfeature3.0-channel divinity"], true, "Harness Divine Power", {
	name : "Channel Divinity: Harness Divine Power",
	source : ["TCoE", 53],
	description : "\n   As a bonus action, I can expend one use of Channel Divinity to regain 1 used spell slot, the level of which can be no higher than half my proficient bonus rounded up",
	usages : [0,0,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3],
	recovery : "long rest",
	action : [["bonus action", "Harness Divine Power"]]
}, "Optional Class Features");
AddFeatureChoice(ClassList.paladin.features["fighting style"], true, "Martial Versatility", {
	name:"Martial Versatility",
	source:["TCoE", 53],
	description:desc(["When I reach a level that grants the ASI feature I can replace a Fighting Style I know with another one available to paladins"])},
	"Optional Class Features");

// Ranger Optional Class Features
/*
//Deft Explorer
var origNatExpl = ClassList.ranger.features["natural explorer"];
var origNatExplNm = "\x1B[original] " + origNatExpl.name;
origNatExpl.choices = [origNatExplNm];
origNatExpl.defaultChoice = origNatExplNm.toLowerCase();
origNatExpl[origNatExplNm.toLowerCase()] = {
	name : origNatExpl.name,
	source : origNatExpl.source,
	description : origNatExpl.description,
	additional : origNatExpl.additional,
	extraname : origNatExpl.extraname,
	extrachoices : origNatExpl.extrachoices
};
delete origNatExpl.additional;
origNatExpl.description = '\n   Select ' + origNatExpl.name + ' or a variant using the "Choose Feature" button above';
origNatExpl.name = origNatExpl.name + " or a Variant";
origNatExpl.resetNatExplExtrachoices = function () {
	var extraSel = GetFeatureChoice("classes", "ranger", "natural explorer", true);
	var curExtraName = ClassList.ranger.features["natural explorer"].extraname;
	for (var i = 0; i < extraSel.length; i++) {
		if (extraSel[i] == "travel benefits") ClassList.ranger.features["natural explorer"].extraname = "Ranger 1";
		ClassFeatureOptions(['ranger', 'natural explorer', extraSel[i], 'extra'], "remove");
		if (extraSel[i] == "travel benefits") ClassList.ranger.features["natural explorer"].extraname = curExtraName;
	};
};
// Add the new feature
AddFeatureChoice(origNatExpl, false, "Deft Explorer", {
	name : "Deft Explorer",
	source : ["TCoE", 56],
	description :desc(["You gain the Canny benefit, then gain Roving at 6th level and Tireless at 10th level","Use the Choose Feature button above to add the benefit's description to the third page'"]),
	eval : function() {
		var natExplFea = ClassList.ranger.features["natural explorer"];
		natExplFea.resetNatExplExtrachoices();
		natExplFea.extraname = natExplFea["deft explorer"].extraname;
		natExplFea.extrachoices = natExplFea["deft explorer"].extrachoices;
		natExplFea.extraTimes = natExplFea["deft explorer"].extraTimes;
	},
	removeeval : function(lvlA, choiceA) {
		var natExplFea = ClassList.ranger.features["natural explorer"];
		var newChoice = choiceA[1];
		natExplFea.resetNatExplExtrachoices();
		if (newChoice.indexOf("\x1B[original]") !== -1) {
			natExplFea.extraname = "Ranger 1";
			ClassFeatureOptions(['ranger', 'natural explorer', "travel benefits", 'extra']);
		}
		if (newChoice && natExplFea[newChoice]) {
			natExplFea.extraname = natExplFea[newChoice].extraname ? natExplFea[newChoice].extraname : "";
			natExplFea.extrachoices = natExplFea[newChoice].extrachoices ? natExplFea[newChoice].extrachoices : "";
			natExplFea.extraTimes = natExplFea[newChoice].extraTimes ? natExplFea[newChoice].extraTimes : "";
		}
	},
	additional : levels.map(function (n) {
		return n < 6 ? "1 benefit" : (n < 10 ? 2 : 3) + " benefits";
	}),
	extraTimes : levels.map(function (n) {
		return n < 6 ? 1 : n < 10 ? 2 : 3;
	}),
	extraname : "Deft Explorer Benefit",
	extrachoices : ["Canny", "Roving", "Tireless"]
});
origNatExpl.canny = {
	name : "Canny",
	source : ["TCoE", 56],
	minlevel : 1,
	description : desc([
		"I learn two languages of my choice and expertise with one skill I am proficient with"]),
	languageProfs : [2],
	skillstxt : "Expertise with one skill I am proficient with",
};
origNatExpl.roving = {
	name : "Roving",
	source : ["TCoE", 56],
	description : "\n   I gain +5 ft walking speed and climbing and swimming speed equal to my walking speed",
	speed : {
		walk : { spd : "+5", enc : "+5" },
		climb : { spd : "walk", enc : "walk" },
		swim : { spd : "walk", enc : "walk" }
	},
	prereqeval : function(v) {
		return classes.known.ranger.level >= 6;}
};
origNatExpl.tireless = {
	name : "Tireless",
	source : ["TCoE", 56],
	description : desc([
		"Whenever I finish a short or long rest, I reduce my exhaustion level, if any, by 1",
		"As an action a number of times per day, I can give myself temp HP of 1d8 + Wis mod"
	]),
	action : [["action", ""]],
	usages : [0,0,0,0,0,0,0,0,0,4,4,4,5,5,5,5,6,6,6,6],
	recovery : "long rest",
	prereqeval : function(v) {
		return classes.known.ranger.level >= 10;}
};
var origNatExplCurSel = GetFeatureChoice("classes", "ranger", "natural explorer", false);
if (origNatExplCurSel) {
	origNatExpl.extraname = origNatExpl[origNatExplCurSel].extraname ? origNatExpl[origNatExplCurSel].extraname : "";
	origNatExpl.extrachoices = origNatExpl[origNatExplCurSel].extrachoices ? origNatExpl[origNatExplCurSel].extrachoices : "";
	origNatExpl.extraTimes = origNatExpl[origNatExplCurSel].extraTimes ? origNatExpl[origNatExplCurSel].extraTimes : "";
}*/
// Favored Foe
var origFavoredEnemy = ClassList.ranger.features["favored enemy"];
var origFavoredEnemyNm = "\x1B[original] " + origFavoredEnemy.name;
origFavoredEnemy.choices = [origFavoredEnemyNm];
origFavoredEnemy.defaultChoice = origFavoredEnemyNm.toLowerCase();
origFavoredEnemy[origFavoredEnemyNm.toLowerCase()] = {
	name : origFavoredEnemy.name,
	source : origFavoredEnemy.source,
	description : origFavoredEnemy.description,
	additional : origFavoredEnemy.additional
};
delete origFavoredEnemy.additional;
origFavoredEnemy.description = '\n   Select ' + origFavoredEnemy.name + ' or a variant using the "Choose Feature" button above';
origFavoredEnemy.name = origFavoredEnemy.name + " or a Variant";
var curFavEnemyChoice = GetFeatureChoice("classes", "ranger", "favored enemy");
origFavoredEnemy.extrachoicesNotInMenu = !!curFavEnemyChoice && curFavEnemyChoice != ClassList.ranger.features["favored enemy"].choices[0].toLowerCase();
AddFeatureChoice(origFavoredEnemy, false, "Favored Foe", {
	name : "Favored Foe",
	source : ["TCoE", 56],
	usages: "Proficiency bonus per ",
	usagescalc : "event.value = What('Proficiency Bonus')",
	recovery : "long rest",
	description : desc([
		"When I hit a creature with an attack roll, I can mark it as my favored enemy for 1 minute or until I lose Conc","The first time I damage my favored enemy on a turn I increase the damage by 1d4","The damage increases to 1d6 at 6th level and 1d8 at 14th level"
	]),
	eval : function() {
		ClassList.ranger.features["favored enemy"].extrachoicesNotInMenu = true;
		var favEnemies = GetFeatureChoice("classes", "ranger', 'favored enemy", true);
		for (var i = 0; i < favEnemies.length; i++) {
			ClassFeatureOptions(['ranger', 'favored enemy', favEnemies[i], 'extra'], "remove");
		}
	},
	removeeval : function() {
		ClassList.ranger.features["favored enemy"].extrachoicesNotInMenu = false;
	},
});
AddFeatureChoice(ClassList.ranger.features.spellcasting, true, "Additional Ranger Spells", {
	name : "Additional Ranger Spells",
	source : ["TCoE", 57],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				if (spName !== "ranger" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["entangle", "searing smite", "aid", "enhance ability", "gust of wind", "magic weapon", "summon beast", "elemental weapon", "meld into stone", "revivify", "summon fey", "dominate beast", "summon elemental", "greater restoration"]);
			},
			"This optional class feature expands the spells list of the ranger class."
		]
	}
}, "Optional Class Features");
AddFightingStyle(["ranger"], "Druidic Warrior", {
	name : "Druidic Warrior Fighting Style",
	source : ["TCoE", 57],
	description : desc([
		"I learn two druid cantrips that count as ranger spells for me and use Wis for spellcasting",
		"Whenever I gain a ranger level, I can swap one of these for another druid cantrip"
	]),
	spellcastingBonus : {
		name : "Druidic Warrior",
		"class" : "druid",
		level : [0, 0],
		times : 2
	}
});
AddFeatureChoice(ClassList.ranger.features.spellcasting, true, "Spellcasting Focus", {
	name : "Spellcasting Focus",
	source : ["TCoE", 57],
	description : "\n   I can use a druidic focus as a spellcasting focus for my ranger spells"
}, "Optional Class Features");
AddFeatureChoice(ClassList.ranger.features["fighting style"], true, "Martial Versatility", {
	name:"Martial Versatility",
	source:["TCoE", 57],
	description:desc(["When I reach a level that grants the ASI feature I can replace a Fighting Style I know with another one available to rangers"])},
	"Optional Class Features");
// Primeval Awareness
CreateClassFeatureVariant("ranger", "primeval awareness", "Primal Awareness (bonus spells)", {
	name : "Primal Awareness",
	source : ["TCoE", 57],
	description : desc([
		"I get bonus spells known, which do not count against the number of spells I can know",
		"In addition, I can cast each once per long rest without expending a spell slot"
	]),
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName) {
				var bonusSpells = ["speak with animals", "beast sense", "speak with plants", "locate creature", "commune with nature"];
				if (spName == "ranger" && bonusSpells.indexOf(spellKey) != -1) {
					spellObj.firstCol = "oncelr";
					return true;
				};
			},
			"I can cast these spells each once per long rest without expending a spell slot, but also as normal by expending a spell slot."
		],
		spellList : [
			function(spList, spName, spType) {
				// Remove the bonus spells from the normally selectable list
				if (spName == "ranger") {
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(["speak with animals", "beast sense", "speak with plants", "locate creature", "commune with nature"]);
				}
			},
			"I know the following spells, without them counting towards the maximum number of spells I can know: Speak with Animals, Beast Sense, Speak with Plants, Locate Creature, and Commune with Nature."
		]
	},
	changeeval : function() {
		// as another subclass might override the 'extra' attribute in the CurrentSpells object, add it through an eval
		if (!CurrentSpells.ranger) return;
		var bonusSpells = ["speak with animals", "beast sense", "speak with plants", "locate creature", "commune with nature"];
		if (!CurrentSpells.ranger.extra) CurrentSpells.ranger.extra = [];
		if (CurrentSpells.ranger.extra.toString().indexOf(bonusSpells.toString()) == -1) {
			var newExtra = [];
			for (var i = 0; i < CurrentSpells.ranger.extra.length; i++) {
				var anExtra = CurrentSpells.ranger.extra[i];
				if (anExtra && anExtra !== "AddToKnown" && bonusSpells.indexOf(anExtra) == -1) newExtra.push(anExtra);
			}
			CurrentSpells.ranger.extra = newExtra.concat(bonusSpells);
			CurrentSpells.ranger.extra[100] = "AddToKnown";
		}
	},
	removeeval : function() {
		// remove the extra spells
		if (!CurrentSpells.ranger || !CurrentSpells.ranger.extra) return;
		var bonusSpells = ["speak with animals", "beast sense", "speak with plants", "locate creature", "commune with nature"];
		if (CurrentSpells.ranger.extra.toString().indexOf(bonusSpells.toString()) !== -1) {
			var newExtra = CurrentSpells.ranger.extra.join("##").replace(bonusSpells.join("##"), "").replace("AddToKnown", "").replace(/#+$/, '');
			CurrentSpells.ranger.extra = newExtra.split("##");
			CurrentSpells.ranger.extra[100] = "AddToKnown";
		}
	}
});
// Nature's Veil
CreateClassFeatureVariant("ranger", "hide in plain sight", "Nature's Veil", {
	name : "Nature's Veil",
	source : ["TCoE", 57],
	description : desc([
		"As a bonus action, I can become invisible along with any equipment I'm wearing/carrying",
		"This invisibility lasts until the start of my next turn"
	]),
	action : [["bonus action", ""]],
	usages: "Proficiency bonus per ",
	usagescalc : "event.value = What('Proficiency Bonus')",
	recovery : "long rest"
});
//Beast Master Companions PLACEHOLDER
if (ClassSubList["ranger-beast master"]) {
	AddFeatureChoice(ClassSubList["ranger-beast master"].features["subclassfeature3"], true, "Beast of the Land/Sea/Sky", {
		name : "Beast of the Land/Sea/Sky",
		source : ["TCoE", 61],
		description : desc([
			"My ranger's companion can be a primal beast whose lineage stretches back to the beginning",
			"This beast of the air or earth takes the form of a regular animal, but has different abilities",
			"In combat the beast acts during my turn, it can move and use its Reaction on its own",
			"It can only dodge, unless as a bonus action I  command it to take another action",
			"I can sacrifice my Attack to make the beast take the Attack Action",
			"If it dies, I can revive it within 1 hour as an action where I expend a spell slot and touch it",
			"It then returns to life with all its hit points after 1 minute"
		]),
		action : [["bonus action", "Command: Beast of the Land/Sea/Sky"], ["action", "Revive: Beast of the Land/Sea/Sky"]["action", "Attack: Beast of the Land/Sea/Sky"]]
	}, "Optional Class Features");
}
// Add the Ranger alternative class features also to the Revised Ranger, if it exists
if (ClassList["rangerua"]) {
	// Make natural explorer into a choice (can't be done by automation because of extrachoices) and add "Deft Explorer" variant option
	var origNatExpl = ClassList.rangerua.features["natural explorer"];
	var origNatExplNm = "\x1B[original] " + origNatExpl.name;
	origNatExpl.choices = [origNatExplNm];
	origNatExpl.defaultChoice = origNatExplNm.toLowerCase();
	origNatExpl[origNatExplNm.toLowerCase()] = {
		name : origNatExpl.name,
		source : origNatExpl.source,
		description : origNatExpl.description,
		extraname : origNatExpl.extraname
	};
	origNatExpl.description = '\n   Select ' + origNatExpl.name + ' or a variant using the "Choose Feature" button above';
	origNatExpl.name = origNatExpl.name + " or a Variant";
	origNatExpl.resetNatExplExtrachoices = function () {
		var extraSel = GetFeatureChoice("classes", "rangerua", "natural explorer", true);
		for (var i = 0; i < extraSel.length; i++) {
			ClassFeatureOptions(['rangerua', 'natural explorer', extraSel[i], 'extra'], "remove");
		};
	};
	AddFeatureChoice(origNatExpl, false, "Deft Explorer", {
		name : "Deft Explorer",
		source : ["UA:CFV", 7],
		description : '\n   Use the "Choose Feature" button above to add a deft explorer benefit to the third page',
		eval : function() {
			var natExplFea = ClassList.rangerua.features["natural explorer"];
			natExplFea.resetNatExplExtrachoices();
			natExplFea.extraname = natExplFea["deft explorer"].extraname;
			natExplFea.extrachoices = natExplFea["deft explorer"].extrachoices;
			natExplFea.extraTimes = natExplFea["deft explorer"].extraTimes;
		},
		removeeval : function(lvlA, choiceA) {
			var natExplFea = ClassList.rangerua.features["natural explorer"];
			var newChoice = choiceA[1];
			natExplFea.resetNatExplExtrachoices();
			if (newChoice && natExplFea[newChoice]) {
				natExplFea.extraname = natExplFea[newChoice].extraname ? natExplFea[newChoice].extraname : "";
				natExplFea.extrachoices = natExplFea[newChoice].extrachoices ? natExplFea[newChoice].extrachoices : "";
				natExplFea.extraTimes = natExplFea[newChoice].extraTimes ? natExplFea[newChoice].extraTimes : "";
				if (newChoice.indexOf("\x1B[original]") !== -1) {
					ClassFeatureOptions(['rangerua', 'natural explorer', "travel benefits", 'extra']);
				}
			}
		},
		additional : levels.map(function (n) {
			return n < 6 ? "1 benefit" : (n < 10 ? 2 : 3) + " benefits";
		}),
		extraTimes : levels.map(function (n) {
			return n < 6 ? 1 : n < 10 ? 2 : 3;
		}),
		extraname : "Deft Explorer Benefit",
		extrachoices : ["Canny", "Roving", "Tireless"]
	});
	origNatExpl.canny = {
		name : "Canny",
		source : ["UA:CFV", 7],
		description : desc([
			"I learn two language of my choice, and proficiency and expertise with one skill of my choice",
			"The skill I have to choose from: Animal Handling, Athletics, History, Insight, Investigation,",
			"Medicine, Nature, Perception, Stealth, or Survival"
		]),
		languageProfs : [2],
		skillstxt : "Proficiency and expertise with one from Animal Handling, Athletics, History, Insight, Investigation, Medicine, Nature, Perception, Stealth, or Survival"
	};
	origNatExpl.roving = {
		name : "Roving",
		source : ["UA:CFV", 7],
		description : "\n   I gain +5 ft walking speed and climbing and swimming speed equal to my walking speed",
		speed : {
			walk : { spd : "+5", enc : "+5" },
			climb : { spd : "walk", enc : "walk" },
			swim : { spd : "walk", enc : "walk" }
		}
	};
	origNatExpl.tireless = {
		name : "Tireless",
		source : ["UA:CFV", 7],
		description : desc([
			"Whenever I finish a short or long rest, I reduce my exhaustion level, if any, by 1",
			"As an action a number of times per day, I can give myself temp HP of 1d10 + Wis mod"
		]),
		action : [["action", ""]],
		usages : "Wisdom modifier per ",
		usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
		recovery : "long rest"
	};
	// Now set the extraname and extrachoices to the current selection
	var origNatExplCurSel = GetFeatureChoice("classes", "rangerua", "natural explorer", false);
	if (origNatExplCurSel) {
		origNatExpl.extraname = origNatExpl[origNatExplCurSel].extraname ? origNatExpl[origNatExplCurSel].extraname : "";
		origNatExpl.extrachoices = origNatExpl[origNatExplCurSel].extrachoices ? origNatExpl[origNatExplCurSel].extrachoices : "";
		origNatExpl.extraTimes = origNatExpl[origNatExplCurSel].extraTimes ? origNatExpl[origNatExplCurSel].extraTimes : "";
	}

	// Make favored enemy into a choice (can't be done by automation because of choices) and add "Favored Foe" variant option
	var origFavoredEnemy = ClassList.rangerua.features["favored enemy"];
	// Move some attributes from the main object to the favored enemy choice objects
	var moveOrigFavoredEnemyAttributes = function () {
		var attr = ['additional', 'languageProfs', 'calcChanges'];
		for (var j = 0; j < attr.length; j++) {
			// Move the attribute to each of the choices
			for (var i = 0; i < origFavoredEnemy.choices.length; i++) {
				var aCh = origFavoredEnemy[origFavoredEnemy.choices[i].toLowerCase()];
				aCh[attr[j]] = origFavoredEnemy[attr[j]];
			}
			// Now delete the attributes from the parent object
			delete origFavoredEnemy[attr[j]];
		}
	}();
	// Now add the alternative class feature as another choice
	AddFeatureChoice(origFavoredEnemy, false, "[alternative feature] Favored Foe", {
		name : "Favored Foe",
		source : ["UA:CFV", 7],
		description : desc([
			"I know Hunter's Mark and it doesn't count against the number of spells I can know",
			"I can cast it a number of times without using a spell slot or requiring concentration",
			"I can also use a spell slot to cast it as normal, but then it does require concentration"
		]),
		spellcastingBonus : {
			name : "Favored Foe",
			spells : ["hunter's mark"],
			selection : ["hunter's mark"],
			firstCol : "Sp"
		},
		usages : "Wisdom modifier per ",
		usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
		recovery : "long rest",
		calcChanges : {
			spellList : [
				function(spList, spName, spType) {
					if (spName == "uaranger" && spType.indexOf("bonus") == -1) {
						if (!spList.notspells) spList.notspells = [];
						spList.notspells = spList.notspells.concat(["hunter's mark"]);
					}
				}
			]
		}
	});

	// The enhancement option for fighting styles has to be added to each class separately
	AddFeatureChoice(ClassList.rangerua.features["fighting style"], true, "Martial Versatility", {
		name : "Martial Versatility",
		source : ["UA:CFV", 12],
		description : "\n   Whenever I gain a ranger level, I can swap a fighting style I know for another I'm allowed"
	}, "Fighting Style Enhancement");
	AddFeatureChoice(ClassList.rangerua.features.spellcasting, true, "Expanded Spell List", {
		name : "Expanded Ranger Spell List",
		source : ["UA:CFV", 7],
		description : "",
		calcChanges : {
			spellList : [
				function(spList, spName, spType) {
					// Stop this is not the class' spell list or if this is for a bonus spell entry
					if (spName !== "rangerua" || spType.indexOf("bonus") !== -1) return;
					spList.extraspells = spList.extraspells.concat(["aid", "entangle", "searing smite", "gust of wind", "magic weapon", "enhance ability", "warding bond", "blinding smite", "meld into stone", "revivify", "tongues", "death ward", "dominate beast", "awaken", "greater restoration"]);
				},
				"This alternative class feature enhancement expands the spells list of the ranger class."
			]
		}
	}, "Ranger Spellcasting Enhancement");
	AddFeatureChoice(ClassList.rangerua.features.spellcasting, true, "Spell Versatility", {
		name : "Spell Versatility",
		source : ["UA:CFV", 8],
		description : "\n   When I finish a long rest, I can replace a ranger spell I know with another of the same level"
	}, "Ranger Spellcasting Enhancement");
	AddFeatureChoice(ClassList.rangerua.features.spellcasting, true, "Spellcasting Focus", {
		name : "Spellcasting Focus",
		source : ["UA:CFV", 8],
		description : "\n   I can use a druidic focus as a spellcasting focus for my ranger spells"
	}, "Ranger Spellcasting Enhancement");
	CreateClassFeatureVariant("rangerua", "primeval awareness", "Primal Awareness (bonus spells)", {
		name : "Primal Awareness",
		source : ["UA:CFV", 8],
		description : desc([
			"I get bonus spells known, which do not count against the number of spells I can know",
			"In addition, I can cast each once per long rest without expending a spell slot"
		]),
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName) {
					var bonusSpells = ["detect magic", "speak with animals", "beast sense", "locate animals or plants", "speak with plants", "locate creature", "commune with nature"];
					if (spName == "rangerua" && bonusSpells.indexOf(spellKey) != -1) {
						spellObj.firstCol = "oncelr";
						return true;
					};
				},
				"I can cast these spells each once per long rest without expending a spell slot, but also as normal by expending a spell slot."
			],
			spellList : [
				function(spList, spName, spType) {
					// Remove the bonus spells from the normally selectable list
					if (spName == "rangerua") {
						if (!spList.notspells) spList.notspells = [];
						spList.notspells = spList.notspells.concat(["detect magic", "speak with animals", "beast sense", "locate animals or plants", "speak with plants", "locate creature", "commune with nature"]);
					}
				},
				"I know the following spells, without them counting towards the maximum number of spells I can know: Detect Magic, Speak with Animals, Beast Sense, Locate Animals or Plants, Speak with Plants, Locate Creature, and Commune with Nature."
			]
		},
		changeeval : function() {
			// as another subclass might override the 'extra' attribute in the CurrentSpells object, add it through an eval
			if (!CurrentSpells.rangerua) return;
			var bonusSpells = ["detect magic", "speak with animals", "beast sense", "locate animals or plants", "speak with plants", "locate creature", "commune with nature"];
			if (!CurrentSpells.rangerua.extra) CurrentSpells.rangerua.extra = [];
			if (CurrentSpells.rangerua.extra.toString().indexOf(bonusSpells.toString()) == -1) {
				var newExtra = [];
				for (var i = 0; i < CurrentSpells.rangerua.extra.length; i++) {
					var anExtra = CurrentSpells.rangerua.extra[i];
					if (anExtra && anExtra !== "AddToKnown" && bonusSpells.indexOf(anExtra) == -1) newExtra.push(anExtra);
				}
				CurrentSpells.rangerua.extra = newExtra.concat(bonusSpells);
				CurrentSpells.rangerua.extra[100] = "AddToKnown";
			}
		},
		removeeval : function() {
			// remove the extra spells
			if (!CurrentSpells.rangerua || !CurrentSpells.rangerua.extra) return;
			var bonusSpells = ["detect magic", "speak with animals", "beast sense", "locate animals or plants", "speak with plants", "locate creature", "commune with nature"];
			if (CurrentSpells.rangerua.extra.toString().indexOf(bonusSpells.toString()) !== -1) {
				var newExtra = CurrentSpells.rangerua.extra.join("##").replace(bonusSpells.join("##"), "").replace("AddToKnown", "").replace(/#+$/, '');
				CurrentSpells.rangerua.extra = newExtra.split("##");
				CurrentSpells.rangerua.extra[100] = "AddToKnown";
			}
		}
	});
	CreateClassFeatureVariant("rangerua", "hide in plain sight", "Fade Away", {
		name : "Fade Away",
		source : ["UA:CFV", 8],
		description : desc([
			"As a bonus action, I can become invisible along with any equipment I'm wearing/carrying",
			"This invisibility lasts until the start of my next turn"
		]),
		action : [["bonus action", ""]],
		usages : 1,
		recovery : "short rest"
	});
}

// Rogue Optional Class Features
AddFeatureChoice(ClassList.rogue.features["cunning action"], true, "Steady Aim", {
	name : "Steady Aim",
	source : ["TCoE", 62],
	minlevel : 3,
	description : desc([
		"As a action bonus action I can give myself adv. on my next attack in the current turn if I haven't moved",
		"After I use Steady Aim, my speed is 0 until the end of the current turn"
	]),
	action : [["bonus action", ""]],
					  
}, "Optional Class Features");

// Sorcerer Optional Class Features
AddFeatureChoice(ClassList.sorcerer.features.spellcasting, true, "Additional Sorcerer Spells", {
	name : "Additional Sorcerer Spells",
	source : ["TCoE", 65],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "sorcerer" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["booming blade","green-flame blade","lightning lure","mind sliver","sword burst","grease", "tasha's caustic brew", "flame blade", "flaming sphere", "magic weapon", "tasha's mind whip", "intellect fortress", "vampiric touch", "fire shield", "bigby's hand", "otiluke's freezing sphere", "flesh to stone","tasha's otherwordly guise", "demiplane", "dream of the blue veil", "blade of disaster"]);
			},
			"This optional class feature expands the spells list of the sorcerer class." ] } },
		"Optional Class Features");
AddFeatureChoice(ClassList.sorcerer.features["metamagic"], true, "Seeking Spell", {
	name : "Seeking Spell",
	source : ["TCoE",66],
	description : " [2 sorcery point]" + desc([
		"If I make an attack roll for a spell and miss, I can use this to reroll the attack once","I must use the result from the new roll","I can use unerring spell even if I already used another metamagic option for the spell"
	])
});
AddFeatureChoice(ClassList.sorcerer.features["metamagic"], true, "Transmuted Spell", {
	name : "Transmuted Spell",
	source : ["TCoE",66],
	description : " [1 sorcery point]" + desc([
		"I can change the damage type of a spell to acid, cold, fire, lightning, poison, or thunder instead",
		"I can only do this if the spell originally deals one of these damage types"
	])
});
AddFeatureChoice(ClassList.sorcerer.features.spellcasting,true,"Sorcerous Versatility",{
	name:"Sorcerous Versatility",
	source:["TCoE",66],
	description:desc(["When I reach a level that grants the ASI feature I can do one of the following","• Replace one of the Metamagic options I chose with a different one available to me","• Replace one cantrip I learned from this class's Spellcasting feature with another cantrip from the sorcerer spell list"])},
	"Optional Class Features");
AddFeatureChoice(ClassList.sorcerer.features["metamagic"], true, "Magical Guidance", {
	name : "Magical Guidance",
	source : ["TCoE",66],
	minlevel: 5,
	description : " [1 sorcery point]" + desc([
		"If I make an ability check that fails, I can use this to reroll the check once","I must use the result from the new roll"
	])
});

// Warlock Optional Class Features
AddFeatureChoice(ClassList.warlock.features["pact magic"], true, "Additional Warlock Spells", {
	name : "Additional Warlock Spells",
	source : ["TCoE", 70],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "warlock" || (spType.indexOf("bonus") !== -1 && (!spList["class"] || spList["class"] !== "warlock"))) return;
				spList.extraspells = spList.extraspells.concat(["booming blade","green-flame blade","lightning lure","mind sliver","sword burst","intellect fortress", "spirit shroud", "summon fey", "summon shadowspawn", "summon undead", "summon abberation", "mislead", "planar binding", "teleportation circle", "summon fiend","tasha's otherwordly guise", "dream of the blue veil", "blade of disaster", "gate", "weird"]);
			},
			"This optional class feature expands the spells list of the warlock class." ] } },
		"Optional Class Features");
AddFeatureChoice(ClassList.warlock.features.spellcasting,true,"Eldritch Versatility",{
	name:"Eldritch Versatility",
	source:["TCoE",70],
	description:desc(["When I reach a level that grants the ASI feature I can do one of the following","• Replace one cantrip I learned from this class's Spellcasting feature with another cantrip from the sorcerer spell list","• Replace the Pact Boon options I chose with a different one available to me"],"• If I am 12th or higher I can replace one spell from my Mystic Arcanum with another warlock spell of the same level")},
	"Optional Class Features");
AddFeatureChoice(ClassList.warlock.features["pact boon"], false, "pact of the talisman", {
	name : "Pact of the Talisman",
	source : ["TCoE",70],
	usages : [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6],
	recovery: "long rest",
	description : desc([
		"The wearer of this amulet can add 1d4 to ability checks they fail",
		"I can give the talisman to others to use; The talisman turns to ash when I die",
		"If I lose my talisman, I can preform an 1-hour ceremony to gain a replacement",
		"This ceremony destroys the previous amulet and can be done during a short or long rest"
	])
});
AddFeatureChoice(ClassList.warlock.features["eldritch invocations"], true, "Bond of the Talisman (prereq: level 12 warlock, Pact of the Talisman)", {
	name : "Bond of the Talisman",
	source : ["TCoE",70],
	description : desc([
		"As an action, I can teleport to the unoccupied space closest to the wearer of my talisman",
		"The talisman's wearer can do the same to teleport to me; Only works if both on same plane"
	]),
	prereqeval : function(v) {
		return classes.known.warlock.level >= 12 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the talisman';
	},
	action : [["action", ""]],
	usages : [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6],
	recovery: "long rest",
});
AddFeatureChoice(ClassList.warlock.features["eldritch invocations"], true, "Eldritch Mind", {
	name : "Eldritch Mind",
	source : ["TCoE",71],
	description : "\n   I have advantage on my Constitution saving throws to maintain concentration on a spell",
	savetxt : { text : "Adv. on Con (Concentration) saves" }
});
AddFeatureChoice(ClassList.warlock.features["eldritch invocations"], true, "Far Scribe (prereq: level 5 warlock, Pact of the Tome)", {
	name : "Far Scribe",
	source : ["TCoE",71],
	description : desc([
		"My book of shadows has a new page; As an action, a creature can write its name on it",
		"This page can hold my proficiency bonus in creature names; I can remove one as an action",
		"I can cast Sending without a spell slot or material components, targeting one on the page",
		"Instead of saying the message, I write it on the page and any reply appears there as well",
		"This writing disappears after 1 minute; The target still hears the message in their mind"
	]),
	prereqeval : function(v) {
		return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the tome';
	},
	action : [["action", " (erase name)"]],
	spellcastingBonus : {
		name : "Far Scribe",
		spells : ["sending"],
		selection : ["sending"],
		firstCol : "atwill"
	},
	spellChanges : {
		"sending" : {
			components : "V,S",
			compMaterial : "",
			description : "Send 25 word message to crea named in book of shadows; it recognizes me and can respond 25 words",
			changes : "By using Far Scribe, I can cast Sending without using a spell slot or material components, but only to target one of the creatures that wrote their name in my book of shadows. Instead of speaking the message, I write it in my book and any response appears there as well, lasting for 1 minute. The target still hears the message in their mind."
		}
	}
});
AddFeatureChoice(ClassList.warlock.features["eldritch invocations"], true, "Gift of the Protectors (prereq: level 9 warlock, Pact of the Tome)", {
	name : "Gift of the Protectors",
	source : ["TCoE",71],
	description : desc([
		"My book of shadows has a new page; As an action, a creature can write its name on it",
		"This page can hold my proficiency bonus in creature names; I can remove one as an action",
		"If a creature whose name is on the page drops to 0 HP, it magically drops to 1 HP instead",
		"This doesn't work if the creature would be killed outright"
	]),
	prereqeval : function(v) {
		return classes.known.warlock.level >= 9 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the tome';
	},
	action : [["action", " (erase name)"]],
	usages : 1,
	recovery : "long rest"
});
AddFeatureChoice(ClassList.warlock.features["eldritch invocations"], true, "Investment of the Chain Master (prereq: Pact of the Chain)", {
	name : "Investment of the Chain Master",
	source : ["TCoE",71],
	description : desc([
		"When I cast Find Familiar, the summoned creature has additional benefits:",
		"\u2022 It gains a flying or swimming speed of 40 ft (my choice at casting)",
		"\u2022 As a Bonus Action I can command it to take the Attack Action",
		"\u2022 Its weapon attacks are considered magical for overcoming immunities and resistances",
		"\u2022 As a Reaction I can grant my familiar resistance when it takes damage",
		"\u2022 If it forces a creature to make a saving throw, it uses my spell save DC",
		"Note that the automation will only add this to current familiars and on a level change"
	]),
	action: [["bonus action", " (Familiar attack)"],["reaction", " (Grant familiar resistance)"]],
	prereqeval : function(v) {
		return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the chain';
	},
	changeeval : function(lvlA) {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		if (!AScompA) return;
		var aStr = "My Investment of the Chain Master eldritch invocation grants my familiar the following:"+
		"\n\u2022 The familiar gains a flying or swimming speed of 40 ft (my choice at casting)"+
		"\n\u2022 As a Bonus Action I can command it to take the Attack Action"+
		"\n\u2022 Its weapon attacks are considered magical for overcoming immunities and resistances"+
		"\n\u2022 As a Reaction I can grant my familiar resistance when it takes damage"+
		"\n\u2022 If the familiar forces a creature to make a saving throw, it uses my spell save DC";
		var aFnc = !lvlA[1] ? RemoveString : AddString;
		for (var a = 1; a < AScompA.length; a++) {
			if (What(AScompA[a] + 'Comp.Type') == "Familiar") {
				aFnc(AScompA[a] + "Cnote.Left", aStr, true);
			}
		}
	}
});
AddFeatureChoice(ClassList.warlock.features["eldritch invocations"], true, "Protection of the Talisman (prereq: level 7 warlock, Pact of the Talisman)", {
	name : "Protection of the Talisman",
	source : ["TCoE",71],
	usages : [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6],
	recovery: "long rest",
	description : desc([
		"The wearer of this amulet can add 1d4 to saving throws they fail"]),
	prereqeval : function(v) {
		return classes.known.warlock.level >= 7 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the talisman';
	},
	savetxt : { text : ["+1d4 to saves"] }
});
AddFeatureChoice(ClassList.warlock.features["eldritch invocations"], true, "Rebuke of the Talisman (prereq: Pact of the Talisman)", {
	name : "Rebuke of the Talisman",
	source : ["TCoE",71],
	description : desc([
		"As a reaction when the wearer of my talisman is hit, I deal damage and push the attacker",
		"To be able to do this, I have to see the attacker and it has to be within 30 ft of me",
		"I deal my proficiency bonus in psychic damage and push it 10 ft away from the talisman"
	]),
	prereqeval : function(v) {
		return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the talisman';
	},
	action : [["reaction", ""]]
});
AddFeatureChoice(ClassList.warlock.features["eldritch invocations"], true, "Undying Servitude (prereq: level 5 warlock)", {
	name : "Undying Servitude",
	source : ["TCoE",71],
	description : desc([
		"I can cast Animate Dead without using a spell slot"
	]),
	usages : 1,
	recovery: "long rest",
	prereqeval : function(v) {
		return classes.known.warlock.level >= 5;
	},
	spellcastingBonus : {
		name : "Undying Servitude",
		spells : ["sending"],
		selection : ["sending"],
		firstCol : "oncelr"
	},

});

// Wizard Optional Class Features
AddFeatureChoice(ClassList.wizard.features.spellcasting, true, "Additional Wizard Spells", {
	name : "Additional Wizard Spells",
	source : ["TCoE", 75],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "wizard" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["booming blade","green-flame blade","lightning lure","mind sliver","sword burst","augury", "enhance ability", "tasha's mind whip", "intelect fortress", "speak with dead", "spirit shroud", "summon fey", "summon shadowspawn", "summon undead", "divination", "summon abberation", "summon construct", "summon elemental", "summon fiend", "tasha's otherwordly guise", "dream of the blue veil", "blade of disaster"]);
			},
			"This optional class feature expands the spells list of the wizard class."
		]
	}
}, "Optional Class Features");
AddFeatureChoice(ClassList.wizard.features.spellcasting, true, "Cantrip Formulas", {
	name : "Cantrip Formulas",
	source : ["TCoE", 76],
	minlevel : 3,
	description : "\n	I have scripted a set of arcane formulas in my spellbook that I can use to formulate a cantrip in my mind. Whenever I finish a long rest and consult those formulas in my spellbook, I can replace on wizard cantrip I know with another cantrip from the wizard spell list"
}, "Wizard Spellcasting Enhancement");

// Add Feats
FeatsList["artificer initiate"] = {
	name: "Artificer Initiate",
	source: ["TCoE"],
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
	source: ["TCoE"],
	descriptionFull : "Time spent mastering the culinary arts has paid off, granting you the following benefits:\n \u2022Increase your Constitution or Wisdom score by 1, to a maximum of 20.\n \u2022You gain proficiency with cook’s utensils if you don’t already have it.\n \u2022As part of a short rest, you can cook special food, provided you have ingredients and cook’s utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra 1d8 hit points.\n \u2022With one hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to your proficiency bonus.",
	description: "During a short rest, I can make food for 4 + my proficiency bonus creatures; if they eat it and spend 1+ Hit Die they regain 1d8 HP. During a long rest I can make snacks equal to my proficiency bonus that give my proficiency bonus temp HP [+1 Constitution or Wisdom]",
	toolProfs: ["Chef's utensils"],
	improvements: "Chef (feat): +1 Constitution or Wisdom;"
};
FeatsList["crusher"] = {
	name: "Crusher",
	source: ["TCoE"],
	descriptionFull : "You are practiced in the art of crushing your enemies, granting you the following benefits:\n \u2022Increase your Strength or Constitution by 1, to a maximum of 20.\n \u2022Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.\n \u2022When you score a critical hit that deals bludgeoning damage to a creature, attack rolls against that creature are made with advantage until the start of your next turn.",
	description: (typePF ? "Once per turn, when I hit a creature with an attack that deals bludgeoning damage, I can move it 5 ft to an unoccupied space, if it is no more than one size larger than me. On a critical hit that deals bludgeoning damage to a creature, attacks vs. it have adv. until the start of my next turn. [+1 Strength or Constitution]" : "Once per turn, when I hit a creature with bludg. attack, I can move it 5 ft to an unoccupied space, if it is no more than one size larger than me. On a critical bludg. hit on a creature, attacks vs. it have adv. until the start of my next turn. [+1 Str or Con]"),
	improvements: "Crusher (feat): +1 Strength or Constitution;"
};
FeatsList["eldritch adept"] = { // <-- not complete
	name: "Eldritch Adept",
	source: ["TCoE"],
	descriptionFull : "Studying occult lore, you have unlocked eldritch power within yourself: you learn one Eldritch Invocation option of your choice from the warlock class. If the invocation has a prerequisite of any kind, you can choose that invocation only if you're a warlock who meets the prerequisite. Whenever you gain a level, you can replace the invocation with another one from the warlock class.",
	description: "I learn one Eldritch Invocation option of my choice from the Warlock class. If it has a prerequisite, I can only take it if I am a warlock and meet the prerequisite. I can replace the invocation whenever I gain a level.",
	prerequisite: "Spellcasting or Pact Magic feature",
	prereqeval: function (v) {
		return What('Class Features').toLowerCase().indexOf('spellcasting') !== -1 || What('Class Features').toLowerCase().indexOf('pact magic') !== -1;
	}
};
FeatsList["fey touched"] = {
	name: "Fey Touched",
	source: ["TCoE"],
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
	source: ["TCoE"],
	descriptionFull : "Your martial training has helped you develop a particular style of fighting. As a result, you learn one Fighting Style option of your choice from the fighter class. If you already have a style, the one you choose must be different. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace this feat's fighting style with another one from the fighter class that you don't have.",
	description: "I learn one Fighting Style from the fighter class. If I already have one, the new one must be different. I can replace the fighting style whenever I gain an Ability Score Improvement level.",
	prerequisite: "Proficiency with a martial weapon",
	prereqeval : function(v) {
		return v.martialWeaponsProf;
	},
};
FeatsList["gunner"] = {
	name: "Gunner",
	source: ["TCoE"],
	descriptionFull : "You have a quick hand and keen eye when employing firearms, granting you the following benefits:\n \u2022Increase your Dexterity score by 1, to a maximum of 20.\n \u2022You gain proficiency with firearms (see “Firearms” in the Dungeon Master’s Guide).\n \u2022You ignore the loading property of firearms.\n \u2022Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls.",
	description: "I gain proficiency with firearms. I ignore the loading property of firearms. I don't suffer disadvantage on ranged attack rolls for being within 5 ft of a hostile creature. [+1 Dexterity]",
	scores: [0, 1, 0, 0, 0, 0],
	weaponProfs: {
		primary: [false, false, ["Firearms"]]
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (isRangedWeapon && ((/firearm/i).test(theWea.type) || (/firearm/i).test(theWea.list)) && fields.Proficiency) {
					fields.Description = fields.Description.replace(/(,? ?loading|loading,? ?)/i, '');
				};
			},
			"I ignore the loading quality of firearms."
		]
	}
};
FeatsList["metamagic adept"] = { // This feels wrong
	name: "Metamagic Adept",
	source: ["TCoE"],
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
	source: ["TCoE"],
	descriptionFull : "You have achieved a penetrating precision in combat, granting you the following benefits:\n \u2022Increase your Strength or Dexterity by 1, to a maximum of 20.\n \u2022Once per turn, when you hit a creature with an attack that deals piercing damage, you can reroll one of the attack’s damage dice, and you must use the new roll.\n \u2022When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage the target takes.",
	description: "Once per turn when I deal piercing damage to a target, I can reroll one of the damage die and use the new roll. If I deal piercing damage on a critical hit to a target I can roll one additional damage die. [+1 Strength or Dexterity]",
	improvements: "Piercer (feat): +1 Strength or Dexterity;"
};
FeatsList["poisoner"] = {
	name: "Poisoner",
	source: ["TCoE"],
	descriptionFull : "You can prepare and deliver deadly poisons, granting you the following benefits:\n \u2022When you make a damage roll that deals poison damage, it ignores resistance to poison damage.\n \u2022You can apply poison to a weapon or piece of ammunition as a bonus action, instead of an action.\n \u2022You gain proficiency with the poisoner's kit if you don't already have it. With one hour of work using a poisoner's kit and expending 50 gp worth of materials, you can create a number of doses of potent poison equal to your proficiency bonus. Once applied to a weapon or piece of ammunition, the poison retains its potency for 1 minute or until you hit with the weapon or ammunition. When a creature takes damage from the coated weapon or ammunition, that creature must succeed on a DC 14 Constitution saving throw or take 2d8 poison damage and become poisoned until the end of your next turn.",
	description: "I ignore poison resist when rolling for poison damage. I apply poison to a weapon or ammo as a bonus action. I gain prof. with a poisoner's kit, and can make my prof. bonus number of poisons. DC 14 Con save or 2d8 poison damage and poisoned until the end of my next turn. ",
};
FeatsList["shadow touched"] = {
	name: "Shadow Touched",
	source: ["TCoE"],
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
	source: ["TCoE"],
	descriptionFull : "You have honed your proficiency with particular skills, granting you the following benefits:\n \u2022Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022You gain proficiency in one skill of your choice.\n \u2022Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus.",
	description: "I gain proficiency in one skill or tool. I choose one skill or tool, and my proficiency bonus is doubled for any ability check I make that uses that proficiency. [+1 to Any]",
	skillstxt : "Choose any one skill",
	improvements: "Skill Expert (feat): +1 to Any;"
};
FeatsList["slasher"] = {
	name: "Slasher",
	source: ["TCoE"],
	descriptionFull : "You’ve learned where to cut to have the greatest results, granting you the following benefits:\n \u2022Increase your Strength or Dexterity by 1, to a maximum of 20.\n \u2022Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce the speed of the target by 10 feet until the start of your next turn.\n \u2022When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls.",
	description: "Once per turn when I deal slashing damage to a target, I can reduce its speed by 10 feet until the start of my next turn. If I deal slashing damage on a critical hit to a target, it has disadvantage on attack rolls until the start of my next turn. [+1 Strength or Dexterity]",
	improvements: "Slasher (feat): +1 Strength or Dexterity;"
};
FeatsList["telekinetic"] = {
    name : "Telekinetic",
    source : ["TCoE"],
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
    source : ["TCoE"],
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

// Add Fighting Styles (5):
AddFightingStyle(["fighter"], "Blind Fighting", {
	name : "Blind Fighting",
	source : ["TCoE", 41],
	description : "\n   " + "Blindsight in a 10-ft range. And you can see invisible creatures in that range, unless they hide from you successfully.",
	vision : [["Blindsight", 10],["See Invisible Creatures", 10] ] 
}); // blind fighting
AddFightingStyle(["fighter"], "Interception", {
	name : "Interception",
	source : ["TCoE", 41],
	description : "\n   " + "As a reaction, reduce the damage the target within 5-ft takes by 1d10 + PB. I must be wearing a shield or using a simple/martial weapon.",
	action : ["reaction", "Intercept 1d10+PB"]
}); // interception
AddFightingStyle(["fighter"], "Superior Technique", {
	name : "Superior Technique",
	source : ["TCoE", 41],
	description : " [1 maneuver; d6, 1\xD7 per short rest]" + desc([
		"I gain one superiority die (d6) that I can expend to fuel a special Maneuver",
		"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice",
		'Use the "Choose Feature" button above to add a Maneuver to the third page'
	]),
	//Unlock Battle Master Maneuver options
	eval : function () {
		AddFeature('Combat Superiority ', 1, '(d6)', 'short rest', 'Fighter: Superior Technique Fighting Style', 'bonus');
		DontPrint("Class Features Menu");
	},
	removeeval : function () {
		RemoveFeature('Combat Superiority ', 1);
		if (!MakeClassMenu()) Hide("Class Features Menu");
	}
}); // superior technique
AddFightingStyle(["fighter"], "Thrown Weapon Fighting", {
	name : "Thrown Weapon Fighting",
	source : ["TCoE", 42],
	description : "\n   " + "I may draw a weapon that has the thrown property as part of the attack I make with the weapon. When I hit with a ranged attack using a thrown weapon, I gain +2 bonus to the damage roll.",
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (v.isRangedWeapon) output.extraDmg += 2;
				//I am limited by the technology of my time, there is no variable attribute for v.isThrownWeapon yet
			},
			"My thrown weapons gain a +2 bonus to the damage roll."
		]
	}
}); // thrown weapon
AddFightingStyle(["fighter"], "Unarmed Fighting", {
	name : "Unarmed Fighting",
	source : ["TCoE", 42],
	description : "\n   " + "My unarmed strikes deal Bludgeoning damage equal to 1d6 + Str Mod on hit. If I am not wielding a weapon or shield during the attack, this becomes d8." + "\n   " + "At the start of a turn, I deal 1d4 bludgeoning damage to one creature I am grappling.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike") {
					if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4") fields.Damage_Die = '1d6';
					fields.Description += (fields.Description ? '; ' : '') + 'Versatile (d8)';
				};
			},
			"My unarmed strikes deal 1d6 damage instead of 1, which increases to 1d8 if I am not wielding a weapon or a shield during the attack."
		]
	}
});
// Add New Maneuver options (7) :
if (ClassSubList["fighter-battle master"]) { 
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Ambush", {
		name : "Ambush",
		source : ["TCoE", 42],
		description : "\n   When I make an initiative roll or a Dex (Stealth) check, I can add a superiority die to it"
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Bait and Switch", {
		name : "Bait and Switch",
		source : ["TCoE", 42],
		description : desc([
			"On my turn, I can expend a superiority die to swap places with an ally within 5 ft",
			"Doing this costs me 5 ft of movement, but this doesn't provoke opportunity attacks",
			"The ally then adds the superiority die to its AC until the start of my next turn"
		])
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Brace", {
		name : "Brace",
		source : ["TCoE", 42],
		description : desc([
			"As a reaction when a creature I can see moves within 5 of me, I can attack it",
			"I expend a superiority die and make one weapon attack, adding the die to the damage"
		]),
		action : [["reaction", ""]]
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Commanding Presence", {
		name : "Commanding Presence",
		source : ["TCoE", 42],
		description : "\n   When I make a Cha (Intimidation) or Cha (Performance) check, I can add a superiority die to it"
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Grappling Strike", {
		name : "Grappling Strike",
		source : ["TCoE", 42],
		description : desc([
			"Immediately after hitting a creature, expend one superiority die and attempt to grapple as a bonus action.",
			"Add the superiority die to the Str (Athletics) check."
		]),
		action : [["bonus action", ""]]
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Quick Toss", {
		name : "Quick Toss",
		source : ["TCoE", 42],
		description : desc([
			"As a bonus action, I can expend a superiority die and make a ranged attack with a thrown weapon.",
			"If I hit, add the superiority die to the weapon's damage roll."
		]),
		action : [["bonus action", ""]]
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.maneuvers"], true, "Tactical Assessment", {
		name : "Studious Eye",
		source : ["TCoE", 42],
		description : "\n   When I make an Int (Investigation), Int (History), or Wis (Insight) check, I can add a superiority die to it"
	});
}

// Add Spells
SpellsList["blade of disaster"] = { 
	name : "Blade of Disaster", 
	classes : ["sorcerer", "warlock", "wizard"], 
	source : ["TCoE", 106], 
	level : 9, 
	school : "Conj", 
	time : "1 bns", 
	range : "60 ft", 
	components : "V,S", 
	duration : "Conc, 1 min", 
	description : "Create weapon; spell attack 4d12 force; crit 18+; 3 * crit damage; bns to move 30ft 2 attacks", 
	descriptionFull : "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage)." + "\n   " + "As a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again." + "\n   " + "The blade can harmlessly pass through any barrier, including a wall of force.", 
};
SpellsList["booming blade-tcoe"] = {
	name : "Booming Blade",
	classes : ["artificer", "sorcerer", "warlock", "wizard"],
	source : ["TCoE", 106],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5-ft rad",
	components : "V,M\u0192",
	compMaterial : "A weapon worth at least 1 sp",
	duration : "Instantaneous",
	description : "Melee wea atk with cast; hit: 0d8 Thunder dmg, if it moves next rnd +1d8; +1d8 at CL5, 11, \u0026 17",
	descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Thunder dmg and if it moves next round +`CD`d8 Thunder dmg",
	descriptionFull : "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.\n   This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
};
SpellsList["dream of the blue veil"] = {
	name : "Dream of the Blue Veil",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["TCoE", 106],
	level : 7,
	school : "Conj",
	time : "10 min",
	range : "20 feet",
	components : "V,S,M",
	compMaterial : "A magic item or a willing creature from the destination world",
	duration : "6 hours",
	description : "9 willing crea unconscious; if spell concludes, travel to the material component's origin material plane",
	descriptionFull : "You and up to eight willing creatures within range fall unconscious for the spell's duration and experience visions of another world on the Material Plane, such as Oerth, Toril, Krynn, or Eberron. If the spell reaches its full duration, the visions conclude with each of you encountering and pulling back a mysterious blue curtain. The spell then ends with you mentally and physically transported to the world that was in the visions." + "\n   " + "To cast this spell, you must have a magic item that originated on the world you wish to reach, and you must be aware of the world's existence, even if you don't know the world's name. Your destination in the other world is a safe location within 1 mile of where the magic item was created. Alternatively, you can cast the spell if one of the affected creatures was born on the other world, which causes your destination to be a safe location within 1 mile of where that creature was born."  + "\n   " + "The spell ends early on a creature if that creature takes any damage, and the creature isn't transported. If you take any damage, the spell ends for you and all the other creatures, with none of you being transported."
};
SpellsList["green-flame blade-tcoe"] = {
	name : "Green-Flame Blade",
	classes : ["artificer", "sorcerer", "warlock", "wizard"],
	source : ["TCoE", 107],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5-ft rad",
	components : "V,M\u0192",
	compMaterial : "A weapon worth at least 1 sp",
	duration : "Instantaneous",
	description : "Melee wea atk with cast; atk +0d8 Fire dmg, crea in 5 ft 0d8+spell mod Fire dmg; +1d8 at CL5/11/17",
	descriptionCantripDie : "Melee wea atk with cast; if hit, atk does +`CD-1`d8 Fire dmg, 1 crea in 5 ft `CD-1`d8+spellcasting ability modifier Fire dmg",
	descriptionFull : "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.\n   This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level and 17th level."
};
SpellsList["intellect fortress"] = {
	name : "Intellect Fortress",
	classes : ["artificer", "bard", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Abjur",
	time : "1 a",
	range : "30 feet",
	components : "V",
	duration : "Conc, 1 h",
	description : "1+1/SL creatures resistant to psychic and advantage on Int, Wis, and Cha saves",
	descriptionFull : "For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws."  + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["lightning lure-tcoe"] = {
	name : "Lightning Lure",
	classes : ["artificer", "sorcerer", "warlock", "wizard"], // Artificer
	source : ["TCoE", 107],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "15-ft rad",
	components : "V",
	duration : "Instantaneous",
	save : "Str",
	description : "1 crea I see save or pulled 10 ft to me; if it end in 5 ft, 1d8 Lightning dmg; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea I see save or pulled 10 ft to me; if it end in 5 ft, `CD`d8 Lightning dmg",
	descriptionFull : "You create a lash of lightning energy that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you." + "\n   " + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
SpellsList["mind sliver"] = {
	name : "Mind Sliver",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["TCoE", 108],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "60 feet",
	components : "V",
	duration : "1 rnd",
	save : "Int",
    description : "1 crea I see save or -1d4 from next save and 1d6 Psychic dmg; +1d6 at CL 5, 11, and 17",
    descriptionCantripDie : "1 crea I see save or -1d4 from next save and `CD`d6 Psychic dmg",
	descriptionFull : "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn." + "\n   " + "This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["spirit shroud"] = {
	name : "Spirit Shroud",
	classes : ["cleric", "paladin", "warlock", "wizard"],
	source : ["TCoE", 108],
	level : 3,
	school : "Necro",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
    description : "Attack in 10ft 1d8+1d8/SL Nec/Rad/Cld dmg + no heal until start of next turn; slow crea if start in 10 ft",
	descriptionFull : "You call forth spirits of the dead, which flit around you for the spell's duration. The spirits are intangible and invulnerable." + "\n   " + "Until the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can't regain hit points until the start of your next turn." + "\n   " + "In addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every two slot levels above 3rd."
};
SpellsList["summon abberation"] = {
	name : "Summon Abberation",
	classes : ["warlock", "wizard"],
	source : ["TCoE", 109],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A pickled tentacle and an eyeball in a platinum-inlaid vial worth at least 400 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Abberant Spirit; obeys commands after my turn; dissapears at 0 hp (400gp)",
	descriptionFull : "You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Slaad, or Star Spawn. The creature resembles an aberration of that kind, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon beast"] = {
	name : "Summon Beast",
	classes : ["druid", "ranger"],
	source : ["TCoE", 109],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Bestial Spirit; obeys commands after my turn; dissapears at 0 hp (200gp)",
	descriptionFull : "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon celestial"] = {
	name : "Summon Celestial",
	classes : ["cleric", "paladin"],
	source : ["TCoE", 110],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A golden reliquary worth at least 500 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Celestial Spirit; obeys commands after my turn; dissapears at 0 hp (500gp)",
	descriptionFull : "You call forth a celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines the creature's attack in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon construct"] = {
	name : "Summon Construct",
	classes : ["artificer", "wizard"],
	source : ["TCoE", 111],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "An ornate stone and metal lockbox worth at least 400 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Construct Spirit; obeys commands after my turn; dissapears at 0 hp (400gp)",
	descriptionFull : "You call forth the spirit of a construct. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles a golem or a modron (your choice) made of the chosen material, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon elemental"] = {
	name : "Summon Elemental",
	classes : ["druid", "ranger", "wizard"],
	source : ["TCoE", 111],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "Air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Elemental Spirit; obeys commands after my turn; dissapears at 0 hp (400gp)",
	descriptionFull : "You call forth an elemental spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon fey"] = {
	name : "Summon Fey",
	classes : ["druid", "ranger", "warlock", "wizard"],
	source : ["TCoE", 112],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A gilded flower worth at least 300 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Fey Spirit; obeys commands after my turn; dissapears at 0 hp (300gp)",
	descriptionFull : "You call forth a fey spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a fey creature of your choice marked by the chosen mood, which determines one of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon fiend"] = {
	name : "Summon Fiend",
	classes : ["warlock", "wizard"],
	source : ["TCoE", 112],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "Humanoid blood inside a ruby vial worth at least 600 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Fiendish Spirit; obeys commands after my turn; dissapears at 0 hp (600gp)",
	descriptionFull : "You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a fiend of the chosen type, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon shadowspawn"] = {
	name : "Summon Shadowspawn",
	classes : ["warlock", "wizard"],
	source : ["TCoE", 113],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "Tears inside a gem worth at least 300 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Shadow Spirit; obeys commands after my turn; dissapears at 0 hp (300gp)",
	descriptionFull : "You call forth a shadowy spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon undead"] = {
	name : "Summon Undead",
	classes : ["warlock", "wizard"],
	source : ["TCoE", 114],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A gilded skull worth at least 300 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Undead Spirit; obeys commands after my turn; dissapears at 0 hp (300gp)",
	descriptionFull : "You call forth an undead spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an undead creature with the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["sword burst-tcoe"] = {
	name : "Sword Burst",
	classes : ["artificer", "sorcerer", "warlock", "wizard"],
	source : ["TCoE", 115],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "5-ft rad",
	components : "V",
	duration : "Instantaneous",
	save : "Dex",
	description : "All crea in range save or 1d6 Force damage; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "All crea in range save or `CD`d6 Force damage",
	descriptionFull : "You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage" + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["tasha's caustic brew"] = {
    name : "Tasha's Caustic Brew",
    nameAlt : "Caustic Brew",
	classes : ["artificer", "sorcerer", "wizard"],
	source : ["TCoE", 115],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30-ft line",
    components : "V,S,M",
    compMaterial : "A bit of rotten food",
	duration : "Conc, 1 min",
    description : "Crea in line save or 2d4+2d4/SL Acid dmg at start of turn; action remove from self or adjacent crea",
	descriptionFull : "A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at start of each of its turns."  + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
};
SpellsList["tasha's mind whip"] = {
    name : "Tasha's Mind Whip",
    nameAlt : "Mind Whip",
	classes : ["sorcerer", "wizard"],
	source : ["TCoE", 115],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
    components : "V",
	duration : "1 rnd",
    description : "1+1/SL save or 3d6 Psychic dmg, save halves; loses reaction; can only move, action, or bns next turn",
	descriptionFull : "You psychically lash out at one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can't take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell's other effects."  + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["tasha's otherwordly guise"] = {
    name : "Tasha's Otherwordly Guise",
    nameShort : "Tash. Otherwordly Guise",
    nameAlt : "Otherwordly Guise",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["TCoE", 116],
	level : 6,
	school : "Trans",
	time : "1 bns",
	range : "Self",
    components : "V,S,M\u0192",
    compMaterial : "An object engraved with a symbol of the Outer Planes, worth at least 500 gp",
	duration : "Conc, 1 min",
    description : "Fire+Poison+Poisoned or Radiant+Necrotic+Charm immune; 40ft fly; +2 ac; extra atk (500gp)",
    descriptionFull : "Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:" + "\n \u2022 " + "You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes)." + "\n \u2022 " + "You are immune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes)." + "\n \u2022 " + "Spectral wings appear on your back, giving you a flying speed of 40 feet." + "\n \u2022 " + "You have a +2 bonus to AC." + "\n \u2022 " + "All your weapon attacks are magical, and when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls." + "\n \u2022 " + "You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that lets you attack more than once when you take the Attack action on your turn."
};
WeaponsList["mind sliver"] = {
	regExpSearch : /mind sliver/i,
	name : "Mind Sliver",
	source : ["TCoE", 108],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "psychic"],
	range : "60 ft",
	description : "Int save, success = no damage, fail = also -1d4 from next save.",
	abilitytodamage : false,
	dc : true
};