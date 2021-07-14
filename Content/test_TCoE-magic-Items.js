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

MagicItemsList["reveler's concertina"] = {
    name : "Reveler's Concertina",
    source : ["TCoE",134],
    type : "wondrous item",
    rarity : "rare",
    prerequisite : "Requires attunement by a bard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.bard ? true : false;
    },
    description : "While holding this concertina, I gain a +2 bonus to the saving throw DC of my bard spells.\n  As an action, I can use the concertina to cast Otto's irresistible dance from the item. This propery of the concertina can't be used again until the next dawn.",
    descriptionFull : "  While holding this concertina, you gain a +2 bonus to the saving throw DC of your bard spells.\n  As an action, you can use the concertina to cast Otto's irresistible dance from the item. This propery of the concertina can't be used again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Otto's Irresistible Dance",
        spells : ["otto's irresistible dance"],
        selection : ["otto's irresistible dance"],
        spellcastingAbility : 6,
        firstCol : "1d"
    }],
    action : [
        ["action", "Cast Otto's Irresistible Dance"]
    ],
    calcChanges : {
        spellCalc : [
            function (type, spellcasters, ability) {
                if(type !== "prepare") return 2;
            },
            "I add +2 to all spell attack rolls and the saving throw DCs of my bard spells."
        ]
    }
}

MagicItemsList["rhythm maker's drum"] = {
    name : "Rhythm Maker's Drum",
    source : ["TCoE",134],
    type : "wondrous item",
    prerequisite : "Requires attunement by a bard",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.bard ? true : false;
    },
    description : "While holding this drum, I gain a bonus to spell attack rolls and to the spell saving throw DCs of your bard spells.\n  As an action, I can play the drum to regain one use of my Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
    descriptionFull : "  While holding this drum, you gain a bonus to spell attack rolls and to the spell saving throw DCs or your bard spells. The bonus is determined by the drum's rarity.\n  As an action, you can play the drum to regain one use of your Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    action : ["action", "Regain 1 Bardic Inspiration"],
    choices : ["+1 drum (uncommon)", "+2 drum (rare)", "+3 drum (very rare)"],
    "+1 drum (uncommon)" : {
        name : "Rhythm-Makesr's Drum +1",
        rarity : "uncommon",
        description : "While holding this drum, I gain a +1 bonus to spell attack rolls and to the spell saving throw DCs of me bard spells.\n  As an action, I can play the drum to regain one use of my Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
                    if(type !== "prepare") return 1;
                },
                "I add +1 to all spell attack rolls and the saving throw DCs of my bard spells."
            ]
        }
    },
    "+2 drum (rare)" : {
        name : "Rhythm-Makesr's Drum +2",
        rarity : "uncommon",
        description : "While holding this drum, I gain a +2 bonus to spell attack rolls and to the spell saving throw DCs of me bard spells.\n  As an action, I can play the drum to regain one use of my Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
                    if(type !== "prepare") return 2;
                },
                "I add +2 to all spell attack rolls and the saving throw DCs of my bard spells."
            ]
        }
    },
    "+3 drum (very rare)" : {
        name : "Rhythm-Makesr's Drum +3",
        rarity : "uncommon",
        description : "While holding this drum, I gain a +3 bonus to spell attack rolls and to the spell saving throw DCs of me bard spells.\n  As an action, I can play the drum to regain one use of my Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
        calcChanges : {
            spellCalc : [
                function (type, spellcasters, ability) {
                    if(type !== "prepare") return 3;
                },
                "I add +3 to all spell attack rolls and the saving throw DCs of my bard spells."
            ]
        }
    }
}

MagicItemsList["shadowfell brand tattoo"] = {
    name : "Shadowfell Brand Tattoo",
    source : ["TCoE",134],
    type : "wondrous item",
    rarity : "rare",
    description : "While this tattoo is on my body, I gain darvision to 60 ft and advantage on Dexterity (Stealth) checks. When I take damage, I can use my reaction to become insubstantial for a moment, halving the damage I take. This can't be used again until the next sunset.",
    descriptionFull : "  Produced by a special needle, this magic tattoo is dark in color and abstract.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Shadow Essence. You gain darkvision with a range of 60 feet, and you have advantage on Dexterity (Stealth) checks.\n  Shadowy Defense. When you take damage, you can use your reaction to become insubstantial for a moment, halving the damage you take. Then the reaction can't be used again until the next sunset.",
    attunement : true,
    usages : 1,
    recovery : "sunset",
    action : ["reaction", "Shadowy Defense"],
    advantages : ["Stealth", true],
    vision : ["Darkvision", 60],
}

MagicItemsList["shadowfell shard"] = {
    name : "Shadowfell Shard",
    source : ["TCoE", 135],
    type : "wondrous item",
    rarity : "rare",
    description : "With this crystal, when I use a metamagic option on a sorcerer spell I can curse one creature targeted by the spell. I choose one ability score and the creature has disadvantage on all ability checks and saving throws using that attribute.",
    descriptionFull : "  This dull, cold crystal sits heavy and leaden, saturated by the Shadowfell's despair. As an action, you can attatch the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus for your sorcerer spells while you hold or wear it.\n  When you use a Metamagic option on a spell while you are holding or wearing the shard, you can momentarily curse one creature targeted by the spell; choose one ability score, and until the end of your next turn, the creature has disadvantage on ability checks and saving throws that use that ability.",
    attunement : true,
    prerequisite : "Requires attunement by a sorcerer",
    prereqeval : function(v) {
        return v.isSpellcaster && classes.known.sorcerer ? true : false;
    },
    action : ["action", "Attach/Detach Shard"]
}

MagicItemsList["spellwrought tattoo"] = {
    name : "Spellwrought Tattoo",
    source : ["TCoE",135],
    type : "wondrous item",
    description : "While this tattoo is on my body, I can cast the spell that is contained within it. The tattoo glows faintly while I cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from my skin.",
    descriptionFull : "  Produced by a special needle, this magic tattoo contains a single spell of up to 5th level, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns in to ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast teh spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.\n  The level of the spell in the tattoo determines the spell's saving throw DC, attack bonus, spellcasting ability modifier, and the tattoo's rarity, as shown in the Spellwrought Tattoo table.\n\nSpellwrought Tattoo\n Spell\t\t     Spellcasting\tSave\tAttack\n Level\tRarity\t     Ability Mod.\t DC\tBonus\nCantrip\tCommon\t\t+3\t 13\t  +5\n  1st\tCommon\t\t+3\t 13\t  +5\n  2nd\tUncommon\t+3\t 13\t  +5\n  3rd\tUncommon\t+4\t 15\t  +7\n  4th\tRare\t\t+4\t 15\t  +7\n  5th\tRare\t\t+5\t 17\t  +9\n"
}