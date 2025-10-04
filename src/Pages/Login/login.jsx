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
import classes from './Login.module.css';
import goo from '../../assets/img01.png'

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

        <Button className={classes.criar}>
          Criar Conta
        </Button>
        
        
        <Group className={classes.groupForgotPassword}>
          <Text className={classes.forgotPassword}>Já possui conta?</Text>
          <Anchor className={classes.forgotPassword} href='#'>
            Entre
          </Anchor>
        </Group>
      </Paper>
    </Container>
  );
};