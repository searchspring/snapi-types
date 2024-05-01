/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.35
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
    overlayLeft: Array<MetaResponseModelBadgeLocation>;
    /**
     * 
     * @type {Array<MetaResponseModelBadgeLocation>}
     * @memberof MetaResponseModelBadgesLocations
     */
    overlayRight: Array<MetaResponseModelBadgeLocation>;
    /**
     * 
     * @type {Array<MetaResponseModelBadgeLocation>}
     * @memberof MetaResponseModelBadgesLocations
     */
    callout: Array<MetaResponseModelBadgeLocation>;
}
