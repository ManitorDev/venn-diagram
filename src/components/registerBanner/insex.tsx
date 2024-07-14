import Link from "next/link";

const RegisterBanner = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/registerBanner.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
      className="w-full h-screen flex flex-col gap-5 justify-center items-center"
    >
      <span className="text-4xl font-bold">But first, lets get started!</span>
      <span className="font-light">
        By registering and creating an account on the site, become part of our
        big family and benefit from the benefits of the site
      </span>
      <Link
        className="py-3 px-8 border-2 border-slate-500 rounded-3xl hover:bg-slate-200 hover:text-black transition-all duration-300"
        href="/register"
      >
        Get Started!
      </Link>
    </div>
  );
};

export default RegisterBanner;
