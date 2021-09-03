import React from 'react'
import { ListGroup, Card } from 'react-bootstrap'

export default function Match(props) {
    let mode = props.data.mode
    if (mode === 'br_rebirth_rbrthquad') {
        mode = 'REBIRTH QUADS'
    }
    if (mode === 'br_brbbtrio') {
        mode = 'BR TRIOS'
    }

    const { kills, damageDone, deaths, timePlayed, score, wallBangs, teamPlacement} = props.data.playerStats


    let minutes = Math.floor(timePlayed / 60)
    let remainder = timePlayed % 60

    if (remainder < 10) {
        remainder = ('0' + remainder)
    }

    return (
        <div>
            <Card>
                <Card.Header>{mode} {minutes}:{remainder}</Card.Header>
                <Card.Body>
                Player Stats
                <ListGroup horizontal>
                            {kills === 1 ? (<ListGroup.Item>{kills} kill</ListGroup.Item>) : (<ListGroup.Item>{kills} kills</ListGroup.Item> )}
                            <ListGroup.Item>{damageDone} damage</ListGroup.Item>
                            {deaths === 1 ? (<ListGroup.Item>{deaths} death</ListGroup.Item>) : (<ListGroup.Item>{deaths} deaths</ListGroup.Item> )}
                            <ListGroup.Item>{score} score</ListGroup.Item>
                            <ListGroup.Item>{wallBangs} wall bangs</ListGroup.Item>
                        </ListGroup>
                Team Stats
                <ListGroup horizontal>
                    <ListGroup.Item>Place: {teamPlacement}</ListGroup.Item>
                </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}
