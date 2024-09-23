import { Box, Button, VStack } from "@chakra-ui/react";

import type { initialState } from "@/components/mainComponent/main-component-reducer";

import { ViewModeOptions } from "@/components/mainComponent/main-component-reducer";
import { useApplicationState } from "@/stores/application-state";

// interface SideBarProps {
//     state: typeof initialState;
//     actions: any;
// }

export default function SideBarButtonItem(

) {
    const { viewMode, setViewMode } = useApplicationState();

    return (
        <VStack paddingTop="12px" height="100%" width="48px" backgroundColor="brand.500">
            <Button
                onClick={() => setViewMode(ViewModeOptions.AvailableNodes)}
                bg={viewMode === ViewModeOptions.AvailableNodes ? "#0D9488" : "transparent"}
                padding="0"
                color="brand.default"
                _hover={{
                    bg: viewMode === ViewModeOptions.AvailableNodes ? "#0D9488" : "transparent",
                }}
            >
                <Box className="i-mynaui:grid size-5" />
            </Button>
            <Box className="mx-a h-px w-4 bg-dark-100" />
            <Button
                onClick={() => setViewMode(ViewModeOptions.NodeProperties)}
                bg={viewMode === ViewModeOptions.NodeProperties ? "#0D9488" : "transparent"}
                padding="0"
                color="brand.default"
                _hover={{
                    bg: viewMode === ViewModeOptions.NodeProperties ? "#0D9488" : "transparent",
                }}
            >
                <Box className="i-mynaui:layers-three size-5" />
            </Button>
        </VStack>
    );
}
