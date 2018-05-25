import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              handleChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              handleChange={this.handleChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm