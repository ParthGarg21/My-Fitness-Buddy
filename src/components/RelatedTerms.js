/**
 * Component to render the related terms menu below the search bar.
 * Each related term when clicked sets the input value to that term and closes the menu
 */

const RelatedTerms = ({ relatedTerms, setRelatedTerms, setValue }) => {
  return relatedTerms.length === 0 ? null : (
    <section className="related-terms-con">
      <ul className="related-terms">
        {relatedTerms.map((relatedTerm, idx) => {
          return (
            <li
              className="related-term"
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
