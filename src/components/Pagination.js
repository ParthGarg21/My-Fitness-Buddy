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
import styles from "../styles/pagination.module.css";
import { scrollToTop } from "../utils/scrollPage";

const Pagination = ({ totalPages, displayPages, exerciseContainer }) => {
  // Getting the state from the exercise context
  const { page, setPage } = useContext(exerciseContext);

  // Storing the current range using indices and storing them as "states" so that their values prevail during multiple renders
  // Initialize them by '0'
  const [startIndex, setStartIndex] = useState(() => 0);
  const [endIndex, setEndIndex] = useState(() => 0);

  /**
   *  When the number of page buttons that can be displayed changes (when the exercises change either by searching or selecting a body part)
   *  then reset the page range to [0, displayPages - 1]
   */


  useEffect(() => {
    setStartIndex(0);
    setEndIndex(displayPages - 1);
  }, [displayPages]);

  // If the current page gets out of range, then move the range
  useEffect(() => {
    if (page === startIndex - 1) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
    if (page === endIndex + 1) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  }, [page]);

  // Function to handle page select
  const handlePageClick = (pageNo) => {
    scrollToTop(exerciseContainer);
    setPage(pageNo);
  };

  // Rendering the required pages only
  const pageButtons = [];

  for (let i = startIndex; i <= endIndex; i++) {
    pageButtons.push(
      <button
        key={i}
        className={
          (page === i ? styles.activePage : "") + " " + styles.paginationBtn
        }
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

  // Handle the previous button click
  const handlePreviousClick = () => {
    if (page !== 0) {
      setPage(page - 1);
      scrollToTop(exerciseContainer);
    }
  };

  // Handle the next button click
  const handleNextClick = () => {
    if (page + 1 < totalPages) {
      setPage(page + 1);
      scrollToTop(exerciseContainer);
    }
  };

  return (
    <section className={styles.paginationCon}>
      <div className={styles.paginationPagesCon}>
        <button
          className={
            (page === 0 ? styles.disableBtn : "") + " " + styles.pageNavBtn
          }
          onClick={handlePreviousClick}
        >
          &lt;
        </button>
        <div className={styles.pages}>{pageButtons}</div>
        <button
          className={
            (page === totalPages - 1 ? styles.disableBtn : "") +
            " " +
            styles.pageNavBtn
          }
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
      <span className={styles.currPageDisplay}>
        Page {page + 1} of {totalPages}
      </span>
    </section>
  );
};

export default Pagination;
