import Header from 'components/Header';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="grow flex bg-gray-100">
        <Outlet />
      </main>
      <footer className="bg-amber-400">Footer</footer>
    </div>
  );
};

export default RootLayout;
