import React from 'react'
import {ContactWrap, ContactTag, ContactForm} from './ContactStyle'

function Contactpage() {
  return (
    <>
        <ContactWrap data-aos="zoom-in">
            <ContactTag>
                <h2>Ready to take a free trial?</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem sunt optio sed impedit molestias harum ea est at mollitia, temporibus iste ad facere quaerat numquam?</p>
            </ContactTag>

            <ContactForm>
                <form>
                    <h4>Sign up for a free account</h4>

                    <div className="name">
                        <input className='firstN' type="text" placeholder='First name' />
                        <input className='lastN' type="text" placeholder='Last name' />
                    </div>

                    <input type="email" placeholder='Email address' />
                    <input type="password" placeholder='Create password' />

                    <button>Register</button>
                </form>
            </ContactForm>
        </ContactWrap>
    </>
  )
}

export default Contactpage