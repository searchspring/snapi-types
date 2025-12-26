/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.42
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
     * source of the autocomplete request ("historical", "popular", "suggested" or "typed")
     * @type {string}
     * @memberof AutocompleteRequestModelSearchAllOf
     */
    source?: string;
}
