import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Autocomplete = lazy(() => import('@/components/Autocomplete'));
const AutocompleteExample = lazy(() => import('@/components/AutocompleteExample'));
const Dropdown = lazy(() => import('@/components/Dropdown'));
const DropdownExample = lazy(() => import('@/components/DropdownExample'));
const Select = lazy(() => import('@/components/Select'));
const SelectExample = lazy(() => import('@/components/SelectExample'));
const Switch = lazy(() => import('@/components/Switch'));
const SwitchExample = lazy(() => import('@/components/SwitchExample'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        redirect: '/dropdown',
      },
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/dropdown',
        component: Dropdown,
      },
      {
        path: '/dropdown-example',
        component: DropdownExample,
      },
      {
        path: '/select',
        component: Select,
      },
      {
        path: '/select-example',
        component: SelectExample,
      },
      {
        path: '/autocomplete',
        component: Autocomplete,
      },
      {
        path: '/autocomplete-example',
        component: AutocompleteExample,
      },
      {
        path: '/switch',
        component: Switch,
      },
      {
        path: '/switch-example',
        component: SwitchExample,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
