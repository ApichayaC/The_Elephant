import { NextPage } from "next";
import Product from "../../components/Products/Product";
import { MainLayout } from "../../layouts/MainLayout";

const BookPage: NextPage = () => {
  return (
    <MainLayout pageName="Booking">
      <Product/>
    </MainLayout>
  );
};

export default BookPage;
