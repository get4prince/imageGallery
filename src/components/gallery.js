import React , { Component } from "react";
import ImageModal from "./image.js";


class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = { url: null , modal: 0 };
  }

  componentWillMount(){
    console.log(this.props.data.data.allPixabayPhoto.edges);
  }

  loadAllImages = (data)=>{
    return data.map((res,i)=>{
      // console.log(res.node.webformatURL);
      return (
        <div key={i} className="col-lg-3 col-md-4 col-xs-6 thumb" >
          <a href="#" onClick={()=>{
            this.setState({url: res.node.largeImageURL, modal: 1});
          }}>
            <img className="img-thumbnail"  src={res.node.webformatURL}/>
          </a>
        </div>
      );
    })
  }

  toggle = () =>{
    this.setState({modal: 0, url: null});
  }

  render() {
    return (
      <div className="container" style={{marginTop: "3vh"}}>
        <div className="row">
          {this.loadAllImages(this.props.data.data.allPixabayPhoto.edges)}
          <ImageModal url={this.state.url} modal={this.state.modal} toggle={this.toggle}/>
        </div>
      </div>
    );
  }
}


export default Gallery;
