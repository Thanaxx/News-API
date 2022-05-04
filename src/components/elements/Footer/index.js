import React from 'react';
import {FooterWrap, Logo, Links, Linkname, Copy} from './FooterStyle'

function Footer() {
  return (
    <>
        <FooterWrap>
            <Logo>
                <img src="/images/logo.png" alt="" />
            </Logo>

            <Links>
                <Linkname>
                    About us
                </Linkname>

                <Linkname>
                    Services
                </Linkname>

                <Linkname>
                    Let's Talk
                </Linkname>
            </Links>

            <Copy>
                <h3>© NewsBreak. 2022 Explore with us</h3>
            </Copy>
        </FooterWrap>
    </>
  )
}

export default Footer