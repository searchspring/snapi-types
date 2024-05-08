/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.37
 *
 */

/**
 * 
 * @export
 * @interface SearchRequestModelSearchQuery
 */
export interface SearchRequestModelSearchQuery {
    /**
     * Query value will search the index for terms that match the query. Will support up to 256 characters.
     * @type {string}
     * @memberof SearchRequestModelSearchQuery
     */
    string?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SearchRequestModelSearchQuery
     */
    spellCorrection?: boolean;
}
