const fetchData = async () => {
    try {
        const response = await fetch('/data/tasks.json');
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
} 
let data = {}
data = await fetchData()

console.log(data)
 const requestReducer = (state = data, action) => {
    return  state 
}

export default requestReducer