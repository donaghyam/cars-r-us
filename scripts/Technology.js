import { getTechnology, setTechnology } from "./database.js";

const technology = getTechnology()

export const Technology = () => {
    let html = ""
    html += `<select id="technology">
            <option value="0">Select a technology package</option>`
    // Use .map() for converting objects to option elements
    const listItems = technology.map(
        (tech) => {
        return `
                <option value="${tech.id}" id="${tech.name}" >${tech.name}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology") {
            const chosenOption = changeEvent.target.value
            setTechnology(parseInt(chosenOption))
            console.log(chosenOption)
        }
    }
)



//window alert

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "technology") {
//             const chosenOption = changeEvent.target.value
//             setTechnology(parseInt(chosenOption))
//             console.log(chosenOption)
//                 for (const tech of technology){
//                     if (parseInt(chosenOption) === tech.id){
//                         window.alert(`The user chose ${tech.name}`)
//                 }
//             }
//         }
//     }
// )