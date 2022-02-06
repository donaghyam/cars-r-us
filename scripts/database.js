const database = {
    paintColor: 
        [
            {
            id: 1,
            name: "Silver",
            price: 1000
            },
            {
            id: 2,
            name: "Midnight Blue",
            price: 1100
            },
            {
            id: 3,
            name: "Firebrick Red",
            price: 1500
            },
            {
            id: 4,
            name: "Spring Green",
            price: 900
            },
        ],
    interior: 
        [
            {
            id: 1,
            name: "Beige Fabric",
            price: 900,
            },
            {
            id: 2,
            name: "Charcoal Fabric",
            price: 890,
            },
            {
            id: 3,
            name: "White Leather",
            price: 1100,
            },
            {
            id: 4,
            name: "Black Leather",
            price: 1300,
            }
        ],
    technology: 
        [
            {
            id: 1,
            name: "Basic Package",
            price: 2000
            },
            {
            id: 2,
            name: "Navigation Panel",
            price: 1500
            },
            {
            id: 3,
            name: "Visibility Package",
            price: 1300
            },
            {
            id: 4,
            name: "Ultra Package",
            price: 2500
            }
        ],
    wheels: 
        [
            {
            id: 1,
            name: "17-inch Pair Radial",
            price: 700
            },
            {
            id: 2,
            name: "17-inch Pair Radial Black",
            price: 1000
            },
            {
            id: 3,
            name: "18-inch Pair Spoke Silver",
            price: 1200
            },
            {
            id: 4,
            name: "18-inch Pair Spoke Black",
            price: 1340
            }
        ],
    customOrder: 
        [
            {
            id: 1,
            paintId: 4,
            interiorId: 4,
            technologyId: 4,
            wheelsId: 4
            }
        ],
    orderBuilder: 
        [
            {}
        ]
}


export const getPaintColor = () => {
    return database.paintColor.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrder.map(order => ({...order}))
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrder.length - 1
    newOrder.id = database.customOrder[lastIndex].id + 1

    // Add the new order object to custom order state
    database.customOrder.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}
    
    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))

}