import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div className='flex flex-col px-5 justify-center items-center'>
      <Dashboard />
    </div>
  )
}
