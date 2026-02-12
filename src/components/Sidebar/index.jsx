import {
  Button,
  Container,
  Stack,
  Anchor,
  Text,
  Card,
  Group
} from '@mantine/core';
import { IconHome, IconBook, IconSchool, IconLogout, IconUser } from '@tabler/icons-react';

import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

export const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem('@NotePlus:token');
  };
  return (
    <Container className={classes.painel} position="fixed" p={0} m={0} h={'100vh'}>

      <Card h={'100vh'} shadow="sm" padding="lg" radius="md" withBorder>
        <Stack justify="space-between" p="12px" h="100%">

          {/* LOGO */}
          <Text align="center" className={classes.logo}>NotePlus+</Text>

          {/* LINKS */}
          <Stack gap="sm">
            <Anchor
              component={NavLink}
              to="/"
              className={classes.link}
              underline="never"
            >
              <Group gap="xs">
                <IconHome size={20} stroke={1.5} />
                <Text>Menu</Text>
              </Group>
            </Anchor>

            <Anchor
              component={NavLink}
              to="/cursos"
              className={classes.link}
              underline="never"
            >
              <Group gap="xs">
                <IconBook size={20} stroke={1.5} />
                <Text>Cursos</Text>
              </Group>
            </Anchor>

            <Anchor
              component={NavLink}
              to="/faculdades"
              className={classes.link}
              underline="never"
            >
              <Group gap="xs">
                <IconSchool size={20} stroke={1.5} />
                <Text>Faculdades</Text>
              </Group>
            </Anchor>
            
            <Anchor
              component={NavLink}
              to="/perfil"
              className={classes.link}
              underline="never"
            >
              <Group gap="xs">
                <IconUser size={20} stroke={1.5} />
                <Text>Perfil</Text>
              </Group>
            </Anchor>

            <Anchor 
              component={NavLink} 
              to="/login" 
              className={classes.link} 
              c="red"
              underline='never'
              onClick={handleLogout}
              >
              <Group gap="xs">
                <IconLogout size={20} stroke={1.5} />
                <Text>Sair</Text>
              </Group>
            </Anchor>
          </Stack>

          {/* Propaganda */}
          <Stack mt="auto" className={classes.propaganda} gap="md">
            <Stack gap={0} align="center">
              <Text
                size="lg"
                fw={700}
                ta="center"
                className={classes.propagandaTitle}
              >
                Versão Completa
              </Text>
            </Stack>

            <Text size="xs" ta="center" c="dimmed" lh={1.4}>
              Acesso à estatistícas, previsões, comparações, perfil, notificações e muito mais
            </Text>

            <Button
              fullWidth
              className={classes.propagandaBtn}
              radius="md"
              size="md"
            >
              Criar Conta
            </Button>
          </Stack>

        </Stack>
      </Card>

    </Container>
  );
};
