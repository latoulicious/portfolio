import {
  SimpleGrid,
  Container,
  Card,
  Image,
  Group,
  Text,
  Badge,
  Space,
  AspectRatio,
  Button,
} from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import classes from './ProjectCard.module.css';

interface CardContentProps {
  title: string;
  image: string;
  desc: string;
  link: string;
  badges: string[];
}

const icon = <IconBrandGithub size={14} />;

const mockdata: CardContentProps[] = [
  {
    title: 'Sistem Informasi Perangkat Pembelajaran',
    image:
      'https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'An internal information system for school to streamline educational resource management.',
    link: 'https://github.com/latoulicious/SIPP', // Add your GitHub link here
    badges: ['Go', 'JavaScript', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'Healthie',
    image:
      'https://images.unsplash.com/photo-1565262353342-6e919eab5b58?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'An internal information system for clinics to streamline clinic operations.',
    link: 'https://github.com/latoulicious/Healthie', // Add your GitHub link here
    badges: ['PHP', 'Yii', 'PostgreSQL'],
  },
  // Template In case for future project
  //   {
  //     title: 'Hawaii beaches review: better than you think',
  //     image:
  //       'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  //     desc: 'September 9, 2022',
  //     badges: ['Python', 'Django'],
  //   },
];

const CardContent: React.FC<CardContentProps> = ({ title, image, desc, link, badges }) => (
  <>
    <Card.Section mb="sm">
      <AspectRatio ratio={16 / 9}>
        <Image src={image} alt={title} height={250} />
      </AspectRatio>
    </Card.Section>

    <Text fw={700} className={classes.title} size="md" tt="uppercase" mt="xs">
      {title}
    </Text>

    <Group mt="lg">
      <div>
        <Text fz="sm" lh="xl" c="dimmed">
          {desc}
        </Text>
        <Space h="md" />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outline" leftSection={icon} component="a" href={link}>
            Repository
          </Button>
        </div>
      </div>
    </Group>

    <Card.Section className={classes.footer}>
      <div style={{ display: 'flex' }}>
        {badges.map((badge, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <Badge size="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
              {badge}
            </Badge>
            <Space w="xs" />
          </div>
        ))}
      </div>
    </Card.Section>
  </>
);

export function ProjectCard() {
  return (
    <Container py="xl">
      <SimpleGrid cols={2} spacing="xl">
        {mockdata.map((item, index) => (
          <Card
            key={index}
            withBorder
            padding="lg"
            radius="md"
            component="a"
            p="md"
            className={classes.card}
          >
            <CardContent {...item} />
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
