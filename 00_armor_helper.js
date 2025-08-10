// Helper to detect armor slot based on item ID
function getArmorSlot(itemId) {
    if (itemId.includes('helmet')) return 'head'
    if (itemId.includes('chestplate')) return 'chest'
    if (itemId.includes('leggings')) return 'legs'
    if (itemId.includes('boots')) return 'feet'
    return 'head'
}

// Generates a random UUID as an array of 4 integers
function generateUUID() {
    return [
        Math.floor(Math.random() * 0x100000000),
        Math.floor(Math.random() * 0x100000000),
        Math.floor(Math.random() * 0x100000000),
        Math.floor(Math.random() * 0x100000000)
    ]
}

/**
 * Adds a custom armor crafting recipe with attributes, damage, and optional custom name.
 */
function addCustomArmorRecipe(outputId, pattern, keys, attributes, damageValue, customName) {
    ServerEvents.recipes(event => {
        event.remove({ output: outputId })

        let attrList = attributes.map(attr => ({
            AttributeName: attr.AttributeName,
            Name: attr.AttributeName,
            Amount: attr.Amount,
            Operation: attr.Operation ?? 0,
            Slot: attr.Slot ?? getArmorSlot(outputId),
            UUID: generateUUID()
        }))

        let nbt = {
            AttributeModifiers: attrList,
            Damage: damageValue
        }

        if (customName) {
            nbt.display = {
                Name: JSON.stringify({
                    text: customName,
                    color: "gold",
                    bold: true
                })
            }
        }

        event.shaped(
            Item.of(outputId, nbt),
            pattern,
            keys
        )
    })
}

