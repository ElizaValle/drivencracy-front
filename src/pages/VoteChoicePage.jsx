import styled from "styled-components"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getPollChoices, voteChoice } from "../service/choiceService";
import Choice from "../components/Choice";
import { useNavigate } from 'react-router-dom';
import LinkButton from "../components/LinkButton";
import { axiosErrorHandler } from "../utils/errorHandler";

//erros validados pelo back-end no POST /choice/:id/vote
const postVoteErrorMessage = {
    403: 'Enquete expirada! Você não pode votar nas opções',
    404: 'Enquete não existe',
};

//erros validados pelo back-end no GET /poll/:id/choice
const getChoicesErrorMessages = {
    404: 'Enquete não existe',
};

export default function VoteChoicePage() {
    const [choices, setChoices] = useState([]);
    const [selectedChoiceId, setSelectedChoiceId] = useState(null);
    const { pollId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPollChoices(pollId)
            .then(response => setChoices(response.data))
            .catch(error => axiosErrorHandler(error, getChoicesErrorMessages));
    }, []);

    function submitVote(event) {
        event.preventDefault();

        voteChoice(selectedChoiceId)
            .then(response => navigate(`/poll/${pollId}/result`))
            .catch(error => axiosErrorHandler(error, postVoteErrorMessage));
    }

    // criando uma lista de props pra passar no componente Choice, fica mais fácil usar assim
    const choiceProps = { selectedChoiceId, setSelectedChoiceId };

    return <ChoiceVoteContainer>

        {choices.length > 0 ?
            <>
                <ResultButtonContainerRow>
                    <LinkButton path={`/poll/${pollId}/result`}>
                        Ver resultado da enquete
                    </LinkButton>
                </ResultButtonContainerRow>

                <PageTitle>Escolha uma opção</PageTitle>
                <ChoicesForm onSubmit={submitVote}>
                    {choices.map(choice => <Choice key={choice._id} choice={choice} {...choiceProps} />)}

                    <VoteButton disabled={!selectedChoiceId}>
                        {selectedChoiceId ? "Votar" : "Escolha uma opção"}
                    </VoteButton>
                </ChoicesForm>
            </>
            :
            <>Esta enquete ainda não tem nenhuma opção para votar</>
        }
    </ChoiceVoteContainer>;
}

const PageTitle = styled.h1`
    text-align: center;
    margin: 60px 0px 0px;
`

const ChoicesForm = styled.form`
    padding-top: 32px;
`;

const ResultButtonContainerRow = styled.div`
    display: flex;
    justify-content: center;
`;

const ChoiceVoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const VoteButton = styled.button`
    ${({ disabled }) => disabled && "background-color: lightgray;"}
`;
