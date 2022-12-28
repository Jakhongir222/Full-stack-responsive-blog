"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/destination.css"

function DestinationComponent() {
  

  const images = {'Uzbekistan': 'https://images.unsplash.com/photo-1619522108988-3724075be800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SVJBTnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60',
    'Sweden': 'https://images.unsplash.com/photo-1656835777669-627ad7f6b9b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fFN3ZWRlbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60',
    'Japan': 'https://images.unsplash.com/photo-1553292770-c3d14b814242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80'};

    const [articleList, setArticleList] = useState(null);
    const baseURL = 'http://localhost:8080/article';
  console.log(articleList);
    useEffect(() => {
      const dict = {}
      fetch(baseURL)
        .then(data => data.json())
        .then(data => data.forEach(e => { console.log(e);
          dict[e.articleTitle] = e.articleId;
        }))
        .then(() => setArticleList(dict))
    },[]);
    if(!articleList){return <div>empty</div>}
  return (
    <div className='articles'>
      {Object.keys(articleList).map((article, index) => {
        return (
          <a className='article' key={index} href={`article/${articleList[article]}`}>
            <img className='article-image' src={images[article]} width='250' height='250'/>
          </a>
        )
      })} 
    </div>
  )
}

export default DestinationComponent
