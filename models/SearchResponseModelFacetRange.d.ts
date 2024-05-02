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
import {
    SearchRequestModelFilterRangeAllOfValue,
    SearchResponseModelFacet,
    SearchResponseModelFacetRangeAllOf,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelFacetRange
 */
export interface SearchResponseModelFacetRange extends SearchResponseModelFacet {
    /**
     * 
     * @type {number}
     * @memberof SearchResponseModelFacetRange
     */
    step?: number;
    /**
     * 
     * @type {SearchRequestModelFilterRangeAllOfValue}
     * @memberof SearchResponseModelFacetRange
     */
    range?: SearchRequestModelFilterRangeAllOfValue;
    /**
     * 
     * @type {SearchRequestModelFilterRangeAllOfValue}
     * @memberof SearchResponseModelFacetRange
     */
    active?: SearchRequestModelFilterRangeAllOfValue;
}
