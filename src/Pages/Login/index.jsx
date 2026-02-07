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
import classes from './login.module.css';
import goo from '../../assets/img01.png'
import { NavLink } from "react-router-dom";

export const Login = () => {
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

        <Button className={classes.entrar} component={NavLink} to="/">
          Entrar
        </Button>


        <Group className={classes.groupForgotPassword}>
          <Text className={classes.forgotPassword}>Não tem uma conta?</Text>
          <Anchor className={classes.forgotPassword} href='#' component={NavLink} to="/Cadastro">
            Crie uma aqui 
          </Anchor>
        </Group>
      </Paper>
    </Container>
  );
};