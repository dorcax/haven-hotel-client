// import { cn } from "@/lib/utils";
// import { type ReactNode } from "react";

// const AuthLayout = ({
//   children,
//   title,
//   description,
//   imgUrl,
//   className,
// }: {
//   children: ReactNode;
//   title: string;
//   description: string;
//   imgUrl?: string;
//   className?: string;
// }) => {
//   return (
//     <main className="bg-[#F5F6FA] min-h-svh flex  justify-center items-center px-4">
//       <section className="grid grid-cols-1 lg:grid-cols-2 w-full h-auto lg:h-screen bg-white shadow-5xl overflow-hidden max-w-4xl items-start lg:mt-3 ">
//         {/* left form side */}
//         <article className="h-full flex flex-col justify-center px-6 py-10 ">
//           <header
//             className={cn(
//               " flex flex-col justify-center items-center mb-8",
//               className,
//             )}
//           >
//             {imgUrl && <img src={imgUrl} alt="logo" />}
//             <h2 className="text-[#2F4858] text-2xl font-semibold capitalize">
//               {title}
//             </h2>
//             <p className="text-gray-500 text-sm mt-1">{description}</p>
//           </header>

//           {children}
//         </article>

//         <section className="relative hidden lg:block h-full">
//           <img
//             src="./hotel1.jpg"
//             alt="image"
//             className="object-cover w-full h-full rounded-r-md "
//           />
//           <div className="absolute bottom-5 left-4 right-4 text-white ">
//             <h2 className="text-2xl font-semibold capitalize p-1">
//               Elevate your guest experience
//             </h2>
//             <p className="text-base">
//               join a community of foward-thinking hoteliers who are redefining
//               hospitality with our intuitive and powerful management
//               platform{" "}
//             </p>
//           </div>
//         </section>
//       </section>
//     </main>
//   );
// };

// export default AuthLayout;




import Header from "@/components/common/Header";
import React from "react";

interface AuthLayoutProps {
  title?:string;
  description?:string

  children: React.ReactNode;
}

const AuthLayout = ({ children,title,description }: AuthLayoutProps) => {
  return (
    <>
      <Header />
      <div className="flex w-full min-h-screen">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-primary items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: 'url("/hotel2.webp")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />

          <div className="relative z-20 px-12 text-white">
            <h1 className="text-5xl font-black leading-tight">
              {/* Elevate Your <br /> Hospitality */}
              {title}
            </h1>

            <p className="mt-6 text-xl opacity-90 max-w-md">
              {description}
              {/* Join thousands of property managers worldwide. */}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-background-dark">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

