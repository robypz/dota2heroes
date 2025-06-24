export interface HeroAbilities {
  [heroName: string]: HeroDetails;
}

export interface HeroDetails {
  abilities: string[];
  talents: Talent[];
  facets: Facet[];
}

export interface Talent {
  name: string;
  level: number;
}

export interface Facet {
  id: number;
  name: string;
  icon: string;
  color: string;
  gradient_id: number;
  title: string;
  description: string;
}
