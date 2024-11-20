import {useState,useEffect}from 'react';
import  axios  from "axios";

const Tags = ({allBlog, setBlogs}) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
   axios.get('https://blog.freetold.com/wp-json/custom/v1/get-tags').then((response) => {
     setTags(response.data);
   })
   .catch((error) => {
     console.error("There was an error fetching the tags!", error);
   });
  }, []);

  return (
    <div className="tags">
      <h3>Popular tags</h3>
      <div className="tags-container">
        {tags.map((tag) => (
          <span key={tag.id} className="tag"
            onClick={(event) => {
              if(window.location.pathname !== '/blog') {
                window.location.href = `/blog?tag=${tag.name}`;
              }
              if(event.target.classList.contains('active-blog')) {
                event.target.classList.remove('active-blog');
                setBlogs(allBlog);
                return;
              }
              const filteredBlogs = allBlog.filter(blog => blog.tag.some(t => t.name === tag.name));
              setBlogs(filteredBlogs);
              //add active-blog class to the selected tag
              const tags = document.querySelectorAll('.tag');
              tags.forEach(tag => tag.classList.remove('active-blog'));
              event.target.classList.add('active-blog');
            }}
          >#{tag.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Tags;