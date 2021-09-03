import React, { useState } from 'react'
// import { useState } from 'react'
import styled from 'styled-components'
import Summary from '../components/Summary'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { actionSetSearch } from '../redux/actions/search'
import { actionSetResult } from '../redux/actions/result'
import pink from '../images/pink.jpeg'
import AlertHeader from '../components/AlertHeader';
import Loading from '../components/Loading';



//styling

export const Title = styled.h1`
color: #F2CAFF ;
font-family: 'Helvetica Neue', sans-serif;
font-size: 3.5em;
font-weight: bold;
letter-spacing: -1px;
line-height: 1;
text-align: center;
// border-style: double;
`

export const Subtitle = styled.h3`
font-size: 1.5em;
color: #F2CAFF;

`

const Input = styled.input`
color: palevioletred;
font-size: 1.6em;
border: 2px solid palevioletred;
border-radius: 3px;
background: transparent;
::placeholder { 
    color: #D0D0D0 ;
    opacity: 1;
}
`

const Button = styled.button`
background: transparent;
display: inline-block;
color: palevioletred;
font-size: 1.6em;
margin: 1em;
border: 2px solid palevioletred;
border-radius: 3px; 
margin-left: 3px;
// display: block;
text-decoration: none;
&:hover {
    color: white;
    background-color: tomato;
}

`

const HeaderPicture = styled.img`
width: auto;
max-height: 100%;
display: block;
overflow: hidden;
border-radius: 10px;
`

export const SearchArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 30px;
`


export default function SearchPage() {

    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [platform, setPlatform] = useState('psn')
    const dispatch = useDispatch()

    const search = useSelector((state) => state.search)
    const result = useSelector((state) => state.result)
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        fetch(`https://call-of-duty4.p.rapidapi.com/warzone?platform=${platform}&gamertag=${search}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "call-of-duty4.p.rapidapi.com",
                "x-rapidapi-key": "30caeee35amsh028fb26bb6a6d1fp10bee7jsne480b16660b8"
            }
        })
            .then(response => {
                console.log('response')
                return response.json()
            })
            .then(data => {
                console.log(data)
                if (data.error) {
                    setError('user does not exist')
                } else {
                    console.log('ok')
                    dispatch(actionSetResult(data))
                    setError('')
                }
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            });
    }

    // psn PlayStation
    // steam Steam
    // battle BattleNET
    // xbl XBOX
    // acti Activision ID
    // uno numerical representation of Activision ID

    return (
        <div>
            <Container className="headerArea">
                <Row>
                    <Col>
                        <Title>View your Warzone stats here <span className="nowrap">ﾉಥ益ಥﾉ ┻━┻</span></Title>
                    </Col>
                    <Col>
                        <HeaderPicture src={pink}></HeaderPicture>
                    </Col>
                </Row>
            </Container>
            <SearchArea>
                <Subtitle><label htmlFor="platform">Select your platform: </label></Subtitle>
                <select name="platform" id="platform" onChange={(e) => setPlatform(e.target.value)}> 
                    <option disabled value="0">Platform:</option>
                    <option defaultValue value="psn">Playstation</option>
                    <option value="steam">Steam</option>
                    <option value="battle">BattleNET</option>
                    <option value="xbl">XBOX</option>
                    <option value="acti">Activision ID</option>
                    <option value="uno">Activision ID Numerical</option>
                </select>

                <form onSubmit={handleSubmit}>
                    <Input value={search} onChange={(e => dispatch(actionSetSearch(e.target.value)))} placeholder="ex: fightertastic" />
                    <Button type="submit">Search</Button>
                </form>
            </SearchArea>
            <SearchArea>
                {(isLoading) ? <Loading></Loading> : <div></div>}
                {error && <AlertHeader />}
                {result && <Summary data={result}></Summary>}
            </SearchArea>
            {/* {result && <PlayerDetailsPage />} */}
            {/* <Tracer src={tracer} /> */}
        </div>
    )
}
