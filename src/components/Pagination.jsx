import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/AppContext'

const Pagination = () => {
    const {state} = useGlobalContext()
    const {celebrities,filteredCelebrities,searchTerm} = state

    const [currentPage,setCurrentPage] = useState(1)

    const celebsPerPage = 5

    const indexOfLastCelebrity = currentPage * celebsPerPage
    const indexOfFirstCelebrity = indexOfLastCelebrity - celebsPerPage;
    const celebsToSlice = filteredCelebrities.length > 0 ? filteredCelebrities : celebrities
    const currentCelebrities = celebsToSlice.slice(
        indexOfFirstCelebrity,
        indexOfLastCelebrity
      ) || celebsToSlice

      
console.log(filteredCelebrities,'filteredCelebrities')     
console.log(currentPage,'currentPage')     
console.log(currentCelebrities,'currentCelebs')     
console.log(celebsToSlice,'celebsToSlice')     
const totalPages = Math.ceil(celebsToSlice.length / celebsPerPage);
const pageRangeDisplayed = 2; // Show 2 buttons for page numbers

  let startPage;
  let endPage;
  if (totalPages <= pageRangeDisplayed) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= pageRangeDisplayed) {
    startPage = 1;
    endPage = pageRangeDisplayed;
  } else if (currentPage + pageRangeDisplayed > totalPages) {
    startPage = totalPages - pageRangeDisplayed + 1;
    endPage = totalPages;
  } else {
    startPage = currentPage - pageRangeDisplayed + 1;
    endPage = currentPage + pageRangeDisplayed - 1;
}

const pageNumbers = [];
for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
}
console.log(pageNumbers,'pageNumbers')     

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

 

    console.log(state,'from pagiantion compoennt')
    if(currentCelebrities.length < 1){
        return (
            <div>
              <ul>
                {celebsToSlice?.map((celeb) => (
                  <li key={celeb.id}>
                    {celeb.name} ({celeb.location})
                  </li>
                ))}
              </ul>
              <div>
                {currentPage > 1 && (
                  <button onClick={handlePreviousPage}>Previous</button>
                )}
                {pageNumbers.map((pageNumber) => (
                  <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                    {pageNumber}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button onClick={handleNextPage}>Next</button>
                )}
              </div>
            </div>
          );
    }
    return (
        <div>
          <ul>
            {currentCelebrities?.map((celeb) => (
              <li key={celeb.id}>
                {celeb.name} ({celeb.location})
              </li>
            ))}
          </ul>
          <div>
            {currentPage > 1 && (
              <button onClick={handlePreviousPage}>Previous</button>
            )}
            {pageNumbers.map((pageNumber) => (
              <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </button>
            ))}
            {currentPage < totalPages && (
              <button onClick={handleNextPage}>Next</button>
            )}
          </div>
        </div>
      );
}

export default Pagination