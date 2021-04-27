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
    SearchResponseModelMerchandisingContent,
} from './';


/**
 * 
 * @export
 * @interface SearchResponseModelMerchandising
 */
export interface SearchResponseModelMerchandising {
    /**
     * 
     * @type {string}
     * @memberof SearchResponseModelMerchandising
     */
    redirect?: string;
    /**
     * 
     * @type {SearchResponseModelMerchandisingContent}
     * @memberof SearchResponseModelMerchandising
     */
    content?: SearchResponseModelMerchandisingContent;
}
