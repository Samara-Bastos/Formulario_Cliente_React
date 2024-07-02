import { Container, FormControl,FormLabel, Input, Select,  
    Radio, RadioGroup, InputGroup, InputLeftAddon, Switch, Textarea, Button } from '@chakra-ui/react';
import './style.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Formulario({onSubmit, textButton, formDataId}){

    const [FormData, setFormData] = useState({
        nome: '',
        nascimento: '',
        email: '',
        telefone: '',
        escolaridade: '',
        estCivil: '',
        filhos: false,
        descricao: ''
    });

    useEffect(() => {
        if (formDataId) {
            setFormData(formDataId);
        }
    }, [formDataId]);

    const onChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...FormData, [name]: value});
    }

    const onChangeRadio = (value) =>{
        setFormData({...FormData, estCivil: value});
    }

    const onChangeSwitch  = (e) =>{
        setFormData({...FormData, filhos: e.target.checked});
    }
  
    return(
        <Container maxW='90%'>
            <FormControl className='FormControl'> 
                <FormLabel className='Label' htmlFor='nome'>Nome completo</FormLabel>
                <Input variant='flushed' placeholder='Digite seu nome completo' type='text' value={FormData.nome} name='nome' id='nome' onChange={onChange} required />
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label' htmlFor='nascimento'>Data de nascimento</FormLabel>
                <Input variant='flushed' type='datetime-local' name='nascimento' value={FormData.nascimento} id='nascimento' onChange={onChange} required />
            </FormControl>
            
            <FormControl className='FormControl'>
                <FormLabel className='Label' htmlFor='email'>Email</FormLabel>
                <Input variant='flushed' placeholder='Digite seu email' type='email' name='email' value={FormData.email} id='email' onChange={onChange} required />
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label' htmlFor='telefone'>Telefone</FormLabel>
                <InputGroup>
                    <InputLeftAddon>+55</InputLeftAddon>
                    <Input variant='flushed' placeholder=' Exemplo (32)98888-8888' type='tel' value={FormData.telefone} name='telefone' id='telefone' onChange={onChange} required />
                </InputGroup>
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label' htmlFor='escolaridade'>Escolaridade</FormLabel>
                <Select variant='flushed' placeholder='Selecione' name='escolaridade' value={FormData.escolaridade} id='escolaridade' onChange={onChange} required >
                    <option>Ensino fundamental</option>
                    <option>Ensino médio</option>
                    <option>Ensino superior</option>
                </Select>
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label' htmlFor='estCivil'>Estado civil</FormLabel>
                <RadioGroup name='estCivil' id='estCivil' value={FormData.estCivil} onChange={onChangeRadio} required >
                    <Radio value='solteiro' mr={4}>Solteiro(a) </Radio>
                    <Radio value='casado' mr={4}> Casado(a) </Radio>
                    <Radio value='divorciadoo' mr={4}> Divorciado(a) </Radio>
                    <Radio value='viuvo' mr={4}> Viúvo(a) </Radio>
                    <Radio value='outro' mr={4}> Outro </Radio>
                </RadioGroup>
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label' htmlFor='filhos'>Possui Filhos</FormLabel>
                <Switch name='filhos' id='filhos' isChecked={FormData.filhos} onChange={onChangeSwitch} required />
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label' htmlFor='descricao'>Faça uma breve descrição do pedido</FormLabel>
                <Textarea placeholder='Escreva aqui' size='sm' value={FormData.descricao} name='descricao' id='descricao' onChange={onChange} required />
            </FormControl>

            <FormControl className='FormControl Div-Button'>
                <Link to={`/view`}>
                    <Button className='Button' variant='outline'>
                        Ver clientes
                    </Button>
                </Link>
                <Button className='Button' variant='outline' type='submit' onClick={(e) => {onSubmit(e,FormData)}}>
                    {textButton}
                </Button>
            </FormControl>
        </Container>
    )
}

export default Formulario;
