import { Link } from "react-router-dom";

function ItemDetailPage({item}) {

  const urlApi = 'http://localhost:3000/id'

  const handleClick = () => {
    fetch((`${urlApi}/${item._id}`), {
      method: 'DELETE',
    })
  }

  return (
    <>
      <h3>{item.title}</h3>
      <p>Completed: {`${item.completed}`}</p>
      <button onClick={handleClick}>
        <Link to="/">Delete</Link>
      </button>
    </>
 
  );
};

export default ItemDetailPage;