import { CardBody} from '@chakra-ui/react'
import Formulario from '../components/form';
import './style.css';

function Cadastro(){
    return(
        <CardBody className='Card-body'>
            <Formulario />
        </CardBody>
    )
}

export default Cadastro;