/**
 * Component to render the related terms menu below the search bar.
 * Each related term when clicked sets the input value to that term and closes the menu
 */

import styles from "../styles/relatedterms.module.css";

const RelatedTerms = ({ relatedTerms, setRelatedTerms, setValue }) => {
  return relatedTerms.length === 0 ? null : (
    <section className={styles.relatedTermsCon}>
      <ul className={styles.relatedTerms}>
        {relatedTerms.map((relatedTerm, idx) => {
          return (
            <li
              className={styles.relatedTerm}
              key={idx}
              onClick={() => {
                setRelatedTerms([]);
                setValue(relatedTerm);
              }}
            >
              {relatedTerm}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RelatedTerms;
