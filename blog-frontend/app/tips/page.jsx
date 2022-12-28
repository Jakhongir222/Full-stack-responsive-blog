import React from 'react'
import "../../styles/tips.css"
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <div className='intro-quote'>
        <h1>Travel Tips</h1>
        <p>Adventures are the best way to learn</p>
        </div>
        <div className='all-cards'>
          <div className='one-card'>
          <a href='/safety'>
          <Image src="/plane.jpg" width="450" height="400" alt="Plane picture"/>
          <h2>10 safety tips when travelling</h2>
          <p>Travelling can be scary but it is not as scary as you think and when armed with information and the tools you need before flying, 
            you can feel safer traveling while making the most of your time exploring the world. So, before you book your dream trip, go through this checklist of things to help make traveling safer in 2023.
            Even though people are ready to make this year their greatest year of travel, 
            there still may be a lingering uneasiness about traveling again. How can we feel safer 
            traveling after so much has happened around the world?</p>
            <div className='read-more'><a href='/safety' title="safety">Read more</a></div>
            </a>
          </div>
          <div className='one-card'>
          <a href='/vaxolm'>
          <Image src="/vaxolm.jpg" width="400" height="400" alt="Picture of Vaxolm"/>
          <h2>Discover your home town</h2>
          <p>Vaxholm, just an hour by the archipelago boat from Stockholm, is often called the capital of the archipelago. 
            It may be due to Vaxholm's history and the fact that here you disembark in a lively archipelago village with genuine restaurants 
            and quaint shops, while at the same time you get to experience the magnificent archipelago nature with hiking trails, paddling trails 
            and fishing waters just inside the knot. And perhaps best of all you can do it all year round.</p>
            <div className='read-more'><a href='/vaxolm' title="vaxolm">Read more</a></div>
            </a>
          </div>
          <div className='one-card'>
          <a href='/camping'>
          <Image src="/camping.jpg" width="400" height="400" alt="picture of camping"/>
          <h2>The most usefull camping tips</h2>
          <p>Camping is a fantastic way to calm the mind, connect with nature and have an adventure. But it is not easy to make it perfect on your first try. 
            Years of trial and error camping on every continent and we have put together our best camping tips to help make the great outdoors more comfortable and fun.
            In this guide, we are going to cover camping essentials, meal planning, how to set up your camp, and much more. So get ready to plan your next camping trip with our help.</p>
            <div className='read-more'><a href='/camping' title="camping">Read more</a></div>
            </a>
          </div>
        </div>
    </div>
  )
}
export default page
