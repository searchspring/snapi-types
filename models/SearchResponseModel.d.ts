/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.38
 *
 */
import {
    SearchResponseModelFacet,
    SearchResponseModelFilter,
    SearchResponseModelMerchandising,
    SearchResponseModelPagination,
    SearchResponseModelResult,
    SearchResponseModelSearch,
    SearchResponseModelSorting,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModel
 */
export interface SearchResponseModel {
    /**
     * 
     * @type {SearchResponseModelSearch}
     * @memberof SearchResponseModel
     */
    search?: SearchResponseModelSearch;
    /**
     * 
     * @type {Array<SearchResponseModelFilter>}
     * @memberof SearchResponseModel
     */
    filters?: Array<SearchResponseModelFilter>;
    /**
     * 
     * @type {SearchResponseModelPagination}
     * @memberof SearchResponseModel
     */
    pagination?: SearchResponseModelPagination;
    /**
     * 
     * @type {Array<SearchResponseModelSorting>}
     * @memberof SearchResponseModel
     */
    sorting?: Array<SearchResponseModelSorting>;
    /**
     * 
     * @type {Array<SearchResponseModelResult>}
     * @memberof SearchResponseModel
     */
    results?: Array<SearchResponseModelResult>;
    /**
     * 
     * @type {Array<SearchResponseModelFacet>}
     * @memberof SearchResponseModel
     */
    facets?: Array<SearchResponseModelFacet>;
    /**
     * 
     * @type {SearchResponseModelMerchandising}
     * @memberof SearchResponseModel
     */
    merchandising?: SearchResponseModelMerchandising;
}
