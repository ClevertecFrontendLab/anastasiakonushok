import { Flex, Text } from '@chakra-ui/react';

interface StatBlockProps {
    likes?: number;
    saves?: number;
    views?: number;
}

export const StatBlock = ({ likes, saves, views }: StatBlockProps) => (
    <Flex gap='12px' align='center'>
        {likes !== undefined && <Text fontSize='sm'>❤️ {likes}</Text>}
        {saves !== undefined && <Text fontSize='sm'>💾 {saves}</Text>}
        {views !== undefined && <Text fontSize='sm'>👁 {views}</Text>}
    </Flex>
);
