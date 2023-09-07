import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel } from "../models";

// * Set up data source and retrieve data from the REST API.

// The RESTDataSource class provides helper methods for HTTP requests.
export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  // RESOLVERS
  // This method accepts a generic, where we can indicate that it returns an array of TrackModel objects.
  getTracksForHome = () => this.get<TrackModel[]>('tracks');
  
  getAuthor = (authorId: string) => this.get<AuthorModel>(`author/${authorId}`);
}

// export class SpaceCatsAPI extends RESTDataSource {
//   constructor() {
//     super()
//     this.baseURL = 'https://fake-spacecats-rest-api.cat/';
//   }
// }