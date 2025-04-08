import { Flex, Text } from '@chakra-ui/react';

import styles from './Footer.module.scss';

export const Footer = () => (
    <Flex
        display={{ base: 'flex', md: 'none' }}
        as='footer'
        data-test-id='footer'
        className={styles.footer}
        justify='space-around'
        align='center'
        position='fixed'
        bottom='0'
        left='0'
        right='0'
        height='64px'
        bg='white'
        borderTop='1px solid #e2e8f0'
        zIndex='1000'
    >
        <FooterItem label='Главная' />
        <FooterItem label='Поиск' />
        <FooterItem label='Записать' />
        <FooterItem label='Профиль' />
    </Flex>
);

type FooterItemProps = {
    label: string;
};

const FooterItem = ({ label }: FooterItemProps) => (
    <Flex direction='column' align='center' gap='2px'>
        <Text fontSize='xs'>{label}</Text>
    </Flex>
);
