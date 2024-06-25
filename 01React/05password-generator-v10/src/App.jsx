import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [passwordLength, setPasswordLength] = useState(10)
  const [password, setPassword] = useState('')
  const [isNumber, setIsNumber] = useState(false)
  const [isCharacter, setIsCharacter] = useState(false)
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = "abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(isCharacter){
      str+="!@#$%^&*()_+-=[]{}|;':\",./<>?"
    }
    if(isNumber){
      str+="0123456789"
    }
    for (let i = 0; i < passwordLength; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)

  },[isCharacter, isNumber, passwordLength, setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current.select()
    navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    generatePassword()
  },[generatePassword])
  
  
  return (
    <>
       
    <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto p-6 bg-red-500 rounded text-white">
        <div className='flex '>

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
          type="text"
          value={password}
          placeholder="password"
          ref={passwordRef}
          readOnly
        />
        <button onClick={copyPassword} className='w-1/4 p-2 mb-4 border border-gray-300 rounded text-black bg-blue-500'>Copy</button>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <label className="w-1/2 text-right">Password Length:</label>
            <input 
              className="w-full p-2 border border-black-500 rounded"
              type="range"
              min="6"
              max="30"
              value={passwordLength}
              
              onChange={(e) => setPasswordLength(e.target.value)}
            />
            <span>{passwordLength}</span>
          </div>
          <div className="flex items-center space-x-4">
            <label className="w-1/2 text-right">Include Numbers:</label>
            <input
              className="w-6 h-6"
              type="checkbox"
              checked={isNumber}
              onChange={() => setIsNumber(prev => !prev)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="w-1/2 text-right">Include Special Characters:</label>
            <input
              className="w-6 h-6"
              type="checkbox"
              checked={isCharacter}
              onChange={() => setIsCharacter(prev => !prev)}
            />
          </div>
          <button
            className="w-full p-2 bg-blue-600 rounded text-white hover:bg-blue-700"
            onClick={generatePassword}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
