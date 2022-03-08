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
    MetaResponseModelFacetDefaults,
    MetaResponseModelFacetValue,
} from './';


/**
 * 
 * @export
 * @interface MetaResponseModelFacetPalette
 */
export interface MetaResponseModelFacetPalette extends MetaResponseModelFacet {
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetPalette
     */
    label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetaResponseModelFacetPalette
     */
    collapsed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetPalette
     */
    multiple?: MetaResponseModelFacetPaletteMultipleEnum;
}

/**
* @export
* @enum {string}
*/
export enum MetaResponseModelFacetPaletteMultipleEnum {
    Single = 'single',
    Or = 'or',
    And = 'and'
}
