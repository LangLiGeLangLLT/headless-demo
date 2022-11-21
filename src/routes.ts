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
const Disclosure = lazy(() => import('@/components/Disclosure'));
const DisclosureExample = lazy(() => import('@/components/DisclosureExample'));
const Dialog = lazy(() => import('@/components/Dialog'));
const DialogExample = lazy(() => import('@/components/DialogExample'));
const Popover = lazy(() => import('@/components/Popover'));
const PopoverExample = lazy(() => import('@/components/PopoverExample'));
const RadioGroup = lazy(() => import('@/components/RadioGroup'));
const RadioGroupExample = lazy(() => import('@/components/RadioGroupExample'));
const Tabs = lazy(() => import('@/components/Tabs'));
const TabsExample = lazy(() => import('@/components/TabsExample'));
const Transition = lazy(() => import('@/components/Transition'));
const TransitionExample = lazy(() => import('@/components/TransitionExample'));

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
        path: '/autocomplete',
        exact: true,
        component: Autocomplete,
      },
      {
        path: '/autocomplete-example',
        exact: true,
        component: AutocompleteExample,
      },
      {
        path: '/switch',
        exact: true,
        component: Switch,
      },
      {
        path: '/switch-example',
        exact: true,
        component: SwitchExample,
      },
      {
        path: '/disclosure',
        exact: true,
        component: Disclosure,
      },
      {
        path: '/disclosure-example',
        exact: true,
        component: DisclosureExample,
      },
      {
        path: '/dialog',
        exact: true,
        component: Dialog,
      },
      {
        path: '/dialog-example',
        exact: true,
        component: DialogExample,
      },
      {
        path: '/popover',
        exact: true,
        component: Popover,
      },
      {
        path: '/popover-example',
        exact: true,
        component: PopoverExample,
      },
      {
        path: '/radio-group',
        exact: true,
        component: RadioGroup,
      },
      {
        path: '/radio-group-example',
        exact: true,
        component: RadioGroupExample,
      },
      {
        path: '/tabs',
        exact: true,
        component: Tabs,
      },
      {
        path: '/tabs-example',
        exact: true,
        component: TabsExample,
      },
      {
        path: '/transition',
        exact: true,
        component: Transition,
      },
      {
        path: '/transition-example',
        exact: true,
        component: TransitionExample,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
