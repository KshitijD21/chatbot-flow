"use client";
import { Box, HStack } from "@chakra-ui/react";

import { useProductReducer } from "./main-component-reducer";
import NodePanel from "./node-panel";
import SideBar from "./sidebar";
import Workspace from "./workspace";

export default function MainComponent() {
    const { state, actions } = useProductReducer();

    return (
        <HStack flex={1} gap="0px" height="100%">
            <Box flex={1}>
                <Workspace state={state} />
            </Box>
            <NodePanel state={state} actions={actions} />
            <SideBar state={state} actions={actions} />
        </HStack>
    );
}
