/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.22
 *
 */
import {
    MetaResponseModelFacet,
    MetaResponseModelFacetDefaults,
    MetaResponseModelFacetHierarchyAllOf,
    MetaResponseModelFacetValue,
} from './';


/**
 * 
 * @export
 * @interface MetaResponseModelFacetHierarchy
 */
export interface MetaResponseModelFacetHierarchy extends MetaResponseModelFacet {
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetHierarchy
     */
    label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetaResponseModelFacetHierarchy
     */
    collapsed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetHierarchy
     */
    multiple?: MetaResponseModelFacetHierarchyMultipleEnum;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetHierarchy
     */
    hierarchyDelimiter?: string;
}

/**
* @export
* @enum {string}
*/
export enum MetaResponseModelFacetHierarchyMultipleEnum {
    Single = 'single',
    Or = 'or',
    And = 'and'
}
