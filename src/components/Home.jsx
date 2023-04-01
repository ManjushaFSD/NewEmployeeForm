import React,{useState} from 'react'
import Header from './Header.jsx'
import axios from 'axios'


const Home = () => {

const apiLink  = "https://jsonplaceholder.typicode.com/users"

const [user, setuser] = useState([])

React.useEffect(

  ()=>{
    axios.get(apiLink).then(
      (response)=>{
        setuser(response.data)
      }
    )
    console.log("Test successful")
  },[]
)

  return (
    <div>

 <Header /> 


 <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">id</th>
          </tr>
        </thead>
        <tbody>
          {user.map((value, index) => {
            return (
              <tr>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>



    </div>
  )
}

export default Home