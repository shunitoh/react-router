import PropTypes from 'prop-types'
import React from 'react'
import warning from './routerWarning'
import invariant from 'invariant'
import Redirect from './Redirect'
import { falsy } from './InternalPropTypes'

/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */
const IndexRedirect = React.createClass({

  statics: {

    createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = Redirect.createRouteFromReactElement(element)
      } else {
        warning(
          false,
          'An <IndexRedirect> does not make sense at the root of your route config'
        )
      }
    }

  },

  propTypes: {
    to: PropTypes.string.isRequired,
    query: PropTypes.object,
    state: PropTypes.object,
    onEnter: falsy,
    children: falsy
  },

  /* istanbul ignore next: sanity check */
  render() {
    invariant(
      false,
      '<IndexRedirect> elements are for router configuration only and should not be rendered'
    )
  }

})

export default IndexRedirect
