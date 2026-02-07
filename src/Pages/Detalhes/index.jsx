import {
    Button,
    Container,
    Group,
    Text,
    Box,
    Paper,
    Anchor,
    NativeSelect, 
    SimpleGrid,
    
} from '@mantine/core';
import classes from '../Detalhes/Detalhes.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CardDetails } from '../../components/CardDetails'


export const Detalhes = () => {
    

    return (
        /* Nessa página vou separar em: header interativo, um campus de informações e o campus que vai aparecer as notas de corte de acordo com o ano escolhido por uma caixinha de seleção. */

        <Container className={classes.maincontainer} >
            <Box className={classes.header} shadow="sm" padding="lg" radius="md" withBorder w={'100%'} >
                <Button
                    component={NavLink}
                    to="/"
                >
                    Voltar
                </Button>
                <Group display={'inline'}>
                    <Text size="xl" weight={700} mb="md">
                        Ciência da Computação
                    </Text>
                    <Text size="md">
                        Veja os detalhes do curso escolhido.
                    </Text>
                </Group>
            </Box>

            <Paper className={classes.dashboard} shadow="sm" p="md">
                <Group bg={'blue'} display={'contents'}>
                    <Group>
                        <Text fw={600}>
                            Instituição:
                        </Text>
                        <Text>
                            Universidade Federal do Ceará
                        </Text>
                    </Group>
                    <Group>
                        <Text fw={600}>
                            Campus:
                        </Text>
                        <Text>
                            Fortaleza (CE)
                        </Text>
                    </Group>
                    <Group>
                        <Text fw={600}>
                            Grau:
                        </Text>
                        <Text>
                            Bacharel
                        </Text>
                    </Group>
                    <Group>
                        <Text fw={600}>Vagas:</Text>

                        <Text>
                            50
                        </Text>
                    </Group>
                    <Group>
                        <Text fw={600}>
                            Turno:
                        </Text>
                        <Text>
                            Integral (Matutino/Vesperino)
                        </Text>
                    </Group>
                </Group>
            </Paper>

            <Box mt={20}>
                <Text size='xl'>
                    Notas de Corte 2024
                </Text>
                <NativeSelect
                    label="Selecione o ano" 
                    data={['2024', '2023', '2022']} 
                    w={110}
                />
            </Box>

            <SimpleGrid cols={4} spacing={4}>
                <CardDetails/><CardDetails/><CardDetails/><CardDetails/>
                <CardDetails/><CardDetails/><CardDetails/><CardDetails/>
            </SimpleGrid>

        </Container>


    )
}