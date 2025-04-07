import { Box, Flex } from '@chakra-ui/react';

import { Header } from './Layout/Header/Header';

export const AppLayout = ({ children }: { children: React.ReactNode }) => (
    <Flex direction='column' height='100vh'>
        <Header />
        <Box as='main' flex='1' overflowY='auto'>
            {children}
        </Box>
    </Flex>
);
