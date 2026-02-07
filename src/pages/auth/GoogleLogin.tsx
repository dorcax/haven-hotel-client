import { envUrl } from "@/api/data/base";

export const GoogleLogin = () => {

  const handleGoogleLogin = () => {
    window.location.href = `${envUrl}/auth/google`;
  };

  return (
    <>
      <div className="relative my-2 md:my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
        </div>
        <div className="relative flex justify-center text-xs font-medium uppercase">
          <span className="bg-white dark:bg-background-dark px-3 text-slate-400">
            Or continue with
          </span>
        </div>
      </div>

      <div>
        <button
          className="flex items-center justify-center gap-2 h-11 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer w-full px-2"
          onClick={handleGoogleLogin}
        >
          <img
            alt="Google Logo"
            className="size-5 shrink-0"
            src="/google-icon.svg"
          />
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 truncate">
            Google
          </span>
        </button>
      </div>
    </>
  );
};
