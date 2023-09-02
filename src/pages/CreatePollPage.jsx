import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { postPoll } from "../service/pollService";
import { axiosErrorHandler } from "../utils/errorHandler";

//error validados pelo back-end no POST Poll
const errorMessages = {
    422: 'Título da enquete é obrigatório',
};

export default function CreatePollPage() {
    const [pollForm, setPollForm] = useState({});
    const navigate = useNavigate();

    function createPoll(event) {
        event.preventDefault();

        postPoll(pollForm)
            .then(response => navigate(`/poll/${response.data._id}/criar-choices`))
            .catch(error => axiosErrorHandler(error, errorMessages));
    }

    function handleForm(event) {
        const newPollForm = { ...pollForm, [event.target.name]: event.target.value }

        if (event.target.name === 'expireAt') {
            newPollForm['expireAt'] = event.target.value.replace('T',' ');
        }

        setPollForm(newPollForm);
    }

    return <CreatePollContainer>
        <PageTitle>Criar Enquete</PageTitle>
        <form onSubmit={createPoll}>
            <input placeholder="Título" type="text" name="title" required onChange={handleForm} />
            <input placeholder="Expira em" type="datetime-local" name="expireAt" onChange={handleForm} />
            <button>Criar</button>
        </form>
    </CreatePollContainer>;
}

const CreatePollContainer = styled.main`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const PageTitle = styled.h1`
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;
`