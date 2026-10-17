import {
  PenLine, Palette, Layout, Video,
  Facebook, Instagram, Share2,
  Users, Search,
  Globe, Code2, BookOpen, Megaphone, Lightbulb, Sparkles, TrendingUp,
} from "lucide-react";

export const icons = {
  PenLine, Palette, Layout, Video,
  Facebook, Instagram, Share2,
  Users, Search,
  Globe, Code2,
  BookOpen, Megaphone, Lightbulb, Sparkles, TrendingUp,
};

export default function SkillIcon({ name, className }) {
  const Comp = icons[name] || Sparkles;
  return <Comp className={className} />;
}
