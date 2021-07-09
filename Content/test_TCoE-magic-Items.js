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
    action : [
        ["action", "Spell Replacement"],
        ["action", "Semblance of Undeath"]
    ],
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
    description : "While this tatoo is on my skin, I gain resistance to necrotic damage. When I would be reduced to 0 hit points, I drop to 1 hit point instead. This can't be used again until the next dawn.",
    descriptionFull : "  Produced by a special needle, this magic tatoo features symbols of life and rebirth.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Necrotic Resistance. You have resistance to necrotic damage.\n  Life Ward. When you would be reduced to 0 hit points, you drop to 1 hit point instead. Once used, this property can't be used again until the next dawn.",
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