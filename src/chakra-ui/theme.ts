import { type ThemeConfig, background, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {

};

const theme = extendTheme({
    colors: {
        brand: {
            background: "#1F1F1F",
            boxBackground: "#22222280",
            100: "#4f4f4f",
            200: "#3d3d3d",
            300: "#292929",
            400: "#222222",
            500: "#1a1a1a",
            600: "#141414",
            700: "#0f0f0f",
            800: "#0e0e0e",
            900: "#0b0b0b",
        },
        text: {
            subText: "#fdfdfd99",
            light: "#E0E0E0",
            dark: "#B0B0B0",
            default: "#FFFFFF",
        },
    },
    styles: {
        global: {
            body: {
                color: "text.default",
            },
        },
    },
});

export function useExtendedChakraTheme(themeOverrides: Partial<ThemeConfig>) {
    return extendTheme({ ...theme, ...config, ...themeOverrides });
}
