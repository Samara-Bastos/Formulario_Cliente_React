import './App.css';
import { Container, Card, CardHeader, CardFooter } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <Container className="App">
        <ToastContainer />
        <Card className="Card">
          <CardHeader />
            <Outlet />
          <CardFooter />
        </Card>
      </Container>
  );
}

export default App;
