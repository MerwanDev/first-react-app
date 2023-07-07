import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "../components/pages/page_main";
import NoMatch from './NoMatch'
import Navigation from "../layout/navigations";

const Routeur = () => {
    return (
        <BrowserRouter>
            <Navigation>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='*' element={<NoMatch />} />
                </Routes>
            </Navigation>
            
        </BrowserRouter>
    )
}

export default Routeur
