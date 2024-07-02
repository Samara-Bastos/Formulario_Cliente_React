import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import setupAxios from "../../axios/config";
import { Card} from '@chakra-ui/react'

function Lista(){
    const [clientes, setClientes] = useState([]);

    const getClientes = async() => {
        
        await setupAxios.get("/cliente")
        .then((response) => {
            const data = response.data;
            setClientes(data);
        })
        .catch((error) => {
            console.log(error);
        });

    };

    const deleteCliente = async (id) => {
        await setupAxios.delete(`/cliente/delete/${id}`)
            .then((response) => {
                setClientes(clientes.filter(cliente => cliente.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() =>{
        getClientes();
    }, [])

    return(
        <div>
            <Link to={`/`}>
                <Button className='Button' variant='outline'>
                    Novo cliente
                </Button>
            </Link>
            <div>
                {
                    clientes.map((cliente) => (
                        <Card className="card-cliente" key={cliente.id}>
                            <span>{cliente.nome}</span>
                            <span>{cliente.nascimento}</span>
                            <span>{cliente.descricao}</span>
                            <Link to={`/${cliente.id}`}>
                                <Button className='Button' variant='outline'>
                                    Editar
                                </Button>
                            </Link>
                            <Button className='Button' variant='outline' onClick={() => deleteCliente(cliente.id)}>
                                Deletar
                            </Button>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Lista;