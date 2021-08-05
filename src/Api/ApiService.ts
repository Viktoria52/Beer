export default class ApiService {
    //"https://api.punkapi.com/v2/beers"

    // public constructor(protected baseUrl: string = 'https://api.punkapi.com/v2/beers', protected headers: object) {
    //     this.baseUrl = baseUrl
    // }
    // public async getBeer(url: string) {
    //     const response = await fetch(this.baseUrl + url, {
    //         method: 'GET',
    //         // headers: headers
    //     });
    //     let result = await response.json()     
    //     console.log(result);

    //     return result
    // }

}

export const getBeerAsync = async () => {
    const data = await fetch('https://api.punkapi.com/v2/beers',
    { method:'GET'}
     )
    let result = await data.json()
    // console.log(result);
    return result
    
}