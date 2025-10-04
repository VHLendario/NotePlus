import {
  AppShell,
  Avatar,
  Container,
  Divider,
  Flex,
  Grid,
  Image,
  Space,
  Text,
  Title,
} from '@mantine/core';
import {
  IconHome,
  IconBuildingCommunity,
  IconBuildingPlus,
  IconUserPlus,
  IconUsers,
  IconLogout,
  IconMapPin,
} from '@tabler/icons-react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';

import { me } from '@/services/user';
import { AcsProps } from '@/types/acs';

import classes from './Layout.module.css';
import { logout } from '@/services/api';
import { notifications } from '@mantine/notifications';
import notificationClasses from '@/components/Notifications/Notification.module.css';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  const [user, setUser] = useState<AcsProps | null>(null);

  const fetchUser = async () => {
    try {
      const user = await me();
      setUser(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  };

  const logoutUser = () => {
    logout();
    notifications.show({
      title: 'Até mais!',
      message: 'Você saiu com sucesso.',
      color: 'yellow',
      position: 'top-right',
      classNames: notificationClasses,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const items = [
    { label: 'Página Inicial', url: '/home', icon: IconHome },
    { label: 'Unidades Básicas', url: '/ubs', icon: IconBuildingPlus },
    { label: 'Agente de Saúde', url: '/acs', icon: IconUserPlus },
    { label: 'Áreas de Saúde', url: '/areas', icon: IconBuildingCommunity },
    { label: 'Logradouros', url: '/logradouros', icon: IconMapPin },
    { label: 'Cidadãos', url: '/cidadaos', icon: IconUsers },
  ];

  const links = items.map((item) => (
    <Link className={classes.navbarLink} key={item.label} to={item.url}>
      <item.icon />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <AppShell header={{ height: 100 }} h={'100%'} padding="md">
      <AppShell.Header
        style={{
          boxShadow: '0 5px 40px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'var(--primary-green-color)',
          borderBottom: '1px solid #bbb',
        }}
      >
        <Container size="xl">
          <Flex py="lg" justify="space-between" align="center">

            <Flex align="center">
              <Space w="md" />
              <Avatar src={null} variant="transparent" color="#FFF" size="lg" />
              <Text
                style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFF' }}
              >
                {user?.name}
              </Text>
            </Flex>
          </Flex>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container size="xl">
          <Flex py={20} justify={'space-between'} align="center">
            <Title c="dark.3" order={2}>
              {title}
            </Title>
          </Flex>
          <Divider />
          <Space h={30} />
          <Grid overflow="hidden">
            <Grid.Col span={{ base: 12, xs: 3 }}>
              <nav className={classes.navbar}>
                <div>{links}</div>
                <div className={classes.navbarLogout}>
                  <Link
                    className={classes.navbarLink}
                    to="/"
                    onClick={() => logoutUser()}
                  >
                    <IconLogout />
                    Sair
                  </Link>
                </div>
              </nav>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 9 }}>
              <Container size="md">{children}</Container>
            </Grid.Col>
          </Grid>
        </Container>
      </AppShell.Main>

      <AppShell.Footer
        style={{
          backgroundColor: '#f0f1f5',
          borderTopColor: 'var(--primary-green-color)',
          color: '#FFF',
          textAlign: 'center',
          padding: '20px 0',
          marginTop: '30px',
          position: 'relative',
        }}
      >
        <Container size="xl">
          <Flex
            justify="center"
            align="center"
            p="sm"
            gap={15}
            direction="column"
          >
            <Text size="xs" c="#000">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </Text>
          </Flex>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
};