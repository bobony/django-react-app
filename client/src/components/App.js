import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Posts from './Posts/DisplayPosts'
import DisplayPost from './Posts/DisplayPost'
import AddPost from './Posts/AddPost'
import DisplayPhotos from './Photos/DisplayPhotos'
import Header from './header/Header'

const App = (props) => {
  return (<div>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path='/' component={Posts} />
        <Route exact path={`/post/add`} component={AddPost} />
        <Route exact path={`/posts/:id`} component={DisplayPost} />
        <Route exact path={`/app/photos`} component={DisplayPhotos} />
      </div>
    </BrowserRouter>
  </div>
  )
}

export default App
