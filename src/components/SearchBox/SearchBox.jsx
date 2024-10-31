import { useSelector, useDispatch } from 'react-redux';
import s from '../SearchBox/SearchBox.module.css'
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

/* eslint-disable react/prop-types */

const SearchBox = () => {
    
    const filter = useSelector(selectNameFilter)
    const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
    <label className={s.label}>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Enter name"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={s.field}
      />
    </label>
    </div>
  );
}

export default SearchBox