import {
    Button,
    Container,
    Group,
    Anchor,
    Text,
    Box,
    Tabs,
    Stack,
    Avatar,
    Divider,
    UnstyledButton,
    Checkbox,
    Switch,
    Select,
    SimpleGrid
} from '@mantine/core';
import { 
    IconChevronRight, 
    IconTrophy, 
    IconPlus, 
    IconSun, 
    IconMoon, 
    IconDeviceDesktop
} from '@tabler/icons-react';
import classes from '../Perfil/Perfil.module.css'

export const Perfil = () => {
    // Componente auxiliar para as linhas de configuração
    const ConfigRow = ({ label, children }) => (
        <Group justify="space-between" py="xs">
            <Text size="sm" c="dimmed">{label}</Text>
            {children}
        </Group>
    );

    return (
        <Container className={classes.mainContainer} fluid w={960}>
            <Stack mt={20}>
                {/* HEADER */}
                <Text fw={700} size="24px">Perfil</Text>
                
                <Tabs defaultValue="perfil" variant="outline" classNames={{
                    root: classes.tabsRoot,
                    list: classes.tabsList,
                    tab: classes.tab,
                }}>
                    <Tabs.List>
                        <Tabs.Tab value="perfil">Perfil</Tabs.Tab>
                        <Tabs.Tab value="configuracoes">Configurações</Tabs.Tab>
                    </Tabs.List>

                    {/* --- CONTEÚDO DA ABA PERFIL --- */}
                    <Tabs.Panel value="perfil" pt="xl">
                        <Stack gap="xl">
                            <Group>
                                <Avatar
                                    size={80}
                                    radius="xl"
                                    src={null}
                                    alt="Foto de perfil"
                                    className={classes.avatarBorder}
                                />
                                <Box>
                                    <Text fw={700} size="xl">Victor Hugo</Text>
                                    <Text c="dimmed" size="sm">victor.hugo@alu.fpo.edu.br</Text>
                                </Box>
                            </Group>

                            <UnstyledButton className={classes.statsBar}>
                                <Group justify="space-between">
                                    <Group>
                                        <IconTrophy size={20} color="#fab005" />
                                        <Text size="sm" fw={600}>Buscas (5 / 100)</Text>
                                    </Group>
                                    <IconChevronRight size={18} c="dimmed" />
                                </Group>
                            </UnstyledButton>

                            <Box mt="md">
                                <Text fw={700} size="lg" mb="lg">Detalhes</Text>
                                <DetailItem label="Nome" value="Victor Hugo" />
                                <DetailItem label="Email" value="victor.hugo@alu.fpo.edu.br" />
                                <DetailItem label="Senha" value="••••••••••••" />
                            </Box>

                            <Box mt="md">
                                <Group justify="space-between" mb="lg">
                                    <Box>
                                        <Text fw={700} size="lg">Preferências</Text>
                                        <Text size="xs" c="dimmed">Você pode adicionar preferências de curso</Text>
                                    </Box>
                                    <Button
                                        variant="default"
                                        size="xs"
                                        leftSection={<IconPlus size={14} />}
                                        radius="md"
                                    >
                                        Adicionar Cursos
                                    </Button>
                                </Group>
                                <DetailItem label="Nome" value="Análise e Desenvolvimento de Sistemas" />
                            </Box>

                            <Box>
                                <Button variant="subtle" color="red" size="xs">
                                    Deletar conta
                                </Button>
                            </Box>
                        </Stack>
                    </Tabs.Panel>

                    {/* --- CONTEÚDO DA ABA CONFIGURAÇÕES --- */}
                    <Tabs.Panel value="configuracoes" pt="xl">
                        <Stack gap="xl">
                            {/* NOTIFICAÇÕES */}
                            <Box>
                                <Text fw={700} size="lg" mb="xs">Notificações</Text>
                                <Group justify="space-between" mb="sm" className={classes.line}>
                                    <Text size="xs" fw={600}>Geral</Text>
                                </Group>
                                <Stack gap="xs">
                                    <ConfigRow label="Lembretes de novos cursos"><Checkbox color="orange" defaultChecked /></ConfigRow>
                                    <ConfigRow label="Notificar atualizações"><Checkbox color="orange" defaultChecked /></ConfigRow>
                                    <ConfigRow label="Novas mensagens"><Checkbox color="orange" defaultChecked /></ConfigRow>
                                </Stack>
                            </Box>

                            {/* PREFERÊNCIAS */}
                            <Box>
                                <Text fw={700} size="lg" mb="xs">Preferências</Text>
                                <Group justify="space-between" mb="sm" className={classes.line}>
                                    <Text size="xs" fw={600}>Experiência</Text>
                                </Group>
                                <Stack gap="xs">
                                    <ConfigRow label="Efeitos sonoros"><Switch color="orange" defaultChecked size="sm" /></ConfigRow>
                                    <ConfigRow label="Animações"><Switch color="orange" defaultChecked size="sm" /></ConfigRow>
                                </Stack>
                            </Box>

                            {/* APARÊNCIA */}
                            <Box>
                                <Text fw={700} size="lg" mb="md">Aparência</Text>
                                <SimpleGrid cols={3} spacing="md">
                                    <UnstyledButton className={`${classes.appearanceBtn} ${classes.activeAppearance}`}>
                                        <Group gap="xs">
                                            <IconSun size={18} color="#fab005" />
                                            <Text size="sm" fw={500}>Claro</Text>
                                        </Group>
                                    </UnstyledButton>
                                    <UnstyledButton className={classes.appearanceBtn}>
                                        <Group gap="xs">
                                            <IconMoon size={18} />
                                            <Text size="sm" fw={500}>Escuro</Text>
                                        </Group>
                                    </UnstyledButton>
                                    <UnstyledButton className={classes.appearanceBtn}>
                                        <Group gap="xs">
                                            <IconDeviceDesktop size={18} />
                                            <Text size="sm" fw={500}>Sistema</Text>
                                        </Group>
                                    </UnstyledButton>
                                </SimpleGrid>
                            </Box>

                            {/* IDIOMA */}
                            <Box>
                                <Text fw={700} size="lg" mb="md">Idioma</Text>
                                <Select
                                    placeholder="Selecione o idioma"
                                    defaultValue="pt"
                                    data={[{ value: 'pt', label: 'Português' }, { value: 'en', label: 'English' }]}
                                    radius="md"
                                />
                            </Box>
                        </Stack>
                    </Tabs.Panel>
                </Tabs>
            </Stack>
        </Container>
    );
}

const DetailItem = ({ label, value }) => (
    <Box mb="md">
        <Divider mb="sm" opacity={0.5} />
        <Group justify="space-between" align="flex-start">
            <Box>
                <Text size="xs" fw={700}>{label}</Text>
                <Text size="sm" c="dimmed">{value}</Text>
            </Box>
            <Anchor component="button" size="xs" fw={700} underline="never">
                Editar
            </Anchor>
        </Group>
    </Box>
);