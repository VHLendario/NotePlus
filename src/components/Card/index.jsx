import {
    Button,
    Container,
    Stack,
    PasswordInput,
    TextInput,
    Image,
    Group,
    Anchor,
    Text,
    Box,
    Card,
} from '@mantine/core';
import { NavLink } from 'react-router-dom';

export const CardCurso = () => {
    return (
        <Card shadow="sm" padding={0} style={{ marginTop: 20 }} withBorder>
            <Box bg="#3D4474" p="sm" w={'100%'}>
                <Group justify="space-between">
                    {/* EU quero deixar o texto reto */}
                    <Text align="center" c="white" fw={700} size="md" >
                        CIÊNCIA DA COMPUTAÇÃO
                    </Text>

                </Group>
            </Box>

            <Stack p="sm" gap={0}>
                <Text fw={500}>
                    UFC - UNIVERSIDADE FEDERAL DO CEARÁ
                </Text>

                <Text fw={600} size="sm" c="#3D4474">
                    CAMPUS DA UFC EM CRATEÚS (Fortaleza, CE)
                </Text>

                <Text c="dimmed">
                    Integral - Bacharelado
                </Text>

                <Box mt="sm">
                    <Text c="dimmed" size="sm">
                        Total de Vagas
                    </Text>

                    <Text size="xl" fw={700} c="#3D4474">
                        50
                    </Text>
                </Box>

                <Anchor component={NavLink} to="/Detalhes">
                    <Button
                    w={'100%'}
                    variant="light"
                    radius="xl"
                    size="md"
                    mt="sm"
                    styles={{
                        root: {
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                            fontWeight: 600
                        }
                    }}
                >
                    Ver Curso
                </Button>
                </Anchor>
                
            </Stack>
        </Card>
    )
}