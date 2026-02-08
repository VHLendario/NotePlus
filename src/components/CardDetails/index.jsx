import {
    Stack,
    Group,
    Text,
    Box,
    Card,
    Modal,
    Button
} from '@mantine/core';
import classes from './CardDetails.module.css';
import { useDisclosure } from '@mantine/hooks';

// Recebemos "dados" como prop
export const CardDetails = ({ dados }) => {
    const [opened, { open, close }] = useDisclosure(false);
    if (!dados) return null;

    return (
        <>
            {/* Botão para visualizar detalhes da cota */}
            <Modal
                opened={opened}
                onClose={close}
                title={`Entender Modalidade: ${dados.modalidade}`}
                centered
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}
            >
                <Text size="sm">
                    {dados.descricao_cota}
                </Text>
            </Modal>

            <Card w={215} shadow="sm" padding={0} style={{ marginTop: 20 }} withBorder>
                <Box bg="#3D4474" p="sm" w={'100%'}>
                    <Group justify="center">
                        <Text align="center" c="white" fw={700} size="lg" >
                            COTA {dados.modalidade}
                        </Text>
                    </Group>
                </Box>

                <Stack p="md" gap="xs">
                    <Button
                        variant="subtle"
                        color="blue"
                        size="compact-xs"
                        onClick={open}/* Abre o modal ao clicar  */
                        fullWidth
                    >
                        Entender Modalidade
                    </Button>

                    <Group justify="space-between" mt="sm">
                        <Box>
                            <Text c="dimmed" size="md">Vagas</Text>
                            <Text size="lg" fw={700} c="#3D4474">{dados.vagas}</Text>
                        </Box>
                        <Box>
                            <Text c="dimmed" size="md">Inscritos</Text>
                            <Text size="lg" fw={700} c="#3D4474">{dados.inscritos}</Text>
                        </Box>
                    </Group>

                    <Box mt="sm" className={classes.Resultado} display="flex" style={{ alignItems: 'baseline', gap: '5px' }}>
                        <Text c="dimmed" size="lg">Corte:</Text>
                        <Text size="xl" fw={700} c="#3D4474">{dados.nota_corte}</Text>
                    </Box>
                </Stack>
            </Card>
        </>
    );
};