import {
  Button,
  Container,
  TextInput,
  Group,
  Text,
  Card,
  SimpleGrid,
  Box,
  Stack,
} from '@mantine/core';
import classes from '../Faculdades/Faculdades.module.css';
import { CardCurso } from '../../components/Card'

export const Faculdades = () => {
  return (
    <Container className={classes.mainContainer}>

      {/* Header de pesquisa */}
      <Group className={classes.hightHeader} position="apart" mb={50}>
        <Text size="xl" weight={'bold'}>
          Faculdades
        </Text>

        <TextInput
          placeholder="Pesquisar faculdades"
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

    </Container>
  );
}