import { useState, useEffect } from 'react';
import { Container, Group, Burger, Drawer, ScrollArea } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
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
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [colorScheme, setColorScheme] = useState('light');
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const currentColorScheme = localStorage.getItem('color-scheme') || 'light';
    setColorScheme(currentColorScheme);
  }, []);

  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
    localStorage.setItem('color-scheme', newColorScheme);
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
            src={colorScheme === 'light' ? logoLight : logoDark}
            alt="Logo"
            style={{ width: '100px', height: 'auto' }}
          />
        </div>
        <div className={classes.rightSection}>
          {!isMobile && (
            <Group
              gap={5}
              style={{ alignItems: 'center', height: '100%' }}
              className={classes.navigation}
            >
              {items}
              <ColorSchemeToggle onToggle={toggleColorScheme} />
            </Group>
          )}
          {isMobile && (
            <>
              <div className={classes.colorSchemeToggle}>
                <ColorSchemeToggle onToggle={toggleColorScheme} />
              </div>
              <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </>
          )}
        </div>
      </Container>
      <Drawer
        opened={opened}
        onClose={close}
        title="Navigation"
        padding="md"
        size="xs"
        hiddenFrom="md"
      >
        <ScrollArea style={{ height: 'calc(100vh - 60px)' }}>{items}</ScrollArea>
      </Drawer>
    </header>
  );
}
