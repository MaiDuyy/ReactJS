import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../features/products/productSlice";
import { Link } from "react-router-dom";




function Home() {
  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((product) => (
    
    <>
      <ProductCard key={product.id} product={product} />
       
    </>
      ))}

        <Link to={'/add'} className="px-4 py-2 rounded border flex text-center items-center justify-center  w-full h-full font-bold hover:bg-black  hover:text-white duration-300">
          Add
        </Link>
    
    </div>
  );
}

export default Home;
