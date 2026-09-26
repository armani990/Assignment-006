const NotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-black uppercase text-white">
          404
        </h1>

        <p className="mt-3 text-xl font-bold uppercase text-white">
          Page Not Found
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          The page you are looking for does not exist.
        </p>
      </div>
    </section>
  );
};

export default NotFound;