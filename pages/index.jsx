import styled from "@emotion/styled";

import Layout from "../components/layouts/Layout";

const Heading = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <Layout>
      <Heading>Inicio</Heading>
    </Layout>
  );
}

// validar email

// !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

// // validar URL

// !/^(ftp|http|https):\/\/[^ "]+$/
