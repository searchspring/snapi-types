/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.40
 *
 */
import {
    MetaResponseModelFacet,
    MetaResponseModelFacetDefaults,
    MetaResponseModelFacetValue,
} from './';


/**
 * 
 * @export
 * @interface MetaResponseModelFacetList
 */
export interface MetaResponseModelFacetList extends MetaResponseModelFacet {
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetList
     */
    label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetaResponseModelFacetList
     */
    collapsed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetList
     */
    multiple?: MetaResponseModelFacetListMultipleEnum;
}

/**
* @export
* @enum {string}
*/
export enum MetaResponseModelFacetListMultipleEnum {
    Single = 'single',
    Or = 'or',
    And = 'and'
}
