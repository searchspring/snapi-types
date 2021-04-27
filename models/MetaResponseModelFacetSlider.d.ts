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
    MetaResponseModelFacet,
    MetaResponseModelFacetDefaults,
    MetaResponseModelFacetSliderAllOf,
} from './';


/**
 * 
 * @export
 * @interface MetaResponseModelFacetSlider
 */
export interface MetaResponseModelFacetSlider extends MetaResponseModelFacet {
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetSlider
     */
    label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetaResponseModelFacetSlider
     */
    collapsed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetSlider
     */
    formatSeparator?: string;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelFacetSlider
     */
    formatValue?: string;
}
