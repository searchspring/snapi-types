/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.28
 *
 */
import {
    SearchResponseModelFacet,
    SearchResponseModelFacetRangeBucketsAllOf,
    SearchResponseModelFacetRangeBucketsAllOfValues,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelFacetRangeBuckets
 */
export interface SearchResponseModelFacetRangeBuckets extends SearchResponseModelFacet {
    /**
     * 
     * @type {Array<SearchResponseModelFacetRangeBucketsAllOfValues>}
     * @memberof SearchResponseModelFacetRangeBuckets
     */
    values?: Array<SearchResponseModelFacetRangeBucketsAllOfValues>;
}
