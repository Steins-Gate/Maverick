function pa(num) {
var routerOjb = {}
      if (localStorage.routerOjb && localStorage.routerOjb.length > 10) {
        try {
          routerOjb = JSON.parse(localStorage.routerOjb)
        } catch (e) {
          delete localStorage.routerOjb
        }
      }
      routerOjb[to.path] = window._assignIn({}, to)
      routerOjb[to.path].back = window._assignIn({}, from)
      delete routerOjb[to.path].matched
      delete routerOjb[to.path].back.matched
      try {
        localStorage.routerOjb = JSON.stringify(routerOjb)
      } catch (e) {
        delete localStorage.routerOjb
      }
}

