 export interface Listings{
    id: string,
    name: string,
    desc: string,
    price: string,
    views: number,
}

export const fakeListing: Listings[] =[{
    id:"123",
    name: "Old boat",
    desc: "A very old boat, Indian rupee",
    price: "10 Million",
    views: 0
},
{
    id:"345",
    name: "Pokemon Crad",
    desc: "Pickachu golden pokemon card, classic pokemon collector",
    price: "23 Million",
    views: 0

},
{
    id:"456",
    name: "Turing Machine",
    desc: "German cipher machine",
    price: "2 Million",
    views: 0

},
{
    id:"789",
    name: "Cryptocurrency",
    desc: "4 Bitcoin, 20k per coin",
    price: "80 Thousand",
    views: 0

}]