import React from 'react'
import {MoreContainer, BtnSeeMore} from './BtnStyle'

function More() {
  return (
    <>
        <MoreContainer>
            <BtnSeeMore to='/news'>
                <button className='button'>
                    <span>See more</span>
                </button>
            </BtnSeeMore>
        </MoreContainer>
    </>
  )
}

export default More