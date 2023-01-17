const Item = ({data,index}) => {
  return (
    <div className="dashboard__content--element" data-id={data.id}>
      <span>{index}</span>
      <p>{data.name}</p>
      <p>{data.id || data._id}</p>
      <p>{data.role || data.title || new Date(data.date).toLocaleDateString("en-GB",{year: "numeric", month: "2-digit", day: "2-digit"})}</p>
    </div>
  );
};
export default Item;