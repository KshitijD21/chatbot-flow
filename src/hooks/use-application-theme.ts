import { useTheme } from "next-themes";
import { useCallback } from "react";

type ApplicationTheme = "dark" | "light";

export function useApplicationTheme() {
    const { resolvedTheme, setTheme } = useTheme();

    const _setTheme = useCallback((theme: ApplicationTheme) => {
        setTheme(theme);
        document.cookie = `theme=${theme}; path=/`;
    }, [setTheme]);

    const toggleTheme = useCallback(() => {
        const theme: ApplicationTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(theme);
        document.cookie = `theme=${theme}; path=/`;
    }, [setTheme, resolvedTheme]);

    const theme: ApplicationTheme = (resolvedTheme ?? "dark") as unknown as ApplicationTheme;

    return { theme, toggleTheme, setTheme: _setTheme };
}
