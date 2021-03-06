import { useState } from "react";
import { css } from "@emotion/core";
import Router from "next/router";

import Layout from "../components/layouts/Layout";
import {
  Campo,
  Formulario,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";

import firebase from "../firebase";

import useValidation from "../hooks/useValidation";
import validarIniciarSesion from "../validacion/validarIniciarSesion";

const STATE_INICIAL = {
  email: "",
  password: "",
};

export default function Login() {
  const [error, setError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al crear el usuario", error.message);
      setError(error.message);
    }
  }

  return (
    <Layout>
      <h1
        css={css`
          text-align: center;
          margin-top: 5rem;
        `}
      >
        Iniciar Sesión
      </h1>
      <Formulario onSubmit={handleSubmit} noValidate>
        <Campo>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Tu email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Campo>
        {errores.email && <Error>{errores.email}</Error>}
        <Campo>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Tu password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Campo>
        {errores.password && <Error>{errores.password}</Error>}
        {error && <Error>{error}</Error>}
        <InputSubmit type="submit" value="Iniciar Sesión" />
      </Formulario>
    </Layout>
  );
}
