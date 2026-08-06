import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkoutVideosSection } from "./components/WorkoutVideosSection";
import { ServicesSection } from "./components/ServicesSection";
import { FacilityFeatures } from "./components/FacilityFeatures";
import { FitnessClasses } from "./components/FitnessClasses";
import { Schedule } from "./components/Schedule";
import { Trainers } from "./components/Trainers";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { PassModal } from "./components/PassModal";
import { CoachModal } from "./components/CoachModal";

import {
  BRANCHES,
  FACILITY_FEATURES,
  WORKOUT_VIDEOS,
  FITNESS_CLASSES,
  TRAINERS,
  SCHEDULE,
  TESTIMONIALS,
} from "./data";

export default function App() {
  const activeBranch = BRANCHES[0];

  const [passModalOpen, setPassModalOpen] = useState(false);
  const [coachModalOpen, setCoachModalOpen] = useState(false);

  const [passSubmitted, setPassSubmitted] = useState(false);

  const [passFormData, setPassFormData] = useState({
    name: "",
    phone: "",
    branch: "janakpuri",
    classInterest: "Zumba",
  });

  const [coachForm, setCoachForm] = useState({
    goal: "Fat Loss & Muscle Toning",
    fitnessLevel: "Beginner",
    userQuery: "",
  });

  const [coachLoading, setCoachLoading] = useState(false);

  const [coachResponse, setCoachResponse] =
    useState<string | null>(null);

  const handlePassSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPassSubmitted(true);

    setTimeout(() => {
      setPassSubmitted(false);
      setPassModalOpen(false);
    }, 2500);
  };

  const handleReserveClass = (className: string) => {
    setPassFormData((prev) => ({
      ...prev,
      classInterest: className,
    }));

    setPassModalOpen(true);
  };

  const handleCoachSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setCoachLoading(true);

    setTimeout(() => {
      setCoachResponse(
        `Recommended workout for ${coachForm.goal}

• 5 Days Strength Split
• 2 Days Cardio
• Protein Rich Diet
• Sleep 7-8 Hours

Visit Lagoon Fitness for a personalized plan.`
      );

      setCoachLoading(false);
    }, 1500);
  };
    return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans antialiased">

      <Navbar />

      <Hero
        onOpenPassModal={() => setPassModalOpen(true)}
        onOpenCoachModal={() => setCoachModalOpen(true)}
      />

      <WorkoutVideosSection
        videos={WORKOUT_VIDEOS}
      />

      <ServicesSection
        onOpenPassModal={() => setPassModalOpen(true)}
      />

      <FacilityFeatures
        features={FACILITY_FEATURES}
      />

      <FitnessClasses
        classes={FITNESS_CLASSES}
        onReserveClass={handleReserveClass}
      />

      <Schedule
        schedule={SCHEDULE}
        branchName={activeBranch.name}
        onJoinClass={() => setPassModalOpen(true)}
      />

      <Trainers
        trainers={TRAINERS}
      />

      <Testimonials
        testimonials={TESTIMONIALS}
      />

      <Footer
        branches={BRANCHES}
        onOpenPassModal={() => setPassModalOpen(true)}
      />

      <PassModal
        open={passModalOpen}
        submitted={passSubmitted}
        formData={passFormData}
        setFormData={setPassFormData}
        onSubmit={handlePassSubmit}
        onClose={() => setPassModalOpen(false)}
      />

      <CoachModal
        open={coachModalOpen}
        loading={coachLoading}
        response={coachResponse}
        branchName={activeBranch.name}
        form={coachForm}
        setForm={setCoachForm}
        onSubmit={handleCoachSubmit}
        onClose={() => setCoachModalOpen(false)}
      />

    </div>
  );
}