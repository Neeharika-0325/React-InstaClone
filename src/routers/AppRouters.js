import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from '../components/LandingPage/Landing';
import NewPost from '../components/Posts/New/NewPost'
export default function AppRouter(){
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='new' element={<NewPost/>}/>
            {/* <Route path='posts' element={<PostView/>}>
                <Route path='new' element={<LandingPage/>}/>
                <Route path='all' element={<LandingPage/>}/>
            </Route> */}
            
        </Routes> 
    </BrowserRouter>
}