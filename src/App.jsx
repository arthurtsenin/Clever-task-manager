import { Header } from './components/containers/header/Header';
import { AppRouter } from './routes/AppRouter';
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
