

export const setItem = (chave, valor) => {
    localStorage.setItem(chave,JSON.stringify(valor))
}

export const getItem = (chave) => {
    return JSON.parse(localStorage.getItem(chave))
}