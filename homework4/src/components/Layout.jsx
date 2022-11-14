import React from "react";
import { NavLink, Outlet } from 'react-router-dom'
import { Chatrooms } from "./Chatrooms.jsx";

export const Layout = () => {
    return (
        <>
            <header className='navbar'>
                <div className='navbar__links'>
                    <NavLink className='navbar__link' to='/'>
                        Главная
                    </NavLink>
                    <NavLink className='navbar__link' to='/form'>
                        Форма сообщения
                    </NavLink>
                </div>
            </header>
            <main className="App">
                <Chatrooms />
                <div className="container flex">
                    <Outlet />
                </div>
            </main>
        </>
    )
}
