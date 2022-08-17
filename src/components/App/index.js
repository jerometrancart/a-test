// == Import npm
import React from 'react';

// == Import

// To hold a table data
const [data, setData] = useState([])
const [loading, setLoading] = useState(true);

const nPages = data.length

// User is currently on this page
const [currentPage, setCurrentPage] = useState(1);

const nextPage = () => {
  if(currentPage !== nPages) 
      setCurrentPage(currentPage + 1)
}
const prevPage = () => {
  if(currentPage !== 1) 
      setCurrentPage(currentPage - 1)
}


// == Composant
const App = () => (
  <Pagination
    nPages = { nPages }
    currentPage = { currentPage } 
    setCurrentPage = { setCurrentPage }
/>
);

// == Export
export default App;
