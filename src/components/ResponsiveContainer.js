import React  from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from './DesktopContainer.js';
import MobileContainer from './MobileContainer.js';

const ResponsiveContainer = ({children}) => (
  <div>
    <DesktopContainer>
      {children}
    </DesktopContainer>
    <MobileContainer>
      {children}
    </MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer ;
