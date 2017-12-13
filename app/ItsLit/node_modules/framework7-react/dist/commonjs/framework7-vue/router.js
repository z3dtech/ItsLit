"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var combinePaths = function () {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    return paths.join('/').replace(/\/+/g, '/');
};
var flattenTabNestedRoutes = function (pageRoute, tabRoute, tabNestedRoutes) {
    return tabNestedRoutes.map(function (tabNestedRoute) {
        return {
            path: combinePaths(pageRoute.path, tabRoute.path, tabNestedRoute.path),
            pagePath: pageRoute.path,
            component: pageRoute.component,
            tab: {
                tabId: tabRoute.tabId,
                component: tabNestedRoute.component
            }
        };
    });
};
var flattenTabRoutes = function (pageRoute, tabRoutes) {
    return tabRoutes.reduce(function (accumulatedFlattenedRoutes, nextTabRoute) {
        var flattenedTabRoutes;
        if (nextTabRoute.routes) {
            flattenedTabRoutes = flattenTabNestedRoutes(pageRoute, nextTabRoute, nextTabRoute.routes);
        }
        else {
            flattenedTabRoutes = [{
                    path: combinePaths(pageRoute.path, nextTabRoute.path),
                    pagePath: pageRoute.path,
                    component: pageRoute.component,
                    tab: {
                        tabId: nextTabRoute.tabId,
                        component: nextTabRoute.component
                    }
                }];
        }
        return accumulatedFlattenedRoutes.concat(flattenedTabRoutes);
    }, []);
};
var flattenRoutes = function (routes) {
    if (routes === void 0) { routes = []; }
    return routes.reduce(function (accumulatedFlattenedRoutes, nextRoute) {
        var flattenedNextRoute;
        if (nextRoute.tabs) {
            flattenedNextRoute = flattenTabRoutes(nextRoute, nextRoute.tabs);
        }
        else {
            flattenedNextRoute = [Object.assign({}, nextRoute, {
                    pagePath: nextRoute.path
                })];
        }
        return accumulatedFlattenedRoutes.concat(flattenedNextRoute);
    }, []);
};
var parseRoute = function (str) {
    var parts = [];
    str.split('/').forEach(function (part) {
        if (part !== '') {
            if (part.indexOf(':') === 0) {
                parts.push({ name: part.replace(':', '') });
            }
            else
                parts.push(part);
        }
    });
    return parts;
};
function handleRouteChangeFromFramework7(view, options, changeRouteCallback) {
    if (!view.allowPageChange)
        return false;
    var url = options.url;
    var pageElement = options.pageElement;
    if (url && pageElement || !url || url === '#') {
        return true;
    }
    var inHistory = view.history.indexOf(url) >= 0;
    var inDomCache = view.pagesCache[url];
    if (inHistory && inDomCache)
        return true;
    return changeRouteCallback(url, view, options);
}
var Framework7Router = (function () {
    function Framework7Router(originalRoutes, framework7, dom7) {
        var _this = this;
        this.routeChangeHandler = null;
        this.routes = flattenRoutes(originalRoutes);
        this.framework7 = framework7;
        this.dom7 = dom7;
        //Hook router into Framework7 routing events
        var initialPreroute = framework7.params.preroute;
        framework7.params.routes = originalRoutes;
        framework7.params.routerRemoveTimeout = true;
        framework7.params.preroute = function (view, options) {
            var passToVueRouter = true;
            if (initialPreroute && !options.pageElement) {
                passToVueRouter = initialPreroute(view, options);
            }
            if (passToVueRouter) {
                return handleRouteChangeFromFramework7(view, options, _this.changeRoute.bind(_this));
            }
            else {
                return false;
            }
        };
    }
    Framework7Router.prototype.setRouteChangeHandler = function (routeChangeHandler) {
        this.routeChangeHandler = routeChangeHandler;
    };
    Framework7Router.prototype.changeRoute = function (url, view, options) {
        var _this = this;
        if (view === void 0) { view = null; }
        var getMainView = function () { return _this.framework7.views && _this.framework7.views.reduce(function (mainView, nextView) {
            if (nextView.main) {
                return nextView;
            }
            else {
                return mainView;
            }
        }, null); };
        var matchingRoute = this.findMatchingRoute(url);
        if (!matchingRoute)
            return true;
        return this.routeChangeHandler(Object.assign({}, matchingRoute, {
            view: view || getMainView(),
            options: options,
            router: this
        }));
    };
    Framework7Router.prototype.findMatchingRoute = function (url) {
        var matchingRoute;
        if (!url)
            return matchingRoute;
        url = "" + url; //Insures that the url is of type string so url.split does not crash app in weird situations.
        var routes = this.routes;
        var query = this.dom7.parseUrlQuery(url);
        var hash = url.split('#')[1];
        var params = {};
        var path = url.split('#')[0].split('?')[0];
        var urlParts = path.split('/').filter(function (part) {
            if (part !== '')
                return part;
        });
        var i, j, k;
        for (i = 0; i < routes.length; i++) {
            if (matchingRoute)
                continue;
            var route = routes[i];
            var parsedRoute = parseRoute(route.path);
            if (parsedRoute.length !== urlParts.length)
                continue;
            var matchedParts = 0;
            for (j = 0; j < parsedRoute.length; j++) {
                if (typeof parsedRoute[j] === 'string' && urlParts[j] === parsedRoute[j])
                    matchedParts++;
                if (typeof parsedRoute[j] === 'object') {
                    params[parsedRoute[j].name] = urlParts[j];
                    matchedParts++;
                }
            }
            if (matchedParts === urlParts.length) {
                matchingRoute = {
                    query: query,
                    hash: hash,
                    params: params,
                    url: url,
                    path: path,
                    route: route
                };
            }
        }
        return matchingRoute;
    };
    return Framework7Router;
}());
exports.default = Framework7Router;

//# sourceMappingURL=router.js.map
