import React , { Component } from "react"

import "./../asserts/bootstrap.min.css";

import Layout from "../components/layout"
import Gallery from "../components/gallery"


const IndexPage = (data)=>(
    <Gallery data={data}/>
)

export default IndexPage;

export const query = graphql`
  {
allPixabayPhoto(limit: 30) {
  edges {
    node {
      largeImageURL
      pageURL
      tags
      user
      webformatURL
      id
    }
  }
}
}
`
