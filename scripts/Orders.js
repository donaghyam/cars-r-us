import { getInterior, getOrders, getPaintColor, getTechnology, getWheels } from "./database.js";

//Function to add up order costs
const totalOrderCost = (order) => {
    //Define variable to store arrays of each car option
    const interior = getInterior()
    const paint = getPaintColor()
    const technology = getTechnology()
    const wheels = getWheels()

    //Use .find() method to find current order id
    const foundInterior = interior.find(interiorObject => interiorObject.id === order.interiorId)
    const foundPaint = paint.find(paintObject => paintObject.id === order.paintId)
    const foundTechnology = technology.find(technologyObject => technologyObject.id === order.technologyId)
    const foundWheels = wheels.find(wheelObject => wheelObject.id === order.wheelsId)

    //Add up total cost of each package
    const totalCost = foundInterior.price + foundPaint.price + foundTechnology.price + foundWheels.price

    //Create variable to display order cost
    const orderHTML = 
    `<li>
        Order #${order.id} costs $${totalCost}
    </li> `

    return orderHTML
}

//Function to create html list of orders
export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    //Make a new array of html list
    const listItems = orders.map(
        (order) => totalOrderCost(order))
    //Join list items into a string
    html += listItems.join("")
    html += "</ul>"
    return html
}
