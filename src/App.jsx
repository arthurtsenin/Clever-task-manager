import { Header } from '@Containers/header/Header';
import { AppRouter } from '@Routes/AppRouter';
import { Providers } from '@Context/Providers';

function App() {
  return (
    <Providers>
      <Header />
      <AppRouter />
    </Providers>
  );
}

export default App;
