import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";

import { ViewModeOptions, type initialState } from "./main-component-reducer";
import CustomNodes from "../custom-nodes";
import DefaultNode from "../default-nodes";

interface NodePanelProps {
    state: typeof initialState;
    actions?: any;
}

export default function SideBar({ state, actions }: NodePanelProps) {
    console.log("sidebar value for nodevalue:: ", state.nodeValue);

    return (
        <Box width="320px" backgroundColor="transparent" borderLeft="0.1px solid" borderColor="brand.100" height="100%">
            {
                state.viewMode === ViewModeOptions.Group
                    ? (
                        <DefaultNode state={state} actions={actions} />
                        )
                    : (<CustomNodes state={state} actions={actions} />)
            }
        </Box>
    );
}
