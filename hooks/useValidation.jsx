import { useState, useEffect } from "react";

const useValidation = (initialState, validate, fn) => {
  const [valores, setValores] = useState(initialState);
  const [errores, setErrores] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;
      if (noErrores) {
        fn(); // Fn es la función que se ejecuta en el componente
      }
      setSubmitForm(false);
    }
  }, []);

  // Función que se ejecuta conforme el usuario escribe algo
  const handleChange = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  // Función que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validate(valores);
    setErrores(erroresValidacion);
    setSubmitForm(true);
  };

  return {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
  };
};

export default useValidation;
