/*
 * SPDX-FileCopyrightText: 2020 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { convertHtmlToReact } from './convertHtmlToReact'
export default convertHtmlToReact

export { default as processNodes } from './processNodes';
export { default as convertNodeToReactElement } from './convertNodeToReactElement';
export { default as NodeToReactElementTransformer } from './NodeToReactElementTransformer';

// expose htmlparser2 so it can be used if required
export { default as htmlparser2 } from 'htmlparser2';
