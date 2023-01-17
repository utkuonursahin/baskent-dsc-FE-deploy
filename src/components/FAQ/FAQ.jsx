import QuestionContainer from "./QuestionContainer/QuestionContainer";
import faq from "../../../public/faq.json";
const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <h2 className="heading-2">Sıkça Sorulan Sorular</h2>
      {faq.map((fq, index) => {
        return <QuestionContainer faq={fq} key={index} />
      })}
    </section>
  );
};

export default FAQ;
