import React, { useCallback, useRef, useState } from 'react';
import { FiMail, FiUser, FiPhone, FiMapPin, FiX } from 'react-icons/fi';
import parse from 'html-react-parser';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import InputMask from '../../components/Input/Mask';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Dialog from '../../components/Dialog';
import Success from '../../components/Success';

import {
  Container,
  Content,
  AnimationContainer,
  Background,
  AddressSection,
  DialogBody,
  DialogCloseButton,
  DialogFooter,
  DialogHeader,
} from './styles';

interface FormData {
  addressCity: string;
  addressComplement: string;
  addressDistrict: string;
  addressNumber: string;
  addressState: string;
  addressStreet: string;
  addressZip: string;
  email: string;
  name: string;
  phone: string;
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório'),
        phone: Yup.string()
          .required('Telefone obrigatório')
          .matches(
            /(\(([0-9]{2})\)) ([0-9]{5})-([0-9]{4})/,
            'Telefone Inválido',
          ),
        addressZip: Yup.string()
          .required('CEP obrigatório')
          .matches(/([0-9]{5})-([0-9]{3})/, 'CEP Inválido'),
        addressStreet: Yup.string().required('Logradouro obrigatório'),
        addressNumber: Yup.string().required('Número obrigatório'),
        addressComplement: Yup.string().required('Complemento obrigatório'),
        addressDistrict: Yup.string().required('Bairro obrigatório'),
        addressCity: Yup.string().required('Cidade obrigatória'),
        addressState: Yup.string().required('Estado obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setLoading(true);

      await api.post('/submit', {
        ...data,
        addressZip: data.addressZip.replace(/[^\d]/g, ''),
        phone: data.phone.replace(/[^\d]/g, ''),
      });

      setSuccess(true);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      } else if (err.response.data.status) {
        setErrorMessage(
          'Parece que nossos servidores estão instáveis,<br />tente novamente em alguns minutos.',
        );

        setDialog(true);
      } else {
        let errors = {};

        err.response.data.forEach((e: { field: string; error: string }) => {
          const { field, error } = e;
          errors = { ...errors, [field]: error };
        });

        formRef.current?.setErrors(errors);

        setErrorMessage(
          'Parece que algumas informações estão erradas,<br />corrija os seus dados e tente novamente.',
        );

        setDialog(true);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Loading show={loading} />

      <Dialog show={dialog}>
        <DialogHeader>
          <FiX size={42} /> <h1> Ocorreu um erro! </h1>
        </DialogHeader>
        <DialogBody>{parse(errorMessage)}</DialogBody>
        <DialogFooter>
          <DialogCloseButton
            onClick={() => {
              setDialog(false);
            }}
          >
            OK
          </DialogCloseButton>
        </DialogFooter>
      </Dialog>

      <Success show={success} />

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>GetAdesivos</h1>
            <h2>Adesivos de programação a um clique de você!</h2>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <InputMask
              mask="(99) 99999-9999"
              maskPlaceholder={null}
              name="phone"
              icon={FiPhone}
              placeholder="Telefone"
            />
            <InputMask
              mask="99999-999"
              maskPlaceholder={null}
              name="addressZip"
              icon={FiMapPin}
              placeholder="CEP"
            />
            <AddressSection>
              <Input name="addressStreet" placeholder="Logradouro" />
              <Input name="addressNumber" placeholder="Numero" />
              <Input name="addressComplement" placeholder="Complemento" />
              <Input name="addressDistrict" placeholder="Bairro" />
              <Input name="addressCity" placeholder="Cidade" />
              <Input name="addressState" placeholder="Estado" />
            </AddressSection>

            <Button type="submit">Pegar meus adesivos</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default Home;
