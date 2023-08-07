import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './TodoApp.css'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import LogoutComponent from './LogoutComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='*' element={<ErrorComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}