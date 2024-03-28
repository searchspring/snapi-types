/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.34
 *
 */
import {
    AutocompleteResponseModelAllOf,
    AutocompleteResponseModelAllOfAutocomplete,
    SearchResponseModel,
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
 * @interface AutocompleteResponseModel
 */
export interface AutocompleteResponseModel {
    /**
     * 
     * @type {AutocompleteResponseModelAllOfAutocomplete}
     * @memberof AutocompleteResponseModel
     */
    autocomplete?: AutocompleteResponseModelAllOfAutocomplete;
    /**
     * 
     * @type {SearchResponseModelSearch}
     * @memberof AutocompleteResponseModel
     */
    search?: SearchResponseModelSearch;
    /**
     * 
     * @type {Array<SearchResponseModelFilter>}
     * @memberof AutocompleteResponseModel
     */
    filters?: Array<SearchResponseModelFilter>;
    /**
     * 
     * @type {SearchResponseModelPagination}
     * @memberof AutocompleteResponseModel
     */
    pagination?: SearchResponseModelPagination;
    /**
     * 
     * @type {Array<SearchResponseModelSorting>}
     * @memberof AutocompleteResponseModel
     */
    sorting?: Array<SearchResponseModelSorting>;
    /**
     * 
     * @type {Array<SearchResponseModelResult>}
     * @memberof AutocompleteResponseModel
     */
    results?: Array<SearchResponseModelResult>;
    /**
     * 
     * @type {Array<SearchResponseModelFacet>}
     * @memberof AutocompleteResponseModel
     */
    facets?: Array<SearchResponseModelFacet>;
    /**
     * 
     * @type {SearchResponseModelMerchandising}
     * @memberof AutocompleteResponseModel
     */
    merchandising?: SearchResponseModelMerchandising;
}
