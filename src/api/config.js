const API_KEY="tnOtaqG4zJbaIPiyK6m2TUamQtt2";

// getting all mattches
export const getMatches = ( ) => {

    const URL=`https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(URL).then(data=>data.json()).catch((err)=>console.log(err))
    
}
//load single match detail;

export const getMatchDetail = (id ) => {
    const URL=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(URL).then(data=>data.json()).catch((err)=>console.log(err));   
}