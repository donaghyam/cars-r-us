import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

export const Wheels = () => {
    let html = ""
    html += `<select id="wheels">
            <option value="0">Select a wheel package</option>`
    // Use .map() for converting objects to option elements
    const listItems = wheels.map(
        (wheel) => {
        return `
                <option value="${wheel.id}" id="${wheel.name}" >${wheel.name}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            setWheels(parseInt(chosenOption))
            console.log(chosenOption)
        }
    }
)


//window alert

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "wheels") {
//             const chosenOption = changeEvent.target.value
//             setWheels(parseInt(chosenOption))
//             console.log(chosenOption)
//                 for (const wheel of wheels){
//                     if (parseInt(chosenOption) === wheel.id){
//                         window.alert(`The user chose ${wheel.name}`)
//                 }
//             }
//         }
//     }
// )