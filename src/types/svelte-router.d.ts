declare module 'svelte-routing' {
  import { SvelteComponentTyped } from 'svelte';

  interface RouterProps {
    url?: string;
  }

  interface RouteProps {
    path?: string;
    component?: any;
  }

  interface LinkProps {
    to: string;
    replace?: boolean;
    state?: {
      [k in string | number]: unknown;
    };
    getProps?: (linkParams: LinkGetPropsParams) => Record<string, any>;
  }

  interface LinkGetPropsParams {
    location: Location;
    href: string;
    isPartiallyCurrent: boolean;
    isCurrent: boolean;
  }

  class Router extends SvelteComponentTyped<RouterProps> {}
  class Route extends SvelteComponentTyped<RouteProps> {}
  class Link extends SvelteComponentTyped<LinkProps> {}

  export { Router, Route, Link };
}
