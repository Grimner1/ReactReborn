import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: false,
      text: "",
      products: "",
    };
  }

  handleChange = (event) => {
    const text = event.target.value;

    if (event.target.type === "checkbox") {
      this.setState({
        stock: event.target.checked,
      });
    } else {
      this.setState({
        text: text.toLowerCase(),
      });
    }

    this.setState({
      products: this.filterText(text),
    });
  };

  filterStock = (checked, products) =>
    this.state.stock
      ? products.filter((el) => el.stocked === checked)
      : products;

  filterText = (text) =>
    this.props.products.filter((el) => el.name.toLowerCase().includes(text));

  render() {
    const products = this.state.products
      ? this.state.products
      : this.props.products;

    const prod = this.filterStock(this.state.stock, products);
    console.log(prod);

    return (
      <div>
        <SearchBar handleChange={this.handleChange} />

        <ProductTable products={prod} />
      </div>
    );
  }
}

export default FilterableProductTable;
