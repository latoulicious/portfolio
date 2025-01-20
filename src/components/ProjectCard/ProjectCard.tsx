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
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Developed as my college thesis, this project is a comprehensive information system focused on optimizing educational resource management, it delivers a seamless approach to handling educational content and operations.',
    link: 'https://github.com/latoulicious/SIPP', // Add your GitHub link here
    badges: ['Go', 'Vue', 'PostgreSQL'],
  },
  // Template In case for future project
  //   {
  //     title: 'Hawaii beaches review: better than you think',
  //     image:
  //       'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80',
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
      <div className={classes.badgesContainer}>
        {badges.map((badge, index) => (
          <Badge
            key={index}
            size="md"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            className={classes.badge}
          >
            {badge}
          </Badge>
        ))}
      </div>
    </Card.Section>
  </>
);

export function ProjectCard() {
  return (
    <Container py="xl">
      <SimpleGrid cols={2} spacing="xl" className={classes.grid}>
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
