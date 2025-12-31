/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.46
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
    /**
     * Indicates the type of search matching that was required for this search. Will return "expanded" when an Expanded Search is applied after finding zero results for the initial strict search.
     * @type {string}
     * @memberof SearchResponseModelSearch
     */
    matchType?: SearchResponseModelSearchMatchTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum SearchResponseModelSearchMatchTypeEnum {
    Expanded = 'expanded',
    Primary = 'primary'
}
