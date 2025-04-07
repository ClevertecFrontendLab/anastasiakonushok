import { Box, Text } from '@chakra-ui/react';

import { AppLayout } from '../components/AppLayout';

export const HomePage = () => (
    <AppLayout>
        <Box p={6}>
            <Text fontSize='3xl' fontWeight='bold'>
                Приятного аппетита!
            </Text>
        </Box>
    </AppLayout>
);
