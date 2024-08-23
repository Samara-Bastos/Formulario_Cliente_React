import { createBrowserRouter } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import View from '../pages/View';
import Atualizar from '../pages/Atualizar';
import App from '../App';

export const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <View />
        },
        {
          path: "/:id",
          element: <Atualizar />
        },
        {
          path: "/cadastrar",
          element: <Cadastro />
        }
      ]
    }
  ])

