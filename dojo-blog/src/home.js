import {useState, useEffect} from 'react';
import Bloglist from './bloglist';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(response => {
            return response.json();
        })
        .then((data) =>{
            setBlogs(data);
        })
    }, []);

    return (
        <div className="home">
            {blogs && <Bloglist blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}
 
export default Home;