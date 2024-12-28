import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglist = ({blogs,title}) => {
    // const blogs=props.data;
    // const title=props.title;
    return ( 
        <div className="bloglist">
            <h2>{title}</h2>
            {blogs.map((iterator)=>(
                <div className="blog-preview" key={iterator.id}>
                    {/* using thuis single astric cause we also need a dynamic value inside that so
                     we are telling it that we are gonna use js inside it */}
                    <Link to={`/blogs/${iterator.id}`}>
                    <h2>{iterator.title}</h2>
                    <p>written by {iterator.author}</p>
                    
                    </Link>
                </div>
                
            ))
            
            }
        </div>
     );
}
 
export default Bloglist;