/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.44
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
 * @interface MetaResponseModelFacetGrid
 */
export interface MetaResponseModelFacetGrid extends MetaResponseModelFacet {
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetGrid
     */
    label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetaResponseModelFacetGrid
     */
    collapsed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetGrid
     */
    multiple?: MetaResponseModelFacetGridMultipleEnum;
}

/**
* @export
* @enum {string}
*/
export enum MetaResponseModelFacetGridMultipleEnum {
    Single = 'single',
    Or = 'or',
    And = 'and'
}
