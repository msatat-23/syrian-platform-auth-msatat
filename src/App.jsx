import { useState } from 'react'
import './App.css'
import Posts from './components/posts/posts'
import CreatePost from './components/posts/createpost';
function App() {
  const [Mounted, setMounted] = useState(false);

  return (
    <div className=''>
      <h1>Learn React Query</h1>
      <button onClick={() => { setMounted(prev => !prev) }}>Toggle</button>
      {Mounted && <Posts />}
      <CreatePost />
    </div>
  )
}

export default App
