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
 * @interface SearchRequestModelTracking
 */
export interface SearchRequestModelTracking {
    /**
     * shopper identifier
     * @type {string}
     * @memberof SearchRequestModelTracking
     */
    userId?: string;
    /**
     * current website url
     * @type {string}
     * @memberof SearchRequestModelTracking
     */
    domain?: string;
    /**
     * current session id
     * @type {string}
     * @memberof SearchRequestModelTracking
     */
    sessionId?: string;
    /**
     * randomly generated page id
     * @type {string}
     * @memberof SearchRequestModelTracking
     */
    pageLoadId?: string;
}
