import { useState,useEffect } from "react"
import styled from "@emotion/styled"
import Formulario from "./componentes/Formulario"
import Resultado from "./componentes/Resultado"
import Spinner from "./componentes/Spinner"
import imagenCriptos from "./img/imagen-criptos.png"


const Imagen = styled.img`
max-width:400px;
width:80%;
margin: 100px auto 0 auto;
display:block;
`

const Contenedor = styled.div`
  max-width:900px;
  margin: 0 auto;
  width:90%;

  @media(min-width: 992px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }
`

const Heading = styled.h1`
  font-family: "lato",sans-serif;
  color:#fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: " ";
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto auto;
  }

`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0){

      const cotizarCripto = async () =>{

        setCargando(true);
        setResultado({});

        const {state, criptoMoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${state}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json();
        
        setResultado(resultado.DISPLAY[criptoMoneda][state]);

        setCargando(false);
      }

      cotizarCripto();

        }
  }, [monedas])

  return (

    <div className="App">

      <Contenedor>

      <Imagen src={imagenCriptos} alt="imagen-cripto" />

      <div>

        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
        setMonedas={setMonedas}
        ></Formulario>

      {cargando && <Spinner/>}
      {resultado.PRICE && <Resultado resultado={resultado} />}

      </div>


      </Contenedor>


    </div>
  )
}

export default App
