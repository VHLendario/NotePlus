import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Image,
  Group,
  Anchor,
  Text,
  Box,
  SimpleGrid
} from '@mantine/core';
import classes from '../Home/home.module.css';
import { CardCurso } from '../../components/Card';

export const Home = () => {
  return (
    /* Para deixar a centralização da pagina precisa, preciso colocar o conteudo da home no grupo certo*/

    <Container className={classes.mainContainer}>
      <Box className={classes.header} justify='space-between' display='flex' align='center' mt={40}>
        <Text className={classes.logo} fw={500} >Visão Geral - Crateús</Text>
        {/* Agora um botão para mudar o tema da pagina para escuro e um botão para ver notificações */}
        <Group>
          <Button className={classes.headerButton} variant="outline">Mudar Tema</Button>
          <Button className={classes.headerButton} variant="outline">Notificações</Button>
        </Group>
      </Box>

      <Paper className={classes.dashboard} shadow="sm" p="md">
        <Group className={classes.card} position="apart">
          <Text size='xl' fw={500}>120</Text>
          <Text >Cursos Disponíveis</Text>
        </Group>

        <Group className={classes.card} position="apart">
          <Text size='xl' fw={500}>45</Text>
          <Text >Cursos Pesquisados</Text>
        </Group>

        <Group className={classes.card} position="apart">
          <Text size='xl' fw={500}>20</Text>
          <Text >Cursos por Faculdade</Text>
        </Group>

        <Group className={classes.card} position="apart">
          <Text size='xl' fw={500}>8</Text>
          <Text >Faculdades Públicas</Text>
        </Group>
      </Paper>

      <Box mt={20}>
        <Text mb={20} align="center" size='xl' fw={500}>Pesquisa Geral</Text>
        <Group justify='space-between'>
          <TextInput size='md' w={770} placeholder="Digite o nome do curso..." />
          <Button size='md' variant="filled">Pesquisar</Button>
        </Group>
      </Box>

      <SimpleGrid cols={3} spacing="xs" mt={2} color='transparent'>
        <CardCurso />
        <CardCurso />
        <CardCurso />
        <CardCurso />
      </SimpleGrid>


    </Container>

  );
};