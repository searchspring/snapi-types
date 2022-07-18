/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.27
 *
 */
import {
    SearchRequestModelFilterValueAllOf,
    SearchResponseModelFilter,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelFilterValue
 */
export interface SearchResponseModelFilterValue extends SearchResponseModelFilter {
    /**
     * 
     * @type {string}
     * @memberof SearchResponseModelFilterValue
     */
    value?: string;
}


