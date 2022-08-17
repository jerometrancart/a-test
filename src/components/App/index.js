// == Import npm
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Records from './components/Records';
import Pagination from './components/Pagination';

// == Import

// To hold a table data
const [data, setData] = useState([])
const [loading, setLoading] = useState(true);

//axios request to fetch the data
useEffect(() => {
  axios.get('MOCK_DATA.json')
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        .catch(() => {
            alert('There was an error while retrieving the data')
        })
}, [])

const nPages = data.length

// User is currently on this page
const [currentPage, setCurrentPage] = useState(1);

// ONLY IF THERE ARE TO MANY DATA TO DISPLAY IN ONE PAGE, WHICH IS NOT THE CASE BECAUSE I ONLY CREATED 10 ITEMS IN MOCKEROO
// const [recordsPerPage] = useState(10);

// const indexOfLastRecord = currentPage * recordsPerPage;
// const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
// const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
// const nPages = Math.ceil(data.length / recordsPerPage)


// == Composant
const App = () => (

  <div className='container mt-5'>
            <h2> Simple Pagination Example in React </h2>
            <Records data={currentRecords}/>
      <Pagination
        nPages = { nPages }
        currentPage = { currentPage } 
        setCurrentPage = { setCurrentPage }
      />
  </div>
);

// == Export
export default App;
