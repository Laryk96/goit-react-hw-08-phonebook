import { useDispatch, useSelector } from 'react-redux';
import { toFilter } from 'redux/phonebook/filterSlice';
import { selectFilter } from 'redux/phonebook/selectors';
import { Input, Label } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handelFilterChange = e => {
    dispatch(toFilter(e.target.value));
  };

  return (
    <Label>
      <span>Find contacts by name or phone number</span>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handelFilterChange}
      />
    </Label>
  );
};

export default Filter;
