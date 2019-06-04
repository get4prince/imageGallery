import React, { Component } from "react"
import ImageModal from "./image.js"

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = { url: null, modal: 0 }
  }

  loadAllImages = data => {
    return data.map((res, i) => {
      return (
        <div
          key={i}
          style={{ cursor: "pointer" }}
          onClick={e => {
            this.setState({ url: res.node.largeImageURL, modal: 1 })
          }}
          className="col-lg-3 col-md-4 col-xs-6 thumb"
        >
          <img className="img-thumbnail" src={res.node.largeImageURL} />
        </div>
      )
    })
  }

  toggle = () => {
    this.setState({ modal: 0, url: null })
  }

  render() {
    return (
      <div
        className="root"
        style={{ backgroundColor: "crimson", paddingTop: "2vh" }}
      >
        <div className="container">
          <div className="row">
            {this.loadAllImages(this.props.data.data.allPixabayPhoto.edges)}
            <ImageModal
              url={this.state.url}
              modal={this.state.modal}
              toggle={this.toggle}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
