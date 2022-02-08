import { JSXElementConstructor } from 'react';

export type NavigationsProps = NavigationProps[];

export type NavigationProps = {
  title: string;
  routes: Route[];
};

export type RouteProps = {
  path: string;
  label: string;
  icon: JSXElementConstructor;
  exact?: boolean;
};
