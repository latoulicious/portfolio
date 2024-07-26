import React, { useState, useEffect } from 'react';
import { Image, Container, Title, Text } from '@mantine/core';
import image from '@/assets/undraw-coffee.svg';
import classes from './Hero.module.css';

type TypingEffectCallback = () => void; // Optional callback function type

const typingEffect = (text: string, speed: number, callback?: TypingEffectCallback) => {
  let i: number = 0;
  const typeWriter = () => {
    const element = document.getElementById('typedText');
    if (element) {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        // eslint-disable-next-line no-plusplus
        i++;
        setTimeout(typeWriter, speed);
      } else if (callback) {
        callback();
      }
    }
  };
  if (document.getElementById('typedText')) {
    document.getElementById('typedText')!.textContent = '';
  } // Clear the content before starting
  typeWriter();
};

export function Hero() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const texts = [
      'Information Systems graduate with a solid foundation in software design, development, and testing.',
      'Explore my projects to see my work in action!',
    ];

    const handleTypingComplete = () => {
      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
      }, 2000); // Wait 2 seconds before starting the next text
    };

    typingEffect(texts[currentText], 20, handleTypingComplete);
  }, [currentText]);

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title} ta="left" mt={100}>
            Welcome to my{' '}
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: 'pink', to: 'blue' }}
            >
              Personal Portfolio
            </Text>
          </Title>
          <Text id="typedText" c="dimmed" mt="md">
            {/* This text content will be managed by the typingEffect function */}
          </Text>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}
