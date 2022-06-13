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

export function millionFormat(x) {
    if(x) {
        if(+x > 999 && +x < 1000000) {
            x = +x/1000;
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' Mille';
        }

        if(+x > 99999 && +x < 1000000000) {
            x = +x/1000000;
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' Million';
        }

        if(+x > 99999999) {
            x = +x/1000000000;
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' Millard';
        }
        
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    return 0;
}

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}