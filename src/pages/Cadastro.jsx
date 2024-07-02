import { CardBody } from '@chakra-ui/react'
import Formulario from '../components/form';
import setupAxios from "../axios/config";


function Cadastro() {

    const onSubmit = (e, FormData) => {
        e.preventDefault();
        
        setupAxios.post("/cliente/create", FormData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <CardBody className='Card-body'>
            <Formulario onSubmit={onSubmit} textButton={"Enviar"} />
        </CardBody>
    )
}

export default Cadastro;