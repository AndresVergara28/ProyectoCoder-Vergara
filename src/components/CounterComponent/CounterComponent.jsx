import './CounterComponent.css'

const CounterComponent = ({counterDefault, stockData}) => {
  console.log(stockData);
  return (
    <div className="counterWidget">
        <p className="resButton">-</p>
        <p className="quantityValue">{counterDefault}</p>
        <p className="addButton">+</p>
    </div>
  )
}

export default CounterComponent
