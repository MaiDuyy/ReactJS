import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Axios

     // const fetchPosts = () => {
  //   setLoading(true);
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       setPosts(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // };


  //Fetch
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Danh sách bài viết</h2>
    <div className="flex justify-center mb-6">
      <button
        className="px-5 py-2.5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white font-medium rounded-lg hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
        onClick={fetchPosts}
      >
        Tải lại
      </button>
    </div>
    {loading ? (
      <p className="text-center text-gray-600">Loading...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((item) => (
          <div
            key={item.id}
            className="bg-white border shadow-md rounded-lg p-4"
          >
            <h1 className="text-xl font-bold text-gray-800">{item.id}</h1>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default PostList