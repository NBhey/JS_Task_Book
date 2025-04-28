const fetchData = async () => {
    try {
        const response = await fetch('/data/tasks.json');
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
const data = await fetchData()

 const requestReducer = (state = data, action) => {
    return state
}

export default requestReducer