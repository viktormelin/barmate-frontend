import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { useSignIn, useSignUp } from '@clerk/nextjs';
import { Box, Button, Center, Group, PasswordInput, Progress, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SignInPage = () => {
  const signUpObject = useSignUp();
  const signInObject = useSignIn();
  const router = useRouter();

  const [login, setLogin] = useState(true);
  const [awaitingEmail, setAwaitingEmail] = useState(false);

  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length > 6 ? null : 'Password is to short'),
    },
  });

  const registerForm = useForm({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },

    validate: {
      firstname: (value) => (/^[A-Za-z.-]/.test(value) ? null : 'Invalid name'),
      lastname: (value) => (/^[A-Za-z.-]/.test(value) ? null : 'Invalid name'),
      email: (value) => (/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length > 6 ? null : 'Password is to short'),
    },
  });

  const verificationForm = useForm({
    initialValues: {
      code: '',
    },

    validate: {
      code: (value) => (/^[A-Za-z0-9]/.test(value) && value.length === 6 ? null : 'Invalid code'),
    },
  });

  const handleRegistration = async ({
    firstname,
    lastname,
    email,
    password,
  }: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }) => {
    await signUpObject.signUp
      ?.create({
        firstName: firstname,
        lastName: lastname,
        emailAddress: email,
        password,
      })
      .then((result) => {})
      .catch((err) => console.error('error', err.errors));

    await signUpObject.signUp?.prepareEmailAddressVerification();

    setAwaitingEmail(true);
  };

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    await signInObject.signIn
      ?.create({
        identifier: email,
        password,
      })
      .then((result) => {
        if (result.status === 'complete') {
          signInObject.setActive({ session: result.createdSessionId });
          router.push('/admin');
        } else {
          console.error(result);
        }
      })
      .catch((err) => console.error('error', err.errors));
  };

  const handleVerification = async ({ code }: { code: string }) => {
    const response = await signUpObject.signUp?.attemptEmailAddressVerification({ code }).then((result) => {
      if (result.status === 'complete') {
        setAwaitingEmail(false);
        setLogin(true);
        signUpObject.setActive({ session: result.createdSessionId });
        router.push('/admin');
      }
    });
  };

  return (
    <Box
      component='main'
      sx={(theme) => ({
        minHeight: '100vh',
        width: '100%',
      })}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#000',
        }}
      >
        <Container>
          <Box
            sx={{
              height: '100vh',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '5rem',
            }}
          >
            {awaitingEmail ? (
              <Box sx={{ width: '20rem' }}>
                <Text mb='lg'>
                  We just sent you an email with your verification code, please input it below. It should only take a
                  minute.
                </Text>
                <Box component='form' onSubmit={verificationForm.onSubmit(handleVerification)}>
                  <TextInput
                    placeholder='Verification code'
                    label='Verification code'
                    withAsterisk
                    {...verificationForm.getInputProps('code')}
                  />
                  <Button mt={10} fullWidth type='submit'>
                    Verify account
                  </Button>
                  <Text
                    // onClick={() => setLogin(false)}
                    sx={{ cursor: 'pointer' }}
                    size='sm'
                    align='center'
                    mt='sm'
                    color='dimmed'
                  >
                    Resend email verification
                  </Text>
                </Box>
              </Box>
            ) : (
              <>
                {login ? (
                  <Box sx={{ width: '20rem' }}>
                    <Box component='form' onSubmit={loginForm.onSubmit(handleLogin)}>
                      <TextInput placeholder='Email' label='Email' withAsterisk {...loginForm.getInputProps('email')} />
                      <PasswordInput
                        placeholder='Password'
                        label='Password'
                        withAsterisk
                        {...loginForm.getInputProps('password')}
                      />
                      <Button type='submit' mt={10} fullWidth>
                        Sign In
                      </Button>
                      <Text
                        onClick={() => setLogin(false)}
                        sx={{ cursor: 'pointer' }}
                        size='sm'
                        align='center'
                        mt='sm'
                        color='dimmed'
                      >
                        New user? Register an account instead
                      </Text>
                    </Box>
                  </Box>
                ) : (
                  <Box sx={{ width: '20rem' }}>
                    <Box component='form' onSubmit={registerForm.onSubmit(handleRegistration)}>
                      <Box
                        sx={{
                          display: 'flex',
                          gap: '0.5rem',
                        }}
                      >
                        <TextInput
                          placeholder='Firstname'
                          label='Firstname'
                          withAsterisk
                          {...registerForm.getInputProps('firstname')}
                        />
                        <TextInput
                          placeholder='Lastname'
                          label='Lastname'
                          withAsterisk
                          {...registerForm.getInputProps('lastname')}
                        />
                      </Box>
                      <TextInput
                        placeholder='Email'
                        label='Email'
                        withAsterisk
                        {...registerForm.getInputProps('email')}
                      />
                      <PasswordInput
                        placeholder='Password'
                        label='Password'
                        withAsterisk
                        {...registerForm.getInputProps('password')}
                      />
                      <Button type='submit' mt={10} fullWidth>
                        Register Account
                      </Button>
                      <Text
                        onClick={() => setLogin(true)}
                        sx={{ cursor: 'pointer' }}
                        size='sm'
                        align='center'
                        mt='sm'
                        color='dimmed'
                      >
                        Already have an account? Sign in instead
                      </Text>
                    </Box>
                  </Box>
                )}
              </>
            )}
          </Box>
          <Footer absolute />
        </Container>
      </Box>
    </Box>
  );
};

export default SignInPage;
