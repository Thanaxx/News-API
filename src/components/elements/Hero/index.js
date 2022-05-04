import React from 'react'
import {HeroWrap, TextBetween, HeroText, SeeNewsArrow} from './Herostyle'
import {BsArrowDownCircleFill} from 'react-icons/bs'

function Hero() {
  return (
    <>
        <HeroWrap data-aos="zoom-in">
            <HeroText>
                <h3>EXPLORING</h3>

                <TextBetween>
                    <p className='lpar'>THE NEWS</p>
                    <p className='rpar'>“Coverage of breaking news and current headlines from the Philippines and around the world. Top stories, photos, videos, detailed analysis and in-depth.”</p>
                </TextBetween>

                <h3>OF TODAY</h3>
            </HeroText>

            <SeeNewsArrow>
                <BsArrowDownCircleFill className='arrow' />
            </SeeNewsArrow>
        </HeroWrap>
    </>
  )
}

export default Hero