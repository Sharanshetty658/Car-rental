import React from 'react';


export default function Navbar(props) {
    return (
        <div className='Navbar-container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <p className='navbar-brand d-flex justify-content-center'>{props.title}</p>
                    <form className="d-flex mx-auto" role="search">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
}
