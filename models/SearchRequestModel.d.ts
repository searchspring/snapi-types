/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.23
 *
 */
import {
    SearchRequestModelFacets,
    SearchRequestModelFilter,
    SearchRequestModelMerchandising,
    SearchRequestModelPagination,
    SearchRequestModelPersonalization,
    SearchRequestModelSearch,
    SearchRequestModelSorts,
    SearchRequestModelTracking,
} from './';


/**
 * 
 * @export
 * @interface SearchRequestModel
 */
export interface SearchRequestModel {
    /**
     * 
     * @type {string}
     * @memberof SearchRequestModel
     */
    siteId?: string;
    /**
     * 
     * @type {Array<SearchRequestModelSorts>}
     * @memberof SearchRequestModel
     */
    sorts?: Array<SearchRequestModelSorts>;
    /**
     * 
     * @type {SearchRequestModelSearch}
     * @memberof SearchRequestModel
     */
    search?: SearchRequestModelSearch;
    /**
     * 
     * @type {Array<SearchRequestModelFilter>}
     * @memberof SearchRequestModel
     */
    filters?: Array<SearchRequestModelFilter>;
    /**
     * 
     * @type {SearchRequestModelPagination}
     * @memberof SearchRequestModel
     */
    pagination?: SearchRequestModelPagination;
    /**
     * 
     * @type {SearchRequestModelFacets}
     * @memberof SearchRequestModel
     */
    facets?: SearchRequestModelFacets;
    /**
     * 
     * @type {SearchRequestModelMerchandising}
     * @memberof SearchRequestModel
     */
    merchandising?: SearchRequestModelMerchandising;
    /**
     * 
     * @type {SearchRequestModelTracking}
     * @memberof SearchRequestModel
     */
    tracking?: SearchRequestModelTracking;
    /**
     * 
     * @type {SearchRequestModelPersonalization}
     * @memberof SearchRequestModel
     */
    personalization?: SearchRequestModelPersonalization;
}
