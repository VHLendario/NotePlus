import {
  Button,
  Container,
  Stack,
  Anchor,
  Text,
  Box,
  Card
} from '@mantine/core';


import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <Container className={classes.painel} position="fixed" p={0} m={0} h={'100vh'}>

      <Card h={'100vh'} shadow="sm" padding="lg" radius="md" withBorder>
        <Stack justify="space-between" p="12px" h="100%">

          {/* LOGO */}
          <Text align="center" className={classes.logo}>NotePlus+</Text>

          {/* LINKS */}
          <Stack>
            <Anchor component={NavLink} to="/">Menu</Anchor>
            <Anchor component={NavLink} to="/cursos">Cursos</Anchor>
            <Anchor component={NavLink} to="/faculdades">Faculdades</Anchor>
            {/* <Anchor>Perfil</Anchor> */}
            <Anchor component={NavLink} to="/login">Sair</Anchor>
          </Stack>

          {/* Propaganda */}
          <Stack mt="auto" className={classes.propaganda} >
            <Text
              size="xl"
              fw={900}
              weight={'bold'}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 104 }}
            >
              Versão PRO
            </Text>

            <Text size="sm" color="dimmed">
              Indicações personalizadas, perfil ativo e ferramentas exclusivas.
            </Text>

            <Button>
              Teste
            </Button>
          </Stack>

        </Stack>
      </Card>

    </Container>
  );
};
