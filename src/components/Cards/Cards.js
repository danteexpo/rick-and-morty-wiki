import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

const Cards = ({ results, page }) => {

    let display;
    
    console.log(results);

    if(results) {
        display = results.map((result) => {
            let { id, name, image, location, status } = result;
            return <Link style={{ textDecoration:"none" }} to={`${page}${id}`} key={id} className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark">
                <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                    <img src={image} alt="" className={`img-fluid ${styles.img}`} />
                    <div className="content" style={{padding:"10px"}}>
                        <div className="fs-4 mb-4 nunito-black">{name}</div>
                        <div className="">
                            <div className="fs-6">Last Location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                </div>
                {(() => {
                    if(status === "Dead"){
                        return (
                            <div className={`badge bg-danger position-absolute ${styles.badge}`}>
                                {status}
                            </div>
                        )
                    }
                    else if(status === "Alive"){
                        return (
                            <div className={`badge bg-success position-absolute ${styles.badge}`}>
                                {status}
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className={`badge bg-secondary position-absolute ${styles.badge}`}>
                                {status}
                            </div>
                        )
                    }
                })()}
            </Link>
        })
    } else {
        display = "No characters found.";
    }

    return <>{display}</>
}

export default Cards
