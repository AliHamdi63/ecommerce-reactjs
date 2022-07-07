let data = localStorage.getItem("data")
let parsedData = JSON.parse(data)

// console.log(parsedData)

export function CountReducer(state = parsedData, action) {
    if (action.type === "PLUS") {
        state.map((el) => {
            if (el.id === action.payload) {
                el.quantity++;
                // console.log("is done??!!")
            }
            return el;

        })
        // console.log(state)
        localStorage.setItem("data", JSON.stringify(state))
        // return { count: state.count + 1 }
    }
    if (action.type === "MINUS") {
        state.map((el) => {
            // console.log(action.payload)
            if (el.id === action.payload) {
                if (el.quantity <= 1) {
                    el.quantity = 1
                }
                else {
                    el.quantity--;
                }
                // console.log("is done??!!")
            }
            return el;
        })
        // console.log(state)
        localStorage.setItem("data", JSON.stringify(state))

        // return { count: state.count - 1 }
    }
    return state;
}