import { CardBody } from '@chakra-ui/react'
import Formulario from '../components/form';
import setupAxios from "../axios/config";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Atualizar() {
    const { id } = useParams();
    const [clienteData, setClienteData] = useState(null);

    useEffect(() => {
        setupAxios.get(`/cliente/${id}`)
            .then(response => {
                setClienteData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    const onSubmit = (e, FormData) => {

        e.preventDefault();

        setupAxios.put(`/cliente/update/${id}`, FormData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <CardBody className='Card-body'>
            <Formulario onSubmit={onSubmit} textButton="Atualizar" formDataId={clienteData} />
        </CardBody>
    )
}

export default Atualizar;