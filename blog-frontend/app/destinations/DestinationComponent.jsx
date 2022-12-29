"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/destination.css"

function DestinationComponent() {

  const images = {'Uzbekistan': 'https://images.unsplash.com/photo-1591139308596-9b663fa6d0a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SXJhbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    'Sweden': 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U3dlZGVufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'Japan': 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SmFwYW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'};

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const baseURL = 'http://localhost:8080/article';

  useEffect(() => {
    setLoading(true)
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>Page is loading</p>

  return (
    <div className='articles'>
      {data.map((item, index) => (
        <>
          <div className='article-cart'>
          <img className='article-image' src={images[item.articleTitle]} width='368' height='250'/>
            <p className='article-title' key={index}>{item.articleTitle}</p>
            <p className='article-text' key={item.articleId}>{item.articleText}</p>
          </div>
        </>
      ))}
    </div>
  )
}

export default DestinationComponent
