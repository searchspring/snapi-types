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
}
