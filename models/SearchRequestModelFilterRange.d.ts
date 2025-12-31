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
import {
    SearchRequestModelFilter,
    SearchRequestModelFilterRangeAllOf,
    SearchRequestModelFilterRangeAllOfValue,
} from './';


/**
 * 
 * @export
 * @interface SearchRequestModelFilterRange
 */
export interface SearchRequestModelFilterRange extends SearchRequestModelFilter {
    /**
     * 
     * @type {SearchRequestModelFilterRangeAllOfValue}
     * @memberof SearchRequestModelFilterRange
     */
    value?: SearchRequestModelFilterRangeAllOfValue;
}


