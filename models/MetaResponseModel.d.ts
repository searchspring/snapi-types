/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.24
 *
 */
import {
    MetaResponseModelFacet,
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
}
