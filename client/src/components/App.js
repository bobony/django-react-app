import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Posts from './Posts/DisplayPosts'
import DisplayPost from './Posts/DisplayPost'

const App = (match) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Posts} />
        <Route path={`/posts/:id`} component={DisplayPost} />
      </div>
    </BrowserRouter>
  )
}

export default App
