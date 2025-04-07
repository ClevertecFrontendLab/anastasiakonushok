import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    HStack,
    Icon,
    Link as ChakraLink,
    VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import styles from './SidebarMenu.module.scss';

const sidebarData = [
    {
        title: 'Салаты',
        icon: 'salads',
        children: ['Мясные салаты', 'Рыбные салаты', 'Овощные салаты', 'Теплые салаты'],
    },
    {
        title: 'Закуски',
        icon: 'salads',
        children: [
            'Мясные закуски',
            'Рыбные закуски',
            'Овощные закуски',
            'Теплые закуски',
            'Бутерброды',
            'Фастфуд',
        ],
    },
];

export const SidebarMenu = () => (
    <Box className={styles.sidebar__menu} overflowY='auto' h='100%'>
        <Accordion allowMultiple>
            {sidebarData.map(({ title, children, icon }, idx) => (
                <AccordionItem key={idx} border='none'>
                    <AccordionButton px={0} _expanded={{ fontWeight: 'bold' }}>
                        <HStack spacing={2} flex='1' textAlign='left'>
                            <Icon as={icon} boxSize={4} />
                            <Box as='span'>{title}</Box>
                        </HStack>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel px={4} py={2}>
                        <VStack align='start' spacing={2}>
                            {children.map((item, subIdx) => (
                                <ChakraLink
                                    as={Link}
                                    to='/vegan'
                                    key={subIdx}
                                    fontSize='sm'
                                    className={styles.link}
                                >
                                    {item}
                                </ChakraLink>
                            ))}
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </Box>
);
