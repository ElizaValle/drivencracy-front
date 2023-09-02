import { styled } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateChoicePage from './pages/CreateChoicePage';
import HomePage from './pages/HomePage';
import CreatePollPage from './pages/CreatePollPage';
import Header from './components/Header';
import PollResultPage from './pages/PollResultPage';
import VoteChoicePage from './pages/VoteChoicePage';

export default function App() {
    return (
        <PagesContainer>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/poll/:pollId" element={<VoteChoicePage />} />
                    <Route path="/poll/:pollId/result" element={<PollResultPage />} />
                    <Route path="/criar-poll" element={<CreatePollPage />} />
                    <Route path="/poll/:pollId/criar-choices" element={<CreateChoicePage />} />
                </Routes>
            </BrowserRouter>
        </PagesContainer>
    )
}

const PagesContainer = styled.main`
    width: calc(100vw - 50px);
    max-width: 1000px;
    margin: auto;
    max-height: 100vh;
    padding: 25px;
`