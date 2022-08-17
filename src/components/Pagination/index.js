// == Import npm
import React from 'react';

// == Import

import * as React from 'react';


// == Composant
import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
//to slice the data if there are too many pages
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

//hide next page button when on last page
const nextPage = () => {
  if(currentPage !== nPages) 
      setCurrentPage(currentPage + 1)
}

//hide previous button when on first page
const prevPage = () => {
  if(currentPage !== 1) 
      setCurrentPage(currentPage - 1)
}
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link" 
                        onClick={prevPage} 
                        href='#'>
                        
                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" 
                        onClick={nextPage}
                        href='#'>
                        
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination    


