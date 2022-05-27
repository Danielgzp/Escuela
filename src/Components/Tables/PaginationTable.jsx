import React from "react";

const PaginationTable = ({ prev, next }) => {
  return (
    <ul class="pagination justify-content-end">
      <div className="pagination-container">
        <li class="page-item" onClick={prev}>
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item activw">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item" aria-current="page">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item" onClick={next}>
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </div>
    </ul>
  );
};

export default PaginationTable;
