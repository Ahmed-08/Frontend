import React from 'react';
import {Home} from './ui/home/Home.tsx';
import {FeaturedCourses} from './ui/featuredcourses/FeaturedCourses.tsx';
import { EventsSection } from './ui/eventsection/EventsSection.tsx';

export const Main: React.FC = ()=>{
  return (
    <main className='main'>
        <div className='container'>
            <Home />
            <FeaturedCourses />
            <EventsSection />
        </div>
    </main>
  )
}
