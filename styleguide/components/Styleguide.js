import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Styled from 'rsg-components/Styled';

const xsmall = '@media (max-width: 600px)';

const styles = ({ font, base, header, sidebar, baseBackground, mq }) => ({
  root: {
    color: base,
    backgroundColor: baseBackground
  },
  header: {
    color: '#fff',
    background: header
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    fontFamily: font,
    fontSize: 20,
    fontWeight: 'normal',
    color: baseBackground
  },
  bar: {
    display: 'flex',
    alignItems: 'center',
    padding: [[20, 30]],
    maxWidth: 1000,
    alignSelf: 'center',
    margin: [[0, 'auto']],
    [xsmall]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  nav: {
    marginLeft: 'auto',
    marginRight: '-0.5em',
    [xsmall]: {
      margin: [[10, 0, 0]]
    }
  },
  headerLink: {
    '&, &:link, &:visited': {
      marginLeft: '0.5em',
      marginRight: '0.5em',
      fontFamily: font,
      color: '#efefef'
    },
    '&:hover, &:active': {
      color: '#ffffff',
      cursor: 'pointer'
    }
  },
  content: {
    padding: [[15]],
    [mq.small]: {
      padding: 15
    },
    display: 'flex',
    height: '100%'
  },
  sidebar: {
    display: 'none'
  },
  sidebarInner: {
    background: sidebar,
    position: 'sticky',
    top: 15,
    alignSelf: 'flex-start',
    borderRadius: 5,
    paddingBottom: 5
  },
  otherside: {
    display: 'none'
  },
  '@media (min-width: 750px)': {
    sidebar: {
      display: 'block',
      flex: 1
    },
    sidebarInner: {
      width: 150
    },
    otherside: {
      display: 'block',
      flex: 1
    },
    main: {
      flex: 2
    }
  },
  '@media (min-width: 1050px)': {
    sidebarInner: {
      width: 250
    }
  }
});

export function StyleGuideRenderer({
  classes,
  title,
  homepageUrl,
  children,
  toc,
  hasSidebar
}) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.bar}>
          <h1 className={classes.logo}>{title}</h1>
          <nav className={classes.nav}>
            <a
              className="github-button"
              href="https://github.com/parvusui/parvus-ui"
              data-size="large"
              aria-label="View parvusui/parvus-ui on GitHub"
            />
          </nav>
        </div>
      </header>
      <main className={classes.content}>
        {hasSidebar && (
          <div className={classes.sidebar}>
            <div className={classes.sidebarInner}>{toc}</div>
          </div>
        )}
        <div className={classes.main}>{children}</div>
        {hasSidebar && <div className={classes.otherside} />}
      </main>
    </div>
  );
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Styled(styles)(StyleGuideRenderer);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://buttons.github.io/buttons.js';

document.getElementsByTagName('head')[0].appendChild(script);
