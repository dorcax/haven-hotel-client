import React from "react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthCard = ({ title, subtitle, children }: AuthCardProps) => {
  return (
    <div className="max-w-[480px] w-full flex flex-col">
      <div className="mb-6 px-4">
        <h2 className="text-[#1A365D] dark:text-white text-3xl font-bold">
          {title}
        </h2>
        <p className="text-[#4c739a] dark:text-slate-400 text-base">
          {subtitle}
        </p>
      </div>

      {children}
    </div>
  );
};

export default AuthCard;
