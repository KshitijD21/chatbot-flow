import { Box, Button, VStack } from "@chakra-ui/react";

import { ViewModeOptions, type initialState } from "@/components/mainComponent/main-component-reducer";

interface SideBarProps {
    state: typeof initialState;
    actions: any;
}
export default function SideBarButtonItem({ state, actions }: SideBarProps) {
    return (
        <VStack paddingTop="12px" height="100%" width="48px" backgroundColor="brand.500">
            <Button
                onClick={() => actions.setViewMode(ViewModeOptions.AvailableNodes)}
                bg={state.viewMode === ViewModeOptions.AvailableNodes ? "#0D9488" : "transparent"}
                padding="0"
                color="brand.default"
                _hover={{
                    bg: state.viewMode === ViewModeOptions.AvailableNodes ? "#0D9488" : "transparent",
                }}
            >
                <Box className="i-mynaui:grid size-5" />
            </Button>
            <Box className="mx-a h-px w-4 bg-dark-100" />
            <Button
                onClick={() => actions.setViewMode(ViewModeOptions.NodeProperties)}
                bg={state.viewMode === ViewModeOptions.NodeProperties ? "#0D9488" : "transparent"}
                padding="0"
                color="brand.default"
                _hover={{
                    bg: state.viewMode === ViewModeOptions.NodeProperties ? "#0D9488" : "transparent",
                }}
            >
                <Box className="i-mynaui:layers-three size-5" />
            </Button>
        </VStack>
    );
}
