import Storage from './../storage/Storage';

export const getData = {

    GET: () => {
        return Storage.getItem('paymentData')
            .then(res => res)
    }
}