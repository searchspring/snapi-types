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
 * @interface SearchRequestModelFilter
 */
export interface SearchRequestModelFilter {
    /**
     * 
     * @type {string}
     * @memberof SearchRequestModelFilter
     */
    type: SearchRequestModelFilterTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SearchRequestModelFilter
     */
    field?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SearchRequestModelFilter
     */
    background?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum SearchRequestModelFilterTypeEnum {
    Value = 'value',
    Range = 'range'
}
