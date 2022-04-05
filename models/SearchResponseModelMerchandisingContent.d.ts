/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.25
 *
 */
import {
    SearchResponseModelMerchandisingContentInline,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelMerchandisingContent
 */
export interface SearchResponseModelMerchandisingContent {
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchResponseModelMerchandisingContent
     */
    header?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchResponseModelMerchandisingContent
     */
    banner?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchResponseModelMerchandisingContent
     */
    footer?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchResponseModelMerchandisingContent
     */
    left?: Array<string>;
    /**
     * 
     * @type {Array<SearchResponseModelMerchandisingContentInline>}
     * @memberof SearchResponseModelMerchandisingContent
     */
    inline?: Array<SearchResponseModelMerchandisingContentInline>;
}
