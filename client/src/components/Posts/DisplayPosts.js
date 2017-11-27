import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'whatwg-fetch'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

class Posts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount () {
    fetch('http://localhost:8000/api/posts/')
    .then(function (response) {
      return response.json()
    }).then((data) => {
      this.setState({
        posts: data
      })
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }
  render () {
    const {posts} = this.state
    return (
      <div className='container'>
        <p><span style={{fontSize: 28}}> Awesome Posts </span> <button className='btn btn-success'><Link to={`/post/add`} style={{color: '#fff'}}><i className='glyphicon glyphicon-plus' /> Add Post</Link></button></p>
        {posts.map((post, index) => {
          return (
            <div key={index} style={{border: '1px solid #aaa', padding: 15, marginBottom: 15}}>
              <Link to={`${this.props.match.url}posts/${post.id}`}><h3 style={{textTransform: 'uppercase'}}>{post.title}</h3></Link>
              <p>{post.description}</p>
              <p>Posted on: <span className='label label-primary'>{moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Posts
