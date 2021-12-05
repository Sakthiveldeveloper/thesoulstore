import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Caarousel from './Caarousel';
import Caategories from './Caategories';
import Merchant from './Merchantise';
const App = () =>{
    return(
        <div>
            <Header/>
            <Caarousel/>
            <Caategories/>
            <Merchant/>
            <div>
                <a href="#" >
                    <img src="https://i.ibb.co/8MhWk9F/excluisve-member.webp" type="image/webp" alt="excluisve member"/>
                </a>
            </div>
            <Footer/>
        </div>
    )
}

export default App