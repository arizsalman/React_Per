import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [isSent, setIsSent] = useState(false)
  // const [message, setMessage] = useState('Here!')

  async function handleClick() {
    setPending(p => p + 1)
    await delay(2000);
    setPending(p => p - 1)
    setCompelete(c => c + 1)

  }
  const [pending, setPending] = useState(0)
  const [compelete, setCompelete] = useState(0)

  // if (isSent) {
  //   return (
  //     <h1> Your Message is on its way ! </h1>
  //   )
  // }

  function Image(params) {


    return (
      <img src="https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D" alt="Coding" />
    )
  }


  return (



    <div>

      {/* <form onSubmit={(e) => (
        e.preventDefault(),
        setIsSent(true),
        sendMassage(message)
      )} >
        <textarea
          placeholder='Message'
          value={message}
          onChange={e => setMessage(e.target.value)}
        >
        </textarea>
        <button type="submit">Send</button>
      </form> */}

      <div>
        <h1>pending : {pending}</h1>
        <h1> compeleted product : {compelete} </h1>
        <button onClick={handleClick}>Buy</button>
      </div>

      <section>
        <h1>My react porject  </h1>
        <Image />
      </section>
    </div>
  )
  // function sendMassage() {

  // }

  function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    })
  }
}

export default App
