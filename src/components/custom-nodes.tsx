"use client";
import { Box, HStack, Input, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text, Textarea, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { type ChannelKey, channels, type initialState } from "./mainComponent/main-component-reducer";

import type { NodeValue } from "./mainComponent/main-component-reducer";

interface CustomNodesProps {
    state: typeof initialState;
    actions: any;
}
export default function CustomNodes({ state, action }: CustomNodesProps) {
    const [selectedNode, setSelectedNode] = useState<NodeValue>(
        state.nodeValue?.[0] || {
            id: "",
            data: { socialMedia: channels.WhatsApp, message: "" },
            position: { x: 0, y: 0 },
            type: "default-type",
        },
    );

    useEffect(() => {
        setSelectedNode(state.nodeValue[0]);
    }, (state.nodeValue));

    console.log("testing ", selectedNode);

    console.log("state?.nodeValue:: ", state.nodeValue);

    return (
        <VStack className="h-full w-full flex items-start" gap={0}>
            <VStack alignItems="flex-start" className="h-sm w-full flex border-b border-dark-300">
                <HStack className="h-10 w-full flex items-start border-b border-dark-300 bg-dark-400 p-4 text-sm text-light-100/60 font-semibold">
                    <Box className="i-mynaui:layers-three size-4.5" />
                    <Text>Nodes in Flow</Text>
                </HStack>
                <VStack className="w-full gap-1 px-4">
                    <HStack className="w-full cursor-pointer rounded-lg p-2 hover:bg-dark-300">
                        <Box className="i-mynaui:play size-4.5 scale-135" />
                        <Text>start</Text>
                    </HStack>

                    {state?.nodeValue.map((nodes, index) => (
                        <HStack key={index} className="w-full cursor-pointer rounded-lg p-2 hover:bg-dark-300">
                            <Box width="23px" className="i-mynaui:chat size-4.5" />
                            <Text className="line-clamp-1">{nodes.id}</Text>
                        </HStack>
                    ))}
                    {/* {Array(1)
                        .fill(true)
                        .map((item, index) => (
                            <HStack key={index} className="w-full cursor-pointer rounded-lg p-2 hover:bg-dark-300">
                                <Box className="i-mynaui:chat size-4.5" />
                                <Text>Text Message</Text>
                            </HStack>
                        ))} */}
                    <HStack className="w-full cursor-pointer rounded-lg p-2 hover:bg-dark-300">
                        <Box className="i-mynaui:square size-4.5" />
                        <Text>End</Text>
                    </HStack>
                </VStack>
            </VStack>
            <VStack alignItems="flex-start" className="mt-0 w-full flex flex-1 pt-0">
                <HStack className="h-10 w-full flex items-start border-b border-dark-300 bg-dark-400 p-4 text-sm text-light-100/60 font-semibold">
                    <Box className="i-mynaui:layers-three size-4.5" />
                    <Text>Properties</Text>
                </HStack>
                <VStack alignItems="flex-start" spacing={3} className="w-full flex px-4 align-start">
                    <VStack width="100%" alignItems="flex-start" className="flex align-start">
                        <Text className="text-sm text-light-100/60">Unique Identifier</Text>
                        <Input disabled value={selectedNode?.id} fontSize="small" width="100%" border="1px solid #333333" _hover={{ border: "1px solid #666666", outline: "none" }} _focus={{ boxShadow: "none !important", hover: "none", outline: "none" }} ringColor="none" outline="none" />
                    </VStack>
                    <VStack width="100%" alignItems="flex-start" className="flex align-start">
                        <Text className="text-sm text-light-100/60">Channel</Text>
                        <Popover matchWidth placement="bottom-start">
                            <PopoverTrigger>
                                <HStack className="h-8 w-full flex items-center justify-between border border-dark-200 rounded-lg bg-dark-400 p-2">
                                    <HStack>
                                        <Box className={`${selectedNode?.data.socialMedia.icon} size-4`} />
                                        <Text className="text-xs">{selectedNode?.data.socialMedia.name}</Text>
                                    </HStack>
                                    <Box className="i-lucide:chevrons-up-down ml-1 size-3 op-50" />
                                </HStack>
                            </PopoverTrigger>
                            <PopoverContent width="-moz-fit-content" border="none" bg="brand.200">
                                {/* <PopoverArrow /> */}
                                {/* <PopoverCloseButton /> */}
                                <PopoverBody padding={0}>
                                    <VStack padding="4px" alignItems="flex-start" spacing={0}>
                                        {Object.keys(channels).map((key) => {
                                            const channel = channels[key];
                                            return (
                                                <HStack
                                                    key={key}
                                                    className="w-full cursor-pointer rounded-lg p-2 hover:bg-dark-300"
                                                    onClick={() => setSelectedNode({
                                                        ...selectedNode,
                                                        data: {
                                                            ...selectedNode.data,
                                                            socialMedia: channel,
                                                        },
                                                    })}
                                                >
                                                    <Box className={`${channel.icon} size-4`} />
                                                    <Text className="text-xs">{channel.name}</Text>
                                                </HStack>
                                            );
                                        },
                                        )}
                                    </VStack>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </VStack>
                    <VStack width="100%" alignItems="flex-start" className="flex align-start">
                        <Text className="text-sm text-light-100/60">Message</Text>
                        <Textarea
                            onChange={(e) => {
                                setSelectedNode({
                                    ...selectedNode,
                                    data: {
                                        ...selectedNode.data,
                                        message: e.target.value,
                                    },
                                });
                            }}
                            placeholder="Type your message here..."
                            value={selectedNode?.data.message}
                            noOfLines={4}
                            fontSize="small"
                            width="100%"
                            border="1px solid #333333"
                            _hover={{ border: "1px solid #666666", outline: "none" }}
                            _focus={{ boxShadow: "none !important", hover: "none", outline: "none" }}
                            ringColor="none"
                            outline="none"
                        />
                    </VStack>
                </VStack>
            </VStack>
        </VStack>
    );
}
