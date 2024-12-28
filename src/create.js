import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('devv baby');
    const his=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const blog={title,body,author}

        fetch('http://localhost:8000/blogs',
        {   method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }

        )
        .then(()=>{
            console.log("added anew blog");
            his.push('/');
        })

    }
    return(
    <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input type="text"
            required
            value={title}
            onChange={(e)=> setTitle(e.target.value)}

            />
             <label>Blog Body:</label>
           <textarea 
           required
           value={body}
            onChange={(e)=> setBody(e.target.value)}
           ></textarea>
           <label >Blog author:</label>
           <select
           value={author}
           onChange={(e)=>setAuthor(e.target.value)}
           >
            <option value="devv baby">devv baby</option>
            <option value="kartik baby">kartik baby</option>
            <option value="vihan baby">vihan baby</option>
            <option value="yash baby">yash baby</option>
            <option value="hansi raj kumar singh yadav don 2">hansi raj kumar singh yadav don 2</option>
           </select>
           <button>Add blog</button>
        </form>
    </div>
    )
    
}
 
export default Create;
