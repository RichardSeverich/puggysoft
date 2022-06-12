import NavBar from './../../components/navbar/NavBar'
import ProductTableFilter from './../../components/sales/ProductTableFilter';

function ProductTableFilterPage() {
  return (
    <div className="product-table-page">
      <NavBar></NavBar>
      <ProductTableFilter></ProductTableFilter>
    </div>
  );
}

export default ProductTableFilterPage;
