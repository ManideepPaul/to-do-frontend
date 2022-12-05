import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

  const router = useRouter()
  const [user, setUser] = useState('')

  const getUser = async () => {

    try {
      const user = await axios.get('http://localhost:4000/findUser',
        { withCredentials: true })
      setUser(user)
    } catch (error) {
      router.push('/page/login')
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  if (user) {
    return (
      <h1>Welcome to dashboard</h1>
    )
  }

}
