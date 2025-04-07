import { ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Icon,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

import { StatBlock } from '~/components/UI/StatBlock';

import AvatarImage from '../../../assets/images/avatar.png';
import LogoMob from '../../../assets/images/logo-mob.svg';
import LogoText from '../../../assets/images/logo-yee-daa.svg';
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
            align='center'
            justify='center'
            data-test-id='header'
        >
            <Flex as={Link} to='/' w='100%' align='center' justify='space-between'>
                {/* Лого */}
                <Flex align='end' gap='7px' className={styles.logo}>
                    <Image src={LogoMob} h='32px' />
                    <Image
                        src={LogoText}
                        h='26px'
                        alt='logo'
                        display={{ base: 'none', sm: 'flex' }}
                    />
                </Flex>

                {/* Хлебные крошки */}
                <Flex flex='1'>
                    <Breadcrumb
                        display={{ base: 'none', md: 'flex' }}
                        spacing='8px'
                        separator={<ChevronRightIcon boxSize={6} color='#1a202c' />}
                    >
                        {breadcrumbs.map((crumb, index) => {
                            const isLast = index === breadcrumbs.length - 1;
                            return (
                                <BreadcrumbItem key={index} isCurrentPage={isLast}>
                                    {isLast ? (
                                        <Text className={styles.current}>{crumb.name}</Text>
                                    ) : (
                                        <BreadcrumbLink
                                            as={Link}
                                            to={crumb.path}
                                            className={styles.link}
                                        >
                                            {crumb.name}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            );
                        })}
                    </Breadcrumb>
                </Flex>
                <Flex display={{ base: 'flex', md: 'none' }} align='center' gap='16px'>
                    {/* Статистика */}
                    <StatBlock likes={125} saves={36} views={514} />

                    {/* Бургер-кнопка */}
                    <Box p='12px' as='button' onClick={() => console.log('Открыть меню')}>
                        <Icon as={HamburgerIcon} boxSize={6}></Icon>
                    </Box>
                </Flex>
                {/* Профиль */}
                <Flex align='center' gap='12px' display={{ base: 'none', md: 'flex' }}>
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
