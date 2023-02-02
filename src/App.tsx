import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './common/styles/global.css';
import Routes from './store';

const App = () => {
  return (
    <>
      <RouterProvider router={Routes} />
      <GlobalStyles />
    </>
  );
};

export default App;
