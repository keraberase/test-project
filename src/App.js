import React from 'react';
import './css/main.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import News from "./components/NewsSection";
import Projects from "./components/Projects";
import Map from "./components/Map";
import Gallery from "./components/Gallery";
import Coordinators from "./components/Coordinators";
import Story from "./components/Story";
import { LanguageProvider } from './LanguageContext';


const App = () => {
    return (
        
        <div className='app-wrapper' id="main">
            <LanguageProvider>
                
                <Header/>
                <Main/>

                <News/>
                <Projects/>
                <Gallery />
                <Story />
                <Coordinators />
                <Map/>
                <Footer/>
            </LanguageProvider>
        </div>
        
    );
}
export default App;
