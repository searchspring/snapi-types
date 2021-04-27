/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.15
 *
 */

/**
 * 
 * @export
 * @interface SearchResponseModelPagination
 */
export interface SearchResponseModelPagination {
    /**
     * 
     * @type {number}
     * @memberof SearchResponseModelPagination
     */
    totalResults?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseModelPagination
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseModelPagination
     */
    defaultPageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResponseModelPagination
     */
    pageSize?: number;
}