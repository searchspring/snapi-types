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
import {
    SearchResponseModelFacet,
    SearchResponseModelFacetValueAllOf,
    SearchResponseModelFacetValueAllOfValues,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelFacetValue
 */
export interface SearchResponseModelFacetValue extends SearchResponseModelFacet {
    /**
     * 
     * @type {Array<SearchResponseModelFacetValueAllOfValues>}
     * @memberof SearchResponseModelFacetValue
     */
    values?: Array<SearchResponseModelFacetValueAllOfValues>;
}
