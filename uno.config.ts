import extractorArbitraryVariants from "@unocss/extractor-arbitrary-variants";
import { defineConfig, presetIcons, presetTypography, presetUno } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetUseful } from "unocss-preset-useful";

export default defineConfig({
    presets: [
        presetUno({
            dark: {
                light: "[data-theme=light]",
                dark: "[data-theme=dark]",
            },
        }),
        presetIcons(),
        presetTypography(),
        presetAnimations(),
        presetUseful({
            enableResetStyles: false,
        }),
    ],
    extractors: [extractorArbitraryVariants],
    content: {
        filesystem: ["src/**/*.{html,js,jsx,ts,tsx,css,scss}"],
    },
});
