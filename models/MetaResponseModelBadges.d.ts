/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.39
 *
 */
import {
    MetaResponseModelBadgeTag,
    MetaResponseModelBadgesLocations,
} from './';


/**
 * 
 * @export
 * @interface MetaResponseModelBadges
 */
export interface MetaResponseModelBadges {
    /**
     * 
     * @type {MetaResponseModelBadgesLocations}
     * @memberof MetaResponseModelBadges
     */
    locations: MetaResponseModelBadgesLocations;
    /**
     * 
     * @type {{ [key: string]: MetaResponseModelBadgeTag; }}
     * @memberof MetaResponseModelBadges
     */
    tags?: { [key: string]: MetaResponseModelBadgeTag; };
}
