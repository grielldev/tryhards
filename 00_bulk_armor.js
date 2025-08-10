// Bulk armor modifier script for KubeJS 2001.6.5 (MC 1.20.1 Forge)
// This script changes armor stats at game startup.
// You must restart Minecraft after editing this file for changes to apply.

// Namespace map for armors
var modNamespaces = {
    Wood: 'morearmor',
    Cactus: 'extraarmor',
    Leather: 'minecraft',
    Cobblestone: 'morearmor',
    HoneyComb: 'extraarmor',
    Rotten_Flesh: 'extraarmor',
    Bone: 'extraarmor',
    Copper: 'extraarmor',
    Leaves: 'morearmor',
    Sand: 'morearmor',
    Water: 'morearmor'
};

// Armor defense totals
var defenseTotals = {
    Wood: 2,
    Cactus: 2,
    Leather: 4,
    Cobblestone: 4,
    HoneyComb: 2,
    Rotten_Flesh: 4,
    Bone: 4,
    Copper: 4,
    Leaves: 2,
    Sand: 4,
    Water: 2
};

// Distribute defense across armor pieces
function distributeDefense(name, total) {
    if (total === 0) {
        return {
            helmet: 0,
            chestplate: 0,
            leggings: 0,
            boots: 0
        };
    }
    if (name === 'Wood' || name === 'Cactus' || name === 'HoneyComb' || name === 'Water' || name === 'Leaves') {
        return {
            helmet: 0,
            chestplate: 1,
            leggings: 1,
            boots: 0
        };
    }
    var helmet = Math.floor(total / 4);
    var chestplate = Math.floor(total / 2);
    var leggings = total - chestplate - helmet - 1;
    if (leggings < 0) {
        leggings = 1;
    }
    var boots = 1;
    return {
        helmet: helmet,
        chestplate: chestplate,
        leggings: leggings,
        boots: boots
    };
}

var ARMOR_STATS = [];

Object.entries(defenseTotals).forEach(function(entry) {
    var name = entry[0];
    var total = entry[1];

    if (total === 0) {
        return;
    }

    var mod = modNamespaces[name];
    var baseId;

    if (mod === 'minecraft') {
        baseId = name.toLowerCase();
    } else if (mod === 'morearmor' && name === 'Wood') {
        baseId = 'oak_armor';
    } else if (mod === 'extraarmor') {
        // extraarmor doesn't use "_armor" in the ID
        baseId = name.toLowerCase();
    } else {
        baseId = name.toLowerCase() + '_armor';
    }

    var defense = distributeDefense(name, total);

    var durability = 80;
    var toughness = 0;
    var knockbackRes = 0.0;

    ['helmet', 'chestplate', 'leggings', 'boots'].forEach(function(piece) {
        var id = mod + ':' + baseId + '_' + piece;
        ARMOR_STATS.push({
            id: id,
            durability: durability,
            armor: defense[piece],
            toughness: toughness,
            knockbackRes: knockbackRes
        });
    });
});

ItemEvents.modification(event => {
    ARMOR_STATS.forEach(armor => {
        console.info('[DEBUG] Applying to item: ' + armor.id);
        event.modify(armor.id, item => {
            item.maxDamage = armor.durability;
            item.armorProtection = armor.armor;
            item.armorToughness = armor.toughness;
            item.armorKnockbackResistance = armor.knockbackRes;
        });
    });
});

