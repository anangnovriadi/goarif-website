import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Chart from 'react-apexcharts'

const Detail: React.FC = () => {
  let { id } = useParams();

  return (
    <>
      <div>Detail</div>
    </>
  );
}

export default Detail;
