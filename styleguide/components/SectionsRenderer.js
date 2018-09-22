import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import Heading from 'rsg-components/Heading';
// Import default implementation from react-styleguidist using the full path
import DefaultSectionsRenderer from 'react-styleguidist/lib/rsg-components/Sections/SectionsRenderer';

const styles = ({ fontFamily, color, space }) => ({
	headingSpacer: {
    marginBottom: space[2],
    width: '90%'
	},
  header: {
    fontWeight: 500
  },
	descriptionText: {
		marginTop: space[2],
    fontFamily: fontFamily.base
  },
  star: {
    marginTop: space[2],
    marginBottom: space[2]
  },
  '@media (min-width: 420px)': {
    width: '100%'
  }
});

export function SectionsRenderer({ classes, children }) {
	return (
		<div>
			{!!children.length &&
				<div className={classes.headingSpacer}>
					<Heading style={{ fontWeight: 500 }} level={1}>parvus-ui</Heading>
					<p className={classes.descriptionText}>A micro UI kit for React and Preact with all the main UI components in less than 5KB</p>
          <p className={classes.star}>
            <a
              className="github-button"
              href="https://github.com/parvusui/parvus-ui"
              data-size="large"
              data-show-count="true"
              aria-label="Star parvusui/parvus-ui on GitHub"
            >
              Star
            </a>
          </p>
          <Heading level={1}>Components</Heading>
				</div>}
			<DefaultSectionsRenderer>{children}</DefaultSectionsRenderer>
		</div>
	);
}

SectionsRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
};

export default Styled(styles)(SectionsRenderer);
