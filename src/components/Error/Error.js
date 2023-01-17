import {useError} from "../../context/ErrorContext";
const Error = () => {
  const {error,setError} = useError()
  return (
    <div className="error">
      <h3 className="heading-3">MAALESEF BİR PROBLEM VAR :/</h3>
      <p className="error__description">{error}</p>
      <button className="btn btn-error" onClick={() => setError(null)}>Anladım</button>
    </div>
  );
};

export default Error;