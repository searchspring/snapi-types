/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.19
 *
 */

/**
 * 
 * @export
 * @interface SearchResponseModelSearch
 */
export interface SearchResponseModelSearch {
    /**
     * 
     * @type {string}
     * @memberof SearchResponseModelSearch
     */
    query?: string;
    /**
     * The suggested query after spelling correction.
     * @type {string}
     * @memberof SearchResponseModelSearch
     */
    didYouMean?: string;
    /**
     * Original query if spell correction occured.
     * @type {string}
     * @memberof SearchResponseModelSearch
     */
    originalQuery?: string;
}
