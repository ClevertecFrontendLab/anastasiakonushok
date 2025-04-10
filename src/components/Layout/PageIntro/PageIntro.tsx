import { Box, Heading, Text } from '@chakra-ui/react';

import styles from './PageIntro.module.scss';

type Props = {
    title: string;
    description?: string;
    children?: React.ReactNode;
};

export const PageIntro = ({ title, description, children }: Props) => (
    <Box className={styles.intro}>
        <Box>
            <Heading
                as='h1'
                fontFamily='var(--font-family)'
                fontWeight='bold'
                fontSize={{ base: '2xl', md: '5xl' }}
                color='black'
                className={styles.title}
            >
                {title}
            </Heading>
            {description && (
                <Text
                    fontFamily='var(--font-family)'
                    paddingTop='12px'
                    fontWeight='medium'
                    fontSize={{ base: '14px', md: '16px' }}
                    m='auto'
                    textAlign='center'
                    maxW='700px'
                    color='blackAlpha.500'
                    className={styles.description}
                >
                    {description}
                </Text>
            )}
        </Box>
        <Box>{children}</Box>
    </Box>
);
