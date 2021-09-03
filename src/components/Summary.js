import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { actionPinUser, actionUnpinUser } from '../redux/actions/pinned'
import tracerCat from '../images/tracer-cat.jpeg'
import { Link } from 'react-router-dom'


const Stats = styled.p`
display: inline-block;
font-family: verdana;
font-size: 2.1em;
font-weight: 700;
color: palevioletred;
text-shadow: 1px 1px 1px #4B4F51,
1px 2px 1px #4B4F51,
1px 3px 1px #4B4F51,
1px 4px 1px #4B4F51,
1px 5px 1px #4B4F51,
1px 6px 1px #4B4F51,
1px 7px 1px #4B4F51,
1px 8px 1px #4B4F51,
1px 9px 1px #4B4F51,
1px 10px 1px #4B4F51,
1px 18px 6px rgba(16,16,16,0),
1px 22px 10px rgba(16,16,16,0),
1px 25px 35px rgba(16,16,16,0),
1px 30px 60px rgba(16,16,16,0);
margin-bottom: 0
`

const Button = styled.button`
background: #76498A ;
color: white;
font-weight: bold;
font-size: 0.8em;
margin: 2px;
padding: 0.25em 1em;
border: 1px solid #E275D1 ;
border-radius: 3px;
font-family: verdana;
text-decoration: none;
&:hover {
    color: white;
    background-color: tomato;
}
`

const Picture = styled.img`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%; 
border-style: solid;
width: 75px;
height: 75px;
display: inline-block;
`
const Username = styled.h2`
color: linear-gradient(45deg, rgb(206, 61, 129), rgb(102, 6, 102));
display: inline-block;
`

const UserCard = styled.div`
// box-sizing: border-box;
padding: 25px;
background-color: rgba(255, 255, 255, 0.55);
// border: 10px #31C5D7;
// transition: width 2s, background-color 1s, box-shadow 1s;
border-radius: 15px;
// color: black;
max-width: max-content;
margin: 10px;
display: inline-block;
`

const ButtonArea = styled.div`
display: flex;
// justify-content: center;
// align-items: center;
flex-direction: row;
// padding-top: 3px;
`
const Paragraph = styled.div`
font-family: sans-serif;
font-size: 15px;
display: inline-block;
color: gray;
padding-left: 5px;
`

const Last20 = styled.p`
margin-bottom: 0px;
`

export default function Summary(props) {
    // console.log(props.data.data.matches)
    const dispatch = useDispatch()
    const { username } = props.data.data.matches[0].player
    const { kills, deaths, headshots, kdRatio, executions, objectiveReviver } = props.data.data.summary.all // was props.data

    let kd = kdRatio.toFixed(2)

    const handlePin = (user) => {
        dispatch(actionPinUser(user))
    }

    const handleUnpin = (user) => {
        dispatch(actionUnpinUser(user))
    }

    return (
        <div>
            <UserCard>
            <Picture src={tracerCat} />
            <Username className="gameFont">&nbsp;{username}<Paragraph><ButtonArea>
            {props.delete ? 
            (<Button onClick={() => {handleUnpin(props.data)}}>Unpin</Button>) : 
            (<Button onClick={() => {handlePin(props.data)}}>Pin</Button>)}
            {props.remove ?
            (<div></div>) :    
            (<Button as={Link} to={`/${username}`}>Last 20</Button>)
            }
            
            </ButtonArea></Paragraph></Username>
            <Last20>&nbsp;summary of <b>last 20 games</b></Last20>
            <Row>
                <Col>
                    <Stats className="nowrap">{kills} Kills</Stats><br />
                    <Stats className="nowrap">{deaths} Deaths</Stats><br />
                    <Stats className="nowrap">{headshots} Headshots</Stats>
                </Col>
                <Col>
                    <Stats className="nowrap">{kd} KD</Stats><br />
                    <Stats className="nowrap">{objectiveReviver} Revives</Stats><br />
                    <Stats className="nowrap">{executions} Executions</Stats><br />
                </Col>
            </Row>
            </UserCard>
        </div>
    )
}
