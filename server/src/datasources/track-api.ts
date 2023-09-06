import { RESTDataSource } from "@apollo/datasource-rest";

// * Set up data source and retrieve data from the REST API.

// The RESTDataSource class provides helper methods for HTTP requests.
export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  // RESOLVERS
  getTracksForHome = () => this.get('tracks');
  
  getAuthor = (authorId: string) => this.get(`author/${authorId}`);
}

// export class SpaceCatsAPI extends RESTDataSource {
//   constructor() {
//     super()
//     this.baseURL = 'https://fake-spacecats-rest-api.cat/';
//   }
// }