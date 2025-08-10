export const PUT_QUOTE = "PUT_QUOTE"

export const putQuote = quote => ({
    type: PUT_QUOTE,
    payload: quote
})

export const fetchQuote = () => {
    return dispatch => {
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(res => res.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(() => dispatch(putQuote("failed not found")));
    }
}