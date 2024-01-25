import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-amber-400">Header</header>
      <main className="grow flex bg-gray-100">
        <Outlet />
      </main>
      <footer className="bg-amber-400">Footer</footer>
    </div>
  );
};

export default RootLayout;
