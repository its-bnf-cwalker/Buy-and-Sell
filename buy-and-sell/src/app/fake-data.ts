 export interface Listings{
    id: string,
    name: string,
    description: string,
    price: string,
    views: number,
}

export const fakeListing: Listings[] =[{
    id:"123",
    name: "Old boat",
    description: "A very old boat, Indian rupee",
    price: "10 Million",
    views: 0
},
{
    id:"345",
    name: "Pokemon Crad",
    description: "Pickachu golden pokemon card, classic pokemon collector",
    price: "23 Million",
    views: 0

},
{
    id:"456",
    name: "Turing Machine",
    description: "German cipher machine",
    price: "2 Million",
    views: 0

},
{
    id:"789",
    name: "Cryptocurrency",
    description: "4 Bitcoin, 20k per coin",
    price: "80 Thousand",
    views: 0

}]