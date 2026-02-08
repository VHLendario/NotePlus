import {
  Button,
  Container,
  Paper,
  Autocomplete,
  Group,
  Text,
  Box,
  SimpleGrid,
  Loader,
  Center
} from '@mantine/core';
import classes from '../Home/home.module.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardCurso } from '../../components/Card';
import api from '../../services/api';

export const Home = () => {
  const [pesquisa, setPesquisa] = useState(sessionStorage.getItem('home_lastSearch') || '');
  const [resultados, setResultados] = useState(JSON.parse(sessionStorage.getItem('home_lastResults')) || []);
  const [sugestoes, setSugestoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Sempre que a URL mudar, verificamos:
    // Se eu não estou na Home ('/') E não estou nos Detalhes...
    if (location.pathname !== '/' && !location.pathname.includes('/detalhes')) {
      // ...então eu mudei de aba no menu lateral, pode apagar tudo!
      sessionStorage.removeItem('home_lastSearch');
      sessionStorage.removeItem('home_lastResults');
    }
  }, [location.pathname]);

  useEffect(() => {
    const buscarSugestoes = async () => {
      // Só pesquisa se tiver mais de 1 letras
      if (pesquisa.length < 1) {
        setSugestoes([]);
        return;
      }

      try {
        // Chamando a rota nova 
        const response = await api.get('/sugestoes', {
          params: { curso: pesquisa }
        });

        setSugestoes(response.data); // Já recebe a lista de strings ['CIÊNCIA...', 'DIREITO']
      } catch (error) {
        console.error("Erro ao buscar sugestões", error);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      buscarSugestoes();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [pesquisa]);

  const handleSearch = async () => {

    if (!pesquisa.trim()) return;

    setLoading(true);
    try {
      const response = await api.get('/pesquisar', {
        params: {
          curso: pesquisa.trim().toUpperCase()
        }
      });

      // --- LÓGICA DE AGRUPAMENTO E SOMA DE VAGAS PARA SABER O TOTAL, JÁ QUE NO BANCO É SEPARADA ---
      const mapaAgrupado = {};

      response.data.forEach(item => {
        const chave = `${item.curso}-${item.sigla_universidade}`;

        if (!mapaAgrupado[chave]) {
          // Se é a primeira vez que vemos esse curso nessa uni, criamos o objeto
          mapaAgrupado[chave] = { ...item };
        } else {
          // Se já existe, somamos as vagas ao total que já tínhamos
          mapaAgrupado[chave].vagas += item.vagas;
        }
      });

      // Transformamos o objeto de volta para um Array para o Estado
      const resultadosSomados = Object.values(mapaAgrupado);

      setResultados(resultadosSomados);
      sessionStorage.setItem('home_lastResults', JSON.stringify(resultadosSomados));
      sessionStorage.setItem('home_lastSearch', pesquisa);

      setResultados(resultadosSomados);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setPesquisa('');
    setResultados([]);
    setSugestoes([]);
    sessionStorage.removeItem('home_lastSearch');
    sessionStorage.removeItem('home_lastResults');
  };

  return (
    <Container className={classes.mainContainer}>
      <Box className={classes.header} justify='space-between' display='flex' align='center' mt={20}>
        <Text className={classes.logo} fw={500} >Visão Geral - Crateús</Text>
        <Group>
          <Button className={classes.headerButton} variant="outline">Mudar Tema</Button>
          <Button className={classes.headerButton} variant="outline">Notificações</Button>
        </Group>
      </Box>

      {/* DASHBOARD AINDA NÃO FUNCIONAL */}
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

      {/* SEARCHINPUT */}
      <Box mt={20}>
        <Text mb={20} align="center" size='xl' fw={500}>Pesquisa Geral</Text>
        <Group justify='space-between'>
          <Autocomplete
            size='md'
            w={770}
            placeholder="Digite o nome do curso (ex: Ciência da...)"
            value={pesquisa}
            onChange={setPesquisa}
            data={sugestoes}
            filter={({ options }) => options}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            nothingFoundMessage="Nenhum curso sugerido"
            // Adiciona o botão de X dentro do input se houver texto
            rightSectionPointerEvents="all"
            rightSection={
              pesquisa && (
                <Text
                  style={{ cursor: 'pointer', opacity: 0.5 }}
                  onClick={handleClear}
                  size="xs"
                  fw={700}
                >
                  X
                </Text>
              )
            }
          />
          <Button size='md' variant="filled" onClick={handleSearch}>Pesquisar</Button>
        </Group>
      </Box>

      {/* Resultados em cards */}
      {loading ? (
        <Center mt={50}><Loader color="blue" /></Center>
      ) : (
        <SimpleGrid cols={3} spacing="xs" mt={20}>
          {resultados.length > 0 ? (
            resultados.map((item) => (
              <CardCurso
                key={item.id_projeto}
                dados={item}
              />
            ))
          ) : (
            <Text align="center" mt={20}></Text>
          )}
        </SimpleGrid>
      )}
    </Container>
  );
};