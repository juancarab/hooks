import React from "react";
// Creando nuestro propio Hook
function useCuenta(init, max) {
  const [cuenta, setCuenta] = React.useState(init);
  if (cuenta > max) {
    setCuenta(0);
  }
  return [cuenta, setCuenta];
}
// Usando el hook useState
function App() {
  const [cuenta, setCuenta] = useCuenta(0, 5);
  return (
    <button
      onClick={() => {
        setCuenta(cuenta + 1);
      }}
    >
      {" "}
      Sumar: {cuenta}
    </button>
  );
}

export default App;
