"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/destination.css"

function DestinationComponent() {

    const [articleList, setArticleList] = useState({});
    const baseURL = 'http://localhost:8080/article';
  
    useEffect(() => {
      const dict = {}
      fetch(baseURL)
        .then(data => data.json())
        .then(data => data.forEach(e => {
          dict[e.name] = e.id;
        }))
        .then(() => setArticleList(dict))
    },[]);
  return (
    <div>DestinationComponent</div>
  )
}

export default DestinationComponent
