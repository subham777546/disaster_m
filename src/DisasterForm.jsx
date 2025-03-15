import React, { useState } from 'react'
import axios from 'axios'

export default function DisasterForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post(import.meta.env.VITE_API_URL + '/disasters', { name, description })
    window.location.reload()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Disaster Name" required />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <button type="submit">Add Disaster</button>
    </form>
  )
}
