/*Buy some milk chocolate
Add some mint flavoring
Combine the chocolate and mint
Bake the mixture
Break the hardened sheet into 6 pieces  
--create a function for each step.
*/

const buyChocolate = () => {
    const candy = {
        type: "Milk Chocolate"
    }
    return candy
}

const addFlavoring = (candy) => {
    candy.flavor = "Mint"
    return candy
}

const makeBarkMixture = (candy) => {
    if (candy.flavor === "Mint") {
        candy.mix = true
    } else {
        candy.mix = false
    }
    return candy
}

const bakeCandy = (candy) => {
    if (candy.mix === true) {
        candy.bake = true
    } else {
        candy.bake = false
    }
    return candy
}

const breakBark = (candy) => {
    if (candy.bake === true){
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }
}

let chocolate = buyChocolate()
let mintFlavoring = addFlavoring(chocolate)
console.log(mintFlavoring)
let createMix = makeBarkMixture(mintFlavoring)
let bakeMix = bakeCandy(createMix)
let makeCandy = breakBark(bakeMix)

console.log(makeCandy)
