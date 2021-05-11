import React from 'react'
import Pagination from '@material-ui/lab/Pagination';

function customPagination({ setPage }) {

  function pageHandler(page) {
    setPage(page)
    window.scroll(0, 0)
  }
  return (
    <div style={{
      width: "100%",
      background: "white",
      padding: "10px 0",
      display: "flex",
      justifyContent: "center",
      fontWeight: "bold",
    }}>
      <Pagination count={10} onChange={(e) => pageHandler(e.target.textContent)} />
    </div>
  )
}

export default customPagination
