import {
    Button,
    Stack,
    Group,
    Anchor,
    Text,
    Box,
    Card,
    Paper
} from '@mantine/core';
import  classes  from '../CardDetails/CardDetails.module.css'
import { NavLink } from 'react-router-dom';

export const CardDetails = () => {
    return (
        <Card shadow="sm" padding={0} style={{ marginTop: 20 }} withBorder>
            <Box bg="#3D4474" p="sm" w={'100%'}>
                <Group justify="center">
                    <Text align="center" c="white" fw={700} size="md" >
                        COTA AC
                    </Text>
                </Group>
            </Box>

            <Stack p="md" gap={0}>
                <Text fw={500}>
                    AC: Ampla Concorrência
                </Text>

                <Box mt="sm">
                    <Text c="dimmed" size="sm">
                        Vagas
                    </Text>

                    <Text size="xl" fw={700} c="#3D4474">
                        24
                    </Text>
                </Box>
                <Box mt="sm">
                    <Text c="dimmed" size="sm">
                        Inscritos
                    </Text>

                    <Text size="xl" fw={700} c="#3D4474">
                        527
                    </Text>
                </Box>

                <Box mt="sm" className={classes.Resultado}>
                    <Text c="dimmed" size="xl">
                        Corte:
                    </Text>

                    <Text size="xl" fw={700} c="#3D4474">
                        528.48
                    </Text>
                </Box>

            </Stack>
        </Card>
    )
}