import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/products/productSlice";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedProduct, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading || !selectedProduct) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{selectedProduct.name}</h1>
      <p className="text-lg text-gray-700 mb-2">${selectedProduct.price}</p>
      <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Quay lại
      </button>
    </div>
  );
}

export default ProductDetail;
