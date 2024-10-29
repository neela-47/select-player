import propTypes from 'prop-types'
import './AvailablePlayers.css'

const AvailablePlayers = ({handleIsActive, isActive,selectPlayer}) => {
    
    return (
        <div className='w-10/12 mx-auto flex justify-between'>
            <div>Available Players</div>
            <div className='flex gap-6'>
                <button onClick={() =>{handleIsActive("available")}} className={`${isActive.cart? "available active" :"available"}`}>Available</button>
                <button onClick={() =>{handleIsActive("selected")}} className={`${isActive.cart? "available" :" active available"}`}>Selected ({selectPlayer.length})</button>
            </div>
        </div>
    );
};

AvailablePlayers.propTypes ={
    handleIsActive: propTypes.func,
    isActive: propTypes.element,
    cart: propTypes.element,
    length: propTypes.number
}
export default AvailablePlayers;
