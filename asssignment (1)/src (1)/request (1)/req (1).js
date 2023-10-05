export const req = async (s) => {
    var url = `https://www.omdbapi.com/?apikey=48c2c66&s=${s}`;
    const request = await fetch(url);
    const resp = await request.json(); 
    return resp
}
export const fav = async () => {
    var url = `http://localhost:5000/fav`;
    const request = await fetch(url);
    const resp = await request.json(); 
    return resp.message
}
export const byimdb = async (s) => {
    const {fav_id} = s
    var url = `https://www.omdbapi.com/?i=${fav_id}&apikey=48c2c66`;
    const request = await fetch(url);
    const resp = await request.json(); 
    return resp
}