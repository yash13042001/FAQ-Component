const FAQItem = ({ faq, showIndex, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="faq-box">
      <div className="que" onClick={handleClick}>
        <button className={showIndex? `arrow`:``}>&gt;</button>
        <div>{faq.question}</div>
      </div>
      {showIndex && <div className="ans">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;
