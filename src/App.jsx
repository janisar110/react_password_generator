import { useCallback, useEffect, useState } from 'react'

function App() {
  const [range, setRange] = useState(8);
  const [addSpecialChar, setAddSpecialChar] = useState(false);
  const [addNum, setAddNum] = useState(false);
  const [pasword, setPasword] = useState("");
  

  let passGenerator = ()=>{
  let abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let strPas = "";

  if(addNum) abc += "0123456789";
  if(addSpecialChar) abc += "!@#$%^&*()_+{}[]?"; 
  
  for (let i = 0; i < range; i++) {
    let charIndex = Math.floor(Math.random()*abc.length);
    let char = abc.charAt(charIndex);
    strPas += char;

    setPasword(strPas);
  }  
}

// console.log("pasGen", passGenerator());

useEffect(()=>{
  passGenerator();
},[range,addSpecialChar,addNum]);

  return (
    <>
      <div className='bg-slate-600 w-full h-screen p-3 grid place-content-center '>
        <div className='p-20 shadow-2xl rounded-3xl grid col-span-1'>
        <h1 className='text-white text-3xl mb-10'>Pasword Generator by Janisar</h1>
          <div className='flex '>
              <input type="text" value={pasword} className='w-full py-4 rounded-md outline-none' />
              <button className='bg-green-700 text-white font-bold   px-8 py-4 rounded-md  hover:bg-green-600 outline-none'>Copy</button>
          </div>
          <div className='grid grid-cols-1 my-10 sm:flex sm:my-10 '>
            <div className='mx-2'>
              <input type="range" className='m-2'
              min="8" max="50" value={range}
              onChange={(e)=>setRange(e.target.value)}
              />
              <label  className='text-white '>length({range})</label>
              </div>
              <div className='mx-2'>
             <input type="checkbox" className='m-2' onChange={()=>setAddSpecialChar((prev)=> !prev)} />
             <label className='text-white'>Special charactor</label>
             </div>
             <div className='mx-2'>
             <input type="checkbox" className='m-2'onChange={()=>setAddNum((prev)=> !prev)} />
             <label  className='text-white'>Numbers</label>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
