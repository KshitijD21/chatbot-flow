import { Box, HStack, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text, VStack } from "@chakra-ui/react";
import { Handle, Position } from "@xyflow/react";
import { useEffect, useState } from "react";

import { type ChannelKey, type Data, channels } from "../mainComponent/main-component-reducer";

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
                type="source"
                position={Position.Left}
                id="a"
                isConnectable={isConnectable}
            />
        </HStack>
    );
};

// type ChannelKey = "SMS" | "WhatsApp" | "Messenger" | "Telegram";

// const channels = {
//     SMS: {
//         name: "SMS",
//         icon: "i-ic:round-sms",
//     },
//     WhatsApp: {
//         name: "WhatsApp",
//         icon: "i-ic:round-whatsapp",
//     },
//     Messenger: {
//         name: "Messenger",
//         icon: "i-mingcute:messenger-line",
//     },
//     Telegram: {
//         name: "Telegram",
//         icon: "i-ic:round-telegram",
//     },
// };

const message = " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

interface MainNodeProps {
    isConnectable: boolean;
    data: Data;
}

export function MainNode({ isConnectable, data }: MainNodeProps) {
    const [selectedChannel, setSelectedChannel] = useState<ChannelKey>();
    useEffect(() => {
        setSelectedChannel(data.socialMedia);
    }, [data.socialMedia]);
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
                    <Box className="size-7 flex cursor-pointer items-center justify-center rounded-lg hover:bg-dark-100">
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
                    {message
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
                    <Text className="w-auto">{` ${data.socialMedia} `}</Text>
                    channel.
                </Text>
            </HStack>
            <HStack gap={0} className="w-full bg-dark-300/30 px-4 py-2">
                <Text className="text-xs text-light-900/50">Node: </Text>
                <Text className="ml-1 text-xs text-light-900/60 font-semibold"> NgsTsjFajBlobG2sm-Tke</Text>
            </HStack>
            <Handle
                type="target"
                position={Position.Right}
                id="wudhd"
                isConnectable={isConnectable}
            />
        </VStack>
    );
}
