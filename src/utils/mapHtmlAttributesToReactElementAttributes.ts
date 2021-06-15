/*
 * SPDX-FileCopyrightText: 2020 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { BOOLEAN_ATTRIBUTES } from '../dom/attributes/BooleanAttributes'
import { REACT_ATTRIBUTES } from '../dom/attributes/ReactAttributes'
import { isValidTagOrAttributeName } from './isValidTagOrAttributeName'

/**
 * Returns the parsed attribute value taking into account things like boolean attributes
 *
 * @param {String} attribute The name of the attribute
 * @param {*} value The value of the attribute from the HTML
 * @returns {*} The parsed attribute value
 */
const getParsedAttributeValue = function (attribute: string, value: string) {
  if (BOOLEAN_ATTRIBUTES.indexOf(attribute.toLowerCase()) >= 0) {
    value = attribute
  }
  return value
}

/**
 * Takes an object of standard HTML property names and converts them to their React counterpart. If the react
 * version does not exist for an attribute then just use it as it is
 *
 * @param {Object} attributes The HTML attributes to convert
 * @returns {Object} The React attributes
 */
export function mapHtmlAttributesToReactElementAttributes(
  attributes: Record<string, string>
): Record<string, string> {
  return Object.keys(attributes)
    .filter((attr) => isValidTagOrAttributeName(attr))
    .reduce((mappedAttributes, attribute) => {
      // lowercase the attribute name and find it in the react attribute map
      const lowerCaseAttribute = attribute.toLowerCase()

      // format the attribute name
      const name = REACT_ATTRIBUTES[lowerCaseAttribute] || attribute

      // add the parsed attribute value to the mapped attributes
      mappedAttributes[name] = getParsedAttributeValue(
        name,
        attributes[attribute]
      )

      return mappedAttributes
    }, {} as Record<string, string>)
}
