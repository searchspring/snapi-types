/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.34
 *
 */
import {
    SearchResponseModelResultCoreMappings,
    SearchResponseModelResultMappingsBadges,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelResultMappings
 */
export interface SearchResponseModelResultMappings {
    /**
     * 
     * @type {SearchResponseModelResultCoreMappings}
     * @memberof SearchResponseModelResultMappings
     */
    core?: SearchResponseModelResultCoreMappings;
    /**
     * List of matching badges for the result
     * @type {Array<SearchResponseModelResultMappingsBadges>}
     * @memberof SearchResponseModelResultMappings
     */
    badges?: Array<SearchResponseModelResultMappingsBadges>;
}
