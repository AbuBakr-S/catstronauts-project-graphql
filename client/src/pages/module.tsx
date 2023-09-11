import React from 'react';
import { gql } from '../__generated__';
import { Layout, QueryResult } from "../components";
import ModuleDetail from '../components/module-detail';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

/**
* Module page fetches both parent track and module's data from the gql query GET_MODULE_AND_PARENT_TRACK
* and feeds them to the ModuleDetail component
*/
const GET_MODULE_AND_PARENT_TRACK = gql(`
  query GetModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      length
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`)

export const Module = () => {
  const { moduleId = "", trackId = "" } = useParams();
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: { moduleId, trackId }
  });
  return (
    <Layout fullWidth>
      <QueryResult data={data} error={error} loading={loading}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  )
}
