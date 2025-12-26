/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.42
 *
 */

/**
 * 
 * @export
 * @interface SearchResponseModelSorting
 */
export interface SearchResponseModelSorting {
    /**
     * 
     * @type {string}
     * @memberof SearchResponseModelSorting
     */
    field?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseModelSorting
     */
    direction?: SearchResponseModelSortingDirectionEnum;
}

/**
* @export
* @enum {string}
*/
export enum SearchResponseModelSortingDirectionEnum {
    Asc = 'asc',
    Desc = 'desc'
}
