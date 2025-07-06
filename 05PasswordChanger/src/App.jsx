import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)
  const passwordRef = useRef(null)
  
  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "/?!@#$%^&*"
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 25);
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [password])
  
  useEffect(() => {
    PasswordGenerator()
  }, [length, numberAllowed, charAllowed, PasswordGenerator])
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-start justify-center">
      <div className='w-full h-full shadow-2xl px-8 py-8 bg-gray-800'>
        <h1 className='text-white text-center mb-8 text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
          Password Generator
        </h1>
        
        <div className='flex shadow-lg rounded-lg overflow-hidden mb-8 border border-gray-600 max-w-3xl mx-auto'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-3 px-4 bg-slate-700 text-white placeholder-gray-400 font-mono text-lg border-r border-gray-600'
            placeholder="Generated password will appear here"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`outline-none px-4 py-3 shrink-0 font-medium transition-all duration-200 ${
              copied 
                ? 'bg-green-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={PasswordGenerator}
            className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 shrink-0 font-medium transition-all duration-200'
          >
            Generate
          </button>
        </div>
        
        {/* Controls */}
        <div className='flex flex-col gap-y-6 text-base max-w-2xl mx-auto'>
          {/* Password Length */}
          <div className='flex items-center gap-x-3'>
            <label htmlFor="lengthInput" className='text-gray-300 font-medium min-w-20'>
              Length: {length}
            </label>
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className='cursor-pointer flex-1 accent-blue-500'
              id="lengthInput"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          
          {/* Include Numbers */}
          <div className='flex items-center gap-x-3'>
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              className='w-4 h-4 accent-blue-500 cursor-pointer'
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <label htmlFor="numberInput" className='text-gray-300 font-medium cursor-pointer'>
              Include Numbers (0-9)
            </label>
          </div>
          
          {/* Include Special Characters */}
          <div className='flex items-center gap-x-3'>
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              className='w-4 h-4 accent-blue-500 cursor-pointer'
              onChange={(e) => setCharAllowed(e.target.checked)}
            />
            <label htmlFor="charInput" className='text-gray-300 font-medium cursor-pointer'>
              Include Special Characters (!@#$%^&*)
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App