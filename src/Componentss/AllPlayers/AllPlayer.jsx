import './AllPlayer.css'
const AllPlayer = ({allPlayer, handleSelectedPlayer}) => {
    const {image, name, country, category, type, price} = allPlayer
    // console.log(allPlayer);
    return (
        <div className="w-3/4 mx-auto mt-10 mb-10">
          <div className="card card-compact bg-base-100  px-8 py-4 shadow-xl rounded-2xl">
  <figure className="w-72 h-56 ">
    <img className="items-center w-full h-full rounded-2xl"
      src={image} />
  </figure>
  <div className="card-body space-y-4">
    <h2 className="card-title"><i className=" mr-2 fa-solid fa-user"></i>{name}</h2>
    <div className="border-b-2 flex justify-between">
    <p><i className="mr-2 fa-solid fa-flag"></i>{country}</p>
    <button className="btn1 mb-4">{category}</button>
    </div>
    <p>Ratings</p>
    <div className="flex justify-between">
        <p>{type}</p>
        <p className="text-gray-400">{type}</p>
    </div>
    <div className="flex justify-between">
        <p>Price: ${price}</p>
        <button onClick={() => handleSelectedPlayer()} className="btn1">Choose Player</button>
    </div>
   
</div>
</div>
        </div>
    )
};

export default AllPlayer;