import axios from "axios";

const BACK_END_URL = 'http://localhost:5000';

/**
 * Lista todas as opções de uma enquete
 */
export function getPollChoices(pollId) {
    return axios.get(`${BACK_END_URL}/poll/${pollId}/choice`);
}


/**
 * Cria uma opção da enquete
 */
export function postChoice(body) {
    return axios.post(`${BACK_END_URL}/choice`, body)
}


/**
 * Vota em uma opção da enquete
 */
export function voteChoice(choiceId) {
    return axios.post(`${BACK_END_URL}/choice/${choiceId}/vote`)
}
