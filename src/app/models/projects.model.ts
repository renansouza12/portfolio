export type Projects = {
    id:number,
    name:string,
    description:string,
    images:{
        coverImage:string,
        firstImage:string,
        secondImage:string,
        thirdImage:string,
    },
    website:string,
    repository:string,
    techs:string
    level:string
}


export type Certificates ={
    id:number
    name:string
    image:string
}