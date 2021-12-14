import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageNumber, setPageNumber, info }) => {

    let [width, setWidth] = useState(window.innerWidth);

    let updateDimension = () => {
        setWidth(window.innerWidth) 
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimension)
        return () => window.removeEventListener("resize", updateDimension)
    }, [])

    return (
        <>
        <style jsx>
            {`
            @media (max-width: 768px) {
                .pagination {
                font-size: 12px;
                }
                .next,
                .prev {
                display: none;
                }
            }
            @media (max-width: 768px) {
                .pagination {
                font-size: 14px;
                }
            }
            `}
        </style>
        <ReactPaginate 
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousLinkClassName="text-decoration-none nunito-black text-light"
        previousClassName="btn btn-primary prev"
        nextLabel="Next" 
        nextLinkClassName="text-decoration-none nunito-black text-light"
        nextClassName="btn btn-primary next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        onPageChange={(data) => {
            setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages} 
        />
        </>
    )
}

export default Pagination;
