
import './App.css'
import City from './assets/city.jpg'
import Cardetails from './components/Cardetails'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  const nick = "Joaquim"
  const cars = [
    {id:1, brand: "Ferrari", color:"Amarelo", newCar: true, km: 0},
    {id:2, brand: "BMW", color:"Preto", newCar: false, km: 324234},
    {id:3, brand: "Renault", color:"Vermehlo", newCar: false, km: 11110}
  ]
  const people = [
    {id:1, name:"Rafael", age:20, profissao:"Desenvolverdor"},
    {id:2, name:"Jeferson", age:34, profissao:"Maconheiro"},
    {id:3, name:"Sipson", age:15, profissao:"Animador"}
  ]

  function showMessage() {
    console.log("Evento do Componente pai! ")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <h1>Seção 3 - Avançado React</h1>
        <div>
          {/* imagem em public */}
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        <div>
          {/* imagem em assets */}
          <img src={City} alt="Cidade" />
        </div>
        <ManageData />
        <ListRender />Car
        <ConditionalRender />
        {/* props */}
        <ShowUserName name={nick} />
        {/* destructing */}
        <Cardetails brand="VW" km={100000} color="Azul" newCar={true}/>
        {/* reaproveitando */}
        <Cardetails brand="Ford" color={"Vermelha"} km={0} newCar={false}/>
        <Cardetails brand="fiat" color={"Verde"} km={45000} newCar={true}/>
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <Cardetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
        ))}
         {/* Fragments */}
        <Fragments propTestFragment="Teste"/>
        {/* Children */}
        <Container myValue="teste">
          <p>Este é o conteudo</p>
        </Container>
        <Container myValue="teste">
          <h5>Testando o container</h5>
        </Container>
        {/* Executar função */}
        <ExecuteFunction myFunction={showMessage} />
        {/* State lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage} />
        {people.map((person) => (
          <UserDetails key={person.id} name={person.name} age={person.age} profissao={person.profissao} />
        ))}
    </>
  )
}

export default App
