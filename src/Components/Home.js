import React, { useEffect } from 'react'
import { myImage,facebook ,github,linkedin,instagram} from '../Images/index'

export default function Home() {

    const parallaxEffect=()=>{
        const parallax = document.getElementsByClassName("Home")[0];
        window.addEventListener('scroll',()=>{
            let offset = window.pageYOffset;
            parallax.style.backgroundPositionY = offset*0.7+"px";
        })
    }

    useEffect(()=>{
        parallaxEffect();
    },[]);

    return (
        <section className='Home'>
            <div className="homeContent">
                <div className='homeBoxWrap'>
                    <div className="homeBox">
                        <div className="homeHello"> Hello, I am </div>
                        <div className="homeName">Divyesh Patel.</div>
                        <div className="homeDesc"> I am Full Stack Developer based in Ahmedabad, Gujarat, India. Currently, I am a Computer Engineering Student who is surfing the ocean of Software Development and Engineering.</div>
                    </div>
                </div>
                <div className="homeImage">
                    <img src={myImage} alt="" className='myImage' />
                </div>
            </div>
            <div className='homeSocial'>
                <div className='homeLine'></div>
                    <a href="https://instagram.com/divyeshpatel.exe"><img src={instagram} alt="" className='homeSocialIcons'/></a>
                    <a href="/"><img src={facebook} alt="" className='homeSocialIcons'/></a>
                    <a href="/"><img src={github} alt="" className='homeSocialIcons'/></a>
                    <a href="/"><img src={linkedin} alt="" className='homeSocialIcons'/></a>
                <div className='homeLine'></div>
            </div>
        </section>
    )
}
