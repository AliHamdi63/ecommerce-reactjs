let data = localStorage.getItem("data")
let parsedData = JSON.parse(data)
let content = () => {
    if (parsedData === null) {
        return [parsedData];
    }
    else {
        return [...parsedData]
    }
}
export function CartReducer(state = content(), action) {

    switch (action.type) {
        case 'ADD':
            // console.log("add");
            // console.log(action);
            // console.log(action.payload);
            state.push(action.payload);
            // console.log(state);
            let notNullData = state.filter(ele => ele != null)
            // console.log(notNullData);

            let x = notNullData.filter(ele => ele.id === action.payload.id)
            let y = notNullData.filter(ele => ele.id !== action.payload.id)
            let newList = [];
            let z = [];
            // console.log(x);
            // console.log(y);
            if (x.length > 1) {
                x[0].quantity++;
                z = [x[0]];
            }
            else {
                z = x;
            }
            if (y.length !== 0) {
                newList = [...z, ...y]
            }
            else {
                newList = [...z]
            }
            // console.log(newList)
            localStorage.setItem("data", JSON.stringify(newList));

            return newList;

        case 'REMOVE':
            // console.log("remove");
            // console.log(action);
            // console.log(state);
            let remainedItems = state.filter(ele => ele.id !== action.payload)
            // console.log(remainedItems)
            localStorage.setItem("data", JSON.stringify(remainedItems));
            return remainedItems;

        default:
            return state;
    }
}