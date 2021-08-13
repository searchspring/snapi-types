/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.18
 *
 */
import {
    AutocompleteRequestModelAllOf,
    AutocompleteRequestModelSuggestions,
    SearchRequestModel,
    SearchRequestModelFacets,
    SearchRequestModelFilter,
    SearchRequestModelMerchandising,
    SearchRequestModelPagination,
    SearchRequestModelSearch,
    SearchRequestModelSorts,
    SearchRequestModelTracking,
} from './';


/**
 * 
 * @export
 * @interface AutocompleteRequestModel
 */
export interface AutocompleteRequestModel {
    /**
     * 
     * @type {AutocompleteRequestModelSuggestions}
     * @memberof AutocompleteRequestModel
     */
    suggestions?: AutocompleteRequestModelSuggestions;
    /**
     * 
     * @type {string}
     * @memberof AutocompleteRequestModel
     */
    siteId?: string;
    /**
     * 
     * @type {Array<SearchRequestModelSorts>}
     * @memberof AutocompleteRequestModel
     */
    sorts?: Array<SearchRequestModelSorts>;
    /**
     * 
     * @type {SearchRequestModelSearch}
     * @memberof AutocompleteRequestModel
     */
    search?: SearchRequestModelSearch;
    /**
     * 
     * @type {Array<SearchRequestModelFilter>}
     * @memberof AutocompleteRequestModel
     */
    filters?: Array<SearchRequestModelFilter>;
    /**
     * 
     * @type {SearchRequestModelPagination}
     * @memberof AutocompleteRequestModel
     */
    pagination?: SearchRequestModelPagination;
    /**
     * 
     * @type {SearchRequestModelFacets}
     * @memberof AutocompleteRequestModel
     */
    facets?: SearchRequestModelFacets;
    /**
     * 
     * @type {SearchRequestModelMerchandising}
     * @memberof AutocompleteRequestModel
     */
    merchandising?: SearchRequestModelMerchandising;
    /**
     * 
     * @type {SearchRequestModelTracking}
     * @memberof AutocompleteRequestModel
     */
    tracking?: SearchRequestModelTracking;
}
