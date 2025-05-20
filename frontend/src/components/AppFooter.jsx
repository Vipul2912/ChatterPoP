export const AppFooter = () => {
  return (
    <footer className="
      w-full py-3 px-4 
      bg-base-100 text-base-content 
      text-xs sm:text-sm
      border-t border-base-200
      flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6
    ">
      {/* Links row */}
      {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <a href="/terms" className="hover:underline hover:text-primary">
          Conditions of Use
        </a>
        <a href="/privacy" className="hover:underline hover:text-primary">
          Privacy Notice
        </a>
        <a href="/ads" className="hover:underline hover:text-primary">
          Interest-Based Ads
        </a>
      </div> */}

      {/* Copyright */}
      <div className="text-center opacity-80">
        © {new Date().getFullYear()}, ChatterPoP™. All rights reserved.
      </div>
    </footer>
  );
};