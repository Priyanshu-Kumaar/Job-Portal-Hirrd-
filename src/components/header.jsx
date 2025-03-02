import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      {/* Header Container */}
      <div className=" mx-4 sm:px-6 lg:px-12 flex flex-wrap justify-between items-center py-4 shadow-md w-full md:min-w-screen">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/logo.png"
            className="h-10 sm:h-12 md:h-14 lg:h-16 ml-0"
            alt="Hirrd Logo"
          />
        </Link>

        {/* Navigation & Buttons */}
        <div className="flex items-center pr-8 gap-3 sm:gap-5 md:gap-8 flex-wrap">
          <SignedOut>
            <Button
              variant="outline"
              onClick={() => setShowSignIn(true)}
              className="text-xs sm:text-sm md:text-base px-3 sm:px-4"
            >
              Login
            </Button>
          </SignedOut>

          <SignedIn>
            {/* Recruiter-specific-button */}
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-jobs">
                <Button
                  variant="destructive"
                  className="rounded-full text-xs sm:text-sm md:text-base flex items-center px-3 sm:px-4"
                >
                  <PenBox size={16} className="mr-1 sm:mr-2" />
                  Post a Job
                </Button>
              </Link>
            )}

            {/* User Menu */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={14} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={14} />}
                  href="/saved-jobs"
                />
                <UserButton.Action label="Manage Account" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </div>

      {/* Sign-In Modal */}
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 mr-4 ml-2"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
