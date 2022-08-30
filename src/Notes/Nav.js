import React from 'react';
const Nav = () => {
    const Menus = ["Home", "Features", "Pricing", "Contact", "Services"];
    const MenuItem = Menus.map((menu, index) => {
        return (<>
            <li className="nav-item active" key={index}>
                <a className="nav-link" href="/">{menu}</a>
            </li>
        </>);
    })
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow p-3 fixed-top">
            <a className="navbar-brand" href="/">Notes Application</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  mx-auto">
                    {MenuItem}
                </ul>
            </div>
        </nav>
    </div>);
}

export default Nav;