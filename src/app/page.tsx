import { Box } from "@chakra-ui/react";

import Header from "@/components/header";
import MainComponent from "@/components/mainComponent/main-component";

export default function RootPage() {
    return (
        <Box display="flex" flexDirection="column" flex={1} height="100vh">
            <Header />
            <MainComponent />
        </Box>
    );
}
