/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.25
 *
 */

/**
 * 
 * @export
 * @interface MetaResponseModelSortOption
 */
export interface MetaResponseModelSortOption {
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelSortOption
     */
    type?: MetaResponseModelSortOptionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelSortOption
     */
    field?: string;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelSortOption
     */
    direction?: MetaResponseModelSortOptionDirectionEnum;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelSortOption
     */
    label?: string;
}

/**
* @export
* @enum {string}
*/
export enum MetaResponseModelSortOptionTypeEnum {
    Field = 'field',
    Relevance = 'relevance'
}/**
* @export
* @enum {string}
*/
export enum MetaResponseModelSortOptionDirectionEnum {
    Asc = 'asc',
    Desc = 'desc'
}
