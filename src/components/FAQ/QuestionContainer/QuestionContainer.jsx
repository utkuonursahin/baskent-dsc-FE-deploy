import {useState} from "react";
import Lottie from "lottie-react";
import arrowAnimation from "../../../../public/12-arrow-down-outline-edited.json";
const QuestionContainer = ({faq}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="faq__question-container">
      <div className="faq__question" onClick={() => setIsOpened(prev => !prev)}>
        <p>{faq.question}</p>
        <Lottie speed={0.5} animationData={arrowAnimation} style={{ height: 30, width:30 }} className={isOpened ? "opened" : "closed"} />
      </div>
      <div className={`faq__answer ${isOpened ? "opened" : "closed"}`}>
        <p>
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default QuestionContainer;
