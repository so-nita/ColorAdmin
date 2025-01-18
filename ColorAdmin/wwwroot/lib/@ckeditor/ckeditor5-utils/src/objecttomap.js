/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/objecttomap
 */
/**
 * Transforms object to map.
 *
 * ```ts
 * const map = objectToMap( { 'foo': 1, 'bar': 2 } );
 * map.get( 'foo' ); // 1
 * ```
 *
 * **Note**: For mixed data (`Object` or `Iterable`) there's a dedicated {@link module:utils/tomap~toMap} function.
 *
 * @param obj Object to transform.
 * @returns Map created from object.
 */
export default function objectToMap(obj) {
    const map = new Map();
    for (const key in obj) {
        map.set(key, obj[key]);
    }
    return map;
}
