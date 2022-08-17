// == Import npm
import React from 'react';

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
