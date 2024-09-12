"use client";

import { Box, Text } from "@chakra-ui/react";

type HelloWorldProps = Readonly<{
    name: string;
    className?: string;
}>;

export default function HelloWorld({ name }: HelloWorldProps) {
    return (
        <Box>
            <Text>
                Hello
                {" "}
                {name}
            </Text>
        </Box>
    );
}
