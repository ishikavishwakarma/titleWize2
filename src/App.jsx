import React from 'react'
import Main from './components/Main'
import "@fontsource/inter/300.css"; // Light
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/500.css"; // Medium
import "@fontsource/inter/700.css"; // Bold

// import '@fontsource/inter/variable.css';  // Variable weight support (Optional)

const App = () => {
  return (
    <div  className='main w-screen overflow-x-hidden'>
     <Main/>
    </div>
  )
}

export default App
