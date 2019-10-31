export const fetchData = async () => {
    try {
        const response = await fetch('https://us-central1-userformfunc.cloudfunctions.net/entries')
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }

}