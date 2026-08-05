import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkoutVideosSection } from './components/WorkoutVideosSection';
import { ServicesSection } from './components/ServicesSection';
import { BRANCHES, SERVICES, FACILITY_FEATURES, WORKOUT_VIDEOS, FITNESS_CLASSES, TRAINERS, SCHEDULE, TESTIMONIALS } from './data';
import { Branch } from './types';
import {
  Award, Clock, Sparkles, Lock, Apple, Activity, Dumbbell, Users, Key,
  ShieldCheck, Zap, UserCheck, HeartPulse, Flame, Sun, Snowflake,
  MapPin, Phone, Mail, Star, Calendar, MessageSquare, X, Send, CheckCircle2,
  ChevronRight, ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('janakpuri');
  const [passModalOpen, setPassModalOpen] = useState<boolean>(false);
  const [coachModalOpen, setCoachModalOpen] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'>('Monday');
  
  // Trial Pass Form State
  const [passFormData, setPassModalFormData] = useState({ name: '', phone: '', branch: 'janakpuri', classInterest: 'Zumba' });
  const [passSubmitted, setPassSubmitted] = useState<boolean>(false);

  // AI Coach Form State
  const [coachForm, setCoachForm] = useState({ goal: 'Muscle Gain & Fat Loss', fitnessLevel: 'Intermediate', userQuery: '' });
  const [coachResponse, setCoachResponse] = useState<string | null>(null);
  const [coachLoading, setCoachLoading] = useState<boolean>(false);

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  const handlePassSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPassSubmitted(true);
    setTimeout(() => {
      setPassSubmitted(false);
      setPassModalOpen(false);
    }, 2500);
  };

  const handleAskCoach = async (e: React.FormEvent) => {
    e.preventDefault();
    setCoachLoading(true);
    setCoachResponse(null);

    try {
      const res = await fetch('/api/ai-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goal: coachForm.goal,
          fitnessLevel: coachForm.fitnessLevel,
          branch: activeBranch.name,
          userQuery: coachForm.userQuery,
        }),
      });

      const data = await res.json();
      if (data.advice) {
        setCoachResponse(data.advice);
      } else {
        setCoachResponse(data.fallbackAdvice || 'Welcome to Lagoon Fitness! Please consult our head trainer Rajeev for custom nutrition & strength programming.');
      }
    } catch (err) {
      setCoachResponse('Lagoon Fitness AI Coach is available 24/7! Visit our front desk at Janakpuri or Malviya Nagar for personalized PT consultation.');
    } finally {
      setCoachLoading(false);
    }
  };

  // Icon mapping helper
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-8 h-8 text-red-500" />;
      case 'Clock': return <Clock className="w-8 h-8 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-red-500" />;
      case 'Lock': return <Lock className="w-8 h-8 text-zinc-400" />;
      case 'Apple': return <Apple className="w-8 h-8 text-green-500" />;
      case 'Activity': return <Activity className="w-8 h-8 text-red-500" />;
      case 'Dumbbell': return <Dumbbell className="w-8 h-8 text-amber-500" />;
      case 'Users': return <Users className="w-8 h-8 text-red-500" />;
      case 'Key': return <Key className="w-8 h-8 text-zinc-300" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-red-500" />;
      case 'Zap': return <Zap className="w-8 h-8 text-amber-500" />;
      case 'UserCheck': return <UserCheck className="w-8 h-8 text-red-500" />;
      case 'HeartPulse': return <HeartPulse className="w-8 h-8 text-red-500" />;
      case 'Flame': return <Flame className="w-8 h-8 text-red-500" />;
      case 'Sun': return <Sun className="w-8 h-8 text-amber-500" />;
      case 'Snowflake': return <Snowflake className="w-8 h-8 text-cyan-400" />;
      default: return <Dumbbell className="w-8 h-8 text-red-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans antialiased">
      
      {/* Header Navigation */}
      <Navbar
        branches={BRANCHES}
        activeBranch={activeBranch}
        onSelectBranch={setSelectedBranchId}
        onOpenPassModal={() => setPassModalOpen(true)}
        onOpenCoachModal={() => setCoachModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        activeBranch={activeBranch}
        onOpenPassModal={() => setPassModalOpen(true)}
        onOpenCoachModal={() => setCoachModalOpen(true)}
      />

      {/* High-Quality Workout Videos Section */}
      <WorkoutVideosSection
        videos={WORKOUT_VIDEOS}
        activeBranch={activeBranch}
      />

      {/* Services Section */}
      <ServicesSection
        onOpenPassModal={() => setPassModalOpen(true)}
      />

      {/* Facility Features Showcase Grid */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black tracking-widest text-red-500 uppercase">
              WORLD-CLASS FITNESS FACILITIES
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
              OUR <span className="text-red-600">FACILITY FEATURES</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              Engineered for champions — featuring round-the-clock RFID biometric security, routine health checkups, and bio-mechanically isolated strength equipment.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {FACILITY_FEATURES.map((feature) => (
              <div
                key={feature.id}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center justify-center ${
                  feature.isDesignCard
                    ? 'bg-zinc-900/90 border-red-600/30 hover:border-red-500 shadow-lg shadow-red-950/20'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div className="mb-3 p-3 rounded-2xl bg-black/60 border border-white/5">
                  {getFeatureIcon(feature.iconName)}
                </div>
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wide">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100+ Group Classes Grid */}
      <section id="classes" className="py-20 bg-black relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black tracking-widest text-red-500 uppercase">
                HIGH ENERGY LIVE STUDIO
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
                100+ <span className="text-red-600">GROUP CLASSES</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md mt-4 md:mt-0">
              Transform your cardiovascular endurance and core stability with electrifying Bhangra beats, Zumba, Power Vinyasa, and HIIT circuits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FITNESS_CLASSES.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-red-600/60 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-110 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase">
                      {item.intensity} Intensity
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/80 border border-white/10 text-zinc-300 text-[10px] font-bold">
                      {item.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white uppercase font-serif tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-red-400 text-xs font-bold mt-0.5">
                      Avg. Burn: {item.caloriesBurned}
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-zinc-900">
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                  <button
                    onClick={() => {
                      setPassModalFormData((prev) => ({ ...prev, classInterest: item.name }));
                      setPassModalOpen(true);
                    }}
                    className="mt-4 w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Reserve Free Class Slot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Class Schedule */}
      <section id="schedule" className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black tracking-widest text-red-500 uppercase">
              WEEKLY LIVE TIMETABLE
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
              STUDIO <span className="text-red-600">CLASS SCHEDULE</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              Daily live sessions hosted at {activeBranch.name} Studio. Book early to secure your spot!
            </p>
          </div>

          {/* Day Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const).map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                  selectedDay === day
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/40'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule List */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SCHEDULE.filter((s) => s.day === selectedDay).map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between hover:border-red-600/40 transition-colors"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-red-500 uppercase block mb-1">
                    {item.time}
                  </span>
                  <h4 className="text-lg font-black text-white uppercase font-serif">
                    {item.className}
                  </h4>
                  <div className="flex gap-3 text-xs text-zinc-400 mt-1">
                    <span>Coach: <strong className="text-zinc-200">{item.trainer}</strong></span>
                    <span>•</span>
                    <span>{item.room}</span>
                  </div>
                </div>

                <button
                  onClick={() => setPassModalOpen(true)}
                  className="px-3 py-2 rounded-xl bg-red-600/20 text-red-400 border border-red-600/40 text-xs font-bold uppercase hover:bg-red-600 hover:text-white transition-all"
                >
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Showcase */}
      <section id="trainers" className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black tracking-widest text-red-500 uppercase">
              CERTIFIED MASTER COACHES
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
              MEET OUR <span className="text-red-600">ELITE TRAINERS</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              Certified ACSM & Yoga Alliance masters with proven transformation records in Delhi.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINERS.map((trainer) => (
              <div
                key={trainer.id}
                className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-red-600/60 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{trainer.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 block">
                      {trainer.experience} Experience
                    </span>
                    <h3 className="text-xl font-black text-white uppercase font-serif">
                      {trainer.name}
                    </h3>
                    <p className="text-xs text-zinc-300 font-medium">
                      {trainer.role}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-zinc-900 border-t border-zinc-800">
                  <p className="text-zinc-400 text-xs line-clamp-2">
                    {trainer.bio}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {trainer.specialties.map((spec, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] font-semibold">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest text-red-500 uppercase">
              DELHI'S MOST TRUSTED CLUB
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 font-serif">
              MEMBER <span className="text-red-600">REVIEWS & STORIES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-xs italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-zinc-800">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-red-600"
                  />
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase">{t.name}</h4>
                    <span className="text-[10px] text-zinc-500 font-semibold block">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16 text-zinc-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-900">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-xl">
                  LF
                </div>
                <span className="text-white font-black tracking-wider text-lg uppercase font-serif">
                  LAGOON <span className="text-red-600">FITNESS</span>
                </span>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed">
                India's premier 24x7 luxury gym chain featuring bio-mechanical Matrix equipment, live dance studios, eucalyptus steam spas, and personalized PT.
              </p>
            </div>

            {BRANCHES.map((b) => (
              <div key={b.id}>
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-3">
                  {b.name} Branch
                </h4>
                <div className="space-y-2 text-zinc-400">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-red-500 shrink-0" />
                    <a href={`tel:${b.phone}`} className="hover:text-white transition-colors">{b.phone}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-red-500 shrink-0" />
                    <a href={`mailto:${b.email}`} className="hover:text-white transition-colors">{b.email}</a>
                  </p>
                </div>
              </div>
            ))}

            <div>
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-3">
                Operating Hours
              </h4>
              <p className="text-red-500 font-bold text-sm mb-2">24 Hours / 7 Days A Week</p>
              <p className="text-zinc-500 text-[11px]">Unrestricted biometric RFID entry for active members.</p>
              
              <button
                onClick={() => setPassModalOpen(true)}
                className="mt-4 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Claim Free Trial Pass
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-zinc-600 text-[11px]">
            <p>© {new Date().getFullYear()} Lagoon Fitness Club. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#hero" className="hover:text-zinc-400">Privacy Policy</a>
              <a href="#hero" className="hover:text-zinc-400">Terms of Service</a>
              <a href="#hero" className="hover:text-zinc-400">Branch Locations</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Free Trial Pass Modal */}
      {passModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setPassModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>

            {passSubmitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-black text-white uppercase font-serif">
                  TRIAL PASS CONFIRMED!
                </h3>
                <p className="text-zinc-400 text-xs mt-2">
                  Our front desk desk at Lagoon Fitness will contact you shortly on <strong>{passFormData.phone}</strong> to confirm your complimentary 1-day pass.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <span className="px-3 py-1 rounded-full bg-red-950 text-red-400 text-[10px] font-extrabold uppercase tracking-wider">
                    COMPLIMENTARY ACCESS
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase mt-2 font-serif">
                    GET 1-DAY <span className="text-red-600">FREE PASS</span>
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1">
                    Experience world-class Matrix machines and live group classes with zero commitment.
                  </p>
                </div>

                <form onSubmit={handlePassSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={passFormData.name}
                      onChange={(e) => setPassModalFormData({ ...passFormData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={passFormData.phone}
                      onChange={(e) => setPassModalFormData({ ...passFormData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">Preferred Branch</label>
                      <select
                        value={passFormData.branch}
                        onChange={(e) => setPassModalFormData({ ...passFormData, branch: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-600"
                      >
                        <option value="janakpuri">Janakpuri</option>
                        <option value="malviya-nagar">Malviya Nagar</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">Interested Class</label>
                      <select
                        value={passFormData.classInterest}
                        onChange={(e) => setPassModalFormData({ ...passFormData, classInterest: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-600"
                      >
                        <option value="Zumba">Zumba Fitness</option>
                        <option value="Bhangra">Bhangra Blast</option>
                        <option value="Yoga">Power Yoga</option>
                        <option value="Pilates">Core Pilates</option>
                        <option value="Gym">Gym & Matrix Turf</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-red-600/40 transition-all hover:scale-[1.02]"
                  >
                    Confirm My Free Pass
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* AI Fitness Coach Modal */}
      {coachModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setCoachModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-500 font-bold">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase font-serif">
                  LAGOON <span className="text-red-600">AI FITNESS COACH</span>
                </h3>
                <p className="text-zinc-400 text-xs">
                  Get personalized workout protocols & class recommendations for {activeBranch.name}.
                </p>
              </div>
            </div>

            <form onSubmit={handleAskCoach} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">Primary Goal</label>
                  <select
                    value={coachForm.goal}
                    onChange={(e) => setCoachForm({ ...coachForm, goal: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-600"
                  >
                    <option value="Fat Loss & Muscle Toning">Fat Loss & Muscle Toning</option>
                    <option value="Hypertrophy & Heavy Lifting">Hypertrophy & Heavy Lifting</option>
                    <option value="Endurance & High Energy Cardio">Endurance & High Energy Cardio</option>
                    <option value="Flexibility & Core Stability">Flexibility & Core Stability</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">Current Fitness Level</label>
                  <select
                    value={coachForm.fitnessLevel}
                    onChange={(e) => setCoachForm({ ...coachForm, fitnessLevel: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-600"
                  >
                    <option value="Beginner">Beginner (First 3 Months)</option>
                    <option value="Intermediate">Intermediate (1-2 Years)</option>
                    <option value="Advanced Athlete">Advanced Athlete</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-zinc-400 uppercase block mb-1">Specific Question / Preferences</label>
                <input
                  type="text"
                  placeholder="e.g. Can you combine Zumba on Mondays with heavy deadlifts?"
                  value={coachForm.userQuery}
                  onChange={(e) => setCoachForm({ ...coachForm, userQuery: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-red-600"
                />
              </div>

              <button
                type="submit"
                disabled={coachLoading}
                className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {coachLoading ? (
                  <span>Generating AI Protocol...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Generate Custom Routine</span>
                  </>
                )}
              </button>
            </form>

            {/* AI Response Output */}
            {coachResponse && (
              <div className="mt-6 p-5 rounded-2xl bg-black border border-zinc-800 text-zinc-300 text-xs leading-relaxed whitespace-pre-line">
                <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-[11px] mb-3">
                  <Flame className="w-4 h-4" />
                  <span>Coach Recommendations for {activeBranch.name}:</span>
                </div>
                {coachResponse}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
