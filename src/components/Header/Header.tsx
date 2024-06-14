// Header.tsx
import { useState, useEffect } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { ColorSchemeToggle } from '../ColorScheme/ColorSchemeToggle';
import classes from './Header.module.css';
import logoLight from '@/assets/logo-light.svg';
import logoDark from '@/assets/logo-dark.svg';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/project', label: 'Project' },
  { link: '/error', label: 'WIP 🎉' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [colorScheme, setColorScheme] = useState('light'); // State to track color scheme

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Set initial color scheme based on user preference or system settings
    const currentColorScheme = localStorage.getItem('color-scheme') || 'light';
    setColorScheme(currentColorScheme);
  }, []);

  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
    localStorage.setItem('color-scheme', newColorScheme); // Store color scheme preference
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={`${classes.link} ${active === link.link ? classes.active : ''}`}
      data-active={active === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div className={classes.leftSection} style={{ marginTop: '10px', marginBottom: 'auto' }}>
          <img
            src={colorScheme === 'light' ? logoDark : logoLight}
            alt="Logo"
            style={{ width: '100px', height: 'auto' }}
          />
        </div>
        <div className={classes.rightSection}>
          <Group
            gap={5}
            style={{ alignItems: 'center', height: '100%' }}
            className={`${classes.navigation} visibleFrom="xs"`}
          >
            {items}
            <ColorSchemeToggle onToggle={toggleColorScheme} />{' '}
            {/* Toggle button for light/dark mode */}
          </Group>
        </div>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
