import { Box } from "@chakra-ui/react";
import { ReactFlowProvider } from "@xyflow/react";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import "@/assets/style/global.scss";

import { Provider } from "./provider";

import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

function getClientThemePreference() {
    const cookieStore = cookies();
    const themeCookie = cookieStore.get("theme");
    return themeCookie ? themeCookie.value : "light";
}

type RootLayoutProps = Readonly< {
    children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
    const clientTheme = getClientThemePreference();

    return (
        <html suppressHydrationWarning lang="en" data-theme={clientTheme} style={{ colorScheme: clientTheme }}>
            <body className={inter.className}>
                <Provider>
                    <ReactFlowProvider>

                        <Box bg="brand.background" minHeight="100vh">
                            {children}
                        </Box>
                    </ReactFlowProvider>
                </Provider>
            </body>
        </html>
    );
}
