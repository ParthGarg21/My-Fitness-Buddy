/**
 * Pagination Component
 * "page", "startIndexageEndIndex", all have 0 based indexing
 * To implement paginaton, the following steps have been followed:
 * 1. A limit is set on the maximum page buttons that can be rendered on the screen.
 * 2. Two indices are maintained as state to define the current page range buttons being displayed
 * 3. An array is created which is storing all the page buttons for pages in the current page range.
 *    Each button click sets the current page to that page number. Also, the current page is bpageEndIndexng highlighted
 * 4. When the current page goes beyond the current page range,
 *    the current range is also moved by "1", pageEndIndexther by increment or decrementing the current range
 */

import { useContext, useEffect, useState } from "react";
import { exerciseContext } from "../context/ExerciseContext";
import styles from "../styles/pagination.styles.css";

// Maximum number of page that can be displayed as pagination at a time
const MAX_PAGINATION_PAGES = 8;

const Pagination = ({ totalPages, displayPages }) => {
  // Actual maximum pages that can be displayed as pagination
  // const displayPages = Math.min(MAX_PAGINATION_PAGES, totalPages);

  // Getting the state from the exercise context
  const { page, setPage } = useContext(exerciseContext);

  // Function to handle page select
  const handlePageClick = (pageNo) => {
    setPage(pageNo);
  };

  // // Storing the current range using indices and storing them as "refs" so that their values prevail during multiple renders
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {
    setStartIndex(0);
    setEndIndex(displayPages - 1);
  }, [displayPages]);

  // If the current page gets out of range, then move the range
  if (page === startIndex - 1) {
    setStartIndex(startIndex - 1);
    setEndIndex(endIndex - 1);
  } else if (page == endIndex + 1) {
    setStartIndex(startIndex + 1);
    setEndIndex(endIndex + 1);
  }

  const temp = [];
  for (let i = startIndex; i <= endIndex; i++) {
    temp.push(
      <button
        key={i}
        className={page === i ? "active-page" : "pagination-btn"}
        onClick={() => {
          if (i !== page) {
            handlePageClick(i);
          }
        }}
      >
        {i + 1}
      </button>
    );
  }

  // Rendering the required pages only
  const pageButtons = [...temp];

  // Handle the previous button click
  const handlePreviousClick = () => {
    if (page != 0) {
      setPage(page - 1);
    }
  };

  // Handle the next button click
  const handleNextClick = () => {
    if (page + 1 < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <section className="pagination-con">
      <div className="pagination-pages-con">
        <button className="page-nav-btn prev" onClick={handlePreviousClick}>
          &lt;
        </button>
        <div className="pages">{pageButtons}</div>
        <button className="page-nav-btn next" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
      <span className="curr-page-display">
        Page {page + 1} of {totalPages}
      </span>
    </section>
  );
};

export default Pagination;
