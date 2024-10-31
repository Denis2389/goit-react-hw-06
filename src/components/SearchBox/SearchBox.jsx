import s from '../SearchBox/SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <p>Find contacts by name</p>
        <input
          type="text"
          placeholder="Enter name"
          value={filter}
          onChange={handleChange}
          className={s.field}
        />
      </label>
    </div>
  );
}

export default SearchBox;
