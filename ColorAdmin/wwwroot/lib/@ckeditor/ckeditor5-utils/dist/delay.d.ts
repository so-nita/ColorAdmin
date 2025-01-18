/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/delay
 */
/**
 * Returns a function wrapper that will trigger a function after a specified wait time.
 * The timeout can be canceled by calling the cancel function on the returned wrapped function.
 *
 * @param func The function to wrap.
 * @param wait The timeout in ms.
 */
export default function delay<T extends (...args: Array<any>) => any>(func: T, wait: number): DelayedFunc<T>;
export interface DelayedFunc<T extends (...args: Array<any>) => any> {
    (...args: Parameters<T>): void;
    cancel(): void;
}
