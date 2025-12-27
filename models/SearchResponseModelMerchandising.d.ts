/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.44
 *
 */
import {
    SearchResponseModelMerchandisingCampaigns,
    SearchResponseModelMerchandisingContent,
    SearchResponseModelMerchandisingExperiments,
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
     * @type {Array<SearchResponseModelMerchandisingExperiments>}
     * @memberof SearchResponseModelMerchandising
     */
    experiments?: Array<SearchResponseModelMerchandisingExperiments>;
    /**
     * 
     * @type {boolean}
     * @memberof SearchResponseModelMerchandising
     */
    personalized?: boolean;
    /**
     * 
     * @type {SearchResponseModelMerchandisingContent}
     * @memberof SearchResponseModelMerchandising
     */
    content?: SearchResponseModelMerchandisingContent;
}
