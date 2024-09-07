import { Gallery } from '../widgets/gallery';
import { Header } from '../widgets/header';
import { Search } from '../widgets/search';
import './styles/app.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <Gallery />
    </div>
  );
}

export default App;
