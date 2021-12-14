import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {

    let { id } = useParams()

    let [fetchedData, updateFetchedData] = useState([])

    let { name, image, location, origin, gender, species, status } = fetchedData

    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {
        (async function() {
        let data = await fetch(api).then(res => res.json());
        updateFetchedData(data);
        })()
    }, [api]);

    return (
        <div className="container d-flex justify-content-center">
            <div className="d-flex flex-column gap-2">
                <h1 className="text-center nunito-black">{name}</h1>
                <img src={image} alt="" className="img-fluid" />
                
                {(() => {
                    if(status === "Dead"){
                        return (
                            <div className={`badge bg-danger fs-5`}>
                                {status}
                            </div>
                        )
                    }
                    else if(status === "Alive"){
                        return (
                            <div className={`badge bg-success fs-5`}>
                                {status}
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className={`badge bg-secondary fs-5`}>
                                {status}
                            </div>
                        )
                    }
                })()}

                <div className="content">
                    <div className="">
                        <span className="nunito-bold">Gender: </span>{gender}
                    </div>
                    <div className="">
                        <span className="nunito-bold">Location: </span>{location?.name}
                    </div>
                    <div className="">
                        <span className="nunito-bold">Origin: </span>{origin?.name}
                    </div>
                    <div className="">
                        <span className="nunito-bold">Species: </span>{species}
                    </div>         
                </div>
            </div>
            
        </div>
    )
}

export default CardDetails
