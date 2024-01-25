import { Link } from 'react-router-dom';

const NotFoundBlock = () => {
  return (
    <div className="grow flex justify-center p-3 pb-5 md:items-center ">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="w-8/12 min-w-72 m-auto sm:basis-3/6">
          <img
            className="size-full"
            src={`${process.env.REACT_APP_PUBLIC_URL}/images/error-404.png`}
          />
        </div>
        <section className="flex flex-col items-center sm:basis-3/6">
          <h1 className="font-bold text-6xl mb-2 md:text-8xl lg:text-9xl lg:mb-8">
            404
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-14">
            ...Oops! Page not found!
          </p>
          <Link
            className="
              bg-lime-500 
              rounded-md 
              py-2 
              px-4 
              text-white
              text-xl
              lg:text-2xl
            "
            to="/"
          >
            Home
          </Link>
        </section>
      </div>
    </div>
  );
};

export default NotFoundBlock;
