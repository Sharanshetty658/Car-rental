import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'

export default function Home() {
  return (
    <>
      <Navbar title='Car Dekho' />
      <div className="row justify-content-evenly">
        <div className="col-md-3">
          <Container />
        </div>
      </div>
    </>
  )
}