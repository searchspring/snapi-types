/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.31
 *
 */
import {
    SearchResponseModelMerchandisingCampaigns,
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
     * @type {Array<SearchResponseModelMerchandisingCampaigns>}
     * @memberof SearchResponseModelMerchandising
     */
    campaigns?: Array<SearchResponseModelMerchandisingCampaigns>;
    /**
     * 
     * @type {SearchResponseModelMerchandisingContent}
     * @memberof SearchResponseModelMerchandising
     */
    content?: SearchResponseModelMerchandisingContent;
}
