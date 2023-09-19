import styled from '@emotion/styled'

const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 1rem;
`;

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`;

const Imagen = styled.img`
    display: block;
    width: 130px;                                                       
`;

const Resultado = ({resultado}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

    return ( 
        <>
            <Contenedor>
                <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt="Image Cripto" />
                <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                    <Texto>Precio más alto del dia: <span>{HIGHDAY}</span></Texto>
                    <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                    <Texto>Cambio en las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                    <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
                </div>
            </Contenedor>
        </>
     );
}
 
export default Resultado;