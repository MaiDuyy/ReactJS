import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById, updateProduct } from "../features/products/productSlice";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      // try {
        // const res = await fetch(`http://localhost:3000/products/${id}`);
        // const data = await res.json();
        dispatch(fetchProductById(id))
        .unwrap()
        .then(data => setProduct({
          name : data.name,
          price: data.price.toString(), 
          description: data.description 
        }))
        .catch((err) => {
          console.error("Failed to fetch product:", err);
          setError("Không tải được sản phẩm.");
        });
      // } catch (error) {
      //   console.error("Failed to fetch product:", error);
      // }
    };

    fetchProduct();
  }, [id ,dispatch]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
      // await fetch(`http://localhost:3000/products/${id}`, {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     ...product,
      //     price: parseFloat(product.price),
      //   }),
      // });
  //  await  dispatch( 
  //   updateProduct({ 
  //     id,
  //     updateProduct : {
  //     name: product.name,
  //     price: parseFloat(product.price),
  //     description: product.description,
  //     },
  //   })
  // ).unwrap();
     
    // } catch (error) {
    //   console.error("Failed to update product:", error);
    // }

    await dispatch(
      updateProduct({
        id,
        updatedProduct: {
          name: product.name,
          price: parseFloat(product.price),
          description: product.description,
        },
      })
    ).unwrap();
    navigate("/");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Chỉnh sửa sản phẩm</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={product.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Giá sản phẩm"
          value={product.price}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Mô tả sản phẩm"
          value={product.description}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
