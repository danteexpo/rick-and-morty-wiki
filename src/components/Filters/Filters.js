import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {

    let clear = () => {
        setStatus("") 
        setGender("") 
        setSpecies("") 
        setPageNumber(1)
        window.location.reload(false)
    }

    return (
        <div className='col-lg-3 col-12 mb-5'>
            <div className="text-center fs-4 mb-2 nunito-black">Filter</div>
            <div onClick={clear} style={{ cursor: "pointer" }} className="text-center text-primary text-decoration-underline mb-4">Clear Filters</div>
            {/*Accordion*/}
            <div className="accordion" id="accordionExample">
                <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
                <Gender setGender={setGender} setPageNumber={setPageNumber}/>
            </div>
        </div>
    )
}

export default Filters
