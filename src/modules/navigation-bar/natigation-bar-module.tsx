import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";

export default function NavigationModule() {
    return (
        <HStack height="52px" backgroundColor="brand.500" padding="8px 6px" justifyContent="space-between">
            <HStack paddingLeft=".5rem">
                <Box borderRadius="10px" width="2rem" height="2rem" display="flex" alignItems="center" justifyContent="center" backgroundColor="#0D9488">
                    <Text size="0.6rem" fontWeight="700">KD</Text>
                </Box>
                <VStack gap="0" alignItems="flex-start">
                    <Text fontSize="0.9rem" fontWeight="500">
                        Chatbot Flow Builder
                    </Text>
                    <Text fontSize="0.75rem" color="text.subText">
                        By Kshitij Dumbre
                    </Text>
                </VStack>
            </HStack>
            <HStack>
                <Button backgroundColor="brand.500" padding="8px 12px" gap="4px" cursor="pointer" _hover={{ bg: "brand.300" }}>
                    <Box color="text.dark" className="i-mynaui:check-circle size-5" />
                    <Text color="text.dark">  Validate Flow</Text>
                </Button>
                <Box className="h-4 w-px bg-dark-300" />
                <Box className="size-9 flex cursor-pointer items-center justify-center rounded-lg bg-amber bg-transparent active:bg-dark-400 hover:bg-dark-2">
                    <Box className="i-mynaui:brand-linkedin size-4.5" />
                </Box>
                <Box className="size-9 flex cursor-pointer items-center justify-center rounded-lg bg-amber bg-transparent active:bg-dark-400 hover:bg-dark-2">
                    <Box className="i-mynaui:brand-github size-4.5" />
                </Box>
            </HStack>
        </HStack>
    );
}
