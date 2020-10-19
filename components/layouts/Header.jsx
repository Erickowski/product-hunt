import React from "react";
import Buscar from "../ui/Buscar";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>
          <Buscar />
          {/* Nav aquí */}
        </div>
        <div>{/* Menú de administración */}</div>
      </div>
    </header>
  );
};

export default Header;
