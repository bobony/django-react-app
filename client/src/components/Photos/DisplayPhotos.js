import React, {Component} from 'react'
import 'whatwg-fetch'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

class DisplayPhotos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      photos: []
    }
  }
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function (response) {
      return response.json()
    }).then((data) => {
      this.setState({
        photos: data
      })
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }
  render () {
    const {photos} = this.state
    return (
      <div className='container'>
        <h1>Awesome Photos</h1>
        {photos.map((photo, index) => {
          return (
            <div key={index} style={{border: '1px solid #aaa', padding: 15, marginBottom: 15}}>
              <h3 style={{textTransform: 'uppercase'}}>{photo.title}</h3>
              <img src={photo.thumbnailUrl} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default DisplayPhotos
