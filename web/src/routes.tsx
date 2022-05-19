import { Route, BrowserRouter, Routes } from 'react-router-dom';
import usePersistedState from './utils/usePersistedState';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import Home from './pages/Home';
import Create from './pages/Create';
import Detail from './pages/Detail';

const Router: React.FC = () => {
  const [theme, setTheme] = usePersistedState('@theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home toggleTheme={toggleTheme} />} />
          <Route path='/create' element={<Create />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
