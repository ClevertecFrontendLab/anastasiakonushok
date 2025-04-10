import { Box } from '@chakra-ui/react';

import { PageIntro } from '~/components/Layout/PageIntro/PageIntro';
import { FilterPanel } from '~/components/UI/FilterPanel/FilterPanel';

import { AppLayout } from '../components/AppLayout';

export const VeganPage = () => (
    <AppLayout>
        <Box>
            <PageIntro
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            >
                <FilterPanel></FilterPanel>
            </PageIntro>
        </Box>
    </AppLayout>
);
