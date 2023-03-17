const contactsFiltration = (contacts = [], filter = '') => {
  const normalizedFilter = filter.toLowerCase();
  console.log(contacts);
  return contacts
    .filter(
      ({ name, phone }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        phone.includes(normalizedFilter)
    )
    .sort((a, b) => Number(a.favorite) - Number(b.favorite));
};

export default contactsFiltration;