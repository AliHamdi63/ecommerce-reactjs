import data from "../../ProductData/Products.json"

export function RoomAction() {

    let rooms = data.filter(el => {
        let x = el.type.filter(i => i === "ROOM")
        // console.log(x[0])
        return x[0];
    })

    // console.log(rooms);

    return {
        type: "ROOM",
        payload: rooms
    };
}