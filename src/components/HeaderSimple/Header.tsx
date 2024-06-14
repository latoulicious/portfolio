import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import image from '@/assets/logo-dark.svg';

const links = [
  { link: '/Home', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/projet', label: 'Project' },
  { link: '/blog', label: 'Blog' },
  { link: '/contact', label: 'Contact Me' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <img src={image} alt="Your Logo" style={{ width: '80px', height: 'auto' }} />

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
