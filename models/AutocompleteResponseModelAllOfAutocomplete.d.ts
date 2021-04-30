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
import {
    AutocompleteResponseModelAllOfAutocompleteAlternatives,
    AutocompleteResponseModelAllOfAutocompleteSuggested,
} from './';


/**
 * 
 * @export
 * @interface AutocompleteResponseModelAllOfAutocomplete
 */
export interface AutocompleteResponseModelAllOfAutocomplete {
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResponseModelAllOfAutocomplete
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteResponseModelAllOfAutocomplete
     */
    correctedQuery?: string;
    /**
     * 
     * @type {AutocompleteResponseModelAllOfAutocompleteSuggested}
     * @memberof AutocompleteResponseModelAllOfAutocomplete
     */
    suggested?: AutocompleteResponseModelAllOfAutocompleteSuggested;
    /**
     * 
     * @type {Array<AutocompleteResponseModelAllOfAutocompleteAlternatives>}
     * @memberof AutocompleteResponseModelAllOfAutocomplete
     */
    alternatives?: Array<AutocompleteResponseModelAllOfAutocompleteAlternatives>;
}
