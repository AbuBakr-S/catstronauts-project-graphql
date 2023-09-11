import React from 'react';
import { gql } from '../__generated__';
import { Layout, QueryResult } from "../components";
import ModuleDetail from '../components/module-detail';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const MODULE = gql(`
  query GetModule($moduleId: ID!, $trackId: ID!) {
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
  const { loading, error, data } = useQuery(MODULE, {
    variables: { moduleId, trackId }
  });
  return (
    <Layout fullWidth>
      <QueryResult data={data} error={error} loading={loading}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
      <h1>Module</h1>
    </Layout>
  )
}
