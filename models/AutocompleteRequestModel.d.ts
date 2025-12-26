/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.43
 *
 */
import {
    AutocompleteRequestModelAllOf,
    AutocompleteRequestModelSearch,
    AutocompleteRequestModelSuggestions,
    SearchRequestModel,
    SearchRequestModelFacets,
    SearchRequestModelFilter,
    SearchRequestModelMerchandising,
    SearchRequestModelPagination,
    SearchRequestModelPersonalization,
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
     * @type {AutocompleteRequestModelSearch}
     * @memberof AutocompleteRequestModel
     */
    search?: AutocompleteRequestModelSearch;
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
    /**
     * 
     * @type {SearchRequestModelPersonalization}
     * @memberof AutocompleteRequestModel
     */
    personalization?: SearchRequestModelPersonalization;
    /**
     * 
     * @type {AutocompleteRequestModelSuggestions}
     * @memberof AutocompleteRequestModel
     */
    suggestions?: AutocompleteRequestModelSuggestions;
}
