import React,{useContext,useState} from 'react';
import { BookContext } from '../Context/BookContext';

const NewBookFrom = () => {
    const{dispatch} = useContext(BookContext);
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_BOOK',book:{title,author}})
        settitle('');
        setauthor('');
    }
    return ( 
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder="book title" value={title} onChange={(e) => settitle(e.target.value)} required/>
            <input type="text" placeholder="author name" value={author} onChange={(e)=>setauthor(e.target.value)} required/>
            <input type="submit" value="Add Book"/>
        </form>
     );
}
 
export default NewBookFrom;