"use client";
import { Box, HStack } from "@chakra-ui/react";

import SideBarButtonItem from "./components/sidebar-button-item";
import SwitchSideBar from "./components/switch-sidebar";

import type { initialState } from "@/components/mainComponent/main-component-reducer";

interface SideBarProps {
    state: typeof initialState;
    actions: any;
}
export default function SideBarModule({ state, actions }: SideBarProps) {
    return (
        <HStack height="100%">
            <Box width="320px" backgroundColor="transparent" borderLeft="0.1px solid" borderColor="brand.100" height="100%">
                <SwitchSideBar active={state.viewMode} />
            </Box>
            <SideBarButtonItem state={state} actions={actions} />
        </HStack>
    );
}
