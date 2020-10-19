import Layout from "../components/layouts/Layout";

export default function CrearCuenta() {
  return (
    <Layout>
      <h1>Crear Cuenta</h1>
      <form>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            name="nombre"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Tu email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Tu password"
            name="password"
          />
        </div>
        <input type="submit" value="Crear cuenta" />
      </form>
    </Layout>
  );
}
