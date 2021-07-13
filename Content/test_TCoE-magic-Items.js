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

MagicItemsList["libram of souls and flesh"] = {
    name : "Libram of Souls and Flesh",
    source : ["TCoE",129],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "While i hold this book, I can use it as a spellcasting focus. I can spend 1 mintue studying it to replace a prepared spell with another of the necromancy school from the book. I can spend a charge to appear undead for 10 minutes or until I deal damage or cause a creature to make a saving throw.",
    descriptionFull : "  Whith covers made of skin and fittings of bone, this tome is cold to the touch, and it whispers faintly. When found the book contains the following spells, which are wizard spells for you while you are attuned to the book: animate dead, circle of death, false life, finger of death, speak with dead, summon undead, vampiric touch. It functions as a spellbook for you.\n  While you are holding the book you can use it as a spellcasting focus fro your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while hoding it:\n  If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the necromancy school.\n  As an action, you can expend 1 charge to take on a semblance of undeath for 10 minutes. For the duration, you take on a deathly appearance, and undead creatures are indifferent to you, unless you have damaged them. You also appear undead to all outward inspection and to spells used to determine the target's status. This effect ends if you deal damage or force a creature to make a saving throw.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : ["action", "Semblance of Undeath"],
    spellcastingBonus : [{
        name : "Animate Dead",
        spells : ["animate dead"],
        selection : ["animate dead"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "Circle of Death",
        spells : ["circle of death"],
        selection : ["circle of death"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "False Life",
        spells : ["false life"],
        selection : ["false life"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Finger of Death",
        spells : ["finger of death"],
        selection : ["finger of death"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Speak With Dead",
        spells : ["speak with dead"],
        selection : ["speak with dead"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Summon Undead",
        spells : ["summon undead"],
        selection : ["summon undead"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Vampiric Touch",
        spells : ["vampiric touch"],
        selection : ["vampiric touch"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["lifewell tattoo"] = {
    name : "Lifewell Tattoo",
    source : ["TCoE",129],
    type : "wondrous item",
    rarity : "very rare",
    description : "While this tattoo is on my skin, I gain resistance to necrotic damage. When I would be reduced to 0 hit points, I drop to 1 hit point instead. This can't be used again until the next dawn.",
    descriptionFull : "  Produced by a special needle, this magic tattoo features symbols of life and rebirth.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Necrotic Resistance. You have resistance to necrotic damage.\n  Life Ward. When you would be reduced to 0 hit points, you drop to 1 hit point instead. Once used, this property can't be used again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    dmgres : ["Necrotic"]
}

MagicItemsList["luba's tarokka of souls"] = {
    name : "Luba's Tarokka of Souls",
    source : ["TCoE",129],
    type : "wondrous item",
    rarity : "artifact",
    description : "When holding this deck, I can use an action to cast one of the spells from it. I automatically succeed on Constitution saving throws for divination spells. I can draw a card from the deck to add advantage or disadvantage for a creature I can see within 15 feet.",
    descriptionFull : "  Not all lingering spirits are tragic souls, lost on their way to the hereafter. Some languish as prisoners, souls so wicked mortals dare not free them upon an unsuspecting afterlife.\n  Created by a figure of Vistani legend, Luba's Tarokka of Souls shaped the destiny of countless heroes. The prophecies of this deck of cards also revealed great evils and guided its creator into the path of nefarious forces. Untold times the deck's creator, Mother Luba, narrowly escaped doom, spared only by her keen insigths. But even for her, not all wickedness could be escaped. In the most dire cases, Mother Luba managed to ensnare beings of pure evil amid the strands of fate, imprisoning them within her tarroka deck. There these foul spirits dwell still, trapped within a nether realm hidden amid shuffling cards, waiting for fate to turn foul--as it inevitably will.\n  Like all tarokka decks, the Tarokka of Souls is a lavishly illustrated collection of fifty-four cards, comprising the fourteen cards of the high deck and forty other cards divided into four suits: coins, glyphs, stars, and swords.\n  Random Properties. The artifact has the following random properties, which you can determine by rolling on the tables in the \"Artifacts\" section of the Dungeon Master's Guide:\n  2 minor detrimental properties\n  2 minor beneficial properties\n  Spells. While holding the deck, you can use an action to cast one of the following spells (save DC 18) from it: comprehend languages, detect evil and good, detect magic, detect poison and disease, locate object, or scrying. Once you use the deck to cast a spell, you can't cast that spell again from it until the next dawn.\n Enduring Vision. While holding the deck, you automatically succeed on Constitution saving throws made to maintain your concentration on divination spells.\n\nSee the Notes section for further information.",
    toNotesPage : [{
        name : "Luba's Tarokka of Souls",
        note : [
            "\nTwist of Fate",
            "As an action, you can draw a card from the deck and twist the fortune of another creature you can see within 15 feet of you. Choose one of the following effects:\n",
            "Weal. The creature has advantage on attack rolls, ability checks, and saving throws for the next hour.",
            "Woe. The creature has disadvantage on attack rolls, ability checks, and saving throws for the next hour.",
            "\n  The deck can be used in this way twice, and you regain all expended uses at the next dawn.",
            "\nPrisoners of Fate",
            "Whenever you use the Twist of Fate property, there is a chance that one of the souls trapped in the deck escapes. Roll d100 and consult the Souls of the Tarokka table. If you roll one of the high cards, the soul associated with it escapes. You can find its statistics in the Monster Manual. If you roll a soul that has already escaped, roll again.",
            "\nSouls of the Tarokka",
            "d100\tCard\t\tSoul",
            "  1\tArtifact\t\tFlameskull",
            "  2\tBeast\t\tWraith",
            "  3\tBroken One\tBanshee",
            "  4\tDarklord\t\tVampire",
            "  5\tDonjon\t\tMummy",
            "  6\tExecutioner\t\tDeath knight",
            "  7\tGhost\t\tGhost",
            "  8\tHorseman\t\tMummy lord",
            "  9\tInnocent\t\tGhost",
            " 10\tMarionette\t\tMummy",
            " 11\tMists\t\tWraith",
            " 12\tRaven\t\tVampire spawn",
            " 13\tSeer\t\tVampire",
            " 14\tTempter\t\tVampire spawn",
            "15-00\t--\t\t--",
            "\n  The released soul appears at a random location within 10d10 miles of you and terrorizes the living. Until the released soul is destroyed, it gains the benefit of a weal from the deck's Twist of Fate property, and both you and the original target of Twist of Fate suffer the effect of Woe.",
            "\nShuffling Fate",
            "If you go 7 days without using the Twist of Fate property, your attunement to Luba's Tarroka of Souls ends, and you can't attune to it again until after another creature uses Twist of Fate on you.",
            "\nDestroying the Deck",
            "Luba's Tarokka of Souls can be destroyed only if all fourteen souls within are released and destroyed. This reveals a fifteenth soul, a lich, that inhabits the Nether card, which appears only when the fourteen souls are defeated. If this ancient entity is destroyed, the Nether card vanishes and the deck becomes a normal tarokka deck, with no special properties, but it inlcudes a new card of the DM's design."
        ]
    }],
    attunement : true,
    usages : 1,
    recovery : "dawn",
    action : ["action", "Cast Spell from Tarokka"],
    extraLimitedFeatures : [{
        name : "Twist of Fate",
        usages : "2",
        recovery : "dawn"
    }],
    spellcastingBonus : [{
        name : "Comprehend Languages",
        spells : ["comprehend languages"],
        selection : ["comprehend languages"],
        fixedDC : 18,
    },{
        name : "Detect Evil and Good",
        spells : ["detect evil and good"],
        selection : ["detect evil and good"],
        fixedDC : 18,
    },{
        name : "Detect Magic",
        spells : ["detect magic"],
        selection : ["detect magic"],
        fixedDC : 18,
    },{
        name : "Detect Poison and Disease",
        spells : ["detect poison and disease"],
        selection : ["detect poison and disease"],
        fixedDC : 18,
    },{
        name : "Locate Object",
        spells : ["locate object"],
        selection : ["locate object"],
        fixedDC : 18,
    },{
        name : "Scrying",
        spells : ["scrying"],
        selection : ["scrying"],
        fixedDC : 18,
    }]
}

MagicItemsList["lyre of building"] = {
    name : "Lyre of Building",
    source : ["TCoE",131],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a bard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.bard ? true : false;
    },
    description : "While holding this lyre, I can cast mending as an action. As a reaction, I can protect an object or structure that takes damage from that damage type until the start of my next turn. I can play the lyre to cast spells from it once each per day.",
    descriptionFull : "  While holding this lyre, you can cast mending as an action. You can also play the lyre as a reaction when an object or structure you can see within 300 feet of you takes damage, causing it to be immune to that damage and any further damage of the same type until the start of your next turn.\n  In addition, you can play the lyre as an action to cast fabricate, move earth, passwall, or summon construct, and that spell can't be cast from it again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Fabricate",
        spells : ["fabricate"],
        selection : ["fabricate"],
        spellcastingAbility : 6,
        firstCol : "1d"
    },{
        name : "Move Earth",
        spells : ["move earth"],
        selection : ["move earth"],
        spellcastingAbility : 6,
        firstCol : "1d"
    },{
        name : "Passwall",
        spells : ["passwall"],
        selection : ["passwall"],
        spellcastingAbility : 6,
        firstCol : "1d"
    },{
        name : "Summon Construct",
        spells : ["summon construct"],
        selection : ["summon construct"],
        spellcastingAbility : 6,
        firstCol : "1d"
    },{
        name : "Mending",
        spells : ["mending"],
        selection : ["mending"],
        spellcastingAbility : 6,
        firstCol : "atwill"
    }],
    action : [
        ["action", "Cast Mending"],
        ["reaction", "Protect Object/Structure"]
    ]
}

MagicItemsList["masquerade tattoo"] = {
    name : "Masquerade Tattoo",
    source : ["TCoE",131],
    type : "wondrous item",
    rarity : "common",
    description : "While this tattoo is on my body, I can use a bonus action to change the shape, color and location of the tattoo. As an action, once per day I can cast Disguise Self with a DC of 13 to discern the disguise.",
    descriptionFull : "  Produced by a special needle, this tattoo appears on your body as whatever you desire.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Fluid Ink. As a bonus action, you can shape the tattoo into any color or pattern and move it to any area of your skin. Whatever form it takes, it is always obviously a tattoo. It can range in size from no smaller than a copper piece to an intricate work of ar that covers all your skin.\n  Disguise Self. As an action, you can use the tattoo to cast the disguise self spell (DC 13 to discern the disguise). Once the spell is cast from the tattoo, it can't be cast from the tattoo again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    action : [
        ["action", "Cast Disguise Self"],
        ["bonus action", "Fluid Ink"]
    ],
    spellcastingBonus : [{
        name : "Disguise Self",
        spells : ["disguise self"],
        selection : ["disguise self"],
        fixedDC : 13
    }]
}

MagicItemsList["mighty servant of leuk-o"] = {
    name : "Mighty Servant of Leuk-o",
    source : ["TCoE",131],
    type : "wondrous item",
    rarity : "artifact",
    description : "While attuned to this construct, I can enter it and control it along with one other creature. See the Notes section for full information and stat block.",
    descriptionFull : "  Named for the warlord who infamously employed it, the Mighty Servant of Leuk-o is a fantastically powerful, 10-foot-tall machine that turns into an animate construct when piloted. Crafted of a gleaming black alloy of unknown origin, the servant is often described as a combination of a disproportioned dwarf and an oversized beetle. The servant contains enough space for 1 ton of cargo and a crew compartment within, from which up to two Medium creatures can control it--and potentially execute a spree of unstoppable destruction.\n  Tales of the servant's origins involve more conjecture than fact, often referring to otherworldly beings, the mysterious Barrier Peaks in Oerth, and the supposedly related device known as the Machine of Lum the Mad. The best details on the device's origins and operation can be found in the Mind of Metal, a tome of artificer's secrets that connects the device to the traditions of the lost Olman people, and which was written by Lum the Mad's several tiems over granddaughter, Lum the Maestro, while she reconstructed the long disassembled Mighty Servant of Leuk-o.\n  Dangerous Attunement. Two creatures can be attuned to the servant at a time. If a third creature tries to attune to it, nothing happens.\n  The servant's controls are accessed by a hatch in its upper back, which is easily opened while there are no creatures attuned to the artifact.\n  Attuning to the artifact requires two hours, which can be undertaken as part of a long rest, during which time you must be inside the servant, interating with its controls. While crew memebers are attuning themselves, any creature or structure outside and within 50 feet of the servant has a 25 percent chance of being accidentally targeted by one of its Destructive Fist attacks once during the attunement. This process must be undergone every time a creature attunes itself to the artifact.\n\n  See the Notes section for further information.",
        toNotesPage : [{
        name : "Mighty Servant of Leuk-o",
        note : [
            "\nControlling the Servant.",
            "  While any creatures are attuned to the artifact, attuned creatures can open the hatch as easily as any other door. Other creatures can open the hatch as an action with a successful DC 25 Dexterity check using thieve's tools. A knock spell cast on the hatch also opens it until the start of the caster's next turn.\n  A creature can enter or exit through the hatch by spending 10 feet of momvement. Those inside the servant have total cover from effects originating outside it. The controls within it allow creatures to see outside without obstruction.\n  While you are inside the servant, you can command it by using the controls. During your turn (for either attuned creature), you can command it in the following ways:\n \u2022 Open or close the hatch (no action required, once per turn)\n \u2022 Move the servant up to its speed (no action requred)\n \u2022 As an action, you can command the servant to take one of the actions in its stat block or some other action.\n \u2022 When a creature provokes an opportunity attack from the servant, you can use your reaction to command the servant to make one Destructive Fist attack against that creature.\n  While there are no attuned creatures inside the servant, it is an inert object.\n ",
            "\nGhost in the Machine.",
            "  Upon his death, the soul of the mighty warlord Leuk-o was drawn into the artifact and has become its animating force. The servant has been known to attack or move of its own accord, particularly if doing so will cause destruction. Once every 24 hours, the servant, at the DM's discretion, takes one action while uncrewed.\n  If the servant loses half of its hit points or more, each creature attuned to it must succeed on a DC 20  Wisdom saving throw or be charmed for 24 hours. While charmed in this way, the creature goes on a destructive spree, seeking to destroy structures and attack any unattuned creatures within sight of the servant, starting with those threatening the artifact--preferably using the servant, if possible.",
            "\nSelf-Destruct",
            "  By inputting a specific series of lever pulls and button presses, the servant's two crew members can cause it to explode. The self-destruct code is not revealed to crew members when they attune to the artifact. If the code is discovered (the DM determines how), it requires two attuned crew members to be inside the servant and spend their actions on 3 consecutive rounds performing the command. Should the crew members begin the process of entering the code, though, the servant uses its Ghost in the Machine property and turns the crew memebers against each other.\n  If the crew members successfully implement the code, at the end of the third round, the servant explodes. Every creature in a 100-foot-radius sphere centered on the servant must make a DC 25 Dexterity saving throw. On a failed save, a creature takes 87 (25d6) force damage, 87 (25d6) lightning damage, and 87 (25d6) thunder damage. On a successful save, a creature takes half as much damage. Objects and structures in the area take triple damage. Creatures inside the servant are slain instantly and leave behind no remains.\n  This does not destroy the servant permanently. Rather, 2d6 days later, its parts--left arm, left leg, right arm, right leg, lower torso, and upper torso--drop from the sky in random places within 1,000 miles of the explosion. If brought within 5 feet of one another, the pieces reconnect and reform the servant.",
            "\nDestroying the Servant",
            "  The servant can be destroyed in two ways. After it has self-destructed, its disconnected pieces can be melted down in on of the forge-temples of its ancient Olman creators. Alternatively, if the servant strikes the Machine of Lum the Mad, both artifacts explode in an erubtion that is three times the size and three times the damage as the servant's self-destruct property."
        ]},{
        name : "Mighty Servant of Leuko-o Stat Block",
        note : [
            "\nMighty Servant of Leuk-o",
            "Huge construct",
            "\nArmor Class: 22 (natural armor)\nHit Points: 310 (27d12 + 135)\nSpeed: 60 ft.",
            " STR       DEX      CON      INT      WIS       CHA\n30 (+10)  14 (+2)  20 (+5)  1 (-5)  14 (+2)  10 (+0)",
            "\nSaving Throws: Wis +9, Cha +7\nSkills: Perception +9\nDamage Resistances: piercing, slashing\nDamage Immunities: acid, bludgeoning, cold, fire, lightning, necrotic, poison, psychic, radiant\nCondition Immunities: all conditions but invisible and prone\nSenses: blindsight 120 ft., passive Perception: 19\nLanguages: understands the languages of creatures attuned to it but can't speak\nChallenge: --\tProficiency Bonus: +7",
            "\nImmutable Existence. The servant is immune to any spell or effect that would alter its form or send it to another plane of existence.\nMagic Resistant Construction. The servant has advantage on saving throws against spells and other magical effects, and spell attacks made against it have disadvantage.\nRegeneration. The servant regains 10 hit points at the start of its turn. If it is reduced to 0 hit points, this trait doesn't function until an attuned creature spends 24 hours repairing the artifact or until the artifact is subjected to lightning damage.\nStanding Leap. The servant's long jump is up to 50 feet and its high jump is up to 25 feet, with or without a running start.\nUnusual Nature. The servant doesn't require air, food, drink, or sleep.",
            "\nActions\nDestructive Fist. Melee or Ranged Weapon Attack: +17 to hit, reach 10 ft. or range 120 ft., one target. Hit: 36 (4d12 + 10) force damage. If the target is an object, it takes triple damage.\nCrushing Leap. If the servant jumps at least 25 feet as a part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures is pushed to an unoccupied space within 5 feet of the servant and must make a DC 25 Dexterity saving throw. On a failed save, a creature takes 26 (4d12) bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone."
        ]
    }],
    attunement : true,
    action : ["reaction", "Destructive Fist Attack"],
}

MagicItemsList["moon sickle"] = {
    name : "Moon Sickle",
    nameTest : /^(?=.*moon)(?=sickle).*$/i,
    source : ["TCoE", 133],
    defaultExcluded : true,
    type : "weapon",
    attunement : true,
    prerequisite : "Requires attunement by a druid or ranger",
    prereqeval : function(v) {
        return classes.known.druid ? true : false || classes.known.ranger ? true : false;
    },
    description : "While holding this sickle, I can add 1d4 to the number of hit points recovered by my healing spells. I gain a bonus to attack and damage rolls made with it as well as spell attack rolls and saving throw DCs. This blade is made of silver.",
    descriptionFull : "This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, an dyou gain a bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells.\n  When you cast a spell that restores hit points, you can rol a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
    choices : ["+1 sickle (uncommon)", "+2 sickle (rare)", "+3 sickle (very rare)"],
    "+1 sickle (uncommon)" : {
        name : "Moon Sickle +1",
        rarity : "uncommon",
        description : "While holding this sickle, I can add 1d4 to the number of hit points recovered by my healing spells. I gain a +1 bonus to attack and damage rolls made with it as well as spell attack rolls and saving throw DCs. This blade is made of silver.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
                    return 1;
                },
                "I add +1 to all spell attack rolls and saving throw DCs of my druid and ranger spells",
            ]
        },
        weaponOptions : [{
            name : "Moon Sickle +1",
            source : ["TCoE", 133],
            RegExpSearch : /^(?=.*moon)(?=.*sickle).*$/i,
            description : "Light",
            modifiers : [1,1],
            type : "simple",
            ability : 1,
            damage : [1, 4, "slashing"],
            range : "Melee",
        }]
    },
    "+2 sickle (rare)" : {
        name : "Moon Sickle +2",
        rarity : "rare",
        description : "While holding this sickle, I can add 1d4 to the number of hit points recovered by my healing spells. I gain a +2 bonus to attack and damage rolls made with it as well as spell attack rolls and saving throw DCs. This blade is made of silver.",
        calcChanges : {
                spellCalc : [
                function (type, spellcasters, ability) {
                    return 2;
                },
                "I add +2 to all spell attack rolls and saving throw DCs of my druid and ranger spells",
            ]
        },
        weaponOptions : [{
            name : "Moon Sickle +2",
            source : ["TCoE", 133],
            RegExpSearch : /^(?=.*moon)(?=.*sickle).*$/i,
            description : "Light",
            modifiers : [2,2],
            type : "simple",
            ability : 1,
            damage : [1, 4, "slashing"],
            range : "Melee",
        }]
    },
    "+3 sickle (very rare)" : {
        name : "Moon Sickle +3",
        rarity : "very rare",
        description : "While holding this sickle, I can add 1d4 to the number of hit points recovered by my healing spells. I gain a +3 bonus to attack and damage rolls made with it as well as spell attack rolls and saving throw DCs. This blade is made of silver.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
                    return 3;
                },
                "I add +3 to all spell attack rolls and saving throw DCs of my druid and ranger spells",
            ]
        },
        weaponOptions : [{
            name : "Moon Sickle +3",
            source : ["TCoE", 133],
            RegExpSearch : /^(?=.*moon)(?=.*sickle).*$/i,
            description : "Light",
            modifiers : [3,3],
            type : "simple",
            ability : 1,
            damage : [1, 4, "slashing"],
            range : "Melee",
        }]
    }
}

