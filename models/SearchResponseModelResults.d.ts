/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.15
 *
 */
import {
    SearchResponseModelChildren,
    SearchResponseModelMappings,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelResults
 */
export interface SearchResponseModelResults {
    /**
     * 
     * @type {string}
     * @memberof SearchResponseModelResults
     */
    id?: string;
    /**
     * 
     * @type {SearchResponseModelMappings}
     * @memberof SearchResponseModelResults
     */
    mappings?: SearchResponseModelMappings;
    /**
     * Additional fields for results - these are site specific fields which can have various value types
     * @type {{ [key: string]: object; }}
     * @memberof SearchResponseModelResults
     */
    attributes?: { [key: string]: object; };
    /**
     * 
     * @type {Array<SearchResponseModelChildren>}
     * @memberof SearchResponseModelResults
     */
    children?: Array<SearchResponseModelChildren>;
}
