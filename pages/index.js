import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'


export default function Home() {
  return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className='h-3/6 w-3/6 flex justify-center items-center'>         
          <Link href='/student'><button type="button" className="btn btn-primary btn-lg">Student</button></Link>
          <Link href='/login'><button type="button" className="btn btn-secondary btn-lg">Admin</button></Link>
        </div>
      </div>
  )
}
