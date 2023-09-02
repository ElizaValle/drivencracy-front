import axios from "axios";

const BACK_END_URL = 'http://localhost:5000';

/**
 * Lista todas as enquetes
 */
export function getPolls() {
    return axios.get(`${BACK_END_URL}/poll`);
}


/**
 * Mostra o resultado de uma enquete
 */
export function getPollResult(pollId) {
    return axios.get(`${BACK_END_URL}/poll/${pollId}/result`);
}


/**
 * Cria uma nova enquete
 */
export function postPoll(body) {
    return axios.post(`${BACK_END_URL}/poll`, body)
}
