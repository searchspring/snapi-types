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
    MetaResponseModelBadgeLocation,
} from './';


/**
 * 
 * @export
 * @interface MetaResponseModelBadgesLocations
 */
export interface MetaResponseModelBadgesLocations {
    /**
     * 
     * @type {Array<MetaResponseModelBadgeLocation>}
     * @memberof MetaResponseModelBadgesLocations
     */
    left: Array<MetaResponseModelBadgeLocation>;
    /**
     * 
     * @type {Array<MetaResponseModelBadgeLocation>}
     * @memberof MetaResponseModelBadgesLocations
     */
    right: Array<MetaResponseModelBadgeLocation>;
    /**
     * 
     * @type {Array<MetaResponseModelBadgeLocation>}
     * @memberof MetaResponseModelBadgesLocations
     */
    callout: Array<MetaResponseModelBadgeLocation>;
}
