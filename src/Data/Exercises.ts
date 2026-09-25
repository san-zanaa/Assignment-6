
export const getData = async() => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json()

    return data;
}
