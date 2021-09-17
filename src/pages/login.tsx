import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import { useRouter } from 'next/router';

import { Button, IconButton } from '@chakra-ui/button';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Flex, Stack } from '@chakra-ui/layout';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuth } from '~/contexts';
import { AuthenticateModel } from '~/data/models';

const loginFormSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

function Login(): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();
  const { isLoggedIn, login } = useAuth();
  const { replace } = useRouter();
  const { register, handleSubmit, formState } = useForm<AuthenticateModel>({
    resolver: yupResolver(loginFormSchema),
  });

  const handleLogin: SubmitHandler<AuthenticateModel> = (data) => login(data);

  useEffect(() => {
    if (isLoggedIn) {
      replace('/');
    }
  });

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      w="100vw"
      h="100vh"
    >
      <form onSubmit={handleSubmit(handleLogin)}>
        <Stack spacing="5">
          <FormControl
            id="email"
            isInvalid={formState.errors.email && formState.touchedFields.email}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              error={formState.errors.email?.message}
              {...register('email')}
              placeholder="email@hdn.digital"
              autoComplete="email"
              size="lg"
              variant="filled"
            ></Input>
            <FormErrorMessage>
              {formState.errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            id="password"
            isInvalid={
              formState.errors.password && formState.touchedFields.password
            }
          >
            <FormLabel>Senha</FormLabel>
            <InputGroup>
              <InputRightElement>
                <IconButton
                  bg="transparent !important"
                  variant="ghost"
                  size="lg"
                  aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                  icon={isOpen ? <HiEyeOff /> : <HiEye />}
                  onClick={onToggle}
                  mt="2"
                  mr="2"
                />
              </InputRightElement>
              <Input
                type={isOpen ? 'text' : 'password'}
                error={formState.errors.password}
                {...register('password')}
                placeholder="****"
                size="lg"
                variant="filled"
              ></Input>
            </InputGroup>
            <FormErrorMessage>
              {formState.errors.password?.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            colorScheme="purple"
            size="lg"
            fontSize="md"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </form>
    </Flex>
  );
}

export default Login;
