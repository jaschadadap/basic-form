import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Thank you! We have received your submission')

  }



  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <div className="bg-[#101721] w-2/4 h-2/4 flex justify-center items-center text-white">

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First name" onChange={e => setFirstName(e.target.value)} className="block mb-2 p-2 text-black" required />
          <input type="text" placeholder="Last name" onChange={e => setLastName(e.target.value)} className="block mb-2 p-2 text-black" required />
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className="block mb-2 p-2 text-black" required />
          <button className="bg-black px-5 py-1">Submit</button>
          <p>{message}</p>
        </form>

      </div>
    </div>
  );
}

export default App;
