"use client";

import { ChakraProvider, ColorModeScript, type ThemeConfig, createLocalStorageManager, useColorMode as useChakraColorMode } from "@chakra-ui/react";
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from "next-themes";
import { type ReactNode, useEffect, useMemo } from "react";

import { useExtendedChakraTheme } from "@/chakra-ui/theme";

interface UseThemeProps {
    resolvedTheme?: "light" | "dark";
};

type ProviderProps = Readonly<{
    children: ReactNode;
}>;

export function Provider({ children }: ProviderProps) {
    return (
        <NextThemeProvider enableSystem={false} defaultTheme="light">
            <ChakraSyncedThemeProvider>
                {children}
            </ChakraSyncedThemeProvider>
        </NextThemeProvider>
    );
}

function ChakraSyncedThemeProvider({ children }: { children: ReactNode }) {
    const { resolvedTheme } = useNextTheme() as UseThemeProps;
    const colorModeConfig = useMemo<ThemeConfig>(() => ({
        initialColorMode: resolvedTheme,
        useSystemColorMode: false,
    }), [resolvedTheme]);

    const theme = useExtendedChakraTheme(colorModeConfig);

    return (
        <ChakraProvider theme={theme} colorModeManager={createLocalStorageManager("theme")}>
            <ChakraColorModeSync />

            {children}
        </ChakraProvider>
    );
}

function ChakraColorModeSync() {
    const { resolvedTheme } = useNextTheme() as UseThemeProps;
    const { setColorMode } = useChakraColorMode();

    useEffect(() => {
        if (resolvedTheme) {
            setColorMode(resolvedTheme);
        }
    }, [resolvedTheme, setColorMode]);

    return null;
}
