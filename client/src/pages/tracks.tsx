import React from "react";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";
import { gql } from "../__generated__/";
// ? We run a query within a React component by calling useQuery and passing it our GraphQL query string.
import { useQuery } from "@apollo/client";
/* 
  When our component renders, useQuery returns an object from Apollo Client that contains 
  loading, error, and data properties that we can use to render our UI.
*/

const TRACKS = gql(`
  query TracksQuery {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`)


/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
*/
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  console.log(data)
  return <Layout grid>
    <QueryResult data={data} error={error} loading={loading}>
      {data?.tracksForHome?.map((track) => (
        // TODO: Update data for unique values
        <TrackCard key={track.id} track={track} />
      ))}
    </QueryResult>
  </Layout>;
};

export default Tracks;
