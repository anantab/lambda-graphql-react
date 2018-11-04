import axios from 'axios';
import { DEFAULT_STATE, GRAPHQL_ENDPOINT } from "../lib";

export const FETCH_DATA = 'FetchData';
export const NEW_DATA = 'NewData';
export const ERROR_FETCHING_DATA = 'ErrorFetchingData';
export const IS_FETCHING = 'IsFetching';

export const initializeData = () => {
    return (dispatch: (func: any) => void) => {
        dispatch(fetchData(DEFAULT_STATE.date, null));
    };
}

export const fetchData = (date: string, currency: any) => {
    let queryParam = `date:"${date}"`;
    if (typeof currency === 'string' && currency !== '') {
        queryParam += `,currency:"${currency}"`;
    }
    return (dispatch: (func: any) => void) => {
        dispatch(isFetching(true));
        axios({
            method: 'post',
            url: GRAPHQL_ENDPOINT,
            data: {
                query: `{
                data(${queryParam}){
                    currency
                    date
                    buy_time
                    buy_price
                    sell_time
                    sell_price
                    profit}
                }`
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response: any) => {
            dispatch(isFetching(false));
            dispatch(newData(response));
        }).catch((err: any) => {
            dispatch(isFetching(false));
            dispatch(errorFetchingData(err));
        });
    }
}

export const newData = (response: any) => {
    return {
        type: NEW_DATA,
        payload: { response }
    }
}

export const errorFetchingData = (err: any) => {
    return {
        type: ERROR_FETCHING_DATA,
        payload: { err }
    }
}

export const isFetching = (fetching: boolean) => {
    return {
        type: IS_FETCHING,
        payload: { fetching }
    }
}

