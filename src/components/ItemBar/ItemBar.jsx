import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { CircularProgress, Tooltip } from '@mui/material';
import { Stack } from '@mui/system';

import { useDeleteContactMutation } from 'redux/phonebook/contactsSlice';
import { Button, WrapperIcon } from './ItemBar.styled';

const ItemBar = ({ id, isOpenModal }) => {
  const [deleteContact, { isUninitialized }] = useDeleteContactMutation();

  return (
    <WrapperIcon>
      <Tooltip title="Edit">
        <Button hover="yellow" onClick={() => isOpenModal(true)}>
          <BorderColorIcon sx={{ fontSize: 20 }} />
        </Button>
      </Tooltip>
      {isUninitialized ? (
        <Tooltip title="Remove">
          <Button
            hover="red"
            aria-label="Delete"
            disabled={!isUninitialized}
            onClick={() => deleteContact(id)}
          >
            <PersonRemoveIcon sx={{ fontSize: 20 }} />
          </Button>
        </Tooltip>
      ) : (
        <Stack
          sx={{
            color: 'grey.500',
            width: 40,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="secondary" size={22} />
        </Stack>
      )}
    </WrapperIcon>
  );
};

export default ItemBar;
