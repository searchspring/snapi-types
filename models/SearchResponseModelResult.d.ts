/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.38
 *
 */
import {
    SearchResponseModelResultBadges,
    SearchResponseModelResultChildren,
    SearchResponseModelResultMappings,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelResult
 */
export interface SearchResponseModelResult {
    /**
     * 
     * @type {string}
     * @memberof SearchResponseModelResult
     */
    id?: string;
    /**
     * 
     * @type {SearchResponseModelResultMappings}
     * @memberof SearchResponseModelResult
     */
    mappings?: SearchResponseModelResultMappings;
    /**
     * Additional fields for results - these are site specific fields which can have various value types
     * @type {{ [key: string]: object; }}
     * @memberof SearchResponseModelResult
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {Array<SearchResponseModelResultChildren>}
     * @memberof SearchResponseModelResult
     */
    children?: Array<SearchResponseModelResultChildren>;
    /**
     * List of matching badges for the result
     * @type {Array<SearchResponseModelResultBadges>}
     * @memberof SearchResponseModelResult
     */
    badges?: Array<SearchResponseModelResultBadges>;
}
