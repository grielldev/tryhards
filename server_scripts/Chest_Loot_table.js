LootJS.modifiers(event => {
    // Apply to ALL chest loot tables
    event
        .addLootTypeModifier(LootType.CHEST)
        .replaceLoot("minecraft:iron_ingot", "spelunkery:raw_iron_nugget")
        .replaceLoot("minecraft:iron_nugget", "spelunkery:raw_iron_nugget")
        .replaceLoot("minecraft:gold_ingot", "spelunkery:raw_gold_nugget")
        .replaceLoot("minecraft:gold_nugget", "spelunkery:raw_gold_nugget")
        .replaceLoot("minecraft:copper_ingot", "spelunkery:raw_copper_nugget")
        .replaceLoot("minecraft:copper_nugget", "spelunkery:raw_copper_nugget")
        .replaceLoot("minecraft:gold_ingot", "spelunkery:raw_gold_nugget")
        .replaceLoot("minecraft:gold_nugget", "spelunkery:raw_gold_nugget")
        .replaceLoot("minecraft:diamond", "spelunkery:rough_diamond_shard")
        .replaceLoot("minecraft:emerald", "spelunkery:rough_emerald_shard")
        .replaceLoot("galosphere:silver_ingot", "galosphere:silver_nugget")
        .replaceLoot("iceandfire:silver_ingot", "spelunkery:raw_iron_nugget")
        .replaceLoot("minecraft:iron_pickaxe", "spelunkery:raw_iron_nugget")
        .replaceLoot("minecraft:iron_helmet", "spelunkery:rough_diamond_shard")
        .replaceLoot("minecraft:iron_leggings", "spelunkery:rough_diamond_shard")
        .replaceLoot("minecraft:iron_boots", "spelunkery:rough_diamond_shard")
        .replaceLoot("minecraft:iron_chestplate", "spelunkery:rough_diamond_shard");

});