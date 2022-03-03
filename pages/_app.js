import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import '../styles/globals.scss';
import Layout from '../components/layout';
import Router from "next/router";
import * as ga from '@/lib/google-analytics';

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

const onRountChangeComplete = (url) => {
  ga.pageview(url);
};

Router.events.on("routeChangeStart", routeChange );
Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeComplete", onRountChangeComplete );

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  );
}

export default MyApp
