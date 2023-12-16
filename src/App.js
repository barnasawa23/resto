import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, MainMenu } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/main_menu',
    element: <MainMenu />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
