/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.19
 *
 */
import {
    SearchRequestModelFilterRangeAllOfValue,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelFacetRangeAllOf
 */
export interface SearchResponseModelFacetRangeAllOf {
    /**
     * 
     * @type {number}
     * @memberof SearchResponseModelFacetRangeAllOf
     */
    step?: number;
    /**
     * 
     * @type {SearchRequestModelFilterRangeAllOfValue}
     * @memberof SearchResponseModelFacetRangeAllOf
     */
    range?: SearchRequestModelFilterRangeAllOfValue;
    /**
     * 
     * @type {SearchRequestModelFilterRangeAllOfValue}
     * @memberof SearchResponseModelFacetRangeAllOf
     */
    active?: SearchRequestModelFilterRangeAllOfValue;
}
