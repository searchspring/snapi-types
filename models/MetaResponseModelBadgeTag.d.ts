/* tslint:disable */
/* eslint-disable */
/**
 *
 * snAPI
 * Searchspring Snap Search API
 *
 * Built from snAPI spec v0.1.39
 *
 */

/**
 * 
 * @export
 * @interface MetaResponseModelBadgeTag
 */
export interface MetaResponseModelBadgeTag {
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelBadgeTag
     */
    location: string;
    /**
     * 
     * @type {string}
     * @memberof MetaResponseModelBadgeTag
     */
    component: string;
    /**
     * 
     * @type {number}
     * @memberof MetaResponseModelBadgeTag
     */
    priority: number;
    /**
     * 
     * @type {boolean}
     * @memberof MetaResponseModelBadgeTag
     */
    enabled: boolean;
    /**
     * Additional badge parameters - these are template specific fields which can have various value types
     * @type {{ [key: string]: object; }}
     * @memberof MetaResponseModelBadgeTag
     */
    parameters: { [key: string]: object; };
}
