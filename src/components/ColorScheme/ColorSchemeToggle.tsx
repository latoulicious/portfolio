import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

interface ColorSchemeToggleProps {
  onToggle?: () => void; // Define onToggle prop as optional callback
}

export function ColorSchemeToggle({ onToggle }: ColorSchemeToggleProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const handleToggle = () => {
    toggleColorScheme(); // Toggle color scheme internally
    if (onToggle) {
      onToggle(); // Call onToggle callback if provided
    }
  };

  return (
    <ActionIcon
      variant="default"
      color={dark ? 'yellow' : 'blue'}
      onClick={handleToggle}
      aria-label="Toggle color scheme"
    >
      {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  );
}
