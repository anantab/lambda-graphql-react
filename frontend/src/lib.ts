import * as moment from 'moment';

export interface State {
    date: string,
    currency?: string,
    results: [],
    loading: boolean
}

export const DEFAULT_STATE: State = {
    date: '20180507',
    currency: '',
    results: [],
    loading: false
};

export const GRAPHQL_ENDPOINT: string = process.env.REACT_APP_API_URL + '/graphql';


export const formatDate = (dateString: string) => {
    return moment(dateString).format('DD-MMM-YY');
}

export const formatTime = (timeString: string) => {
    return moment(timeString, 'HHmm').format('h:mmA');
}