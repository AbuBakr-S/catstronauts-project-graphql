import React from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";

const TRACK = gql(`
  query Track($trackId: ID!) {
    track(id: $trackId) {
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
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`)

export const Track = () => {
  const { trackId } = useParams();
  console.log(trackId)
  return (
    <Layout></Layout>
  )
}
