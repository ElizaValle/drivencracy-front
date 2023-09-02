import styled from "styled-components"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getPollChoices, postChoice } from "../service/choiceService";
import { axiosErrorHandler } from "../utils/errorHandler";
import LinkButton from "../components/LinkButton";

//erros validados pelo back-end no POST /choice
const postChoiceErrorMessages = {
    403: 'Enquete expirada! Você não pode criar novas opções',
    404: 'Enquete não existe',
    409: 'Opção já existe',
    422: 'Título da opção é obrigatório',
};

//erros validados pelo back-end no GET /poll/:id/choice
const getChoicesErrorMessages = {
    404: 'Enquete não existe',
};

export default function CreateChoicePage() {
    const [pollTitle, setPollTitle] = useState('');
    const [choices, setChoices] = useState([]);
    const { pollId } = useParams();

    useEffect(() => {
        getPollChoices(pollId)
            .then(response => {
                setChoices(response.data);
            })
            .catch(error => axiosErrorHandler(error, getChoicesErrorMessages));
    }, []);

    function createChoice(event) {
        event.preventDefault();

        postChoice({ title: pollTitle, pollId })
            .then(response => {
                setChoices([...choices, response.data]);
                setPollTitle('');
            })
            .catch(error => axiosErrorHandler(error, postChoiceErrorMessages));
    }

    function handleForm(event) {
        setPollTitle(event.target.value);
    }

    return (
        <CreateChoiceContainer>
            <ResultButtonContainerRow>
                <LinkButton path={`/`}>
                    Voltar pra home
                </LinkButton>
            </ResultButtonContainerRow>

            <form onSubmit={createChoice}>
                <input placeholder="Opção" type="text" name="title" required onChange={handleForm} value={pollTitle}/>
                <button>Criar</button>
            </form>

            <CreatedOptionContainer>
                {choices.length > 0 ? <>
                    <h1>Opções criadas</h1>
                    {choices.map(choice => <p key={choice._id}>{choice.title}</p>)}
                </>
                    :
                    <>Você ainda não criou nenhuma opção para essa enquete</>
                }
            </CreatedOptionContainer>
        </CreateChoiceContainer>
    )
}

const CreatedOptionContainer = styled.div`
    padding-top: 20px;
    h1{
        padding-bottom: 20px;
    }
    p{
        line-height: 28px;
    }
`;

const CreateChoiceContainer = styled.section`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ResultButtonContainerRow = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;
