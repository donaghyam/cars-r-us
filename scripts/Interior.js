import { getInterior, setInterior } from "./database.js";

const interiors = getInterior()

export const Interior = () => {
    let html = ""
    html += `<select id="interior">
            <option value="0">Select an interior package</option>`
    // Use .map() for converting objects to option elements
    const listItems = interiors.map(
        (interior) => {
        return `
                <option value="${interior.id}" id="${interior.name}" >${interior.name}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            const chosenOption = changeEvent.target.value
            setInterior(parseInt(chosenOption))
            console.log(chosenOption)
        }
    }
)

//window alert

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "interior") {
//             const chosenOption = changeEvent.target.value
//             setInterior(parseInt(chosenOption))
//             console.log(chosenOption)
//                 for (const interior of interiors){
//                     if (parseInt(chosenOption) === interior.id){
//                         window.alert(`The user chose ${interior.name}`)
//                 }
//             }
//         }
//     }
// )