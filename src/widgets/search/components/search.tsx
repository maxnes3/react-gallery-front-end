import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../../input';
import { ButtonIcon, AngleRadius, SizeParams } from '../../button';
import '../styles/_search.module.scss';

function Search() {
  const iconSize: SizeParams = { width: 16, height: 14 };
  const [title, setTitle] = useState('');

  const handleFilter = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="search">
      <div className="interaction">
        <Input
          imageUrl="/search.icon.svg"
          placeholder="Painting title"
          value={title}
          onChange={handleChange}
        />
        <ButtonIcon
          imageUrl="/filter.icon.svg"
          radius={AngleRadius.rounded}
          onClick={handleFilter}
          backgroundSize={36}
          iconSize={iconSize}
        />
      </div>
    </div>
  );
}

export default Search;
