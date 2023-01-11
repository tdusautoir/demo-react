import { NavLink, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import NameGenerator from './components/NameGenerator';

const LINK = {
  ROOT_PATH : '/',
  NAMES_PATH : '/names',
};

function App() {
  return <>
    <nav>
      <NavLink to={LINK.ROOT_PATH}>Compteur</NavLink>
      <NavLink to={LINK.NAMES_PATH}>Génerateur de noms</NavLink>
    </nav>
    <main>
      <Routes>
          <Route path={LINK.ROOT_PATH} element={<Counter />} />
          <Route path={LINK.NAMES_PATH} element={<NameGenerator />} />
      </Routes>
    </main>
  </>
}

export default App;