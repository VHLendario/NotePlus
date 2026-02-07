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
} from '@mantine/core';
import classes from './Cadastro.module.css';
import goo from '../../assets/img01.png'
import { NavLink } from "react-router-dom";

export const Cadastro = () => {
  return (
    <Container size={420} my={80} justify='center'>
      <Group justify='center'>
        <Text className={classes.logo}>NotePlus+</Text>
      </Group>

      <Group>
        <Button fullWidth mt='sm' radius='xl' color='#f6f7f8' >
          <Group>
            <Image src={goo} alt='goo' className={classes.goo} />
            <Text size='sm' c='#121212 '>Entrar com o Google</Text>
          </Group>
        </Button>
      </Group>

      <Paper withBorder shadow='md' p={22} mt={30} radius='sm'>
        <TextInput
          label='Nome'
          placeholder='Digite seu nome'
          required
          radius='sm'
        />
        <TextInput
          label='Email'
          placeholder='Digite seu email'
          required
          mt='md'
          radius='sm'
        />
        <PasswordInput
          label='Senha'
          placeholder='6 ou mais caracteres'
          required
          mt='md'
          radius='sm'
        />

        <Group>
          <Text  className={classes.Politic}>Ao continuar, você concorda com os Termos de Serviço e a Política de Privacidade da Note Plus.</Text>
        </Group>

        <Button className={classes.criar} component={NavLink} to="/">
          Criar Conta
        </Button>
        
        
        <Group className={classes.groupForgotPassword}>
          <Text className={classes.forgotPassword}>Já possui conta?</Text>
          <Anchor className={classes.forgotPassword} href='#' component={NavLink} to="/Login">
            Entre
          </Anchor>
        </Group>
      </Paper>
    </Container>
  );
};


/* 

<Paper className={classes.paper} shadow="md" radius="md" p="xl" withBorder>
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <Image
            src="https://example.com/logo.png"
            alt="Logo"
            width={100}
            height={100}
            mx="auto"
            mb="md"
          />
          <TextInput label="Email" placeholder="
Enter your email" required mb="sm" />
          <PasswordInput label="Password" placeholder="Enter your password" required mb="lg" />
          <Button fullWidth mb="md">Login</Button>
          <Group position="apart" mt="md">
            <Anchor href="#" size="sm">
              Forgot password?
            </Anchor>
            <Anchor href="#" size="sm">
              Don't have an account? Sign up
            </Anchor>
          </Group>
        </Box>
      </Paper>

*/