

const Cardetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM {km}</li>
            <li>Cor {color}</li>
        </ul>
        {newCar && <p>Este Carro e novo</p>}
    </div>
  )
}

export default Cardetails