import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Dropdown = lazy(() => import('@/components/Dropdown'));
const DropdownExample = lazy(() => import('@/components/DropdownExample'));
const Select = lazy(() => import('@/components/Select'));
const SelectExample = lazy(() => import('@/components/SelectExample'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        exact: true,
        component: Home,
      },
      {
        path: '/dropdown',
        exact: true,
        component: Dropdown,
      },
      {
        path: '/dropdown-example',
        exact: true,
        component: DropdownExample,
      },
      {
        path: '/select',
        exact: true,
        component: Select,
      },
      {
        path: '/select-example',
        exact: true,
        component: SelectExample,
      },
      {
        path: '/',
        exact: true,
        redirect: '/dropdown',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
