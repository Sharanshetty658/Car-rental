import React from 'react';
import '../style/Container.css';

export default function Container() {
    return (
        <div className="card" >
            <img
                src="https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80"
                className="card-img-top border border-bg-success p-2 mb-2 border-2 border-black"
                alt="..." />
            <div className="card-body">
                <h5 className="card-title my-1 fs-3">Card title</h5>
                <a href="/" className="btn btn-primary my-2 rounded-5">
                    Go somewhere
                </a>
            </div>
        </div>
    );
}
