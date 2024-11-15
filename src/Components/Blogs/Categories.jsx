import {useState,useEffect}from 'react';
import  axios, { all }  from "axios";


const Categories = ({allBlog, setBlogs}) => {
 const [categories, setCategories] = useState([]);
 useEffect(() => {
  axios.get('https://blog.freetold.com/wp-json/custom/v1/get-categories').then((response) => {
    setCategories(response.data);
  })
  .catch((error) => {
    console.error("There was an error fetching the categories!", error);
  });
 }, []);


  return (
    <div className="categories">
      <h3>By category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}
          onClick={() => {
            const filteredBlogs = allBlog.filter(blog => blog.category.some(cat => cat.name === category.name));
            setBlogs(filteredBlogs);
          }}
          >
            <img src={category.image} alt={category.name} />
          {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;