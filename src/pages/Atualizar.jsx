import { CardBody } from '@chakra-ui/react'
import Formulario from '../components/form';
import setupAxios from "../axios/config";
import { useParams, useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function Atualizar() {
    const { id } = useParams();
    const [clienteData, setClienteData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setupAxios.get(`/cliente/${id}`)
            .then(response => {
                setClienteData(response.data);
            })
            .catch(error => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            });
    }, [id]);

    const onSubmit = (e, FormData) => {

        e.preventDefault();

        setupAxios.put(`/cliente/update/${id}`, FormData)
            .then((response) => {
                toast.success('Cliente atualizado com sucesso!');
                navigate('/');
            })
            .catch((error) => {
                toast.error('Ocorreu algum problema, tente novamente por favor!');
            });
    }


    return (
        <CardBody className='Card-body'>
            <Formulario onSubmit={onSubmit} textButton="Atualizar" formDataId={clienteData} />
        </CardBody>
    )
}

export default Atualizar;