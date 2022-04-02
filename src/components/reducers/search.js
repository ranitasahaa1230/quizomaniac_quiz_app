const getSearchedProducts = (productListing, searchQuery) => {
    return productListing.filter((prod) =>
      prod.name.toLowerCase().includes(searchQuery)
    );
  };
  export { getSearchedProducts };