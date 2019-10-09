import React from 'react';
import BookContextProvider from '../Context/BookContext';
import Navbar from './Navbar';
import BookList from './BookList';
import NewBookFrom from './NewBookFrom';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
       <Navbar/>
       <BookList/>
       <NewBookFrom/>
     </BookContextProvider>
    </div>
  );
}

export default App;
