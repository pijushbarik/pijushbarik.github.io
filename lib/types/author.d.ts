import { Media } from "./commons";

type Author = {
  name: string;
  avatar?: Media;
  twitter_handle?: string;
  description: string;
};

export default Author;
