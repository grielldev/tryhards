LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:coal_ore")
        .removeLoot("*") 
        .addLoot("spelunkery:coal_lump")
        .applyOreBonus('minecraft:fortune');     
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:deepslate_coal_ore")
        .removeLoot("*")
        .addSequenceLoot(
            LootEntry.of("spelunkery:coal_lump").when((c) => c.randomChance(.99)),
            LootEntry.of("spelunkery:coal_lump").when((c) => c.randomChance(0.5))
        )
        .applyOreBonus('minecraft:fortune');
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:iron_ore")
        .removeLoot("*") 
        .addLoot("spelunkery:raw_iron_nugget")
        .applyOreBonus('minecraft:fortune'); 

    event
        .addBlockLootModifier("minecraft:iron_ore")
        .matchMainHand([
            "minecraft:stone_pickaxe",
            "better_tools:ruby_pickaxe",
            "notreepunching:flint_pickaxe",
            "iceandfire:copper_pickaxe"
        ])
        .removeLoot("*");      
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:deepslate_iron_ore")
        .removeLoot("*")
        .addSequenceLoot(
            LootEntry.of("spelunkery:raw_iron_nugget").when((c) => c.randomChance(.99)),
            LootEntry.of("spelunkery:raw_iron_nugget").when((c) => c.randomChance(0.5))
        )
        .applyOreBonus('minecraft:fortune');

        event
        .addBlockLootModifier("minecraft:deepslate_iron_ore")
        .matchMainHand([
            "minecraft:stone_pickaxe",
            "better_tools:ruby_pickaxe",
            "notreepunching:flint_pickaxe",
            "iceandfire:copper_pickaxe"
        ])
        .removeLoot("*");    
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:raw_iron_block")
        .matchMainHand([
            "minecraft:stone_pickaxe",
            "better_tools:ruby_pickaxe",
            "notreepunching:flint_pickaxe",
            "iceandfire:copper_pickaxe"
        ])
        .removeLoot("*");    
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:diamond_ore")
        .removeLoot("*") 
        .addLoot("spelunkery:rough_diamond_shard")
        .applyOreBonus('minecraft:fortune');     
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:deepslate_diamond_ore")
        .removeLoot("*")
        .addSequenceLoot(
            LootEntry.of("spelunkery:rough_diamond_shard").when((c) => c.randomChance(.99)),
            LootEntry.of("spelunkery:rough_diamond_shard").when((c) => c.randomChance(0.5))
        )
        .applyOreBonus('minecraft:fortune');
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:stone")
        .matchMainHand("notreepunching:flint_pickaxe")
        .removeLoot("minecraft:cobblestone") 
        .addLoot("notreepunching:stone_loose_rock"); 
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:gold_ore")
        .removeLoot("*") 
        .addLoot("spelunkery:raw_gold_nugget")
        .applyOreBonus('minecraft:fortune');    
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:deepslate_gold_ore")
        .removeLoot("*")
        .addSequenceLoot(
            LootEntry.of("spelunkery:raw_gold_nugget").when((c) => c.randomChance(.99)),
            LootEntry.of("spelunkery:raw_gold_nugget").when((c) => c.randomChance(0.5))
        )
        .applyOreBonus('minecraft:fortune');
});

LootJS.modifiers((event) => {
        event
        .addBlockLootModifier("iceandfire:gold_pile")
        .matchMainHand([
            "minecraft:stone_pickaxe",
            "better_tools:ruby_pickaxe",
            "notreepunching:flint_pickaxe",
            "iceandfire:copper_pickaxe"
        ])
        .removeLoot("*");    
});
LootJS.modifiers((event) => {
        event
        .addBlockLootModifier("iceandfire:silver_pile")
        .matchMainHand([
            "minecraft:stone_pickaxe",
            "better_tools:ruby_pickaxe",
            "notreepunching:flint_pickaxe",
            "iceandfire:copper_pickaxe"
        ])
        .removeLoot("*");    
});