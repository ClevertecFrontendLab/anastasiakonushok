import { Box } from '@chakra-ui/react';

import { PageIntro } from '~/components/Layout/PageIntro/PageIntro';
import { FilterPanel } from '~/components/UI/FilterPanel/FilterPanel';

import { AppLayout } from '../components/AppLayout';

export const HomePage = () => (
    <AppLayout>
        <Box>
            <PageIntro title='Приятного аппетита!'>
                <FilterPanel></FilterPanel>
            </PageIntro>
        </Box>
    </AppLayout>
);
