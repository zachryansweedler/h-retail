"use client"
import React from 'react'
import styled from 'styled-components'

function Success({successMessage}) {
  return (
    <Wrapper>
        <h1>Success!</h1>
        <p>{successMessage}</p>
    </Wrapper>
  )
}

export default Success

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 100px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
    justify-content: center;
    background-color: #F6F6F6;
`