import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
  cursor: pointer;
`;

const Header = () => {
  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
      `}
    >
      <ContenedorHeader>
        <div>
          <Link href="/">
            <Logo>P</Logo>
          </Link>
          <Buscar />
          <Navegacion />
        </div>
        <div>
          <p>Hola Erick</p>
          <button type="button">Cerrar Sesión</button>
          <Link href="/">Login</Link>
          <Link href="/">Crear cuenta</Link>
        </div>
      </ContenedorHeader>
    </header>
  );
};

export default Header;
