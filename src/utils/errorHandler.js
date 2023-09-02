export function axiosErrorHandler(error, errorMessages = null) {
    if (error.response.status in errorMessages) {
        return alert(errorMessages[error.response.status])
    }

    alert("Ocorreu um erro ao fazer a requisição, verifique se o back-end está funcionando corretamente e retornando os dados esperados");
    console.log(error.response);
}