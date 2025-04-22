import { assets, dummyTestimonial } from "@/assets/assets";
import React from "react";

function TestimonialsSection() {
  return (
    <div className="pb-14 px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-semibold text-gray-800 text-center">Testimonials</h2>
      <p className="text-gray-500 text-center mt-3 max-w-2xl mx-auto">
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 pb-8"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-100 rounded-t-xl">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            <div className="px-5 pt-4 pb-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="h-4 w-4"
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt={`${i + 1} Star`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">{testimonial.feedback}</p>
            </div>
            <a href="" className="text-blue-500 underline px-5 " >Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
