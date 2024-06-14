import { Image, Container, Title, Text } from '@mantine/core';
import image from '@/assets/undraw-coffee.svg';
import classes from './Hero.module.css';

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
        <Title className={classes.title} ta="left" mt={100}>
        Welcome to my{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'blue' }}>
          Personal Portfolio
        </Text>
        </Title>
          <Text c="dimmed" mt="md">
            Software Engineering graduate with fundamental knowledge of software design, development, and testing
          </Text>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}
