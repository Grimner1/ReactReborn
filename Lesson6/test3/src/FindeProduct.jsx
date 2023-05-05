const FineProduct = (nameProduct, array) => {
  const index = array.findIndex((obj, index) => {
    return obj.product == nameProduct;
  });

  const text = `${array[index].product} - Price is ${array[index].price}$. ${
    array[index].available
      ? `Avaliable in ${array[index].colors.length} colors.`
      : `Not available`
  }`;
  console.log(text);

  return text;
};

export default FineProduct;
