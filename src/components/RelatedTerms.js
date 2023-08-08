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
