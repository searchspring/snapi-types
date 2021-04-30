/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.17
 *
 */

/**
 * Mapping of core fields for the result object
 * @export
 * @interface SearchResponseModelResultCoreMappings
 */
export interface SearchResponseModelResultCoreMappings {
    /**
     * Unique identifier of result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    uid?: string;
    /**
     * Normal price of result
     * @type {number}
     * @memberof SearchResponseModelResultCoreMappings
     */
    price?: number;
    /**
     * MSRP price of result
     * @type {number}
     * @memberof SearchResponseModelResultCoreMappings
     */
    msrp?: number;
    /**
     * URL of result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    url?: string;
    /**
     * Smaller thumbnail image URL for result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    thumbnailImageUrl?: string;
    /**
     * Normal thumbnail image URL for result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    imageUrl?: string;
    /**
     * Name for result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    name?: string;
    /**
     * SKU for result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    sku?: string;
    /**
     * Brand of result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    brand?: string;
}
