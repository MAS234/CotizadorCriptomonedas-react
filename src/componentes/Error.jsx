import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
background-color: #ff3025;
border-radius: 10px;
color: white;
padding: 15px;
font-size: 22px;
text-transform: uppercase;
font-family: "lato", sans-serif;
font-weight: 700;
text-align: center;
`

function Error({children}) {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
