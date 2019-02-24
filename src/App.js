import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'
import { useGoogleAnalytics } from "./utils/analytics";

import './app.css'

function App() {
	useGoogleAnalytics({ trackingId: 'UA-134990283-1' });

  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
