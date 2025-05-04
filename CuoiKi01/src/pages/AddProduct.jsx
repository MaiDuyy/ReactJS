import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../features/products/productSlice";
import { useDispatch } from "react-redux";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price: parseFloat(price), description };

    try {
      // Dispatch thunk, unwrap để ném error nếu có
      await dispatch(addProduct(newProduct));
      // Điều hướng về trang chủ khi thêm thành công
      navigate("/");
    } catch (error) {
      console.error("Failed to add product:", error);
      // Có thể hiện thông báo lỗi ra UI ở đây nếu muốn
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Thêm sản phẩm mới</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Giá sản phẩm"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          placeholder="Mô tả sản phẩm"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Thêm mới
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
