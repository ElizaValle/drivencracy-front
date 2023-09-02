import styled from "styled-components"

export default function Choice({ choice, selectedChoiceId, setSelectedChoiceId }) {
    const choiceIsSelected = choice._id === selectedChoiceId;

    function selectChoice(event) {
        setSelectedChoiceId(choice._id);
    }

    return <ChoiceContainer onClick={selectChoice} selected={choiceIsSelected}>
        <input type='radio' name='option' onChange={selectChoice} checked={choiceIsSelected} value={choice._id} />
        <label>{choice.title}</label>
    </ChoiceContainer>;
}

const ChoiceContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    gap: 10px;
    cursor: pointer;
    border: 2px solid ${({ selected }) => selected ? '#5dadec' : '#afd9fb'};

    label{
        font-weight: bold;
        font-size: 20px;
    }

    input{
        width: 13px;
    }
`;