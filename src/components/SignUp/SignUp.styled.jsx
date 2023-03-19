import { Button, TextField, Box } from '@mui/material';

import { styled } from '@mui/material/styles';

const StyledInput = styled(TextField)({
  width: '100%',
  height: '50px',

  '& label': {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
  },

  '& label.Mui-focused': {
    color: '#fff',
    fontSize: 16,
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.6)',
    },

    '&:hover fieldset': {
      borderColor: '#fff',
    },

    '&.Mui-focused fieldset': {
      borderColor: 'yellow',
    },
  },

  '& .MuiInputBase-input': {
    padding: '10px 12px',
    fontSize: 16,
    color: '#fff',
  },
});

const StyledButton = styled(Button)({
  width: '100%',

  borderRadius: '30px',
  fontSize: 16,
  textTransform: 'uppercase',
  boxShadow: '0 0 20px rgba(255,255,255,0.5)',
  transition: '0.5s',
  backgroundSize: '200% auto',

  backgroundImage:
    'linear-gradient(to right, #000000 0%, #53346D  51%, #000000  100%)',

  '&:hover': {
    backgroundPosition: 'right center',
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
//

const Form = styled(Box)`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Container = styled(Box)`
  display: flex;
  justify-content: center;
`;
export { StyledButton, StyledInput, Form, Container };
