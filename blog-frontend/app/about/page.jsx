import React from 'react'
import Image from 'next/image'
import "../../styles/about.css"

const page = () => {
  return (
    <div className='container'>
        <div>
            <div className='intro-text'>
        <h1>Hello, I am Jakhongir Burkhonov ...</h1></div>
            <div className='text-image'>
            <div className='text'>
                <p>27 year old, enthusiastic, driven and adaptable full-stack java developer, particularly passionate about OOP and TDD. 
                    I am a logical and strategic thinker with varied technical expertise, and I take pride in my strong attention to detail and problem-solving skills . 
                    Having graduated with a Tourism Management degree , I came across with different people all around the world, I learned how to form client relationships and improve my communication skills. 
                    I thrive on working with different teams and learning from people with varied skill sets and backgrounds.</p>
            </div>
            <div className='image'>
            <Image className='profile-picture' src="/Jak.jpeg" width="400" height="400" alt="Picture of Jakhongir"/>
            </div>
            </div>
            <div className='contacts'>
                <p>Please contact me on </p>
                <div className='contact'>
                <a href='mailto:jakhongir.burkhanov@appliedtechnology.se'>
                <Image src="/gmail.png" width="33" height="33" alt="Github Icon"/>
                </a>
                <a href='https://github.com/Jakhongir222'>
                <Image src="/github.png" width="30" height="30" alt="Github Icon"/>
                </a>
                <a href='https://www.linkedin.com/in/jakburkhanov/'>
                <Image src="/lnkdin.png" width="30" height="30" alt="Linkedin Icon"/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
