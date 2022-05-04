import React from 'react';
import {ContactInfo, Detail, Buttons, ButtonRight} from './Style'

function JoinUs() {
  return (
    <>
        <ContactInfo>
            <Detail>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore inventore natus quis, laborum quibusdam aliquam eveniet ipsa, maiores iste ratione fuga neque commodi sapiente!</p>
            </Detail>

            <Buttons>
                <button className='leftB'>
                    Join Today
                </button>

                <ButtonRight to='/talk'>
                    <button className='rightB'>
                        Contact us
                    </button>
                </ButtonRight>
            </Buttons>
        </ContactInfo>
    </>
  )
}

export default JoinUs