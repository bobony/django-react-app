import React, {Component} from 'react'
import 'whatwg-fetch'
import 'bootstrap'
import {withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class AddPost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit () {
    const headers = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description
      })
    }
    fetch('http://localhost:8000/api/posts/', headers)
    .then(function (response) {
      return response.json()
    }).then((data) => {
      this.props.history.push('/')
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }
  handleChange ({target}) {
    this.setState({
      [target.name]: target.value})
  }
  render () {
    return (
      <div className='container'>
        <h3>Add Post</h3>
        <input type='text' name='title' className='form-control' onChange={this.handleChange} placeholder='Post Title' /><br />
        <textarea className='form-control' name='description' onChange={this.handleChange} placeholder='Post Description' rows='3' /><br />
        <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default withRouter(AddPost)
