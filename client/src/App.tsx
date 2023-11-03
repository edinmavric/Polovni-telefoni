import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import Feed from './components/feed';
import Footer from './components/footer';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route element={<Feed />} path="/" />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
