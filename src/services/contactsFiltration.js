const contactsFiltration = (contacts = [], filter = '') => {
  const normalizedFilter = filter.toLowerCase();

  return contacts
    .filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    )
    .sort((a, b) => Number(a.favorite) - Number(b.favorite));
};

export default contactsFiltration;
