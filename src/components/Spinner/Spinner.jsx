import Image from 'next/image';
const Spinner = () => {
  return (
    <Image width={50} height={50} className="spinner" src="/spinner.svg" alt="spinner icon"/>
  );
};

export default Spinner;
