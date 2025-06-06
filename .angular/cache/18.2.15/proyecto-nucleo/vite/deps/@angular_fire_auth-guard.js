import {
  Auth,
  user
} from "./chunk-D7NLHV3T.js";
import {
  VERSION,
  registerVersion
} from "./chunk-HNJP4TR6.js";
import {
  Router
} from "./chunk-6YXUELGM.js";
import "./chunk-GOCGHNEO.js";
import "./chunk-FFJDRB6F.js";
import "./chunk-WGMMEBRI.js";
import {
  Injectable,
  NgModule,
  map,
  of,
  pipe,
  setClassMetadata,
  switchMap,
  take,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-TWKLSK6V.js";
import "./chunk-5K356HEJ.js";

// node_modules/@angular/fire/fesm2022/angular-fire-auth-guard.mjs
var loggedIn = map((user2) => !!user2);
var AuthGuard = class _AuthGuard {
  router;
  auth;
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
  }
  canActivate = (next, state) => {
    const authPipeFactory = next.data.authGuardPipe || (() => loggedIn);
    return user(this.auth).pipe(take(1), authPipeFactory(next, state), map((can) => {
      if (typeof can === "boolean") {
        return can;
      } else if (Array.isArray(can)) {
        return this.router.createUrlTree(can);
      } else {
        return this.router.parseUrl(can);
      }
    }));
  };
  static ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(ɵɵinject(Router), ɵɵinject(Auth));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AuthGuard,
    factory: _AuthGuard.ɵfac,
    providedIn: "any"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{
    type: Router
  }, {
    type: Auth
  }], null);
})();
var canActivate = (pipe2) => ({
  canActivate: [AuthGuard],
  data: {
    authGuardPipe: pipe2
  }
});
var isNotAnonymous = map((user2) => !!user2 && !user2.isAnonymous);
var idTokenResult = switchMap((user2) => user2 ? user2.getIdTokenResult() : of(null));
var emailVerified = map((user2) => !!user2 && user2.emailVerified);
var customClaims = pipe(idTokenResult, map((idTokenResult2) => idTokenResult2 ? idTokenResult2.claims : []));
var hasCustomClaim = (
  // eslint-disable-next-line no-prototype-builtins
  (claim) => pipe(customClaims, map((claims) => claims.hasOwnProperty(claim)))
);
var redirectUnauthorizedTo = (redirect) => pipe(loggedIn, map((loggedIn2) => loggedIn2 || redirect));
var redirectLoggedInTo = (redirect) => pipe(loggedIn, map((loggedIn2) => loggedIn2 && redirect || true));
var AuthGuardModule = class _AuthGuardModule {
  constructor() {
    registerVersion("angularfire", VERSION.full, "auth-guard");
  }
  static ɵfac = function AuthGuardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuardModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AuthGuardModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [AuthGuard]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuardModule, [{
    type: NgModule,
    args: [{
      providers: [AuthGuard]
    }]
  }], () => [], null);
})();
export {
  AuthGuard,
  AuthGuardModule,
  canActivate,
  customClaims,
  emailVerified,
  hasCustomClaim,
  idTokenResult,
  isNotAnonymous,
  loggedIn,
  redirectLoggedInTo,
  redirectUnauthorizedTo
};
//# sourceMappingURL=@angular_fire_auth-guard.js.map
