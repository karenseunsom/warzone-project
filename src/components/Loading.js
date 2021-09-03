import React from 'react'
import { Placeholder, Container } from 'react-bootstrap'
import styled from 'styled-components'

const LoadingBox = styled.div`
padding: 20px;
background-color: rgba(255, 255, 255, 0.15);
border-radius: 15px;
// max-width: max-content;
overflow: hidden;
max-width: 570px;
max-height: 300px;
margin: 10px;
display: block;
`

export default function Loading() {
    return (
        <>
        <Container>
        <LoadingBox>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} size="lg" />
            </Placeholder>
            <br /><br /><br />
            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
        </LoadingBox>
        </Container>
        </>
    )
}
