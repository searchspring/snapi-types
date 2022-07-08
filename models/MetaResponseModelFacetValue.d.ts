/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.26
 *
 */

/**
 * 
 * @export
 * @interface MetaResponseModelFacetValue
 */
export interface MetaResponseModelFacetValue {
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetValue
     */
    multiple?: MetaResponseModelFacetValueMultipleEnum;
}

/**
* @export
* @enum {string}
*/
export enum MetaResponseModelFacetValueMultipleEnum {
    Single = 'single',
    Or = 'or',
    And = 'and'
}
