import { FormEvent, useState } from 'react';
import { Input } from '../../input';
import { ButtonIcon, AngleRadius } from '../../button';
import '../styles/_search.module.scss';

function Search() {
  const [title, setTitle] = useState('');

  const handleFilter = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="search">
      <div className="interaction">
        <Input
          imageUrl="/dark/search.icon.svg"
          placeholder="Painting title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ButtonIcon
          imageUrl="/dark/filter.icon.svg"
          radius={AngleRadius.rounded}
          onClick={handleFilter}
        />
      </div>
    </div>
  );
}

export default Search;
