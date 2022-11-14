export type Filter = {
  id: string;
  name: string;
  items?: Filter[];
  sublevels?: Filter;
};
