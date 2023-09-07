// ? We can use our Track type as a reference for the fields we need to include.
/* 
  Author does not exist in our database. Instead, we use the authorId field to map a Track 
  object to a particular Author object. For this reason, we'll include authorId as a string 
  type on TrackModel instead.
*/
export type TrackModel = {
  id: string;
  title: string;
  authorId: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
};

export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};