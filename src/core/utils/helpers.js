export function moneyFormat(x) {
    if(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return 0;
}

export function numberPercentage(x) {
    if(x) {
        return x.toString() + '%';
    }

    return '0%';
}