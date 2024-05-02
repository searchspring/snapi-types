/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.36
 *
 */

/**
 * 
 * @export
 * @interface SearchRequestModelMerchandising
 */
export interface SearchRequestModelMerchandising {
    /**
     * 
     * @type {boolean}
     * @memberof SearchRequestModelMerchandising
     */
    disabled?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchRequestModelMerchandising
     */
    segments?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SearchRequestModelMerchandising
     */
    landingPage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SearchRequestModelMerchandising
     */
    intellisuggest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SearchRequestModelMerchandising
     */
    disableInlineBanners?: boolean;
}
