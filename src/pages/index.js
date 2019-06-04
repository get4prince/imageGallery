import React , { Component } from "react"

import "./../asserts/bootstrap.min.css";

import Gallery from "../components/gallery"

var arr = [
  'https://picsum.photos/id/375/600/600',
  'https://picsum.photos/id/741/600/600',
  'https://picsum.photos/id/378/600/600',
  'https://picsum.photos/id/194/600/600',
  'https://picsum.photos/id/657/600/600',
  'https://picsum.photos/id/181/600/600',
  'https://picsum.photos/id/481/600/600',
  'https://picsum.photos/id/481/600/600',
  'https://picsum.photos/id/819/600/600',
  'https://picsum.photos/id/663/600/600',
  'https://picsum.photos/id/371/600/600',
  'https://picsum.photos/id/375/600/600',
  'https://picsum.photos/id/741/600/600',
  'https://picsum.photos/id/378/600/600',
  'https://picsum.photos/id/194/600/600',
  'https://picsum.photos/id/657/600/600',
  'https://picsum.photos/id/181/600/600',
  'https://picsum.photos/id/481/600/600',
  'https://picsum.photos/id/481/600/600',
  'https://picsum.photos/id/819/600/600',
  'https://picsum.photos/id/663/600/600',
  'https://picsum.photos/id/371/600/600'
];

class IndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: arr
    }
  }

  render(){
    var data = this.state.images;
    return <Gallery data={data} />
  }
}

export default IndexPage
