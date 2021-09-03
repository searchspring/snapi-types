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
 * @interface SearchRequestModelSorts
 */
export interface SearchRequestModelSorts {
    /**
     * Field to sort results by.
     * @type {string}
     * @memberof SearchRequestModelSorts
     */
    field?: string;
    /**
     * Direction to sort results by field (ascending / descending).
     * @type {string}
     * @memberof SearchRequestModelSorts
     */
    direction?: SearchRequestModelSortsDirectionEnum;
}

/**
* @export
* @enum {string}
*/
export enum SearchRequestModelSortsDirectionEnum {
    Asc = 'asc',
    Desc = 'desc'
}
