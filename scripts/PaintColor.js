import { getPaintColor, setPaintColor } from "./database.js";

const paintColor = getPaintColor()

export const PaintColor = () => {
    let html = ""
    html += `<select id="paint">
            <option value="0">Select a paint color</option>`
    // Use .map() for converting objects to option elements
    const listItems = paintColor.map(
        (paint) => {
        return `
                <option value="${paint.id}" id="${paint.name}">${paint.name}</option>`
    })

    html += listItems.join("")
    html += "</select>"

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            const chosenOption = changeEvent.target.value
            setPaintColor(parseInt(chosenOption))
            console.log(chosenOption)
        }
    }
)


// window alert

// document.addEventListener(
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "paint") {
//             const chosenOption = changeEvent.target.value
//             setPaintColor(parseInt(chosenOption))
//             console.log(chosenOption)
//             for (const paint of paintColor){
//                 if (parseInt(chosenOption) === paint.id){
//                     window.alert(`The user chose ${paint.name}`)
//                 }
//             }
//         }
//     }
// )

