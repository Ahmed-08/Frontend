import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Root} from './Root.tsx';
import { Main, Events, EventPage } from '../pages/index.ts';
import { Courses } from '../pages/Courses/Courses.tsx';

export const App: React.FC = ()=>{
  return (
    <Routes>
        <Route path='/' element={<Root />}>
          <Route path='' element={<Main />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/events/:id' element={<EventPage />}/>
          <Route path='/courses' element={<Courses />} />
        </Route>
    </Routes>
  )
}
