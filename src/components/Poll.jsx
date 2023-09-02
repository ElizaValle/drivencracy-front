import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Poll({ poll }) {
    return <PollContainer>
        <CustomLink to={`/poll/${poll._id}`}>
            <PollTitle>{poll.title}</PollTitle>
            <PollCallout>Ver Enquete</PollCallout>
        </CustomLink>
    </PollContainer>;
}

const PollContainer = styled.article`
    display: flex;
    align-items: center;
    min-height: 100px;
    border-radius: 10px;

    position: relative;
    cursor: pointer;

    background: rgb(39,110,166);
    background: linear-gradient(90deg, rgba(39,110,166,1) 0%, rgba(93,173,236,1) 35%, rgba(136,200,250,1) 100%);
    transition: ease-in-out .15s;

    &:hover{
        filter: brightness(.9);
    }
`;

const CustomLink = styled(Link)`
    width: 100%;
    height: 100%;
    padding: 20px;
    padding-bottom: 40px;
`;

const PollTitle = styled.h1`
    color: white;
    max-width: 80%;
    line-height: 1.4rem;
    text-overflow: ellipsis;
`;

const PollCallout = styled.p`
    color: #174e7a;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;
