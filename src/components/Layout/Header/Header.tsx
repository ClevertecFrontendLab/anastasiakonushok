import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    HStack,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

import AvatarImage from '../../../assets/avatar.png';
import LogoImage from '../../../assets/logo.svg';
import styles from './Header.module.scss';

export const Header = () => {
    const location = useLocation();

    // Получаем путь и делим его на части
    const paths = location.pathname.split('/').filter(Boolean);

    // Формируем массив хлебных крошек
    const breadcrumbs = [
        { name: 'Главная', path: '/' },
        ...paths.map((part, index) => {
            const path = '/' + paths.slice(0, index + 1).join('/');
            const label =
                part === 'vegan' ? 'Веганская кухня' : part === 'juiciest' ? 'Самое сочное' : part;
            return { name: label, path };
        }),
    ];

    return (
        <Flex
            as='header'
            className={styles.header}
            p='16px'
            pr='80px'
            align='center'
            justify='center'
            data-test-id='header'
            maxW='1920px'
        >
            <Flex w='100%' align='center' justify='space-between'>
                {/* Лого */}
                <HStack className={styles.logo}>
                    <Image src={LogoImage} alt='logo' h='32px' />
                </HStack>

                {/* Хлебные крошки */}
                <Flex flex='1'>
                    <Breadcrumb
                        separator={
                            <svg
                                width='22'
                                height='24'
                                viewBox='0 0 22 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M9.2577 7.5L8.2002 8.5575L11.6352 12L8.2002 15.4425L9.2577 16.5L13.7577 12L9.2577 7.5Z'
                                    fill='#1A202C'
                                />
                            </svg>
                        }
                    >
                        {breadcrumbs.map((crumb, index) => {
                            const isLast = index === breadcrumbs.length - 1;
                            return (
                                <BreadcrumbItem key={index} isCurrentPage={isLast}>
                                    <BreadcrumbLink
                                        as={Link}
                                        to={crumb.path}
                                        className={isLast ? styles.current : styles.link}
                                    >
                                        {crumb.name}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            );
                        })}
                    </Breadcrumb>
                </Flex>
                {/* Профиль */}
                <Flex align='center' gap='12px'>
                    <Image
                        src={AvatarImage}
                        alt='Екатерина'
                        boxSize='48px'
                        borderRadius='999px'
                        objectFit='cover'
                    />
                    <VStack spacing={0} align='flex-start' lineHeight='1'>
                        <Text fontSize='sm' fontWeight='semibold' className={styles.username}>
                            Екатерина Константинопольская
                        </Text>
                        <Text fontSize='xs' className={styles.userhandle}>
                            @bake_and_pie
                        </Text>
                    </VStack>
                </Flex>
            </Flex>
        </Flex>
    );
};
