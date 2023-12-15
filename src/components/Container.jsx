import React from 'react'
import '../style/Container.css'

export default function Container() {
    return (
        <div>
            <div className="wrapper">
                <div className="box d-flex justify-content-between">
                    <div className="box1 border border-success p-2 mb-2">
                        <img src="https://imgd.aeplcdn.com/642x336/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80" alt="car img" />
                        <p>Description 1</p>
                        <button type="button" class="btn btn-primary">Primary</button>

                    </div>
                    <div className="box2 border border-success p-2 mb-2">
                        <img src="https://imgd.aeplcdn.com/642x336/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80" alt="car img" />
                        <p>Description 1</p>
                        <button type="button" class="btn btn-primary">Primary</button>

                    </div>
                    <div className="box3 border border-success p-2 mb-2">
                        <img src="https://imgd.aeplcdn.com/642x336/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80" alt="car img" />
                        <p>Description 1</p>
                        <button type="button" class="btn btn-primary">Primary</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
