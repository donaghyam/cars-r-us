import { addCustomOrder } from "./database.js"
import { Interior } from "./Interior.js"
import { Orders } from "./Orders.js"
import { PaintColor } from "./PaintColor.js"
import { Technology } from "./Technology.js"
import { Wheels } from "./Wheels.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id==="orderButton"){
            addCustomOrder()
        }
    }
)

export const CarsRUS = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint Color</h2>
                    ${PaintColor()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                    ${Interior()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                    ${Technology()}
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                    ${Wheels()}
            </section>
        </article>
        <br><br><br>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Orders</h2>
                ${Orders()}
        </article>
    `
}