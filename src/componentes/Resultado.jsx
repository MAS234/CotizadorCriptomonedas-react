import styled from "@emotion/styled"

const Contenedor = styled.div`
color: #FFF;
font-family: "lato",sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;

`

const Imagen = styled.img`
display: block;
width: 120px;


`

const Text = styled.p`
font-size: 16px;
span{
    font-weight: 700;
    
}
`

const Precio = styled.p`
font-size: 24px;
span{
    font-weight: 700;
    
}
`

function Resultado({resultado}) {
    
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL} = resultado

  return (
    <Contenedor>

        <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="Criptomoneda" 
        />
        
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Text>El precio mas alto del dia es de : <span>{HIGHDAY}</span></Text>
            <Text>El precio mas bajo del dia es de : <span>{LOWDAY}</span></Text>
            <Text>Variacion de las ultimas 24 horas : <span>{CHANGEPCT24HOUR}</span></Text>
        </div>


    </Contenedor>
  )
}

export default Resultado
