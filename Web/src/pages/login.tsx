import axios from 'axios'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router';

const baseUrl:string = 'https://afroopportunityhub.onrender.com/api/v1/auth/login';

const login = ({}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const onSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try{
       const result =  await signIn('credentials', {email: email, password: password})
       if(result?.error){
        console.log(result.error,'-----------------------------')
       }else{
        router.push('/dashboard')
       }
        
    }catch{

    }
  }
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col p-10 mt-12 rounded-lg bg-gray-100 gap-5'>
        <div className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500 text-center'>Welcome Back</div>
        <div>Enter Your Credentials to access your account</div>
        <form action="" className='flex flex-col' onSubmit={(e) => {onSubmit(e)}}>
          <label className='mb-3' htmlFor="email">Email Address</label>
          <input id='email' value={email} type="text" required placeholder='Enter Email' className='w-96 px-5 py-3 rounded-lg outline-blue-900' onChange={(e)=>{setEmail(e.target.value)}}/>
          <label className='mt-5 mb-3' htmlFor="password">Password</label>
          <input id='password' value={password} type="password" required placeholder='Enter Password' className='w-96 px-5 py-3 rounded-lg outline-blue-900' onChange={(e) => {setPassword(e.target.value)}}/>
          <div className='text-center mt-10'>Don't Have an Account? <span className='text-green-500 font-bold'>Sign Up Here</span></div>
          <button type='submit' className='px-10 py-3 text-white bg-blue-900 mt-3'>Continue</button>
        </form>
      </div>
    </div>
    
  )
}

export default login