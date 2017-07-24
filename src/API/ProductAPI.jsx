export const ProductAPI = {
    productList:[
        {
            id: "LN332",
            title: "Isla Bra",
            price:"£29"
        },
        {
            id: "LN336",
            title: "Nordic Rose Bra",
            price:"£30"
        },
        {
            id: "FY240",
            title: "Zentangle Bra",
            price:"£34"
        },
        {
            id: "PN112",
            title: "Clara Bra",
            price:"£32"
        },
        {
            id: "FY158",
            title: "Deco Delight Bra",
            price:"£34"
        },
        {
            id: "LN328",
            title: "Sienna Bra",
            price:"£32"
        }
    ],
    getAllProducts: function(){return this.productList},

    getSingleProduct: function(){
        const product = p => p.id === id
        return this.productList.find(product)
    }
}