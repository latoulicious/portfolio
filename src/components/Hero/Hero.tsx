import React, { useState, useEffect } from 'react';
import { Image, Container, Title, Text } from '@mantine/core';
import image from '@/assets/undraw-coffee.svg';
import classes from './Hero.module.css';

type TypingEffectCallback = () => void; // Optional callback function type

const typingEffect = (
  text: string, // Type annotation for 'text' parameter
  speed: number, // Type annotation for 'speed' parameter
  callback?: TypingEffectCallback // Optional callback with type annotation
) => {
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      document.getElementById('typedText').textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else if (callback) {
      // Use optional chaining to handle potential null callback
      callback();
    }
  };
  document.getElementById('typedText').textContent = ''; // Clear the content before starting
  typeWriter();
};

export function Hero() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const texts = [
      'Software Engineering graduate with fundamental knowledge of software design, development, and testing.',
      'Seeking to utilize broad educational background with excellent analytical, technical, and programming skills to thrive as an entry-level software engineer.',
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
