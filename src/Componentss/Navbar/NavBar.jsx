import './NavBar.css'
const NavBar = ({ handleCoin, coin}) => {

    return (
        <div className="w-11/12 mx-auto  p-8">
         <div className="flex justify-between items-center">
            <div>
              <img src="./src/assets/asset/logo.png" alt="" />
            </div>
            <div className="flex justify-between gap-8 items-center ">
                <ul className="flex justify-between gap-5 text-gray-500">
                    <li>Home</li>
                    <li>Fixures</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <button className=" p-4 bg-gray-400 rounded-xl text-center items-center"><span>{coin}</span> Coins <i className="fa-solid fa-coins"></i></button>
            </div>
        </div>
        {/* banner */}
        <div className="w-[1180px] h-[545px] bg-cover bg-no-repeat relative rounded-2xl" style={{
            backgroundImage: `url(./src/assets/asset/bg-shadow.png)`
        }}>
           
            <div className="text-center space-y-5 absolute  left-40 ">
            <img className="ml-64 pt-16" src="./src/assets/asset/banner-main.png" alt="" />
                <h1 className="font-bold text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="">Beyond Boundaries Beyond Limits</p>
                <button className="btn" onClick={()=>handleCoin()} >Claim Free Coins</button>
            </div>
        </div>
       </div>
    );

    
};

export default NavBar;