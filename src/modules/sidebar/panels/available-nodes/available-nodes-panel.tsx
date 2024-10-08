import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useReactFlow } from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";

import { channels } from "@/components/mainComponent/main-component-reducer";

export default function AvailableNodePanel() {
    function handleDrop(event: any) {
        const nodeValue = {
            id: uuidv4(),
            type: "mainNode",
            data: {
                socialMedia: channels.Telegram,
                message: "new node added",
            },
            position: { x: 200, y: 300 },
        };

        const value = JSON.stringify(nodeValue).toString();

        event.dataTransfer.setData("nodeValue", value);
    }

    return (
        <VStack>
            <VStack className="mt-4 p-4">
                <Box className="size-12 flex items-center justify-center rounded-full bg-teal-800">
                    <Box className="i-mynaui:grid size-6 text-white" />
                </Box>
                <Text>
                    Available Nodes
                </Text>
                <Text className="mt-1 w-2/3 text-center text-xs text-light-50/40 font-medium leading-normal">
                    Drag and drop nodes to build your chatbot flow
                </Text>
            </VStack>
            <VStack draggable onDragStart={() => handleDrop(event)} className="grid grid-cols-1 gap-4 p-4">
                <HStack className="cursor-pointer items-start gap-10 border border-dark-300 rounded-lg bg-dark-400 p-2.5 hover:ring-2 hover:ring-teal-600/50">
                    <Box className="size-10 h-full flex flex-1 items-center justify-center border border-dark-200 rounded-xl bg-dark-300">
                        <Box className="size-10 flex items-center justify-center rounded-lg bg-dark-300">
                            <Box className="i-mynaui:chat size-6 text-white" />
                        </Box>
                    </Box>
                    <Box className="ml-2">
                        <Text>Text Message</Text>
                        <Text className="text-xs text-light-50/40 line-height-normal">Send a text message to the user using different messaging platforms like WhatsApp, Messenger, etc.</Text>
                    </Box>
                </HStack>

            </VStack>
        </VStack>

    );
}
