import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest Africa Job Board</h1>
            <p>Welcome to the Africa's largest Jobs board. Sign up to explore more about jobs.</p>
            <form action="">
                <input type="text" placeholder="Search for jobs" />
                <button>Search</button>
            </form>
        </div>

        <div className="job-table">
            <div className="table-layout">
                <p>#</p>
                <p>Title</p>
                <p>Title</p>
                <p className='ta'>Title</p>
                <p className='job-peak'>Title</p>
            </div>
        </div>
    </div>
  )
}

export default Home