/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.43
 *
 */
import {
    AutocompleteRequestModelSearchAllOf,
    SearchRequestModelSearch,
    SearchRequestModelSearchQuery,
} from './';


/**
 * 
 * @export
 * @interface AutocompleteRequestModelSearch
 */
export interface AutocompleteRequestModelSearch {
    /**
     * 
     * @type {SearchRequestModelSearchQuery}
     * @memberof AutocompleteRequestModelSearch
     */
    query?: SearchRequestModelSearchQuery;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteRequestModelSearch
     */
    subQuery?: string;
    /**
     * Original query if spell correction occured.
     * @type {string}
     * @memberof AutocompleteRequestModelSearch
     */
    originalQuery?: string;
    /**
     * Integrated spell correction parameter is used as a fallback when the query parameter fails to return results.
     * @type {string}
     * @memberof AutocompleteRequestModelSearch
     */
    fallbackQuery?: string;
    /**
     * Changes how Redirects behave in the response.
     * @type {string}
     * @memberof AutocompleteRequestModelSearch
     */
    redirectResponse?: AutocompleteRequestModelSearchRedirectResponseEnum;
    /**
     * current input from the user
     * @type {string}
     * @memberof AutocompleteRequestModelSearch
     */
    input?: string;
    /**
     * source of the autocomplete request ("historical", "popular", "suggested" or "typed")
     * @type {string}
     * @memberof AutocompleteRequestModelSearch
     */
    source?: string;
}

/**
* @export
* @enum {string}
*/
export enum AutocompleteRequestModelSearchRedirectResponseEnum {
    Full = 'full',
    Minimal = 'minimal',
    Direct = 'direct'
}
