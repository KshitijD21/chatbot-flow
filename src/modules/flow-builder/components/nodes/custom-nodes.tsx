import { Box, HStack, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text, VStack } from "@chakra-ui/react";
import { Handle, type Node, type NodeProps, Position } from "@xyflow/react";
import { useEffect, useState } from "react";

import { type ChannelKey, type Data, channels } from "@/components/mainComponent/main-component-reducer";

export function StartNode({ isConnectable }: any) {
    return (
        <HStack
            className="flex items-center border border-dark-100 rounded-full bg-dark-300 px-4 py-2 text-light shadow-sm transition data-[selected=true]:border-teal-600 data-[selected=true]:ring-1 data-[selected=true]:ring-teal-600/50"
        >
            <Box className="i-mynaui:play mr-2 size-4.5 shrink-0 scale-130" />
            <Text>Start</Text>
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                isConnectable={isConnectable}
            />
        </HStack>
    );
};

export function EndNode({ isConnectable }: any) {
    return (
        <HStack
            className="flex items-center border border-dark-100 rounded-full bg-dark-300 px-4 py-2 text-light shadow-sm transition data-[selected=true]:border-teal-600 data-[selected=true]:ring-1 data-[selected=true]:ring-teal-600/50"
        >
            <Box className="i-mynaui:square css-0 size-4.5" />
            <Text>End</Text>
            <Handle
                type="target"
                position={Position.Left}
                id="b"
                isConnectable={isConnectable}
            />
        </HStack>
    );
};

type TextMessageNodeProps = NodeProps<Node<Data, "mainNode">>;

export function MainNode({ id, isConnectable, data }: TextMessageNodeProps) {
    const [selectedChannel, setSelectedChannel] = useState<ChannelKey>();
    useEffect(() => {
        setSelectedChannel(data.socialMedia);
    }, [data.socialMedia]);

    const handleOnEdit = () => {
        console.log("data ", data);
    };

    return (

        <VStack gap={0} className="w-xs rounded-lg bg-dark-300/50 text-light divide-y divide-dark-200">
            <Handle
                type="target"
                position={Position.Left}
                id="9823"
                isConnectable={isConnectable}
            />
            <HStack className="w-full flex justify-between px-4 py-2">
                <HStack className="flex items-center">
                    <Box className="i-mynaui:chat size-4" />
                    <Text className="translate-y-px text-sm">Text Message</Text>
                </HStack>
                <HStack gap="2px">
                    <Popover placement="bottom-start">
                        <PopoverTrigger>
                            <HStack gap="0" className="h-8 w-auto flex cursor-pointer items-center justify-between border border-dark-200 rounded-lg bg-dark-400 p-2 hover:bg-dark-200">
                                <HStack>
                                    <Box className={`${selectedChannel?.icon} size-4`} />
                                </HStack>
                                <Box className="i-lucide:chevrons-up-down ml-1 size-3 op-50" />
                            </HStack>
                        </PopoverTrigger>
                        <PopoverContent width="170px" border="none" bg="brand.200">
                            <PopoverBody padding={0}>
                                <VStack padding="4px" alignItems="flex-start" spacing={0}>
                                    {Object.keys(channels).map((key) => {
                                        const channel = channels[key];
                                        return (
                                            <HStack
                                                key={key}
                                                className="w-full cursor-pointer rounded-lg p-2 hover:bg-dark-300"
                                                onClick={() => setSelectedChannel(channel)}
                                            >
                                                <Box className={`${channel.icon} size-4`} />
                                                <Text className="text-xs">{channel.name}</Text>
                                            </HStack>
                                        );
                                    })}
                                </VStack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Box className="mx-1 h-4 w-px bg-dark-100" />
                    <Box onClick={handleOnEdit} className="size-7 flex cursor-pointer items-center justify-center rounded-lg hover:bg-dark-100">
                        <Box className="i-mynaui:cog size-4" />
                    </Box>
                    <Box className="size-7 flex cursor-pointer items-center justify-center rounded-lg hover:bg-dark-100">
                        <Box className="i-mynaui:trash size-4" />
                    </Box>
                </HStack>

            </HStack>

            <VStack gap={0} alignItems="flex-start" className="w-full px-4 py-2">
                <Text className="text-xs text-light-900/50 font-medium">Message Content</Text>
                <Box className="line-clamp-4 mt-2 text-sm leading-snug">
                    {data.message
                        ? (
                            <Text>{data.message}</Text>
                            )
                        : (
                            <Text className="text-light-900/80 italic">No message yet...</Text>
                            )}
                </Box>
            </VStack>
            <HStack alignItems="flex-start" gap={0} className="w-full px-4 py-2">
                <Text className="text-xs text-light-900/50">
                    This message will be sent to the user using the
                    <Text className="w-auto">
                        {` ${data.socialMedia.name}`}
                        {" "}
                        channel.
                    </Text>

                </Text>
            </HStack>
            <HStack gap={0} className="w-full bg-dark-300/30 px-4 py-2">
                <Text className="text-xs text-light-900/50">Node: </Text>
                <Text className="ml-1 text-xs text-light-900/60 font-semibold">{id}</Text>
            </HStack>
            <Handle
                type="source"
                position={Position.Right}
                id="sjdhbfjhsd"
                isConnectable={isConnectable}
            />
        </VStack>
    );
}
