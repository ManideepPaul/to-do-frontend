import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {

  const router = useRouter()

  const getUser = async() => {

    try {
      const user = await axios.get('http://localhost:4000/findUser',
      { withCredentials: true })
      router.push('/page/dashboard')
    } catch (error) {
      router.push('/page/login')
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

}
