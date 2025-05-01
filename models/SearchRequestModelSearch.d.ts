/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.39
 *
 */
import {
    SearchRequestModelSearchQuery,
} from './';


/**
 * 
 * @export
 * @interface SearchRequestModelSearch
 */
export interface SearchRequestModelSearch {
    /**
     * 
     * @type {SearchRequestModelSearchQuery}
     * @memberof SearchRequestModelSearch
     */
    query?: SearchRequestModelSearchQuery;
    /**
     * 
     * @type {string}
     * @memberof SearchRequestModelSearch
     */
    subQuery?: string;
    /**
     * Original query if spell correction occured.
     * @type {string}
     * @memberof SearchRequestModelSearch
     */
    originalQuery?: string;
    /**
     * Integrated spell correction parameter is used as a fallback when the query parameter fails to return results.
     * @type {string}
     * @memberof SearchRequestModelSearch
     */
    fallbackQuery?: string;
    /**
     * Changes how Redirects behave in the response.
     * @type {string}
     * @memberof SearchRequestModelSearch
     */
    redirectResponse?: SearchRequestModelSearchRedirectResponseEnum;
}

/**
* @export
* @enum {string}
*/
export enum SearchRequestModelSearchRedirectResponseEnum {
    Full = 'full',
    Minimal = 'minimal',
    Direct = 'direct'
}
