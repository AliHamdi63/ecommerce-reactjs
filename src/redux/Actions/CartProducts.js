export function add(data) {
 
    return{
        type: 'ADD',
        payload: data
    };
}

export function remove(id) {

    return{
        type: 'REMOVE',
        payload: id
    };
}