MagicItemsList["nature's mantle"] = {
    name : "Nature's Mantle",
    source : ["TCoE", 133],
    type : "wonderous item",
    rarity : "uncommon",
    description : "While wearing this cloak, I can Hide as a bonus action in an area that is lightly obscured even if being directly observed. I can also use it as a spellcasting focus for my druid and ranger spells.",
    descriptionFull : "This cloak shifts color and texture to blend with the terrain surrounding you. While wearing the cloak, you can use it as a spellcasting focus for your druid and ranger spells.\n  While you are in an area that is lightly obscured, you can Hide as a bonus action even if you are being directly observed.",
    attunement : true,
    prerequisite : "Requires attunement by a druid or ranger.",
    prereqeval : function(v) {
        return classes.known.druid ? true : false || classes.known.ranger ? true : false || classes.known.rangerua ? true : false;
    },
    action : ["bonus action", "Hide in Light Obscurment"]
}

MagicItemsList["outer essence shard"] = {
    name : "Outer Essence Shard",
    source : ["TCoE", 133],
    type : "wondrous item",
    rarity : "rare",
    description : "While I hold or wear this crystal, I can teleport to an unoccupied space within 30 feet that I can see immediately following the use of a metamagic option while casting a sorcerer spell.",
    descriptionFull : "  This flickering crystal holds the essence of an Outer Plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.\n  Roll a d4 and consult the Outer Essence Shards table to determine the shard's essence and property. When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.\nd4\tProperty\n 1\tLawful. You can end one of the following\n\tconditions affecting yourself or one creature\n\tyou can see within 30 feet of you: charmed,\n\tblinded, deafened, frightened, poisoned, or\n\tstunned\n 2\tChaotic. Choose one creature who takes damage\n\tfrom the spell. That target has disadvantage on\n\tattack rolls and ability checks made before the\n\tstart of your next turn.\n 3\tGood. You or one creature of your choice that you\n\tcan see within 30 feet of you gains 3d6\n\ttemporary hit points.\n 4\tEvil. Choose one creature who takes damage from\n\tthe spell. That target takes an extra 3d6 necrotic\n\tdamage.",
    attunement : true,
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;
    },
}

