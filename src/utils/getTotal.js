export const getTotal = (cart) => {
    const total = cart?.reduce((acc,next) => {
        acc+=(next.price * next.quantity);
        return acc;
    },0)

    return total.toFixed(2);
}