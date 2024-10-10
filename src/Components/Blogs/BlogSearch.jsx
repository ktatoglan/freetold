import React, { useEffect, useState } from "react";
const BlogSearch = ({ allBlog, setBlogs }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (Array.isArray(allBlog)) {
      const filteredBlogs = allBlog.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );
      setBlogs(filteredBlogs);
    }
  }, [search, allBlog]);

  return (
    <div className="blog-search">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default BlogSearch;
