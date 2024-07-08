import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Mathues", "Pedro", "Josias"])
    const [user, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Joao", age: 28},
        {id: 3, name: "Matheus", age: 31}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {user.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    </div>
  )
}

export default ListRender