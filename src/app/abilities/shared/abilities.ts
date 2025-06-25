export interface Abilities {
  [abilityName: string]: Ability
}
export interface Ability {
  dname: string;
  behavior: string;
  dmg_type: string;
  bkbpierce: string;
  desc: string;
  lore: string;
  img: string;
  target_team: string;
  is_innate?: boolean;
}
