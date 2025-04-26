const fetchData = async () => {
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://nbhey.ru/tasks.json');
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
const DATA = await fetchData()

export default reducer = (state = data, action) => {
    return state
}

