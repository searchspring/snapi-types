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
    MetaResponseModelBadges,
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
    /**
     * 
     * @type {MetaResponseModelBadges}
     * @memberof MetaResponseModel
     */
    badges?: MetaResponseModelBadges;
}
