/* eslint-disable react/prop-types */


const ItemListContainer = (props) => {
  return (
    <div style={
      {fontWeight:'bold',
      fontSize:'2rem',
      width:'100vw',
      height:'50vh',
      textAlign:'center'

      
    }
    }>
      {props.greeting}
    </div>
  )
}

export default ItemListContainer
