const contactsFiltration = (contacts = [], filter = '') => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(normalizedFilter) ||
      phone.includes(normalizedFilter)
  );
};

export default contactsFiltration;
