var iFileName = "ua_20200326_Spells-and-Magic-Tattoos.js";
RequiredSheetVersion(13);

// Define the source
SourceList["UA:SMT"] = {
	name : "Unearthed Arcana: Spells and Magic Tattoos",
	abbreviation : "UA:SMT",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020-SpellsTattoos.pdf",
	date : "2020/03/26"
};

MagicItemsList["absorbing tattoo"] = {
	name : "Absorbing Tattoo",
	source : [["UA:SMT", 8]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "This tattoo incorporates designs that emphasize a color. When I take damage of a type associated with the color, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
	descriptionFull : "This tattoo incorporates designs that emphasize one color more than others. While the tattoo is on your skin, you have resistance to a type of damage associated with that color, as shown on the table below. The DM chooses the color or determines it randomly.\n" + toUni("d10\t\tDamage Type\tColor") + "\n1 \t\tAcid\tGreen\n2 \tCold\tBlue\n3 \tFire\tRed\n4 \tForce\tWhite\n5 \tLightning\tYellow\n6 \tNecrotic\tBlack\n7 \tPoison\tViolet\n8 \tPsychic\tSilver\n9 \tRadiant\tGold\n10\tThunder\tOrange\n" + toUni("Damage Absorption") + "  When you take damage of the chosen type, you can use your reaction to gain immunity against that instance of the damage, and you regain a number of hit points equal to half the damage you would have taken. Once this reaction is used, it can’t be used again until the next dawn.\n" + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	choices : ['Acid', 'Cold', 'Fire', 'Force', 'Lightning', 'Necrotic', 'Poison', 'Psychic', 'Radiant', 'Thunder'],
	"acid" : {
		name : "Acid Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color green. When I take acid damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Acid"],
		limfeaname : "Absorb Acid Damage",
		additional : "Absorbing Tattoo",
		action : [["reaction", ""]],
		usages : 1, 
		recovery : "dawn"
	},


	"cold" : {
		name : "Cold Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color blue. When I take cold damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Cold"],
		limfeaname : "Absorb Cold Damage",
		additional : "Absorbing Tattoo",
		action : [["reaction", ""]],
		usages : 1, 
		recovery : "dawn"
	},
	"fire" : {
		name : "Fire Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color red. When I take fire damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Fire"],
		limfeaname : "Absorb Fire Damage",
		additional : "Absorbing Tattoo",
		action : [["reaction", ""]],
		usages : 1, 
		recovery : "dawn"
	},
	"force" : {
		name : "Force Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color white. When I take force damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Force"],
		limfeaname : "Absorb Force Damage",
		additional : "Absorbing Tattoo",
		action : [["reaction", ""]],
		usages : 1, 
		recovery : "dawn"
	},
	"lightning" : {
		name : "Lightning Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color yellow. When I take lightning damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Lightning"],
		limfeaname : "Absorb Lightning Damage",
		additional : "Absorbing Tattoo",
		action : [["reaction", ""]],
		usages : 1, 
		recovery : "dawn"
	},
	"necrotic" : {
		name : "Necrotic Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color black. When I take necrotic damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Necrotic"],
		limfeaname : "Absorb Necrotic Damage",
		additional : "Absorbing Tattoo",
		action : [["reaction", ""]],
		usages : 1, 
		recovery : "dawn"
	},
	"poison" : {
		name : "Poison Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color violet. When I take poison damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Poison"],
		limfeaname : "Absorb Poison Damage",
		additional : "Absorbing Tattoo",
		action : [["reaction", ""]],
		usages : 1, 
		recovery : "dawn"
	},
	"psychic" : {
		name : "Psychic Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color silver. When I take psychic damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Psychic"],
		limfeaname : "Absorb Psychic Damage",
		additional : "Absorbing Tattoo",
		action : [["reaction", ""]],
		usages : 1, 
		recovery : "dawn"
	},
	"radiant" : {
		name : "Radiant Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color gold. When I take radiant damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Radiant"],
		limfeaname : "Absorb Radiant Damage",
		additional : "Absorbing Tattoo",
		action : [["reaction", ""]],
		usages : 1, 
		recovery : "dawn"
	},
	"thunder" : {
		name : "Thunder Absorbing Tattoo",
		description: "This tattoo incorporates designs that emphasize the color orange. When I take thunder damage, I can use my reaction to gain immunity against that instance of the damage, and I regain a number of hit points equal to half the damage I would have taken. I can use this reaction once per dawn.",
		dmgres : ["Thunder"],
		limfeaname : "Absorb Thunder Damage",
		additional : "Absorbing Tattoo",
		action : [["reaction", ""]],
		usages : 1, 
		recovery : "dawn"
	},
}
MagicItemsList["barrier tattoo"] = {
	name : "Barrier Tattoo",
	source : [["UA:SMT", 9]],
	type : "wondrous item",
	rarity : "",
	attunement : true,
	description : "",
	descriptionFull : "This tattoo depicts protective imagery and uses ink that resembles liquid metal. While you aren’t wearing armor, the tattoo grants you an Armor Class depending on the tattoo’s rarity, as shown below. You can use a shield and still gain this benefit.\n" + toUni("Rarity\t\tAC") + "\nUncommon \t\t12 + your Dexterity modifier\nRare \t15 + your Dexterity modifier (maximum of +2)\nVery Rare \t18\n" + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	choices : ["Uncommon", "Rare", "Very Rare"],
	"uncommon" : {
		name : "Barrier Tattoo (uncommon)",
		description : "This tattoo depicts protective imagery and uses ink that resembles liquid metal. While I am not wearing armor, the tattoo grants me an Armor Class of 12 + my Dexterity modifier. I can use a shield and still gain this benefit.",
		addArmor: "Barrier Tattoo (uncommon)",
		armorOptions: {
			regExpSearch: /^(?=.*barrier)(?=.*(tattoo)).*$/i,
			name : "Barrier Tattoo (uncommon)",
			source : [["UA:SMT", 9]],
			type: "",
			ac : 12,
		},
	},
	"rare" : {
		name : "Barrier Tattoo (rare)",
		description : "This tattoo depicts protective imagery and uses ink that resembles liquid metal. While I am not wearing armor, the tattoo grants me an Armor Class of 15 + my Dexterity modifier (maximum of +2). I can use a shield and still gain this benefit.",
		addArmor: "Barrier Tattoo (rare)",
		armorOptions: {
			regExpSearch: /^(?=.*barrier)(?=.*(tattoo)).*$/i,
			name : "Barrier Tattoo (rare)",
			source : [["UA:SMT", 9]],
			type: "",
			ac : 15,
			dex : 2,
		},
	},
	"very rare" : {
		name : "Barrier Tattoo (very rare)",
		description : "This tattoo depicts protective imagery and uses ink that resembles liquid metal. While I am not wearing armor, the tattoo grants me an Armor Class of 18. I can use a shield and still gain this benefit.",
		addArmor: "Barrier Tattoo (very rare)",
		armorOptions: {
			regExpSearch: /^(?=.*barrier)(?=.*(tattoo)).*$/i,
			name : "Barrier Tattoo (very rare)",
			source : [["UA:SMT", 9]],
			type: "",
			ac : 18,
			dex : 0
		},
	}
}
MagicItemsList["coiling grasp tattoo"] = {
	name : "Coiling Grasp Tattoo",
	source : [["UA:SMT", 9]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	description : "I can use the tattoo to grapple a creature within 15 feet. It must succeed on a DC 14 Strength saving throw or take 3d6 force dmg and be grappled by me. It can make a DC 14 Athletics or Acrobatics check to escape. If the creature is more than 15 ft away or I use the tattoo on a different creature the grapple ends.",
	descriptionLong: "This tattoo has long intertwining designs. While the tattoo is on my skin, I can, as an action, cause the tattoo to extrude into inky tendrils, which reach for a creature I can see within 15 feet of me. The creature must succeed on a DC 14 Strength saving throw or take 3d6 force damage and be grappled by me. As an action, the creature can escape the grapple by succeeding on a DC 14 Strength (Athletics) or Dexterity (Acrobatics) check. The grapple also ends if I halt it (no action required), if the creature is ever more than 15 feet away from me, or if I use this tattoo on a different creature.",
	descriptionFull : "This tattoo has long intertwining designs. While the tattoo is on your skin, you can, as an action, cause the tattoo to extrude into inky tendrils, which reach for a creature you can see within 15 feet of you. The creature must succeed on a DC 14 Strength saving throw or take 3d6 force damage and be grappled by you. As an action, the creature can escape the grapple by succeeding on a DC 14 Strength (Athletics) or Dexterity (Acrobatics) check. The grapple also ends if you halt it (no action required), if the creature is ever more than 15 feet away from you, or if you use this tattoo on a different creature.\n" + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	action : [["action", ""]],
	fixedDC : 14,
	weaponsAdd : ["Coiling Grasp Tattoo"],
	weaponOptions : [{
		regExpSearch : /^(?=.*coiling)(?=.*grasp)(?=.*tattoo).*$/i,
		name : "Coiling Grasp Tattoo",
		source : [["UA:SMT", 9]],
		ability : 1,
		type : "Natural",
		damage : [3, 6, "Force"],
		range : "15 ft",
		description : "Grapples crature; DC 14 Strength check to break out",
		abilitytodamage : false,
		dc : true,
	}]
}
MagicItemsList["eldritch claw tattoo"] = {
	name : "Eldritch Claw Tattoo",
	source : [["UA:SMT", 9]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	description : "My unarmed strikes are magical and gain a +1 bonus to attack and damage rolls. As a bonus action, I can empower the tattoo for 1 minute. For the duration, each of my melee weapon attacks can reach a target up to 30 feet away from me and deal an extra 1d6 force damage. I can use this bonus action once per dawn",
	descriptionFull : "This tattoo depicts clawlike forms and other jagged shapes. While the tattoo is on your skin, your unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks, and you gain a +1 bonus to attack and damage rolls with unarmed strikes.\n" + toUni("Eldritch Maul") + "  As a bonus action, you can empower the tattoo for 1 minute. For the duration, each of your melee weapon attacks can reach a target up to 30 feet away from you, as tendrils of ink launch from your weapon or unarmed strike toward the target. In addition, your melee weapon attacks deal an extra 1d6 force damage on a hit. Once used, this bonus action can’t be used again until the next dawn.\n" + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike" && !(/counts as( a)? magical/i).test(fields.Description)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
				};
			},
			"My unarmed strikes gain a +1 bonus to their attack and damage rolls, and count as magical."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == "unarmed strike") {
					output.magic += 1;
				}
			},
		]
	},
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "dawn",
	limfeaname : "Eldritch Maul",
}
MagicItemsList["blood fury tattoo"] = {
	name : "Blood Fury Tattoo",
	source : [["UA:SMT", 10]],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	description : "My attack rolls score a critical hit on a 19 or 20. When I score a critical hit against a creature, it takes an extra 4d6 necrotic damage, and I gain temporary HP equal to the damage dealt. When a creature I can see damages me, I can use my reaction to make a melee attack against that creature with advantage.",
	descriptionLong : "This tattoo evokes fury in its form and colors. While this tattoo is on my skin, I gain the following benefits: My attack rolls score a critical hit on a d20 roll of 19 or 20. When I score a critical hit against a creature, that target takes an extra 4d6 necrotic damage, and I gain a number of temporary hit points equal to the necrotic damage dealt. When a creature I can see damages me, I can use my reaction to make a melee attack against that creature, with advantage on my attack roll.",
	descriptionFull : "This tattoo evokes fury in its form and colors. While this tattoo is on your skin, you gain the following benefits:\n \u2022Your attack rolls score a critical hit on a d20 roll of 19 or 20.\n \u2022When you score a critical hit against a creature, that target takes an extra 4d6 necrotic damage, and you gain a number of temporary hit points equal to the necrotic damage dealt.\n \u2022When a creature you can see damages you, you can use your reaction to make a melee attack against that creature, with advantage on your attack roll.\n" + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	action : [["reaction", " (Attack)"]]
}
MagicItemsList["illuminator's tattoo"] = {
	name : "Illuminator's Tattoo",
	source : [["UA:SMT", 10]],
	type : "wondrous item",
	rarity : "common",
	attunement : true,
	description : "I can write with my fingertip as if it were an ink pen that never runs out of ink. Once per dawn, I can touch a piece of writing up to one page in length and make the writing invisible to everyone other than me and one named creature for the next 24 hours. Either of us can dismiss the invisibility by touching the script",
	descriptionLong : "This tattoo contains beautiful calligraphy, images of writing implements, and the like. While this tattoo is on my skin, I can write with my fingertip as if it were an ink pen that never runs out of ink. As an action, I can touch a piece of writing up to one page in length and speak a creature’s name. The writing becomes invisible to everyone other than me and the named creature for the next 24 hours. Either of us can dismiss the invisibility by touching the script (no action required). Once used, this action can’t be used again until the next dawn",
	descriptionFull : "This tattoo contains beautiful calligraphy, images of writing implements, and the like. While this tattoo is on your skin, you can write with your fingertip as if it were an ink pen that never runs out of ink.\n As an action, you can touch a piece of writing up to one page in length and speak a creature’s name. The writing becomes invisible to everyone other than you and the named creature for the next 24 hours. Either of you can dismiss the invisibility by touching the script (no action required). Once used, this action can’t be used again until the next dawn\n" + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	usages : 1, 
	recovery : "dawn",
}
MagicItemsList["lifewell tattoo"] = {
	name : "Lifewell Tattoo",
	source : [["UA:SMT", 10]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "This tattoo comprises symbols of life and rebirth. While this tattoo is on my skin, I have resistance to necrotic damage. When I would be reduced to 0 hit points, I drop to 1 hit point instead. Once used, this benefit can’t be used again until the next dawn.",
	descriptionFull : "This tattoo comprises symbols of life and rebirth. While this tattoo is on your skin, you have resistance to necrotic damage.\n" + toUni("Death Ward.") + "  When you would be reduced to 0 hit points, you drop to 1 hit point instead. Once used, this benefit can’t be used again until the next dawn." + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	dmgres : ["Necrotic"],
	usages : 1, 
	recovery : "dawn",
}
MagicItemsList["ghost step tattoo"] = {
	name : "Ghost Step Tattoo",
	source : [["UA:SMT", 11]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "3 charges regained at dawn. As bonus action, use 1 to become incorporeal until end of my next turn with these benefits: Gain resistance to nonmagical bludgeoning, piercing, and slashing dmg. Can’t be grappled or restrained. Can move through creatures and solid objects as difficult terrain.",
	descriptionLong: "The tattoo has 3 charges, and it regains all expended charges daily at dawn. As a bonus action, I can expend 1 of the tattoo’s charges to become incorporeal until the end of my next turn and gain the following benefits: I have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks. I can’t be grappled or restrained. I can move through creatures and solid objects as if they were difficult terrain. If the effect ends while I am inside a solid object, I instead am shunted to the nearest unoccupied space, and I take 1d10 force damage for every 5 feet traveled.",
	descriptionFull : "This tattoo shifts and wavers on the skin, parts of it appearing blurred. The tattoo has 3 charges, and it regains all expended charges daily at dawn.\nAs a bonus action while the tattoo is on your skin, you can expend 1 of the tattoo’s charges to become incor poreal until the end of your next turn. For the duration, you gain the following benefits:\n \u2022You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.\n \u2022You can’t be grappled or restrained.\n \u2022You can move through creatures and solid objects as if they were difficult terrain. If you end your turn in a solid object, you take 1d10 force damage. If the effect ends while you are inside a solid object, you instead are shunted to the nearest unoccupied space, and you take 1d10 force damage for every 5 feet traveled." + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	usages : 3, 
	recovery : "dawn",
	action : [["bonus action", ""]]
}
MagicItemsList["masquerade tattoo"] = {
	name : "Masquerade Tattoo",
	source : [["UA:SMT", 11]],
	type : "wondrous item",
	rarity : "common",
	attunement : true,
	description : "This tattoo appears on my skin as whatever I desire. As a bonus action, I can shape the tattoo into any color or pattern or size and move it to any area of my skin. It is always obviously a tattoo. As an action, I can use the tattoo to cast the disguise self spell once per dawn.",
	descriptionLong : "This tattoo appears on my skin as whatever I desire. As a bonus action, I can shape the tattoo into any color or pattern and move it to any area of my skin. Whatever form it takes, it is always obviously a tattoo. It can range in size from no smaller than a copper piece to an intricate work of art that covers all my skin. As an action, I can use the tattoo to cast the disguise self spell. Once the spell is cast from the tattoo, it can’t be cast from the tattoo again until the next dawn.",
	descriptionFull : "This tattoo appears on your skin as whatever you desire. As a bonus action, you can shape the tattoo into any color or pattern and move it to any area of your skin. Whatever form it takes, it is always obviously a tattoo. It can range in size from no smaller than a copper piece to an intricate work of art that covers all your skin.\n" + toUni("Disguise Self.") + "  As an action, you can use the tattoo to cast the disguise self spell. Once the spell is cast from the tattoo, it can’t be cast from the tattoo again until the next dawn." + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	spellFirstColTitle : "Us",
	spellcastingBonus : [{
		name : "Once per Dawn",
		spells : ["disguise self"],
		selection : ["disguise self"],
		firstCol : "checkbox"
   }],
   usages : 1, 
   recovery : "dawn",
}
MagicItemsList["spellwrought tattoo"] = {
	name : "Spellwrought Tattoo",
	source : [["UA:SMT", 11]],
	type : "wondrous item",
	description : "This tattoo contains a single spell of up to 5th level, wrought on my skin by a magic needle. Once the tattoo is on my skin, I can cast its spell, requiring no material components. The tattoo glows faintly while I cast the spell and for the spell’s duration. Once the spell ends, the tattoo vanishes from my skin.",
	descriptionFull : "This tattoo contains a single spell of up to 5th level, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin where you want the tattoo to appear and speak the command word. The needle turns into the ink that becomes the tattoo, which appears on your skin. Once the tattoo is on your skin, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell’s duration. Once the spell ends, the tattoo vanishes from your skin.\n The level of the spell in the tattoo determines the spell’s saving throw DC, attack bonus, spellcasting ability modifier, and the tattoo’s rarity, as shown in the Spellwrought Tattoo table.\n" + toUni("Spell Level\t\tRarity\tSpellcasting Ability Modifier\tSave DC\tAttack Bonus") + "\nCantrip \t\tCommon\t+3\t13\t+5\n1st \tCommon\t+3\t13\+5\n2nd \tUncommon\t+3\t13\t+5\n3rd \tUncommon\t+3\t13\t+5\n4th \tRare\t+4\t15\t+7\n5th \tRare\t+5\t17\t+9",
	choices : ["Cantrip", "1st Level", "2nd Level", "3rd Level", "4th Level", "5th Level"],
	"cantrip": {
		name: "Spellwrought Tattoo [Cantrip]",
		rarity : "common",
		description : "This tattoo contains a single cantrip wrought on my skin. Once the tattoo is on my skin, I can cast its spell, needing no material components. The tattoo vanishes from my skin when the spell ends. The spell casting ability modifier for the spell is +3, the save DC is 13, and the attack bonus is +5.",
		fixedDC : 13,
		spellFirstColTitle : "Us",
		spellcastingBonus : {
			level : [0,0],
			psionic : false,
			firstCol : "checkbox",
			times : 1
		}
	},
	"1st level": {
		name: "Spellwrought Tattoo [1st Level]",
		rarity : "common",
		description : "This tattoo contains a single 1st level spell wrought on my skin. Once the tattoo is on my skin, I can cast its spell, needing no material components. The tattoo vanishes from my skin when the spell ends. The spell casting ability modifier for the spell is +3, the save DC is 13, and the attack bonus is +5.",
		fixedDC : 13,
		spellFirstColTitle : "Us",
		spellcastingBonus : {
			level : [1,1],
			psionic : false,
			firstCol : "checkbox",
			times : 1
		}
	},
	"2nd level": {
		name: "Spellwrought Tattoo [2nd Level]",
		rarity : "uncommon",
		description : "This tattoo contains a single 2nd level spell wrought on my skin. Once the tattoo is on my skin, I can cast its spell, needing no material components. The tattoo vanishes from my skin when the spell ends. The spell casting ability modifier for the spell is +3, the save DC is 13, and the attack bonus is +5.",
		fixedDC : 13,
		spellFirstColTitle : "Us",
		spellcastingBonus : {
			level : [2,2],
			psionic : false,
			firstCol : "checkbox",
			times : 1
		}
	},
	"3rd level": {
		name: "Spellwrought Tattoo [3rd Level]",
		rarity : "uncommon",
		description : "This tattoo contains a single 3rd level spell wrought on my skin. Once the tattoo is on my skin, I can cast its spell, needing no material components. The tattoo vanishes from my skin when the spell ends. The spell casting ability modifier for the spell is +4, the save DC is 15, and the attack bonus is +7.",
		fixedDC : 15,
		spellFirstColTitle : "Us",
		spellcastingBonus : {
			level : [3,3],
			psionic : false,
			firstCol : "checkbox",
			times : 1
		}
	},
	"4th level": {
		name: "Spellwrought Tattoo [4th Level]",
		rarity : "rare",
		description : "This tattoo contains a single 4th level spell wrought on my skin. Once the tattoo is on my skin, I can cast its spell, needing no material components. The tattoo vanishes from my skin when the spell ends. The spell casting ability modifier for the spell is +4, the save DC is 15, and the attack bonus is +7",
		fixedDC : 15,
		spellFirstColTitle : "Us",
		spellcastingBonus : {
			level : [4,4],
			psionic : false,
			firstCol : "checkbox",
			times : 1
		}
	},
	"5th level": {
		name: "Spellwrought Tattoo [5th Level]",
		rarity : "rare",
		description : "This tattoo contains a single 5th level spell wrought on my skin. Once the tattoo is on my skin, I can cast its spell, needing no material components. The tattoo vanishes from my skin when the spell ends. The spell casting ability modifier for the spell is +5, the save DC is 17, and the attack bonus is +9.",
		fixedDC : 17,
		spellFirstColTitle : "Us",
		spellcastingBonus : {
			level : [5,5],
			psionic : false,
			firstCol : "checkbox",
			times : 1
		}
	},
}
MagicItemsList["shadowfell brand tattoo"] = {
	name : "Shadowfell Brand Tattoo",
	source : [["UA:SMT", 12]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "This tattoo is dark in color and abstract. While it’s on my skin, I have advantage on Dexterity (Stealth) checks. Once per dawn, when I take damage, I can use my reaction to become shadowy and insubstantial for a moment, reducing the damage I take by half.",
	descriptionFull : "This tattoo is dark in color and abstract. While it’s on your skin, you have advantage on Dexterity (Stealth) checks.\n" + toUni("Shadowy Defense.") + "  When you take damage, you can use your reaction to become shadowy and insubstantial for a moment, reducing the damage you take by half. Once used, this reaction can’t be used again until the next dawn." + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
	eval : function () {
		SetProf("advantage", true, ["Stealth", true], "Shadowfell Brand Tattoo (magic item)");
	},
	removeeval : function () {
		SetProf("advantage", false, ["Stealth", true], "Shadowfell Brand Tattoo (magic item)");
	},
	usages : 1, 
	recovery : "dawn",
	limfeaname : "Shadowy Defense"
}

SpellsList["acid stream"] = {
	name : "Acid Stream",
	nameAlt : "Acid Stream",
	nameShort : "Acid Stream",
	regExpSearch : /^(?=.*ac(\.|id))(?=.*(stream)).*$/i,
	source : ["UA:SMT", 2],
	defaultExcluded : false,
	classes : ["sorcerer", "wizard"],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30-ft line",
	components : "V,S,M",
	compMaterial : "A bit of rotten food",
	duration : "conc, 1 min",
	save : "Dex",
	description : "30-ft long, 5-ft wide all Dex save or 3d4 acid dmg at start of each turn for duration",
	descriptionMetric : "10-m long 2-m wide all Dex save or 3d4 acid dmg at start of each turn for duration",
	descriptionFull : "A stream of acid emanates from you in a line 30-feet long and 5-feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 3d4 acid damage at the start of each of its turns." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d4 for each slot level above 1st.",
	ritual : false,
	psionic : false,
};

SpellsList["otherworldly form"] = {
	name : "Otherworldly Form",
	nameAlt : "Otherworldly Form",
	nameShort : "Otherworldly Form",
	regExpSearch : /^(?=.*ther(\.|orldly))(?=.*(form)).*$/i,
	source : ["UA:SMT", 2],
	defaultExcluded : false,
	classes : ["cleric","sorcerer","warlock", "wizard"],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "30-ft line",
	components : "V,S,M",
	compMaterial : "an object engraved with a symbol of the Outer Planes, worth at least 500 gp",
	duration : "conc, 1 min",
	description : "I transform myself using the magic of the Planes to gain several benefits",
	descriptionFull : "Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself.  You gain the following benefits until the spell ends:" + "\n   " + "- You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes)." + "\n   " + "- You are immmune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes)." + "\n   " + "- Spectral wings appear on your back, giving you a fly speed of 40-ft." + "\n   " + "- You have a +2 bonus to AC." + "\n   " + "- All your weapon attacks are magical and, when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls." + "\n   " + "- You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.",
	ritual : false,
	psionic : false,
};

SpellsList["summon aberrant spirit"] = {
	name : "Summon Aberrant Spirit",
	nameAlt : "Summon Aberrant Spirit",
	nameShort : "Summon Aberrant Spirit",
	regExpSearch : /^(?=.*ab(\.|ant))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 3],
	defaultExcluded : false,
	classes : ["sorcerer", "warlock", "wizard"],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "a pickled tentacle and an eyeball in a crystal vial worth at least 400 gp",
	duration : "conc, 1 hr",
	description : "Summon an Aberrant Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a spirit from the Far Realm or another alien realm of madness. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Slaadi, or Star Spawn. The creature physically resembles your choice, which also determines some of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s" +                              " level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon bestial spirit"] = {
	name : "Summon Bestial Spirit",
	nameAlt : "Summon Bestial Spirit",
	nameShort : "Summon Bestial Spirit",
	regExpSearch : /^(?=.*es(\.|ial))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 3],
	defaultExcluded : false,
	classes : ["druid", "ranger"],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp",
	duration : "conc, 1 hr",
	description : "Summon a Bestial Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth the spirit of a beast. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature physically resembles an animal of your choice that is native to the chosen environment, which also determines one of the movement modes in the creature’s stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon celestial spirit"] = {
	name : "Summon Celestial Spirit",
	nameAlt : "Summon Celestial Spirit",
	nameShort : "Summon Celestial Spirit",
	regExpSearch : /^(?=.*est(\.|ial))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 4],
	defaultExcluded : false,
	classes : ["cleric", "paladin"],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "a golden reliquary worth at least 500 gp",
	duration : "conc, 1 hr",
	description : "Summon a Celestial Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a spirit from the Upper Planes. The spirit manifests physically in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines the creature’s attack in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon elemental spirit"] = {
	name : "Summon Elemental Spirit",
	nameAlt : "Summon Elemental Spirit",
	nameShort : "Summon Elemental Spirit",
	regExpSearch : /^(?=.*ele(\.|tal))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 4],
	defaultExcluded : false,
	classes : ["druid", "sorcerer", "wizard"],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "air, a pebble, ash, and water inside a crystal vial worth at least 400 gp",
	duration : "conc, 1 hr",
	description : "Summon an Elemental Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a spirit from the Elemental Planes. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature physically resembles a vaguely humanoid form wreathed in the chosen element, which also determines some of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon fey spirit"] = {
	name : "Summon Fey Spirit",
	nameAlt : "Summon Fey Spirit",
	nameShort : "Summon Fey Spirit",
	regExpSearch : /^(?=.*fe(\.|y))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 5],
	defaultExcluded : false,
	classes : ["bard", "druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "a gilded flower worth at least 300 gp",
	duration : "conc, 1 hr",
	description : "Summon a Fey Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a spirit from the Feywild. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood: Deceitful, Furious, or Joyful. The creature physically resembles a satyr, a dryad, or an elf (your choice) marked by the chosen mood, which also determines one of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon fiendish spirit"] = {
	name : "Summon Fiendish Spirit",
	nameAlt : "Summon Fiendish Spirit",
	nameShort : "Summon Fiendish Spirit",
	regExpSearch : /^(?=.*fie(\.|ish))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 6],
	defaultExcluded : false,
	classes : ["warlock", "wizard"],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "humanoid blood inside a ruby vial worth at least 600 gp",
	duration : "conc, 1 hr",
	description : "Summon a Fiendish Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a fiendish spirit from the Lower Planes. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature physically resembles a fiend of the chosen type, which also determines some of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon shadow spirit"] = {
	name : "Summon Shadow Spirit",
	nameAlt : "Summon Shadow Spirit",
	nameShort : "Summon Shadow Spirit",
	regExpSearch : /^(?=.*sha(\.|ow))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 7],
	defaultExcluded : false,
	classes : ["sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "tears inside a crystal vial worth at least 300 gp",
	duration : "conc, 1 hr",
	description : "Summon a Shadow Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a shadowy spirit from the Shadowfell. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature physically resembles a misshapen humanoid marked by the chosen emotion, which also determines some of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon undead spirit"] = {
	name : "Summon Undead Spirit",
	nameAlt : "Summon Undead Spirit",
	nameShort : "Summon Undead Spirit",
	regExpSearch : /^(?=.*un(\.|ead))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 7],
	defaultExcluded : false,
	classes : ["warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "a gilded humanoid skull worth at least 300 gp",
	duration : "conc, 1 hr",
	description : "Summon an Undead Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a restless spirit from beyond the grave. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature’s form: Ghostly, Putrid, or Skeletal. The creature physically resembles a humanoid with the chosen form, which also determines some of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};
