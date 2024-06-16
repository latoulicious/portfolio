/* eslint-disable react/no-unescaped-entities */
import { Image, Container, Title, Text, List, Divider, Space } from '@mantine/core';
import classes from './About.module.css';

export function About() {
  return (
    <Container size="md" className={classes.container}>
      <div className={classes.inner}>
        <Image src="https://i.ibb.co.com/VWhxcQd/IMG20200217060310.jpg" className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>
            Hey there!
            <Space h="xs" />
            I'm<span className={classes.highlight}>Muhammad Arsyad T.R</span>
          </Title>
          <Text c="dimmed" mt="md">
            A Recent Software Engineering graduate with a passion for collaboration and learning.
            Through my studies, I honed my skills in software design, development, and testing.
            <Space h="md" />
            I'm eager to leverage my knowledge and contribute to a team as an entry-level software
            engineer. I'm particularly interested in backend development and excited to learn from
            experienced professionals.
          </Text>
          <Divider my="md" />
          <Text c="dimmed" mt="md">
            Let's{' '}
            <a href="https://www.linkedin.com/in/arsyds/" className={classes.link}>
              connect
            </a>{' '}
            and discuss how I can be a valuable asset to your team! My{' '}
            <a
              href="https://drive.google.com/file/d/17Ryf3fbuDIMcebUCyMVLxXO3LiARoPf6/view?usp=sharing"
              className={classes.link}
            >
              resume
            </a>{' '}
            is also available for your review.
          </Text>
          <Divider my="md" />

          <Text c="dimmed" mt="md">
            Here are a few technologies I’ve been working with recently:
            <Space h="md" />
            <List spacing="sm" size="sm">
              <List.Item>Go</List.Item>
              <List.Item>PHP</List.Item>
              <List.Item>Typescript</List.Item>
              <List.Item>SQL (e.g., MySQL, PostgreSQL)</List.Item>
            </List>
          </Text>
        </div>
      </div>
    </Container>
  );
}
