import './CartWidget.scss'
import cartIcon from './CartWidget.png'




const CartWidget = () => {
  return (
    <div className='cart-icon-container'>
      <img src={cartIcon} alt="" className="cart-logo"/>
      <p 
      className='quantity-container'
      style={{
        fontWeight:'bolder',
        color:'white'
      }}>2</p>
    </div>
  )
}

export default CartWidget
