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
  description: string;
  numberOfViews: number;
  /* 
    As we won't actually use the array of module ids on each track object,
    we won't need to define it on our TrackModel.
  */
};

export type ModuleModel = {
  id: string;
  title: string;
  length: number;
}

export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};