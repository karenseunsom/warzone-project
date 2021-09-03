import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Match from '../components/Match';
import Paginate from '../components/Paginate';
import Summary from '../components/Summary';
import { SearchArea, Subtitle } from './SearchPage';
// import { Container } from 'react-bootstrap';
import { Title } from './SearchPage';




export default function PlayerDetailsPage() {

    const result = useSelector((state) => state.result)

    const [currentPage, setCurrentPage ] = useState(1)
    const [postsPerPage] = useState(5)
    // console.log(result.data.matches)

    // youtube video
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    let currentPosts = []

    if (result) {
        currentPosts = result.data.matches.slice(indexOfFirstPost, indexOfLastPost)
    } 

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
    <div>
        {result && <Title>{result.data.matches[0].player.username}`s profile</Title>}
        <SearchArea>
            {result && <Summary remove data={result}></Summary>}
        </SearchArea>
        {result && <Subtitle>Previous 20 matches</Subtitle>}
        {result && currentPosts.map((match, index) => {
            return <Match index={index} key={match.matchID} data={match} />
        })}
        {result && <Paginate postsPerPage={postsPerPage} totalPosts={20} paginate={paginate}/>}
    </div>
    )
}
