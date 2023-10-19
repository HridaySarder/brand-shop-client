/* eslint-disable react/prop-types */


const Card = ({product}) => {

  const {image,name,brand,type,price,description,rating} = product;

  return (
    <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img className="h-64 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Brand: {brand}</p>
    <p>{type}</p>
    <p>Price:${price}</p>
    <p>{description}</p>
    <p>{rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add</button>
    </div>
  </div>
</div>
  );
};

export default Card;