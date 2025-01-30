export interface TodayTimes {
    title: string
    date: string
    location: Location
    range: Range
    items: Item[]
  }
  
  export interface Location {
    title: string
    city: string
    tzid: string
    latitude: number
    longitude: number
    cc: string
    country: string
    admin1: string
    asciiname: string
    geo: string
    geonameid: number
  }
  
  export interface Range {
    start: string
    end: string
  }
  
  export interface Item {
    title: string
    date: string
    category: string
    title_orig?: string
    hebrew: string
    memo?: string
    hdate?: string
    subcat?: string
    link?: string
    leyning?: Leyning
    yomtov?: boolean
  }
  
  export interface Leyning {
    "1": string
    "2": string
    "3": string
    "4": string
    "5": string
    torah: string
    haftarah: string
    maftir: string
    "6"?: string
    "7"?: string
    triennial?: Triennial
  }
  
  export interface Triennial {
    "1": string
    "2": string
    "3": string
    "4": string
    "5": string
    "6": string
    "7": string
    maftir: string
  }
  

export interface TodayTimes1 {
    items: any[];
    // Add other properties based on the API response
  }
  
  


  
