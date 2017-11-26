import React, {Component} from 'react'
import moment from 'moment'
import 'whatwg-fetch'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

class DisplayPost extends Component {
  constructor () {
    super()
    this.state = {
      post: {}
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id
    fetch(`http://localhost:8000/api/posts/${id}/`)
    .then(function (response) {
      return response.json()
    }).then((data) => {
      this.setState({
        post: data
      })
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }
  render () {
    const {post} = this.state
    return (
      <div className='container'>
        <h1>Awesome Post</h1>
        <div style={{padding: 15, marginBottom: 15}}>
          <h3 style={{textTransform: 'uppercase'}}>{post.title}</h3>
          <p>{post.description}</p>
          <p>Posted on: <span className='label label-primary'>{moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
        </div>
      </div>
    )
  }
}

export default DisplayPost
