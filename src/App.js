import React, { useState , useEffect} from 'react'
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState('')

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , data: doc.data()})))
    })
  }, [] )


  useEffect(()=>{
    setUserName(prompt('please enter your name'))
  },[] )

  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('messages').add({
      message: input, 
      username: userName, 
      timestamp: firebase.firestore.Timestamp.fromDate(new Date())
    })

    setInput('')
  }


  return (
    <div className="App">
    <div classname='appChat'>
    <img className='img-logo' src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=80&h=80' alt='facebook messenger logo'/>
     <h1>Fb messenger clon</h1>
     <h2>Welcome {userName}</h2>
      <FlipMove>
        {
          messages.map(({id, data}) => 
          <Message key={id} username={userName} message={data}/>
          )
        }
      </FlipMove>
    </div>
    <form className='appForm'>
    <FormControl className='appFormControl'>
      <Input className='appInput' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value) }  />
      <IconButton
      className='appIconButton' 
      disabled={!input} 
      variant='contained' 
      color='primary' 
      type='submit' 
      onClick={sendMessage}>
      <SendIcon/>
      </IconButton>
    </FormControl>
    </form>
    </div>
  );
}

export default App;
