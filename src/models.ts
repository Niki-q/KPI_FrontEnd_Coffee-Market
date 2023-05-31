export interface CProduct{
    id:string,
    title: string,
    description:string,
    image:string,
    price:number

}

export interface CProductLine{
    prod1:CProduct,
    prod2:CProduct
}

export interface CMBProduct{
    id:string,
    title: string,
    description:string,
    image:string,
    price:number,
    old_price:number
}

export interface TabProduct{
    id:number,
    title: string,
    description:string,
    image:string,
    price:number,

    svg:{
        first:{
            path:string,
            text: {
                description:string,
                sub_title:string
            }
        },
        second:{
            path:string,
            text:{
                description:string,
                sub_title:string
            }
        }
    }

}
