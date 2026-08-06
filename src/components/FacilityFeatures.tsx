import {
  Award,
  Clock,
  Sparkles,
  Lock,
  Apple,
  Activity,
  Dumbbell,
  Users,
  Key,
  ShieldCheck,
  Zap,
  UserCheck,
  HeartPulse,
  Flame,
  Sun,
  Snowflake,
} from "lucide-react";

interface FacilityFeature {
  id: string;
  title: string;
  iconName: string;
  isDesignCard?: boolean;
}

interface FacilityFeaturesProps {
  features: FacilityFeature[];
}

export function FacilityFeatures({
  features,
}: FacilityFeaturesProps) {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-8 h-8 text-red-500" />;

      case "Clock":
        return <Clock className="w-8 h-8 text-amber-500" />;

      case "Sparkles":
        return <Sparkles className="w-8 h-8 text-red-500" />;

      case "Lock":
        return <Lock className="w-8 h-8 text-zinc-400" />;

      case "Apple":
        return <Apple className="w-8 h-8 text-green-500" />;

      case "Activity":
        return <Activity className="w-8 h-8 text-red-500" />;

      case "Dumbbell":
        return <Dumbbell className="w-8 h-8 text-amber-500" />;

      case "Users":
        return <Users className="w-8 h-8 text-red-500" />;

      case "Key":
        return <Key className="w-8 h-8 text-zinc-300" />;

      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-red-500" />;

      case "Zap":
        return <Zap className="w-8 h-8 text-amber-500" />;

      case "UserCheck":
        return <UserCheck className="w-8 h-8 text-red-500" />;

      case "HeartPulse":
        return <HeartPulse className="w-8 h-8 text-red-500" />;

      case "Flame":
        return <Flame className="w-8 h-8 text-red-500" />;

      case "Sun":
        return <Sun className="w-8 h-8 text-amber-500" />;

      case "Snowflake":
        return <Snowflake className="w-8 h-8 text-cyan-400" />;

      default:
        return <Dumbbell className="w-8 h-8 text-red-500" />;
    }
  };

  return (
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
            Engineered for champions — featuring round-the-clock RFID
            biometric security, routine health checkups, and
            bio-mechanically isolated strength equipment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center justify-center ${
                feature.isDesignCard
                  ? "bg-zinc-900/90 border-red-600/30 hover:border-red-500 shadow-lg shadow-red-950/20"
                  : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700"
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
  );
}