import { useRouter } from 'next/router';
import Icon from 'src/components/Icon';

import { NavigationsProps, RouteProps } from '/src/types/routes';

export const navigations: NavigationsProps = [
  {
    title: 'NAVIGATION',
    routes: [
      {
        path: '/',
        label: 'Home',
        icon: <Icon name="home" />,
        exact: true,
      },
      {
        path: '/projects',
        label: 'Projects',
        icon: <Icon name="projects" />,
      },
      {
        path: '/snippets',
        label: 'Snippets',
        icon: <Icon name="code" />,
      },
      {
        path: '/contact',
        label: 'Contact',
        icon: <Icon name="at" />,
      },
    ],
  },
  {
    title: 'SOCIAL',
    routes: [
      {
        path: 'https://twitter.com/mehmetsagirdev',
        label: 'Twitter',
        icon: <Icon name="twitter" />,
      },
      {
        path: 'https://www.youtube.com/channel/UCPoGp98y4dOQsc3OXkndaeQ?sub_confirmation=1',
        label: 'Youtube',
        icon: <Icon name="youtube" />,
      },
      {
        path: 'https://github.com/mehmetsagir',
        label: 'Github',
        icon: <Icon name="github" />,
      },
      {
        path: 'https://linkedin.com/in/mehmetsagir',
        label: 'Linkedin',
        icon: <Icon name="linkedin" />,
      },
      {
        path: 'https://superpeer.com/memet',
        label: 'Superpeer',
        icon: <Icon name="superpeer" />,
      },
    ],
  },
];

export const useCurrentRoute = () => {
  const router = useRouter();
  let currenctRoute: RouteProps = navigations[0].routes[0];

  navigations.forEach((navigation) => {
    const { routes } = navigation;
    routes.forEach((route) => {
      if (router.asPath.startsWith(route.path)) {
        currenctRoute = route;
      }
    });
  });

  return {
    ...currenctRoute,
    isDetailPage: router.pathname !== currenctRoute.path,
  };
};

export const filteredList = (search: string) => {
  if (!search.length) return navigations;

  const results = navigations
    .map((navigation) => {
      return {
        ...navigation,
        routes: navigation.routes.filter((route) =>
          route.label.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ),
      };
    })
    .filter((navigation) => navigation.routes.length);

  return results;
};
