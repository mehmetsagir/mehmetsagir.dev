import Icon from 'src/components/Icon';

import { NavigationsProps } from '/src/types/routes';

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
