import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Form from './components/Form'
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { setDoc, doc, collection, addDoc, query, where, getDocs} from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

function App() {

  const writeToDB = async (data) => {
    await addDoc(collection(db, 'data'), {...data})
    setWrite(prevState => !prevState)
  }
  const [ write, setWrite ] = useState(false)

  const [ get, setGet ] = useState(false)

  const getFromDB = async () => {
    const q = query(collection(db, 'data'))
    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
      console.log(doc.data())
    })
  }

  return (
    <div className="App">
      <div className='header'>Header</div>
      <div className='sidebar'>
        <Buttons
        write={write}
        setWrite={setWrite}
        get={get}
        setGet={setGet}
        getFromDB={getFromDB}
        />
      </div>
      <div className='main'>
        {write ? <Form writeToDb={writeToDB} /> : null}
      </div>
      <div className='footer'>Footer</div>
    </div>
  )
}

export default App
