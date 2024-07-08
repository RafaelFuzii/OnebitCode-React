import { useState } from "react"


const UserDetails = ({name,age,profissao}) => {

  return (
    <div>
      {age >= 18 ? (
        <div>
          <h2>{name} - {profissao}</h2>
          <p>pode tirar Carta de habilitação</p>
        </div>
      ) : (
        <div>
          <h2>{name} - {profissao}</h2>
          <p>Não pode tirar carta de habilitação</p>
        </div>
      )}
    </div>
  )
}

export default UserDetails