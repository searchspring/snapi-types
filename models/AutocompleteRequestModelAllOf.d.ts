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
import {
    AutocompleteRequestModelSearch,
    AutocompleteRequestModelSuggestions,
} from './';


/**
 * 
 * @export
 * @interface AutocompleteRequestModelAllOf
 */
export interface AutocompleteRequestModelAllOf {
    /**
     * 
     * @type {AutocompleteRequestModelSearch}
     * @memberof AutocompleteRequestModelAllOf
     */
    search?: AutocompleteRequestModelSearch;
    /**
     * 
     * @type {AutocompleteRequestModelSuggestions}
     * @memberof AutocompleteRequestModelAllOf
     */
    suggestions?: AutocompleteRequestModelSuggestions;
}
