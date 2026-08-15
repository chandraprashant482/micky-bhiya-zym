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
import CallButton from "./components/CallButton";
import WhatsAppButton from "./components/WhatsAppButton";

import {
  BRANCHES,
  FACILITY_FEATURES,
  WORKOUT_VIDEOS,
  FITNESS_CLASSES,
  TRAINERS,
  SCHEDULE,
  TESTIMONIALS,
} from "./data";

type Page = "home" | "videos" | "classes" | "schedule";

export default function App() {
  const activeBranch = BRANCHES[0];

  const [activePage, setActivePage] = useState<Page>("home");

  const [passModalOpen, setPassModalOpen] = useState(false);
  const [coachModalOpen, setCoachModalOpen] = useState(false);

  const [passSubmitted, setPassSubmitted] = useState(false);

  const [passFormData, setPassFormData] = useState({
    name: "",
    phone: "",
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

  // =========================
  // FREE TRIAL FORM
  // =========================

  const handlePassSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formspree.io/f/xaewnlvl",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: passFormData.name,
            phone: passFormData.phone,
            interestedClass: passFormData.classInterest,
          }),
        }
      );

      if (response.ok) {
        setPassSubmitted(true);

        setTimeout(() => {
          setPassSubmitted(false);
          setPassModalOpen(false);

          setPassFormData({
            name: "",
            phone: "",
            classInterest: "Zumba",
          });
        }, 2000);
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  };

  // =========================
  // RESERVE CLASS
  // =========================

  const handleReserveClass = (className: string) => {
    setPassFormData((prev) => ({
      ...prev,
      classInterest: className,
    }));

    setPassModalOpen(true);
  };

  // =========================
  // AI COACH
  // =========================

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

Visit Lagoon Fitnes Gyms for a personalized plan.`
      );

      setCoachLoading(false);
    }, 1500);
  };

  // =========================
  // NAVIGATION
  // =========================

  const handleNavigate = (
    page: Page,
    section?: string
  ) => {
    setActivePage(page);

    setTimeout(() => {
      if (section) {
        document
          .getElementById(section)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans antialiased">

      {/* =========================
          NAVBAR
         ========================= */}

      <Navbar onNavigate={handleNavigate} />

      {/* =========================
          HOME PAGE
         ========================= */}

      {activePage === "home" && (
        <>
          <Hero
            onOpenPassModal={() =>
              setPassModalOpen(true)
            }
            onOpenCoachModal={() =>
              setCoachModalOpen(true)
            }
          />

          <ServicesSection
            onOpenPassModal={() =>
              setPassModalOpen(true)
            }
          />

          <FacilityFeatures
            features={FACILITY_FEATURES}
          />

          <Trainers
            trainers={TRAINERS}
          />

          <Testimonials
            testimonials={TESTIMONIALS}
          />

          <Footer
            branches={BRANCHES}
            onOpenPassModal={() =>
              setPassModalOpen(true)
            }
          />
        </>
      )}

      {/* =========================
          WORKOUT VIDEOS PAGE
         ========================= */}

      {activePage === "videos" && (
        <>
          <WorkoutVideosSection
            videos={WORKOUT_VIDEOS}
          />

          <Footer
            branches={BRANCHES}
            onOpenPassModal={() =>
              setPassModalOpen(true)
            }
          />
        </>
      )}

      {/* =========================
          100+ CLASSES PAGE
         ========================= */}

      {activePage === "classes" && (
        <>
          <FitnessClasses
            classes={FITNESS_CLASSES}
            onReserveClass={handleReserveClass}
          />

          <Footer
            branches={BRANCHES}
            onOpenPassModal={() =>
              setPassModalOpen(true)
            }
          />
        </>
      )}

      {/* =========================
          SCHEDULE PAGE
         ========================= */}

      {activePage === "schedule" && (
        <>
          <Schedule
            schedule={SCHEDULE}
            branchName={activeBranch.name}
            onJoinClass={() =>
              setPassModalOpen(true)
            }
          />

          <Footer
            branches={BRANCHES}
            onOpenPassModal={() =>
              setPassModalOpen(true)
            }
          />
        </>
      )}

      {/* =========================
          PASS MODAL
         ========================= */}

      <PassModal
        open={passModalOpen}
        submitted={passSubmitted}
        formData={passFormData}
        setFormData={setPassFormData}
        onSubmit={handlePassSubmit}
        onClose={() =>
          setPassModalOpen(false)
        }
      />

      {/* =========================
          AI COACH MODAL
         ========================= */}

      <CoachModal
        open={coachModalOpen}
        loading={coachLoading}
        response={coachResponse}
        branchName={activeBranch.name}
        form={coachForm}
        setForm={setCoachForm}
        onSubmit={handleCoachSubmit}
        onClose={() =>
          setCoachModalOpen(false)
        }
      />

      {/* =========================
          FLOATING BUTTONS
         ========================= */}

      <CallButton />
      <WhatsAppButton />

    </div>
  );
}