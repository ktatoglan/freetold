import {useState,useEffect}from 'react';
import  axios  from "axios";

const Tags = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
   axios.get('https://blog.freetold.com/wp-json/custom/v1/get-tags').then((response) => {
     console.log(response.data);
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
          <span key={tag.id} className="tag">#{tag.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Tags;