MagicItemsList["planecaller's codex"] = {
    name : "Planecaller's Codex",
    source : ["TCoE",134],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "I can use this codex as a spellbook. I can spend 1 charge to replace a prepared spell with one from the book after studying it for 1 minute. I can use 1 charge to give advantage for 1 minute to a creature when I summon or create it.",
    descriptionFull : "  The pages of this book are bound in fiend hide, and its cover is embossed with a diagram of the Great Wheel of the multiverse. When found, the book contains the following spells: banishment, find familiar, gate, magic circle, planar binding, and summon elemental. It functions as a spellbook for you.\n  While you are holding the book you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n \u2022 If you sepnd 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the conjuration school.\n \u2022 When you cast an conjuration spell that summmons or creates one creature, you can expend 1 charge to grant that creature advantage on attack rolls for 1 minute.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Banishment",
        spells : ["banishment"],
        selection : ["banishment"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "Find Familiar",
        spells : ["find familiar"],
        selection : ["find familiar"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Gate",
        spells : ["gate"],
        selection : ["gate"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Magic Circle",
        spells : ["magic circle"],
        selection : ["magic circle"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Planar Binding",
        spells : ["planar binding"],
        selection : ["planar binding"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Summon Elemental",
        spells : ["summon elemental"],
        selection : ["summon elemental"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}

MagicItemsList["prosthetic limb"] = {
    name : "Prosthetic Limb",
    source : ["TCoE",134],
    type : "wondrous item",
    rarity : "common",
    description : "I use this prosthetic to replace a lost body part. It cannot be removed against my will. I can attach or reattach it as an action. It detaches if I die.",
    descriptionFull : "This item replaces a lost limb--a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as an action and it can't be removed against your will. It detaches if you die.",
    action : ["action", "Detach/Reattach Prosthetic Limb"]
}

MagicItemsList["protective verses"] = {
    name : "Protective Verses",
    source : ["TCoE",134],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a wizard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.wizard ? true : false;
    },
    description : "I can use this book as a spellbook. I can spend 1 charge to replace a prepared spell with one from the book after studying it for 1 minute. I can use 1 charge to give 2d10 temporary hit points to a creature I can see within 30 ft when I cast an abjuration spell.",
    descriptionFull : "  This leather-bound spellbook is reinforced with iron and silver fittings and an iron lock (DC 20 to open). As an action, you can touch the book's cover and cause it to lock as if you cast arcane lock on it. When found, the book contains the following spells: arcane lock, dispel magic, globe of invulnerability, glyph of warning, Mordenkainen's private sanctum, protection from evil, and symbol. It functions as a spellbook for you.\n  While you are holding the book you can use it as a spellcasting focus for your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:\n \u2022 If you sepnd 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the abjuration school.\n \u2022 When you cast an abjuration spell, you can expend 1 charge to grant a creature you can see within 30 feet of you 2d10 temporary hit points.",
    attunement : true,
    usages : 3,
    recovery : "dawn",
    action : ["action", "Lock Protective Verses"],
    spellcastingBonus : [{
        name : "Arcane Lock",
        spells : ["arcane lock"],
        selection : ["arcane lock"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4,
    },{
        name : "Dispel Magic",
        spells : ["dispel magic"],
        selection : ["dispel magic"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Globe of Invulnerability",
        spells : ["globe of invulnerability"],
        selection : ["globe of invulnerability"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Glyph of Warding",
        spells : ["glyph of warding"],
        selection : ["glyph of warding"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Mordenkainen's Private Sanctum",
        spells : ["mordenkainen's private sanctum"],
        selection : ["mordenkainen's private sanctum"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Protection from Evil and Good",
        spells : ["protection from evil and good"],
        selection : ["protection from evil and good"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    },{
        name : "Symbol",
        spells : ["symbol"],
        selection : ["symbol"],
        firstCol : "checkbox",
        allowUpCasting : true,
        spellcastingAbility : 4
    }]
}