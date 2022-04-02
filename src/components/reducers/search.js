const getSearchedProducts = (productListing, searchQuery) => {
    return productListing.filter((prod) =>
      prod.categoryName.toLowerCase().includes(searchQuery)
    );
  };
  export { getSearchedProducts };