import axios from 'axios'

export const userData = async (data) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };
    try {


        await axios.post('https://us-central1-userdataform-8c680.cloudfunctions.net/entries', data, config)
            .then((res) => {
                console.log('successful');
            }).catch((err) => {
                console.error(err);
            })
    } catch (error) {
        console.log(error)
    }
}