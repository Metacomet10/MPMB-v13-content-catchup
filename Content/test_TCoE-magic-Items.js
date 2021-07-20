var iFileName = "test_TCoE-magic-items.js";
RequiredSheetVersion(13);

// Define the source
SourceList["TCoE"] = { 
	name : "Tasha's Cauldron of Everything", 
	abbreviation : "TCoE",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tashas-cauldron-everything",
	date : "2020/11/17"
};

MagicItemsList["teeth of dahlver-nar"] = {
    name : "Teeth of Dahlver-nar",
    source : ["TCoE", 135],
    type : "wondrous item",
    rarity : "artifact",
	allowduplicates : true,
    description : "I can sow these teeth to summon creatures specific to each tooth that remain for 10 mintues. I can implant these teeth into my own mouth and gain effects specific to each tooth. I can only have 1 + my Charisma modifier teeth implanted at a time.",
    descriptionFull : "  The Teeth of Dahlver-Nar are stories given form. They are a collection of teeth, each suggestive of wildly different origins and made from various materials. The collection rests within a leather pouch, stitched with images of heroes and whimsical creatures. Where the teeth fall, they bring legends to life.\n  Using the Teeth. While you are holding the pouch, you can use an action to draw one tooth, Roll on the Teeth of Dahlver-Nar table to determine which tooth you draw, and you can either sow the tooth or implant it (both of which are described later).\n  If you don't sow or implant the tooth, roll a die at the end of your turn. On an even number, the tooth vanishes, and creatures appear as if you sowed the tooth, but they are hostile to you and your allies. On an odd number, the tooth replaces one of your teeth as if you implanted it (potentially replacing another implanted tooth, see below).\n  Each tooth can only be used once. Track which teeth have been used. If a tooth's result is rolled after it's been used, you draw the next lowest unused tooth on the table.\n  Sowing Teeth. To sow the tooth, you place it on the ground in an unoccupied space within your reach, or you throw it into an unoccupied space within 10 feet of you in a body of water that is at least 50 feet wide and 50 feet long. Upon doing so, the tooth burrows into the ground and vanishes, leaving no hole behind, or it vanishes into the water. The creatures noted in the Creatures Summoned column appear in an unoccupied space as close to where the tooth was sown as possible. The creatures are allies to you, speak all languages you speak, and linger for 10 minutes before disappearing, unless otherwise noted.\n\nSee Page 3 Notes section for more information.",
	choices : ["pouch of teeth (add first)", "d20 1", "d20 2", "d20 3", "d20 4", "d20 5", "d20 6", "d20 7", "d20 8", "d20 9", "d20 10", "d20 11", "d20 12", "d20 13", "d20 14", "d20 15", "d20 16", "d20 17", "d20 18", "d20 19", "d20 20"],
	"pouch of teeth (add first)" : {
		name : "Pouch for Teeth of Dahlver-Nar",
		description : "I can sow these teeth to summon creatures specific to each tooth that remain for 10 mintues. I can implant these teeth into my own mouth and gain effects specific to each tooth. I can only have 1 + my Charisma modifier teeth implanted at a time.",
		attunement : true,
		toNotesPage : [{
			name : "Teeth of Dahlver-Nar",
			page3notes : true,
			note : [
				"\nImplanting Teeth.",
				"  To implant the tooth, you place it in your mouth, whereupon one of your own teeth falls out, and the drawn tooth takes its place, resizing to fit in your mouth. Once the tooth is implanted, you gain the effect noted in the Implanted Effect column. The tooth can't be removed while you are attuned to the teeth, and you can't voluntarily end your attunement to them. If removed after your death, the tooth vanishes. You can have a maximum number of the teeth are implanted at one time equal to 1 + your Constitution modifier (mimimum of 2 teeth total). If you try to implant more teeth, the newly implanted tooth replaces one of the previous teeth, determined randomly. The replaced tooth vanishes, and you lose the implanted effect.",
				"\nRecovering Teeth.",
				"  Once all the teeth have vanished, their pouch also vanishes. The pouch with all the teeth then appears in a random destination, which could be on a different world of the Material Plane.",
				"\nDestroying the Teeth.",
				"  Each tooth must be destroyed individually by sowing it in the area where the tooth's story originated, with the intention to destroy it. When planted in this way, creatures summoned are not friendly to you and do not vanish. Some of the creatures summoned merely head off in search of home, while others act as their tales dictate. In either case, the tooth is gone forever.",
				"\nSee extra Notes page for Teeth of Dahlver-Nar table",
				"\nTo implant a tooth, add another instance of the Teeth of Dahlver-Nar and select the tooth rolled. If you are running out of space for magic items, move one (or more) to the overflow page and then use the Set Pages Layout function to show the overflow page."
			]},{	
			name : "Teeth of Dahlver-Nar table",
			note : [
				"1d20\tTale and Tooth\t\tCreatures Summoned\n Implanted Effect",
				" 1\tThe Staring Cats of Uldun-dar\t  9 cats\n\t(ivory cat molar)\nThe tooth has 8 charges. As an action, you can expend 1 charge to cast the revivify spell from the tooth. If you are dead at the start of your turn, the tooth expends 1 charge and casts revivify ton you.",
				" 2\tDuggle's Surprising Day\t  1 commoner\n\t(human molar)\nWhen you finish a long rest, the tooth casts sanctuary (DC 18) on you, and the spell lasts for 24 hours or until you break it.",
				" 3\tThe Golden Age of Dhakaan\t 10 goblins\n\t(golden goblin bicuspid)\t  1 goblin boss\n When you are hit by an attack and an ally is within 5 feet of you, you can use your reaction to cause them to be hit instead. You can't use this reaction again until you finish a short or long rest.",
				" 4\tThe Mill Road Murders\t\t 3 green hags\n\t(halfling canine)\t\t in a coven\n When you damage a target that hasn't taken a turn in this combat, the target takes an extra 3d10 slashing damage from ghostly blades.",
				" 5\tDooms of the Malpheggi\t 1 lizardfolk queen\n\t(emerald lizardfolk fang)\t 4 lizardfolk\n You gain reptilian scales, granting you a +2 bonus to your AC. Additionally, when you finish a long rest, you must succeed on a DC 15 Constitution saving throw or gain 1 level of exhaustion.",
				" 6\tThe Stable Hand's Secret\t 2 incubi\n\t(sweet-tasting human canine)\n When you make a Charisma check against a humanoid, you can roll a d10 and add the number rolled as a bonus to the result. The creature then becomes hostile to you at the next dawn.",
				" 7\tThe Donkey's Dream\t\t 1 unicorn\n\t(rainbow-colored donkey molar)\n The tooth has 3 charges. As an action, you can expend 1 charge to touch a creature. The target regains 2d8 + 2 hit points, and all diseases and poisons affecting it are removed. When you use this actio, a shimmering image of a unicorn's horn appears until the end of your turn, sprouting from your forehead. The tooth regains all expended charges daily at dawn. You gain the following flaw: \"When I see your wickedness in action, I must oppose it.\"",
				" 8\tBeyond the Rock of Bral\t 2 mind flayers\n\t(Silver mind flayer tooth)\n You gain telepathy out to 120 feet as described in the Monster Manual, and you can cast the detect thoughts spell at will, requiring no components. You also have disadvantage on Wisdom (Insight) and Wisdom (Perception) checks from constant whispers of memories and nearby minds.",
				" 9\tThe Disappearances of Half\t 4 giant toads\n\tHollow (vomerine tooth of a\n\tLarge toad)\n Your long jump is up to 30 feet and your high jump is up to 15 feet, with or without a running start.",
				"10\tLegendry of Phantoms and\t 1 giant octopus,\n\tGhosts (obsidian human molar)\t 1 mage, 1 specter\n As an action, you can use the tooth to cast the Evard's black tentacles spell (DC 18). Once this property is used, it can't be used again until the next dawn.",
				"11\tThe Thousand Deaths of Jander\t 1 vampire\n\tSunstar (yellowed vampire fang)\n You can make a bite attack as an unarmed strike. On a hit, it deals 1d6 piercing damage plus 3d6 necrotic damage. You regain a number of hit points equal to the necrotic damage dealt. While you are in sunlight, you can't regain hit points.",
				"12\tNightmares of Kaggash\t 1 beholder\n\t(twisted beholder tooth)\n As an action, you can cast the eyebite spell from the tooth. Once you use this action, it can't be used again until the next dawn. Whenever you finish a long rest, roll a d20. On a 20, an aberation chosen by the DM appears within 90 feet of you and attacks.",
			]},{
			name : "Teeth of Dahlver-Nar table (cont)",
			note : [
				"13\tThree Bridges to the Sky\t 3 oni\n\t(lapis lazuli oni tooth)\n You gain a flying speed of 30 feet, and you can use the tooth to cast the detect magic spell at will. While you are attuned to fewer than 3 magic items, you gain 1 level of exhaustion that can't removed until you are attuned to 3 or more magic items.",
				"14\tThe Claws of Dragotha\t\t 1 adult red dracolich\n\t(broken translucent fang)\n You can use the tooth to cast the create undead spell. Once this property is used, it can't be used again until the next dawn. Each time you create an undead creature using the tooth, a skeleton, zombie, or ghoul also appears at a random location within 5 miles of you, searching for the living to kill. A humanoid killed by these undead rises as the same type of undead at the next midnight.",
				"15\tAshes of the Ages and Eternal\t 1 dao, 1 djinni\n\tFire (jade humanoid bicuspid)\t 1 efreeti, 1 marid\n You can use the tooth to cast counterspell at 9th level. Once you use this property, it can't be used again until the next dawn. Whenever you finish a long rest, your hit point maximum is reduced by d10. If this reduces your hit point maximum to 0, you die.",
				"16\tDaughters of Bel (green\t\t 1 pit fiend\n\tsteel pit fiend fang)\n You can use the tooth to cast dominate monster (DC 18). Once you use this property, it can't be used again until the next dawn. You smell strongly of burning sulfur.",
				"17\tWhy the Sky Screams\t\t 1 ancient blue dragon\n\t(blue dragon fang)\n You gain immunity to lightning damage and vulnerability to thunder damage.",
				"18\tThe Last Tarrasque (jagged\t 1 tarrasque (ignores you and\n\tsiiver of tarrasque tooth)\t your commands; appears for\n\t\t\t\t 1d4 rounds then vanishes)\n You deal double damage to objects and structures. If you take 20 or more damage in one turn, you must succeed on a DC18 Wisdom saving throw or spend your next turn in a murderous fury. During this rage, you must use your action to make an unarmed strike against a creature that damaged you, or a random creature you can see if you weren't damaged by a creature, moving as close as you can to the target if necessary.",
				"19\tIncendax's Tooth (ruby-veined\t 1 ancient red dragon\n\tred dragon fang)\n You gain immunity to fire damage, and as an action, you can exhale fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 26d6 fire damage on a failed save, or half as much damage on a successful one. After using the breath weapon, you gain 2 levels of exhaustion.",
				"20\tDalver-Nar's Tooth\t\t 1 priest\n\t(dusty human molar)\n As an action you can call on a divine force to come to your aid. Describe the assistance you seek, and the DM decides the nature of the intervention; the effect of any cleric spell would be appropriate. Once this property is used, it can't be used again for 7 days."
			]
		}],
	},
	"d20 1" : {
		name : "Implanted ivory cat molar",
		description : "I have implanted the ivory cat molar from the Teeth of Dahlver-Nar. The tooth has 8 charges that I can use to cast revivify. If I am dead at the start of my turn the tooth expends 1 charge and casts revivify on me.",
		descriptionFull : "The tooth has 8 charges. As an action, you can expend 1 charge to cast the revivify spell from the tooth. If you are dead at the start of your turn, the tooth expends 1 charge and casts revivify ton you.",
		usages : 8,
		spellcastingBonus : [{
			name : "Implanted Tooth d20 = 1",
			spells : ["revivify"],
			selection : ["revivify"],
			source : ["TCoE", 136]
		}],
		attunement : false
	},
	"d20 2" : {
		name : "Implanted human molar",
		description : "I have implanted the human molar from the Teeth of Dahlver-Nar. When I finish a long rest, the tooth casts sanctuary (DC18) on me, and it last for 24 hours or until I break it.",
		descriptionFull : "When you finish a long rest, the tooth casts sanctuary (DC 18) on you, and the spell lasts for 24 hours or until you break it.",
		usages : 1,
		recovery : "long rest",
		spellcastingBonus : [{
			name : "Implanted Tooth d20 = 2",
			spells : ["sanctuary"],
			selection : ["sanctuary"],
			fixedDC : 18
		}],
		attunement : false,
		source : ["TCoE", 136]		
	},
	"d20 3" : {
		name : "Implanted golden goblin bicuspid",
		description : "I have implanted the golden goblin bicuspid from the Teeth of Dahlver-Nar. When I am hit by an attack I can use my reaction to cause an ally within 5 feet of me to be hit instead. I can use this again after a short or long rest.",
		descriptionFull : "When you are hit by an attack and an ally is within 5 feet of you, you can use your reaction to cause them to be hit instead. You can't use this reaction again until you finish a short or long rest.",
		usages : 1,
		recovery : "short/long rest",
		action : ["reaction", "Redirect Attack to Ally"],
		attunement : false,
		source : ["TCoE", 136]
	},
	"d20 4" : {
		name : "Implanted halfling canine",
		description : "I have implanted the halfling canine from the Teeth of Dahlver-Nar. When I damage a target that hasn't taken a turn in this combat, the target takes an extra 3d10 slashing damage.",
		descriptionFull : "When you damage a target that hasn't taken a turn in this combat, the target takes an extra 3d10 slashing damage from ghostly blades.",
		attunement : false,
		source : ["TCoE", 136]
	},
	"d20 5" : {
		name : "Implanted emerald lizardfolk fang",
		description : "I have implanted the emerald lizardfolk fang from the Teeth of Dahlver-Nar. I gain reptilian scales that give me a +2 to my AC. When I finish a long rest I must succeed on a DC 15 Constitution save or gain 1 level of exhaustion.",
		descriptionFull : "You gain reptilian scales, granting you a +2 bonus to your AC. Additionally, when you finish a long rest, you must succeed on a DC 15 Constitution saving throw or gain 1 level of exhaustion.",
		attunement : false,
		source : ["TCoE", 136],
		extraAC : [{
			mod : 2,
			name : "Teeth of Dahlver-Nar",
			text : "I gain reptilian scales and +2 to my AC."
		}]
	},
	"d20 6" : {
		name : "Implanted sweet-tasting human canine",
		description : "I have implanted the sweet-tasting human canine from the Teeth of Dahlver-Nar. When I make a Charisma check against a humanoid, I can roll a d10 and add the result as a bonus. The creature becomes hostile to me at dawn.",
		descriptionFull : "When you make a Charisma check against a humanoid, you can roll a d10 and add the number rolled as a bonus to the result. The creature then becomes hostile to you at the next dawn.",
		attunement : false,
		source : ["TCoE", 136]
	},
	"d20 7" : {
		name : "Implanted rainbow-colored donkey molar",
		description : "I have implanted the rainbow-colored donkey molar from the Teeth of Dahlver-Nar. As an action, I can expend 1 charge to touch a creature and give them 2d8 + 2 hit points and remove all diseases and poisons affecting it. I then have a shimmering unicorn horn until the end of my turn.",
		descriptionFull : "The tooth has 3 charges. As an action, you can expend 1 charge to touch a creature. The target regains 2d8 + 2 hit points, and all diseases and poisons affecting it are removed. When you use this action, a shimmering image of a unicorn's horn appears until the end of your turn, sprouting from your forehead. The tooth regains all expended charges daily at dawn. You gain the following flaw: \"When I see wickedness in action, I must oppose it.\"",
		attunement : false,
		source : ["TCoE", 136],
		action : ["action", "Add Temp HP & Cure"],
		usages : 3,
		recovery : "dawn"
	},
	"d20 8" : {
		name : "Implanted silver mind flayer tooth",
		description : "I have implanted the silver mind flayer tooth from the Teeth of Dahlver-Nar. I gain telepathy out to 120 ft and can cast the detect thoughts spell at will. I have disadvantage on Wisdom (Insight) and Wisdom (Perception) checks from constant whispers of memories and nearby minds.",
		descriptionFull : "You gain telepathy out to 120 ft as described in the Monster Manual, and you can cast the detect thoughts spell at will, requiring no components. You also have disadvantage on Wisdom (Insight) and Wisdom (Perception) checks from constant whispers of memories and nearby minds.",
		attunement : false,
		source : ["TCoE", 136],
		vision : ["telepathy", 120],
		spellcastingBonus : [{
			name : "Detect Thoughts",
			spells : ["detect thoughts"],
			selection : ["detect thoughts"],
			firstCol : "atwill"
		}]
	},
	"d20 9" : {
		name : "Implanted vomerine tooth of a Large toad",
		description : "I have implanted the vomerine tooth of a Large toad from the Teeth of Dahlver-Nar. My long jump is up to 30 feet and my high jump is up to 15 feet with or without a running start.",
		descriptionFull : "Your long jump is up to 30 feet and your high jump is up to 15 feet with or without a running start.",
		attunement : false,
		source : ["TCoE", 137]
	},
	"d20 10" : {
		name : "Implanted obsidian human molar",
		description : "I have implanted the obsidian human molar from the Teeth of Dahlver-Nar. As an action, I can use the tooth to cast Evard's black tentacles spell (DC 18). I can't use it again until the next dawn.",
		descriptionFull : "As an action, you can use the tooth to cast Evard's black tentacles spell (DC 18). Once this property is uesd, it can't be used again until the next dawn.",
		attunement : false,
		source : ["TCoE", 137],
		usages : 1,
		recovery : "dawn",
		action : ["action", "Cast Evard's black tentacles"],
		spellcastingBonus : [{
			name : "Implanted Tooth d20 = 10",
			spells : ["evard's black tentacles"],
			selection : ["evard's black tentacles"],
			fixedDC : 18,
		}]
	},
	"d20 11" : {
		name : "Implanted yellowed vampire fang",
		description : "I have implanted the yellowed vampire fang from the Teeth of Dahlver-Nar. I can make a bite attack as an unarmed strike. On a hit I deal 1d6 piercing damage plus 3d6 necrotic damage. I regain hit points equal to the necrotic damage dealt. While in sunlight, I can't regain hit points.",
		descriptionFull : "You can make a bite attack as an unarmed strike. On a hit, it deals 1d6 piercing damage plus 3d6 necrotic damage. You regain a number of hit points equal to the necrotic damage dealt. While you are in sunlight, you can't regain hit points.",
		attunement : false,
		source : ["TCoE", 137],
		weaponsAdd : ["Bite"],
		weaponOptions : [{
			name : "Bite",
			source : ["TCoE", 137],
			regExpSearch : /^(?=.*bite).*$/i,
			description : "additional 3d6 necrotic damage, necrotic damage regained in hit points",
			baseWeapon : "unarmed strike"
		}]
	},
	"d20 12" : {
		name : "Implanted twisted beholder tooth",
		description : "I have implanted the twisted beholder tooth from the Teeth of Dahlver-Nar. As an action, once per day, I can cast the eyebite spell. When I finish a long rest, roll a d20 and on a 20, an aberration the DM chooses appears within 30 feet of me and attacks.",
		descriptionFull : "As an action, you can cast the eyebite spell from the tooth. Once you use this action, you can't use it again until the next dawn. Whenever you finish a long rest, roll a d20. On a 20, an aberration chosen by the DM appears within 30 feet of you and attacks.",
		attunement : false,
		source : ["TCoE", 137],
		usages : 1,
		recovery : "dawn",
		action : ["action", "Cast eyebite"],
		spellcastingBonus : [{
			name : "Implanted Tooth d20 = 12",
			spells : ["eyebite"],
			selection : ["eyebite"]
		}]
	},
	"d20 13" : {
		name : "Implanted lapis lazuli oni fang",
		description : "I have implanted the lapis lazuli oni fang from the Teeth of Dahlver-Nar. I gain a flying speed of 30 feet, and I can cast detect magic at will. While I am attuned to fewer than 3 magic items, I gain 1 level of exhaustion that can't be removed until I have attuned 3 items.",
		descriptionFull : "You gain a flying speed of 30 feet, and you can use the tooth to cast the detect magic spell at will. While you are attuned to fewer than 3 magic items, you gain 1 level of exhaustion that can't be removed until you are attuned to 3 or more magic items.",
		attunement : false,
		source : ["TCoE", 137],
		spellcastingBonus : [{
			name : "Implanted Tooth d20 = 13",
			spells : ["detect magic"],
			selection : ["detect magic"],
			firstCol : "atwill"
		}],
		speed : {
			fly : {spd : 30, enc : 0}
		}
	},
	"d20 14" : {
		name : "Implanted broken translucent fang",
		description : "I have implanted the broken translucent fang from the Teeth of Dahlver-Nar. Once per day, I can use the tooth to cast create undead. When I create an undead creature, a skeleton, zombie or ghoul also appears within 5 miles of me, searching for the living to kill.",
		descriptionFull : "You can use the tooth to cast the create undead spell. Once this property is used, it can't be used again until the next dawn. Each time you create an undead creature using the tooth, a skeleton, zombie or ghoul also appears at a random location within 5 miles of you, searching for the living to kill. A humanoid killed by these undead rises as the same type of undead at the next midnight.",
		attunement : false,
		source : ["TCoE", 137],
		usages : 1,
		recovery : "dawn",
		spellcastingBonus : [{
			name : "Implanted Tooth d20 = 14",
			spells : ["create undead"],
			selection : ["create undead"]
		}]
	},
	"d20 15" : {
		name : "Implanted jade humanoid bicuspid",
		description : "I have implanted the jade humanoid bicuspid from the Teeth of Dahlver-Nar. Once per day, I can use the tooth to cast counterspell at 9th level. Whenever I finish a long rest, if I haven't used the tooth to cast counterspell, my hit point maximum is reduced by 2d10.",
		descriptionFull : "You can use the tooth to cast counterspell at 9th level. Once you use this property, it can't be used again until the next dawn. Whenever you finish a long rest, if you haven't used the tooth to counter a spell since your last long rest, your hit point maximum is reduced by 2d10. If this reduces your hit point maximum to 0, you die.",
		attunement : false,
		source : ["TCoE", 137],
		usages : 1,
		recovery : "dawn",
		spellcastingBonus : [{
			name : "Implanted Tooth d20 = 15",
			spells : ["counterspell"],
			selection : ["counterspell"]
		}]
	},
	"d20 16" : {
		name : "Implanted green steel pit fiend fang",
		description : "I have implanted the green steel pit fiend fang from the Teeth of Dahlver-Nar. Once per day, I can use the tooth to cast dominate monster (DC 18). I smell strongly of burning sulfur.",
		descriptionFull : "You can use the tooth to cast dominate monster (DC 18). Once you use this property, it can't be used again until the next dawn. You smell strongly of burning sulfur.",
		attunement : false,
		source : ["TCoE", 137],
		usages : 1,
		recovery : "dawn",
		spellcastingBonus : [{
			name : "Implanted Tooth d20 = 16",
			spells : ["dominate monster"],
			selection : ["dominate monster"],
			fixedDC : 18
		}]
	},
	"d20 17" : {
		name : "Implanted blue dragon fang",
		description : "I have implanted the blue dragon fang from the Teeth of Dahlver-Nar. I gain immunity to lightning damage and vulnerability to thunder damage.",
		descriptionFull : "You gain immunity to lightning damage and vulnerability to thunder damage.",
		attunement : false,
		source : ["TCoE", 137],
		savetxt : {
			immune : ["lightning"],
			text : ["Vulnerable to Thunder damage"]
		}
	},
	"d20 18" : {
		name : "Implanted jagged sliver of tarrasque tooth",
		description : "I have implanted the jagged sliver of tarrasque tooth from the Teeth of Dahlver-Nar. I deal double damage to objects and structures. If I take 20 or more damage in one turn, I must succeed on a DC 18 Wisdom save or spend the next turn in a murderous rage.",
		descriptionFull : "You deal double damage to objects and structures. If you take 20 or more damage in one turn, you must succeed on a DC 18 Wisdom saving throw or spend your next turn in a murderous fury. During this rage, you must use your action to make an unarmed strike against a creature that damaged you, or a random creature you can see if you weren't damaged by a creature, moving as close as you can to the target if necessary.",
		attunement : false,
	},
	"d20 19" : {
		name : "Implanted ruby-veined red dragon fang",
		description : "I have implanted the ruby-veined red dragon fang from the Teeth of Dahlver-Nar. I gain immunity to fire damage and I can exhale fire in a 90-foot cone. Creatures in my cone must make a DC 24 Dexterity save or take 26d6 fire damage or half on success.",
		descriptionFull : "You gain immunity to fire damage, and as an action, you can exhale fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 26d6 fire damage on a failed save, or half as much damage on a successful one. After using the breath weapon, you gain 2 levels of exhaustion.",
		attunement : false,
		action : ["action", "Red Dragon fang (ToD-N)"],
		savetxt : {
			immune : ["fire"]
		},
		weaponsAdd : ["Red Dragon fang (ToD-N)"],
		weaponOptions : [{
			name : "Red Dragon fang (ToD-N)",
			source : ["TCoE", 137],
			type : "Natural",
			ability : 2,
			regExpSearch : /^(?=.*red)(?=.*dragon)(?=.*tod-n).*$/i,
			abilitytodamage : false,
			damage : [26, 6, "fire"],
			range : "90 foot cone",
			dc : true,
			description : "90 foot cone; Dexterity save DC 24, half damage on success",
		}],
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.WeaponTextName == "Red Dragon fang (ToD-N)") {
						fields.To_Hit_Bonus = 'DC ' + (16 - What('Dex Mod'));
					}
				}
			]
		}
	},
	"d20 20" : {
		name : "Implanted dusty human molar",
		description : "I have implanted the dusty human molar from the Teeth of Dahlver-Nar. As an action, I can call on a divine force for aid. Once I use this property, I can't use it again for 7 days.",
		descriptionFull : "As an action you can call on a divine force to come to your aid. Describe the assistance you seek, and the DM decides the nature of the intervention; the effect of any cleric spell would be appropriate. Once this property is used, it can't be used again for 7 days.",
		attunement : false,
		usages : 1,
		recovery : "7 days"
	}
}