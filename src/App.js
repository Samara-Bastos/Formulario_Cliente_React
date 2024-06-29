import './App.css';
import { Container, Card, CardHeader, CardFooter } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <Container className="App">
        <Card className="Card">
          <CardHeader />
            <Outlet />
          <CardFooter />
        </Card>
      </Container>
  );
}

export default App;
