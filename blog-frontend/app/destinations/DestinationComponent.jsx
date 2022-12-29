"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/destination.css"

function DestinationComponent() {

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
  if (!data) return <p>No profile data</p>

  return (
    <div>
      {data.map((item, index) => (
        <><p key={index}>{item.articleTitle}</p><p key={item.articleId}>{item.articleText}</p></>
      ))}
    </div>
  )
}

export default DestinationComponent
