import axios from "axios";
import React, { useEffect, useState } from "react";

const GetwithAxios = () => {
  const [loading, setLoading] = useState("loading");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.status !== 200)
          throw new Error("Ocurrio un error en la api");

        console.log(response);
        setPosts([...response.data]);
        setLoading("success");
      } catch (error) {
        setLoading("error");
        setError(error.message);
        console.log(error);
      }
    }
    loadPosts();
  }, []);

  if (loading === "loading") return <h1>Cargando...</h1>;
  if (loading === "error") return <h1>Ha ocurrido un errror {error}</h1>;

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          {post.id} - {post.body}
        </article>
      ))}
    </div>
  );
};

export default GetwithAxios;
