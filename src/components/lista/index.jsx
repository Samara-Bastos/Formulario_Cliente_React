import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import setupAxios from "../../axios/config";
import { Card} from '@chakra-ui/react';
import './style.css';
import { toast } from 'react-toastify';

import User from '../../icons/user.svg';
import List  from '../../icons/list.svg';
import Date from '../../icons/date.svg';

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
                toast.success('Cliente excluido com sucesso!');
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
            <div className="grid-cliente"> 
                {
                    clientes.map((cliente) => (
                        <Card className="card-cliente" key={cliente.id}>
                            <span> <img src={User} alt="imagem"/> {cliente.nome}</span>
                            <span> <img src={Date} alt="imagem"/> {cliente.nascimento}</span>
                            <span> <img src={List} alt="imagem"/> {cliente.descricao}</span>
                            <div className="div-button"> 
                                <Link to={`/${cliente.id}`}>
                                    <Button className='Button' variant='outline'>
                                        Editar
                                    </Button>
                                </Link>
                                <Button className='Button' variant='outline' onClick={() => deleteCliente(cliente.id)}>
                                    Deletar
                                </Button>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Lista;