import { Box } from '@chakra-ui/react';

import { PageIntro } from '~/components/Layout/PageIntro/PageIntro';
import { FilterPanel } from '~/components/UI/FilterPanel/FilterPanel';

import { AppLayout } from '../components/AppLayout';

export const JuiciestPage = () => (
    <AppLayout>
        <Box>
            <PageIntro title='Самое сочное'>
                <FilterPanel></FilterPanel>
            </PageIntro>
        </Box>
    </AppLayout>
);
