import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Lista(){
    return(
        <div>
            <Link to={`/`}>
                <Button className='Button' variant='outline'>
                    Novo cliente
                </Button>
            </Link>
        </div>
    )
}

export default Lista;