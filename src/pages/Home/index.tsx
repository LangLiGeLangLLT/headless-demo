import { lazy } from 'ice';

const Dropdown = lazy(() => import('@/components/Dropdown'));
const DropdownExample = lazy(() => import('@/components/DropdownExample'));

const Home = () => {
  return (
    <div
      className="
        h-screen w-screen
        bg-gradient-to-r from-violet-500 to-indigo-500
        flex justify-center items-center
      "
    >
      {/* <Dropdown /> */}
      <DropdownExample />
    </div>
  );
};

export default Home;
