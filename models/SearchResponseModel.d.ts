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
    SearchResponseModelFilter,
    SearchResponseModelMerchandising,
    SearchResponseModelPagination,
    SearchResponseModelResults,
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
     * @type {Array<SearchResponseModelResults>}
     * @memberof SearchResponseModel
     */
    results?: Array<SearchResponseModelResults>;
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
