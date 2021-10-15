/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.21
 *
 */
import {
    SearchResponseModelResultMappings,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelResultChildren
 */
export interface SearchResponseModelResultChildren {
    /**
     * 
     * @type {SearchResponseModelResultMappings}
     * @memberof SearchResponseModelResultChildren
     */
    mappings?: SearchResponseModelResultMappings;
    /**
     * Additional fields for results - these are site specific fields which can have various value types
     * @type {{ [key: string]: object; }}
     * @memberof SearchResponseModelResultChildren
     */
    attributes?: { [key: string]: object; };
}
