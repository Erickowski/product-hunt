import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";

import { FirebaseContext } from "../../firebase";

import Error404 from "../../components/layouts/404";
import Layout from "../../components/layouts/Layout";

const Producto = () => {
  // State del componente
  const [producto, guardarProducto] = useState({});
  const [error, guardarError] = useState(false);

  // Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (id) {
      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection("productos").doc(id);
        const producto = await productoQuery.get();
        if (producto.exists) {
          guardarProducto(producto.data());
        } else {
          guardarError(true);
        }
      };
      obtenerProducto();
    }
  }, [id]);

  return <Layout>{error ? <Error404 /> : <h1>Desde id js</h1>}</Layout>;
};

export default Producto;
