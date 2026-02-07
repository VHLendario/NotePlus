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
  Card,
  CardSection,
  SimpleGrid,
  Box,
  Stack,
} from '@mantine/core';
import classes from '../Cursos/Cursos.module.css';
import { CardCurso } from '../../components/Card';

export const Cursos = () => {
  return (
    <Container className={classes.mainContainer} >

      {/* Header de pesquisa */}
      <Group className={classes.hightHeader} position="apart" mb={50}>
        <Text size="xl" weight={'bold'}>
          Cursos
        </Text>

        <TextInput
          placeholder="Pesquisar cursos"
          className={classes.searchInput}
          size="md"
          w={400}

        />
        <Button className={classes.searchButton} w={100}>
          Pesquisar
        </Button>

        <Button className={classes.searchButton} w={100}>
          Filtros
        </Button>
      </Group>

      {/* Resultados em card */}

      <SimpleGrid cols={3} spacing="lg">
        <CardCurso/>
        <CardCurso/>
        <CardCurso/>
        <CardCurso/>
      </SimpleGrid>

      {/*  */}
    </Container>
  );
}