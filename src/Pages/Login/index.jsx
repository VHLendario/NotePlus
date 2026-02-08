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
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react'

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleEntrar = () => {
    setLoading(true);

    // SIMULANDO O LOGIN
    // Depois, fazer o api.post('/login')
    setTimeout(() => {
      localStorage.setItem('@NotePlus:token', 'seu-token-aqui');
      navigate('/');
      setLoading(false);
    }, 1000); 
  };
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

        <Button 
          className={classes.entrar} 
          onClick={handleEntrar}
          loading={loading}
          fullWidth // Adicionei para ocupar a largura do Paper
          mt="xl"
        >
          Entrar
        </Button>


        <Group className={classes.groupForgotPassword}>
          <Text className={classes.forgotPassword}>Não tem uma conta?</Text>
          <Anchor className={classes.forgotPassword} underline='never' href='#' component={NavLink} to="/Cadastro">
            Crie uma aqui
          </Anchor>
        </Group>
      </Paper>
    </Container>
  );
};