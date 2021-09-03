import React from 'react'
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';

export default function Paginate(props) {
    // const result = useSelector((state) => state.result)

    const pageNumbers = []

    for(let i = 1; i<= Math.ceil( props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i)
    }



    return (
        <div>
            <div className="pageBox">
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <button
                            onClick={() => props.paginate(number)}
                            className='page-link'>
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
