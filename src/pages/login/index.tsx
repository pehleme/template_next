import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Heading } from '@chakra-ui/layout';

import { useAuth } from '~/contexts';
import { AuthenticateModel } from '~/data/models';

function Login(): JSX.Element {
  const { user, isLoading, login, logout } = useAuth();
  const { register, handleSubmit } = useForm<AuthenticateModel>();

  const onSubmit: SubmitHandler<AuthenticateModel> = (authenticate) =>
    login(authenticate);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading mb={6}>Login</Heading>
      <Input
        type="email"
        {...register('email', { required: true })}
        placeholder="email@hdn.digital"
        mb={3}
      ></Input>
      <Input
        type="password"
        {...register('password', { required: true })}
        placeholder="****"
        mb={3}
      ></Input>
      <Button type="submit" mr={3}>
        {user ? 'Entrou' : isLoading ? 'Entrando...' : 'Entrar'}
      </Button>
      <Button onClick={logout}>Sair</Button>
    </form>
  );
}

export default Login;
