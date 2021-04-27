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
    SearchResponseModelMappings,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelChildren
 */
export interface SearchResponseModelChildren {
    /**
     * 
     * @type {SearchResponseModelMappings}
     * @memberof SearchResponseModelChildren
     */
    mappings?: SearchResponseModelMappings;
    /**
     * Additional fields for results - these are site specific fields which can have various value types
     * @type {{ [key: string]: object; }}
     * @memberof SearchResponseModelChildren
     */
    attributes?: { [key: string]: object; };
}
