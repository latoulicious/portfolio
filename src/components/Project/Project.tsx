import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './Project.module.css';

const data = [
  {
    title: 'Sistem Informasi Perangkat Pembelajaran',
    image: 'https://picsum.photos/id/0/1280/720.webp',
    desc: 'An internal information system for school to streamline educational resource management.Built with Go, Vue.js framework, and PostgreSQL',
    link: 'https://github.com/latoulicious/SIPP', // Add your GitHub link here
  },
  {
    title: 'Healthie',
    image: 'https://picsum.photos/id/122/1280/720.webp',
    desc: 'An internal information system for clinics to streamline clinic operations. Built with PHP, Yii2 framework, and PostgreSQL',
    link: 'https://github.com/latoulicious/Healthie', // Add your GitHub link here
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://picsum.photos/seed/imgur/1280/720.webp',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: '/', // Add your GitHub link here
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    image: 'https://picsum.photos/seed/unsplash/1280/720.webp',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: '/', // Add your GitHub link here
  },
];

export function ProjectGrid() {
  const cards = data.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href={article.link}
      target="_blank"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text className={classes.title} size="xs" tt="uppercase" fw={700} mt="md">
        {article.title}
      </Text>
      <Text c="dimmed" mt={5}>
        {article.desc}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
