/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.21
 *
 */
import {
    SearchRequestModelFilterRangeAllOf,
    SearchRequestModelFilterRangeAllOfValue,
    SearchResponseModelFilter,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelFilterRange
 */
export interface SearchResponseModelFilterRange extends SearchResponseModelFilter {
    /**
     * 
     * @type {SearchRequestModelFilterRangeAllOfValue}
     * @memberof SearchResponseModelFilterRange
     */
    value?: SearchRequestModelFilterRangeAllOfValue;
}


