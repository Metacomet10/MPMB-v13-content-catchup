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
    descriptionFull : "Whith covers made of skin and fittings of bone, this tome is cold to the touch, and it whispers faintly. When found the book contains the following spells, which are wizard spells for you while you are attuned to the book: animate dead, circle of death, false life, finger of death, speak with dead, summon undead, vampiric touch. It functions as a spellbook for you.\n  While you are holding the book you can use it as a spellcasting focus fro your wizard spells.\n  The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while hoding it:\n  If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the necromancy school.\n  As an action, you can expend 1 charge to take on a semblance of undeath for 10 minutes. For the duration, you take on a deathly appearance, and undead creatures are indifferent to you, unless you have damaged them. You also appear undead to all outward inspection and to spells used to determine the target's status. This effect ends if you deal damage or force a creature to make a saving throw.",
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
    descriptionFull : "Produced by a special needle, this magic tatoo features symbols of life and rebirth.\n  Tattoo Attunement. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.\n  If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.\n  Necrotic Resistance. You have resistance to necrotic damage.\n  Life Ward. When you would be reduced to 0 hit points, you drop to 1 hit point instead. Once used, this property can't be used again until the next dawn.",
    attunement : true,
    usages : 1,
    recovery : "dawn",
    dmgres : ["Necrotic"]
}