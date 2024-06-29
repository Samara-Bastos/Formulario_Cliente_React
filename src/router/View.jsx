import { CardBody } from '@chakra-ui/react'
import Lista from '../components/lista';
import './style.css';

function View(){
    return(
        <CardBody className='Card-body'>
            <Lista />
        </CardBody>
    )
}

export default View;