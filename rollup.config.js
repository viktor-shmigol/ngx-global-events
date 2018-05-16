export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ngx-global-events.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ngx-global-events',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable',
    'rxjs/Subject': 'rxjs_Subject',
    'actioncable': 'ActionCable'
  },
  external: [
    '@angular/core',
    'rxjs/add/operator/map',
    'rxjs/add/operator/filter',
    'rxjs/Subject',
    'actioncable'
  ]
}
