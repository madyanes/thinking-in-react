import PRODUCTS from '../db/products';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </div>
  );
}

export default FilterableProductTable;
