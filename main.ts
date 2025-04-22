namespace customPalette {
    const MAX_COLORS = 21

    // Default colors (21 colors, encoded as 16-bit RGB565)
    let customColors: number[] = [
        0x0000, // Black
        0xFFFF, // White
        0xF800, // Red
        0x07E0, // Green
        0x001F, // Blue
        0xFFE0, // Yellow
        0xF81F, // Magenta
        0x07FF, // Cyan
        0x7BEF, // Light gray
        0x39E7, // Dark gray
        0xFD20, // Orange
        0xAFE5, // Lime
        0xBDF7, // Sky blue
        0xA145, // Brown
        0xF6F0, // Pink
        0x8430, // Purple
        0xC618, // Tan
        0x52AA, // Sea green
        0x6B4D, // Olive
        0x000F, // Navy
        0x1CE7  // Teal
    ]

    // Set a custom color at a specific index (0 to 20)
    // r, g, b should be 0 to 255
    // Returns nothing, changes the color at that index
    //% block="set custom color $index to red $r green $g blue $b"
    //% index.min=0 index.max=20
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    export function setCustomColor(index: number, r: number, g: number, b: number): void {
        if (index < 0 || index >= MAX_COLORS) return
        const color = (r >> 3) << 11 | (g >> 2) << 5 | (b >> 3)
        customColors[index] = color
    }

    // Get the custom color at a specific index
    // Returns the color as an RGB565 value
    //% block="get custom color $index"
    //% index.min=0 index.max=20
    export function getCustomColor(index: number): number {
        if (index < 0 || index >= MAX_COLORS) return 0
        return customColors[index]
    }

    // Apply custom colors manually to a sprite using the colors
    //% block="apply custom color to sprite"
    export function applyToSprite(sprite: Sprite, colorIndex: number): void {
        if (colorIndex < 0 || colorIndex >= MAX_COLORS) return
        let color2 = customColors[colorIndex]

        // Apply color to sprite's image by setting pixels manually
        let img = sprite.image
        for (let y = 0; y < img.height; y++) {
            for (let x = 0; x < img.width; x++) {
                img.setPixel(x, y, color2)
            }
        }
    }

    // Example function to reset the palette back to the default colors
    //% block="reset to default colors"
    export function resetToDefaults(): void {
        customColors = [
            0x0000, 0xFFFF, 0xF800, 0x07E0, 0x001F, 0xFFE0, 0xF81F, 0x07FF,
            0x7BEF, 0x39E7, 0xFD20, 0xAFE5, 0xBDF7, 0xA145, 0xF6F0, 0x8430,
            0xC618, 0x52AA, 0x6B4D, 0x000F, 0x1CE7
        ]
    }
}
