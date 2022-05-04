import React from 'react'
import {ServicesWrap, ServiceBox, ServiceCard, Card} from './ServiceStyle'

function Services() {

    const servicesName = [
        {
            id: 1,
            icon: '/images/darkmode.png',
            tag: 'UPDATED NEWS',
            label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia repudiandae soluta, officiis nesciunt neque saepe cupiditate ullam voluptates perspiciatis eveniet veniam, fugit, voluptas natus!',
            ref: '/link'
        },

        {
            id: 2,
            icon: '/images/darkmode.png',
            tag: 'UPDATED NEWS',
            label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia repudiandae soluta, officiis nesciunt neque saepe cupiditate ullam voluptates perspiciatis eveniet veniam, fugit, voluptas natus!',
            ref: '/link'
        },

        {
            id: 3,
            icon: '/images/darkmode.png',
            tag: 'UPDATED NEWS',
            label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia repudiandae soluta, officiis nesciunt neque saepe cupiditate ullam voluptates perspiciatis eveniet veniam, fugit, voluptas natus!',
            ref: '/link'
        },

        {
            id: 4,
            icon: '/images/darkmode.png',
            tag: 'UPDATED NEWS',
            label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia repudiandae soluta, officiis nesciunt neque saepe cupiditate ullam voluptates perspiciatis eveniet veniam, fugit, voluptas natus!',
            ref: '/link'
        }
    ]

  return (
    <>
        <ServicesWrap data-aos="zoom-in">
            <ServiceBox>
                <ServiceCard>
                    {servicesName.map((srvc, index) => {
                        return(
                            <>
                                <Card>
                                    <img src={srvc.icon} alt="service icon" />
                                    <h4>{srvc.tag}</h4>
                                    <p>{srvc.label}</p>
                                    <a href={srvc.ref}>Learn more</a>
                                </Card>
                            </>
                        )
                    })}
                </ServiceCard>
            </ServiceBox>
        </ServicesWrap>
    </>
  )
}

export default Services