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