import Bloglist from "./bloglist";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";


const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (blogs) {
      setFilteredBlogs(blogs);
    }
  }, [blogs]);


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {filteredBlogs && (
        <Bloglist blogs={filteredBlogs} title="All Blogs!"  />
      )}
      {filteredBlogs && (
        <Bloglist
          blogs={filteredBlogs.filter((blog) => blog.author === "kanishk baby")}
          title="Kanishk Baby's Blogs!"
          
        />
      )}
    </div>
  );
};

export default Home;
