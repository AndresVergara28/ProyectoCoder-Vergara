import './CartWidget.css'
import cartIcon from './carrito.png'




const CartWidget = () => {
  return (
    <div className='cartLogo-container'>
      <img src={cartIcon} alt="" className="cartlogo"/>
      <span style={{
        fontWeight:'bolder',
        color:'white'
      }}>2</span>
    </div>
  )
}

export default CartWidget
