/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.30
 *
 */
import {
    MetaResponseModelFacet,
    MetaResponseModelPagination,
    MetaResponseModelSortOption,
} from './';


/**
 * 
 * @export
 * @interface MetaResponseModel
 */
export interface MetaResponseModel {
    /**
     * 
     * @type {Array<MetaResponseModelSortOption>}
     * @memberof MetaResponseModel
     */
    sortOptions?: Array<MetaResponseModelSortOption>;
    /**
     * 
     * @type {{ [key: string]: MetaResponseModelFacet; }}
     * @memberof MetaResponseModel
     */
    facets?: { [key: string]: MetaResponseModelFacet; };
    /**
     * 
     * @type {MetaResponseModelPagination}
     * @memberof MetaResponseModel
     */
    pagination?: MetaResponseModelPagination;
}
