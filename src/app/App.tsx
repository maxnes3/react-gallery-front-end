import { Gallery } from '../widgets/gallery';
import { Header } from '../widgets/header';
import { Search } from '../widgets/search';
import { Pagination } from '../widgets/pagination';
import { Filter } from '../widgets/filter';
import './styles/app.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <Gallery />
      <Pagination />
      <Filter />
    </div>
  );
}

export default App;
