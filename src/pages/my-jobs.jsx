import React from "react";
import { BarLoader } from "react-spinners";
import CreatedApplications from "@/components/created-applications";
import CreatedJobs from "@/components/created-jobs";
import { useUser } from "@clerk/clerk-react";

const MyJobs = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="gradient-title font-extrabold text-4xl sm:text-6xl text-center pb-6">
        {user?.unsafeMetadata?.role === "candidate"
          ? "My Applications"
          : "My Jobs"}
      </h1>
      <div className="flex flex-col gap-6">
        {user?.unsafeMetadata?.role === "candidate" ? (
          <CreatedApplications />
        ) : (
          <CreatedJobs />
        )}
      </div>
    </div>
  );
};

export default MyJobs;
