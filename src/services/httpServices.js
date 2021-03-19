import axios from "axios";

import { removeLastChar } from 'src/utils/utils';

export const httpGet = ( uri, options ) => axios.get( uri, options );

export const httpPost = ( uri, params, options ) => axios.post( uri, params, options );

export const httpPut = ( uri, params, options ) => axios.put( uri, params, options );

export const httpPatch = ( uri, params, options ) => axios.patch( uri, params, options );

export const httpDelete = ( uri, options ) => axios.delete( uri, options );

export const handleHttpError = error => ({
	error,
	response: error || error.response || error.response.data
});

export const buildURLQuery = params => {
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map( key => {
            const value = params[key];
            let dato = '';
            let url;
            if( Array.isArray(value) ) {
                url = value.reduce( (accumulator, item) => {
                    return accumulator+= `${key}[]=${item}&`;
                }, '');
                url = removeLastChar(url, '&');
            }
            else if(value || value == 0) {
                dato = value;
                url = esc(key) + '=' + esc(dato);
            }
            return url
        })
        .join('&');
    return query;
}

