import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Button, WrapperIcon } from './ItemBar.styled';

const ItemBar = ({ id, isOpenModal }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <WrapperIcon>
      <Button hover="yellow" onClick={() => isOpenModal(true)}>
        <BorderColorIcon />
      </Button>
      <Button
        hover="red"
        aria-label="Delete"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        <PersonRemoveIcon />
      </Button>
    </WrapperIcon>
  );
};

export default ItemBar;
