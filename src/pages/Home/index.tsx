import { lazy } from 'ice';

const Dropdown = lazy(() => import('@/components/Dropdown'));
const DropdownExample = lazy(() => import('@/components/DropdownExample'));
const Select = lazy(() => import('@/components/Select'));
const SelectExample = lazy(() => import('@/components/SelectExample'));

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-violet-500 to-indigo-500 flex justify-center items-center">
      {/* <Dropdown /> */}
      {/* <DropdownExample /> */}
      <Select />
      {/* <SelectExample /> */}
    </div>
  );
};

export default Home;
