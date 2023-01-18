import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMoneda from '../hooks/useSelectMoneda'
import {monedas} from "../data/informacion"

const Boton = styled.input`
background-color: #9495FF;
border: none;

width: 100%;
padding: 10px;
color: white;
text-transform: uppercase;
font-weight: 700;
font-size: 20px;
border-radius: 5px;
transition: background-color .3s ease;
margin-top: 30px;

&&:hover{
    background-color: #7A7DFE;
    cursor: pointer;
}
`

function Formulario({setMonedas}) {

    const[criptos, setCriptos] = useState([]); 
    const[error, setError] = useState(false); 

    const [state,SelectMonedas] = useSelectMoneda("Elige tu moneda", monedas);
    const [criptoMoneda,SelectCriptoMoneda] = useSelectMoneda("Elige tu criptomoneda", criptos);

    useEffect(() =>{

      const consultarApi = async () => {
        const URL = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

        const respuesta = await  fetch(URL);
        const resultado = await respuesta.json();

        const arrayCriptos = resultado.Data.map(cripto => {

          const objeto = {
            id: cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName
          }

          return objeto
        })

      setCriptos(arrayCriptos);

      }

      consultarApi();
    }, [])

    const handleSubmit = e => {
      e.preventDefault();

      if([monedas, criptoMoneda].includes("")){
        setError(true);

        return
      }

      setError(false)
      setMonedas({
        state,
        criptoMoneda
      })


    }

  return (

    <>

    {error && <Error>Todos los campos son obligatorios</Error>}
    
    <form
    onSubmit={handleSubmit}
    >

        <SelectMonedas/>
        <SelectCriptoMoneda/>

        <Boton 
        type="submit" 
        value="cotizar" 
        />

    </form>

    </>


  )
}

export default Formulario
