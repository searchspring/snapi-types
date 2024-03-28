/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.33
 *
 */
import {
    MetaResponseModelBadgeLocation,
    MetaResponseModelBadgesLocationsOverlay,
} from './';


/**
 * 
 * @export
 * @interface MetaResponseModelBadgesLocations
 */
export interface MetaResponseModelBadgesLocations {
    /**
     * 
     * @type {MetaResponseModelBadgesLocationsOverlay}
     * @memberof MetaResponseModelBadgesLocations
     */
    overlay?: MetaResponseModelBadgesLocationsOverlay;
    /**
     * 
     * @type {Array<MetaResponseModelBadgeLocation>}
     * @memberof MetaResponseModelBadgesLocations
     */
    callouts?: Array<MetaResponseModelBadgeLocation>;
}
