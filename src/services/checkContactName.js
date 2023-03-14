import { Report } from 'notiflix';

const isNewName = (contacts, contactName) => {
  if (contacts.some(({ name }) => name === contactName)) {
    Report.warning(`${contactName} is already in contacts`);
    return false;
  }
  return true;
};

export default isNewName;
