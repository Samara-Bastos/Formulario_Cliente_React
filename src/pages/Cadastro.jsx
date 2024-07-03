import { CardBody } from '@chakra-ui/react'
import Formulario from '../components/form';
import setupAxios from "../axios/config";
import { useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';


function Cadastro() {
    const navigate = useNavigate();

    const onSubmit = (e, FormData) => {
        e.preventDefault();
        
        setupAxios.post("/cliente/create", FormData)
            .then((response) => {
                toast.success('Cliente inserido com sucesso!');
                navigate('/view');
            })
            .catch((error) => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            });
    }


    return (
        <CardBody className='Card-body'>
            <Formulario onSubmit={onSubmit} textButton={"Enviar"} />
        </CardBody>
    )
}

export default Cadastro;