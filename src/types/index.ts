import { IconType } from "react-icons";

export interface ITheme {
  title: string;
  icon: IconType;
}

export interface INavLink extends ITheme {
  path: string;
}

export interface IMovie {
  id?: string;
  poster_path: string;
  original_title?: string;
  name: string;
  overview: string;
  backdrop_path?: string;
}

export interface IinfoVideo {
  title: string;
  genres: [];
  credits: { cast: [] };
  poster_path: string;
  original_title: string;
  overview: string;
  videos?: { results: [] };
}
