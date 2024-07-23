"use client"
import React, { Suspense } from "react";
import CardCredit from "@/src/app/dashboard/card-credit";
import { CardCreditSkeleton } from "../ui/skeletons";
import SwiperCore  from 'swiper';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Inicializar los módulos
SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Page() {
/*  const swiperParams: SwiperOptions = {

  }  */

   
  return (
    <main>
      <div className="w-full pt-3 mt-6 ml-9">
        <h1 className="font-bold text-2xl text-[#262945]">
          Bienvenido usuario
        </h1>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <Suspense fallback={<CardCreditSkeleton />}>
          <div className="flex items-center justify-center w-full h-full">
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }}
             
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
            >
              <SwiperSlide>
                <CardCredit />
              </SwiperSlide>
              <SwiperSlide>
                <CardCredit />
              </SwiperSlide>
              <SwiperSlide>
                <CardCredit />
              </SwiperSlide>
            </Swiper>
          </div>
        </Suspense>
        <Suspense fallback={<CardCreditSkeleton />}>
          <div className="flex items-center justify-center w-full h-full">
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }}
             
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
            >
              <SwiperSlide>
                <CardCredit />
              </SwiperSlide>
              <SwiperSlide>
                <CardCredit />
              </SwiperSlide>
              <SwiperSlide>
                <CardCredit />
              </SwiperSlide>
            </Swiper>
          </div>
        </Suspense>
      </div>
    </main>
  );
}
