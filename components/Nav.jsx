'use client'
import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Link from 'next/link'

function Nav() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
        <Link href="/"><h1 onClick={scrollToTop}>H</h1></Link>
        <Button black>Contact Sales</Button>
    </Wrapper>
  )
}

export default Nav

const Wrapper = styled.div`
    padding: 30px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`