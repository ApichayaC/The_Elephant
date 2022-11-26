import { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';
import Book from '../components/Book';
import { MainLayout } from '../layouts/MainLayout';

const Homepage: NextPage = () => {
  
  return (
    <MainLayout><Book/></MainLayout>
  );
};
export default Homepage;

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1800, stale-while-revalidate=59'
  );

  return {
    props: {},
  };
}