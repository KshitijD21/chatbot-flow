import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

import { ViewModeOptions, type initialState } from "./main-component-reducer";

interface SideBarProps {
    state: typeof initialState;
    actions: any;
}
export default function SideBar({ state, actions }: SideBarProps) {
    console.log("state:: ", state, ViewModeOptions.Grid);
    console.log("state.viewMode === ViewModeOptions.Group ", state.viewMode === ViewModeOptions.Group);

    return (
        <VStack paddingTop="12px" height="100%" width="48px" backgroundColor="brand.500">
            <Button
                onClick={() => actions.setViewMode(ViewModeOptions.Group)}
                bg={state.viewMode === ViewModeOptions.Group ? "#0D9488" : "transparent"}
                padding="0"
                color="brand.default"
                _hover={{
                    bg: state.viewMode === ViewModeOptions.Group ? "#0D9488" : "transparent",
                }}
            >
                <Box className="i-mynaui:grid size-5" />
            </Button>
            <Box className="mx-a h-px w-4 bg-dark-100" />
            <Button
                onClick={() => actions.setViewMode(ViewModeOptions.Grid)}
                bg={state.viewMode === ViewModeOptions.Grid ? "#0D9488" : "transparent"}
                padding="0"
                color="brand.default"
                _hover={{
                    bg: state.viewMode === ViewModeOptions.Grid ? "#0D9488" : "transparent",
                }}
            >
                <Box className="i-mynaui:layers-three size-5" />
            </Button>
        </VStack>
    );
}
