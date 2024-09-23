"use client";
import { Box, HStack, Text } from "@chakra-ui/react";
import { ReactFlowProvider } from "@xyflow/react";

import { useProductReducer } from "@/components/mainComponent/main-component-reducer";
import FlowBuilderModule from "@/modules/flow-builder/flow-builder-module";
import NavigationModule from "@/modules/navigation-bar/natigation-bar-module";
import SideBarModule from "@/modules/sidebar/sidebar-module";

export default function RootPage() {
    // const { state, actions } = useProductReducer();

    return (
        <ReactFlowProvider>
            <Box display="flex" flexDirection="column" flex={1} height="100vh">
                <NavigationModule />
                <HStack height="100%">
                    <Box className="flex grow of-y-hidden divide-x divide-dark-300">
                        <Box className="grow bg-dark-500 <md:(bg-dark-700)">
                            <FlowBuilderModule />
                        </Box>
                    </Box>
                    <SideBarModule />
                </HStack>
            </Box>
        </ReactFlowProvider>
    );
}
