/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.23
 *
 */

/**
 * 
 * @export
 * @interface SearchResponseModelFilter
 */
export interface SearchResponseModelFilter {
    /**
     * 
     * @type {string}
     * @memberof SearchResponseModelFilter
     */
    type: SearchResponseModelFilterTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseModelFilter
     */
    field?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseModelFilter
     */
    label?: string;
}

/**
* @export
* @enum {string}
*/
export enum SearchResponseModelFilterTypeEnum {
    Value = 'value',
    Range = 'range'
}
