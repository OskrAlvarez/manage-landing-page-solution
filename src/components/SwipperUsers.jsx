import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { users } from "../constans";

export default function SwipperUsers() {
  return (
    <>
      <Swiper pagination={true}  modules={[Pagination]}>
        {users.map((user) => (
          <SwiperSlide>
            <div class="card relative max-w-[300px] bg-veryLightGray rounded-md py-3 mb-12 mx-auto">
              <div class="card-header flex items-center justify-center">
                <img
                  class="w-16 h-w-16 rounded-full block"
                  src={user.imageURL}
                  alt={user.usename}
                />
              </div>
              <div class="card-body flex flex-col items-center justify-center">
                <h3 class="card-username font-bold text-darkBlue py-4">
                  {user.usename}
                </h3>
                <p class="card-testimonial text-center text-darkGrayishBlue text-xs">
                  {user.testimonial}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
