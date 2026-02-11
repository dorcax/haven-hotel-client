import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

const AuthLayout = ({
  children,
  title,
  description,
  imgUrl,
  className,
}: {
  children: ReactNode;
  title: string;
  description: string;
  imgUrl?: string;
  className?: string;
}) => {
  return (
    <main className="bg-[#F5F6FA] min-h-svh flex  justify-center items-center px-4">
      <section className="grid grid-cols-1 lg:grid-cols-2 w-full h-auto lg:h-screen bg-white shadow-5xl overflow-hidden max-w-4xl items-start lg:mt-3 ">
        {/* left form side */}
        <article className="h-full flex flex-col justify-center px-6 py-10 ">
          <header
            className={cn(
              " flex flex-col justify-center items-center mb-8",
              className,
            )}
          >
            {imgUrl && <img src={imgUrl} alt="logo" />}
            <h2 className="text-[#2F4858] text-2xl font-semibold capitalize">
              {title}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{description}</p>
          </header>

          {children}
        </article>

        <section className="relative hidden lg:block h-full">
          <img
            src="./hotel1.jpg"
            alt="image"
            className="object-cover w-full h-full rounded-r-md "
          />
          <div className="absolute bottom-5 left-4 right-4 text-white ">
            <h2 className="text-2xl font-semibold capitalize p-1">
              Elevate your guest experience
            </h2>
            <p className="text-base">
              join a community of foward-thinking hoteliers who are redefining
              hospitality with our intuitive and powerful management
              platform{" "}
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AuthLayout;



