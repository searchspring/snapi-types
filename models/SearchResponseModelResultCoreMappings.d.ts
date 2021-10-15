/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.21
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
     * SKU for result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    sku?: string;
    /**
     * Name for result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    name?: string;
    /**
     * URL of result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    url?: string;
    /**
     * Add to cart URL of result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    addToCartUrl?: string;
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
     * Normal thumbnail image URL for result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    imageUrl?: string;
    /**
     * Smaller thumbnail image URL for result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    thumbnailImageUrl?: string;
    /**
     * Review rating of result
     * @type {number}
     * @memberof SearchResponseModelResultCoreMappings
     */
    rating?: number;
    /**
     * Number of reviews for result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    ratingCount?: string;
    /**
     * Description of result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    description?: string;
    /**
     * Stock Message of result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    stockMessage?: string;
    /**
     * Brand of result
     * @type {string}
     * @memberof SearchResponseModelResultCoreMappings
     */
    brand?: string;
    /**
     * Popularity rating of result
     * @type {number}
     * @memberof SearchResponseModelResultCoreMappings
     */
    popularity?: number;
}
