import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'


export default function Home() {
  return (
      <div className="h-screen w-screen flex justify-center items-center bg-red-500">
        {/* <div className='h-3/6 w-3/6 bg-yellow-200 m-24 justify-end	'>          */}
        <div className='h-3/6 w-3/6 flex justify-center items-center align-middle content-center bg-yellow-200'>         
          <Link href='/student'><button type="button" className="btn btn-primary m-24">Student</button></Link>
          <Link href='/login'><button type="button" className="btn btn-secondary m-24">Admin</button></Link>
        </div>
      </div>
  )
}
