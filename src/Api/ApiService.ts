class ApiService {
    readonly urlType: string = "https://api.punkapi.com/v2/beers"
    readonly OptionsType: object = {}

    constructor(baseUrl?:string, baseOptions?:null}){
        if(this.baseUrl !== undefined){
            this.urlType = this.baseUrl
            this.OptionsType = this.baseOptions
        }
       
    }
    interface forGet{
        url:string,
        headers:object
    }

    async getAll (url:string,headers:object):void {
        const response = await fetch(this.baseUrl + url, {
            method: 'GET',
            headers: headers
        });
        let result = await response.json()
    
        return result
    }

   
}

const Service = new ApiService()
export default Service