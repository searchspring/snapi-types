/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.46
 *
 */

/**
 * 
 * @export
 * @interface AutocompleteRequestModelSearchAllOf
 */
export interface AutocompleteRequestModelSearchAllOf {
    /**
     * current input from the user
     * @type {string}
     * @memberof AutocompleteRequestModelSearchAllOf
     */
    input?: string;
    /**
     * Source of the autocomplete query
     * @type {string}
     * @memberof AutocompleteRequestModelSearchAllOf
     */
    source?: AutocompleteRequestModelSearchAllOfSourceEnum;
}

/**
* @export
* @enum {string}
*/
export enum AutocompleteRequestModelSearchAllOfSourceEnum {
    Historical = 'historical',
    Trending = 'trending',
    Suggested = 'suggested',
    Input = 'input'
}
