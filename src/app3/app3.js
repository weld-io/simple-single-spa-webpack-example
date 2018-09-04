import singleSpaAngularJS from 'single-spa-angularjs';
import angular from 'angular';

/* We import angularJsModule.js before routes.js because we need to create the 'app' module
 * before we try to use it. SystemJS (which is used to bundle this angularjs app) does
 * ensure that imports are executed with the first import exectued first. This nuance
 * is something caused by angularjs's dependency injection layer that was invented before
 * es6 import statements.
 */
import angularJsModule from './angularJsModule';
// import './routes.js';

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app3');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app3';
    document.body.appendChild(el);
  }

  return el;
}

const angularLifecycles = singleSpaAngularJS({
  angular,
  domElementGetter,
  mainAngularModule: 'angularJsModule',
  uiRouter: true,
  // angular-ui-router references `window.angular` :(, so we have to preserve the window.angular global
  preserveGlobal: true,
});

export const bootstrap = [
  angularLifecycles.bootstrap,
];

export const mount = [
  angularLifecycles.mount,
];

export const unmount = [
  angularLifecycles.unmount,
];