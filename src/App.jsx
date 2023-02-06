import { Header } from './components/header/Header';
import { AppRouter } from './pages/AppRouter';
import { Providers } from './context/Providers';

function App() {
  return (
    <Providers>
      <Header />
      <AppRouter />
    </Providers>
  );
}

export default App;
