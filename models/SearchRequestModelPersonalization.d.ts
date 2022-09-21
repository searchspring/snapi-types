/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.31
 *
 */

/**
 * 
 * @export
 * @interface SearchRequestModelPersonalization
 */
export interface SearchRequestModelPersonalization {
    /**
     * ignore personalized boosts
     * @type {boolean}
     * @memberof SearchRequestModelPersonalization
     */
    disabled?: boolean;
    /**
     * comma-separated list of the products in cart
     * @type {string}
     * @memberof SearchRequestModelPersonalization
     */
    cart?: string;
    /**
     * comma-separated list of the last viewed products
     * @type {string}
     * @memberof SearchRequestModelPersonalization
     */
    lastViewed?: string;
    /**
     * logged in shopper identifier
     * @type {string}
     * @memberof SearchRequestModelPersonalization
     */
    shopper?: string;
}
