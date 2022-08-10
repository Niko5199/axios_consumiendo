import React, { useState } from "react";

const PostwithAxios = () => {
  const [loading, setLoading] = useState(false);
  async function createPost(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.currentTarget;
      const newPost = {
        title: form.inputTitle.value,
        body: form.textAreaContent.value,
        id: 1,
      };

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(newPost),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      console.log(await response.json());
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={createPost}>
      <div>
        <label htmlFor="inputTitle">Titulo:</label>
        <input type="text" name="inputTitle" id="inputTitle" />
        <br />
        <label htmlFor="textAreaContent">Contenido:</label>
        <textarea
          name="textAreaContent"
          id="textAreaContent"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <button type="submit">Crear</button>
      </div>
    </form>
  );
};

export default PostwithAxios;
