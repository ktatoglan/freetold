import {useState,useEffect}from 'react';
import  axios, { all }  from "axios";
import { useParams } from 'react-router-dom';


const Categories = ({allBlog, setBlogs}) => {
 const [categories, setCategories] = useState([]);
 const { category } = useParams();
 useEffect(() => {
  axios.get('https://blog.freetold.com/wp-json/custom/v1/get-categories').then((response) => {
    setCategories(response.data);
    //there is a bug right now not getting the category from the url
    //console.log(category);
    if(category) {
      const filteredBlogs = allBlog.filter(blog => blog.category.some(cat => cat.name === category));
      setBlogs(filteredBlogs);
    }
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
          className="category"
          onClick={(event) => {
            if(window.location.pathname !== '/blog') {
                window.location.href = `/blog?category=${category.name}`;
            }
            if(event.target.classList.contains('active-category')) {
              event.target.classList.remove('active-category');
              setBlogs(allBlog);
              return;
            }
            const filteredBlogs = allBlog.filter(blog => blog.category.some(cat => cat.name === category.name));
            setBlogs(filteredBlogs);
            //add active-category class to the selected category
            const categories = document.querySelectorAll('.category');
            categories.forEach(category => category.classList.remove('active-category'));
            event.target.classList.add('active-category');
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