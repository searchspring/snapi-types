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
 * @interface SearchRequestModelFacets
 */
export interface SearchRequestModelFacets {
    /**
     * 
     * @type {number}
     * @memberof SearchRequestModelFacets
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchRequestModelFacets
     */
    valueLimit?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchRequestModelFacets
     */
    include?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchRequestModelFacets
     */
    exclude?: Array<string>;
}