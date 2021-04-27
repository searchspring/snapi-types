/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.16
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
    SearchResponseModelResults,
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
     * @type {Array<SearchResponseModelResults>}
     * @memberof AutocompleteResponseModel
     */
    results?: Array<SearchResponseModelResults>;
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
