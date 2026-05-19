import { activities, type Activity } from "./activities";

export type V2Category = {
  id: string;
  label: string;
  icon: string;
  description: string;
  image: string;
  filter: (a: Activity) => boolean;
};

export const v2Categories: V2Category[] = [
  {
    id: "beach-club",
    label: "Beach Club",
    icon: "🏖️",
    description: "Les plus belles plages et beach clubs de Hurghada",
    image: "/images/activities/mahmya-island.jpg",
    filter: (a) => ["mahmya-island", "orange-bay", "orange-bay-white", "eden-island", "hula-hula", "ozirea-island"].includes(a.id),
  },
  {
    id: "yacht-party",
    label: "Yacht Party",
    icon: "🛥️",
    description: "Croisières VIP et sorties en yacht",
    image: "/images/activities/croisiere-elite-vip.jpg",
    filter: (a) => ["elite-vip", "nefertari-vip", "jardin-corail"].includes(a.id),
  },
  {
    id: "nightlife",
    label: "Night Life",
    icon: "🎉",
    description: "Soirées de folie et shows spectaculaires",
    image: "/images/activities/neverland-show.jpg",
    filter: (a) => ["neverland-show", "neverland-aquapark", "waterworld"].includes(a.id),
  },
  {
    id: "sorties-mer",
    label: "Sorties en Mer",
    icon: "🐬",
    description: "Dauphins, snorkeling et fonds marins",
    image: "/images/activities/nager-avec-dauphins.jpg",
    filter: (a) => a.category === "aquatique" && !["mahmya-island", "orange-bay", "orange-bay-white", "eden-island", "hula-hula", "ozirea-island", "elite-vip", "nefertari-vip", "jardin-corail", "neverland-aquapark", "waterworld"].includes(a.id),
  },
  {
    id: "aventure",
    label: "Aventures & Fun",
    icon: "🏜️",
    description: "Quad, safari, buggy et adrénaline",
    image: "/images/activities/super-safari-desert.jpg",
    filter: (a) => a.category === "exploration",
  },
  {
    id: "excursions",
    label: "Excursions",
    icon: "🏛️",
    description: "Le Caire, Luxor et les trésors de l'Égypte",
    image: "/images/activities/le-caire-formule-eco.jpg",
    filter: (a) => a.category === "excursions",
  },
];

export function getActivitiesByV2Category(categoryId: string): Activity[] {
  const cat = v2Categories.find((c) => c.id === categoryId);
  if (!cat) return [];
  return activities.filter(cat.filter);
}

export function getAllV2Activities(): Activity[] {
  return activities;
}
