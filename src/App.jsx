import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisasterForm from './DisasterForm.jsx'
import './styles.css'

export default function App() {
  const [disasters, setDisasters] = useState([])

  useEffect(() => {
    const fetchDisasters = async () => {
      const response = await axios.get(import.meta.env.VITE_API_URL + '/disasters')
      setDisasters(response.data)
    }
    fetchDisasters()
  }, [])

  return (
    <div className="container">
      <h1>Disaster Management System</h1>
      <DisasterForm />
      <h2>Reported Disasters</h2>
      <ul>
        {disasters.map(disaster => (
          <li key={disaster._id}>
            <strong>{disaster.name}</strong>: {disaster.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
