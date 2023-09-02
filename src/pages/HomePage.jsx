import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPolls } from "../service/pollService";
import Poll from "../components/Poll";
import { axiosErrorHandler } from "../utils/errorHandler";
import LinkButton from "../components/LinkButton";

export default function HomePage() {
    const [polls, setPolls] = useState(null);

    useEffect(() => {
        getPolls()
            .then(response => setPolls(response.data))
            .catch(axiosErrorHandler);
    }, []);

    return (
        <HomeContainer>
            <NewPollContainerRow>
            <LinkButton path="/criar-poll">Criar nova enquente</LinkButton>
            </NewPollContainerRow>
            
            <PollsContainer>    
                {polls?.map(poll => <Poll key={poll._id} poll={poll} />)}
            </PollsContainer>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

const NewPollContainerRow = styled.div`
    display: flex;
    justify-content: center;
`;

const PollsContainer = styled.article`
    flex-grow: 1;
    background-color: #fff;
    color: #000;
    border-radius: 5px;
    display: flex;
    gap: 20px;
    padding: 28px 0px;
    flex-direction: column;
    article {
        display: flex;
        justify-content: space-between;   
        strong {
            font-weight: 700;
            text-transform: uppercase;
        }
    }
`;