import React , { Component } from "react";
import ImageModal from "./image.js";


class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = { url: null , modal: 0 };
  }

  loadAllImages = (data)=>{
    return data.map((res,i)=>{
      return (
        <div key={i} className="col-lg-3 col-md-4 col-xs-6 thumb" >
          <a href="#" onClick={()=>{
            this.setState({url: res, modal: 1});
          }}>
            <img className="img-thumbnail"  src={res}/>
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
          {this.loadAllImages(this.props.data)}
          <ImageModal url={this.state.url} modal={this.state.modal} toggle={this.toggle}/>
        </div>
      </div>
    );
  }
}


export default Gallery;
