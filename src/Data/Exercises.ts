
export const getData = async() => {
    const response = await fetch('https://api.api-store.workers.dev/api/fitlog');
    const data = await response.json()

    return data;
}
