import { Link } from "react-router-dom";
import {  deleteProduct } from "../features/products/productSlice.js";
import { useDispatch } from "react-redux";
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-gray-500 mt-2">{product.description}...</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-0.5"
      >
        Chi tiết
      </Link>
      <Link
        to={`/edit/${product.id}`}
        className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
       Sửa
      </Link>

      <button
        onClick={() => handleDeleteProduct(product.id)}
        className="mt-4 inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Xóa
      </button>

    </div>
  );
}

export default ProductCard;
