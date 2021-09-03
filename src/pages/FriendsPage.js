import React from 'react'
import { useSelector } from 'react-redux'
import Summary from '../components/Summary'
import { Subtitle } from './SearchPage'

export default function FriendsPage() {
    const users = useSelector(state => state.users)
    // console.log(users)

    return (
        <div className="searchPage">
        <Subtitle style={{fontSize: `2.5em`}}>Your buddies</Subtitle>
            {users.map((user) => {
                return <Summary key={user.data.summary.all.timePlayed} delete data={user}></Summary>
            })}
        </div>
    )
}
