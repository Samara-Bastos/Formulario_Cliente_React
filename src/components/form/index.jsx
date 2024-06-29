import { Container, FormControl,FormLabel, Input, Select,  
    Radio, RadioGroup, InputGroup, InputLeftAddon, Switch, Textarea, Button } from '@chakra-ui/react';
import './style.css';
import { useState } from 'react';

function Formulario(){
    const [FormData, setFormData] = useState({
        nome: '',
        nascimento: '',
        email: '',
        telefone: '',
        escolaridade: '',
        estCivil: '',
        filhos: '',
        descricao: ''

    });

    return(
        <Container maxW='90%'>
            <FormControl className='FormControl'>
                <FormLabel className='Label'>Nome completo</FormLabel>
                <Input variant='flushed' placeholder='Digite seu nome completo' type='text' required/>
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label'>Data de nascimento</FormLabel>
                <Input variant='flushed' type='datetime-local' required/>
            </FormControl>
            
            <FormControl className='FormControl'>
                <FormLabel className='Label'>Email</FormLabel>
                <Input variant='flushed' placeholder='Digite seu email' type='email' required/>
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label'>Telefone</FormLabel>
                <InputGroup>
                    <InputLeftAddon>+55</InputLeftAddon>
                    <Input variant='flushed' placeholder=' Exemplo (32)98888-8888' type='tel' required/>
                </InputGroup>
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label'>Escolaridade</FormLabel>
                <Select variant='flushed' placeholder='Selecione' required>
                    <option>Ensino fundamental</option>
                    <option>Ensino médio</option>
                    <option>Ensino superior</option>
                </Select>
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label'>Estado civil</FormLabel>
                <RadioGroup name="form-name" required>
                    <Radio value='solteiro' mr={4}>Solteiro(a) </Radio>
                    <Radio value='casado' mr={4}> Casado(a) </Radio>
                    <Radio value='divorciadoo' mr={4}> Divorciado(a) </Radio>
                    <Radio value='viuvo' mr={4}> Viúvo(a) </Radio>
                    <Radio value='outro' mr={4}> Outro </Radio>
                </RadioGroup>
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label'>Possui Filhos</FormLabel>
                <Switch id='email-alerts' required/>
            </FormControl>

            <FormControl className='FormControl'>
                <FormLabel className='Label'>Faça uma breve descrição sobre você </FormLabel>
                <Textarea placeholder='Escreva aqui' size='sm' required/>
            </FormControl>

            <FormControl className='FormControl Div-Button'>
                <Button className='Button' variant='outline' type='submit'>
                    Enviar
                </Button>
            </FormControl>
        </Container>
    )
}

export default Formulario;
