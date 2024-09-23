"use client";
import { Box, HStack } from "@chakra-ui/react";

import SideBarButtonItem from "./components/sidebar-button-item";
import SwitchSideBar from "./components/switch-sidebar";

import { useApplicationState } from "@/stores/application-state";

export default function SideBarModule() {
    const { viewMode } = useApplicationState();

    return (
        <HStack height="100%">
            <Box width="320px" backgroundColor="transparent" borderLeft="0.1px solid" borderColor="brand.100" height="100%">
                <SwitchSideBar active={viewMode} />
            </Box>
            <SideBarButtonItem />
        </HStack>
    );
}
