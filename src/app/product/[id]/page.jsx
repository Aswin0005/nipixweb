"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import star from "../../../../public/star.png";
import uno_img1 from "../../../../public/uno_img1.png";
import uno_img2 from "../../../../public/uno_img2.png";
import uno_img3 from "../../../../public/uno_img3.png";
import uno_img4 from "../../../../public/uno_img4.png";

const ProductItem = () => {
  const images = [uno_img1, uno_img2, uno_img3, uno_img4];

  const details = [
    { label: "Brand", value: "Ardunio" },
    { label: "Width", value: "8cm" },
    { label: "Model number", value: "RC-A-4058" },
    { label: "Height", value: "1.5cm" },
    { label: "Type", value: "Micro Controller Board" },
    { label: "Weight", value: "70g" },
    { label: "Material", value: "Epoxy" },
    { label: "Manufacturer", value: "Kuongshun Electronic Ltd., Karnataka" },
    { label: "Power Source", value: "DC" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const [ratings] = useState([
    { stars: 5, label: "Excellent", count: 32, width: "85%" },
    { stars: 4, label: "Very Good", count: 17, width: "70%" },
    { stars: 3, label: "Good", count: 8, width: "38%" },
    { stars: 2, label: "Average", count: 3, width: "10%" },
    { stars: 1, label: "Poor", count: 2, width: "6%" },
  ]);

  const [topReviews, setTopReviews] = useState([
    { tag: "Good Quality", count: 0 },
    { tag: "Durable", count: 0 },
    { tag: "Nice Packaging", count: 0 },
    { tag: "Trusted", count: 0 },
    { tag: "Value for Money", count: 0 },
    { tag: "No Damage", count: 0 },
  ]);

  const [reviews, setReviews] = useState([
    {
      name: "Aswinsundhar",
      date: "15th Aug 2024",
      rating: "4.9",
      reviewTitle: "Amazing Product",
      reviewContent:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est velit ea sed adipisci nobis nemo.",
    },
    {
      name: "Dinesh Kumar",
      date: "28th Sept 2024",
      rating: "4.5",
      reviewTitle: "Super Quality",
      reviewContent:
        "Deleniti, officiis tenetur. Est velit ea sed adipisci nobis nemo. Adkjf reowe fadfjhdf aweryoieu adfjlafj sdfouadfasf",
    },
    {
      name: "Cloudin",
      date: "3th Oct 2024",
      rating: "4.6",
      reviewTitle: "Value for Money",
      reviewContent:
        "Est velit ea sed adipisci nobis nemo. Adkjf reowe fadfjhdf aweryoieu adfjlafj sdfouadfasf",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    reviewTitle: "",
    reviewContent: "",
  });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (stars) => {
    setNewReview((prev) => ({ ...prev, rating: stars }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString(); // Format date as needed
    const submittedReview = {
      ...newReview,
      date,
      rating: newReview.rating.toFixed(1),
    };

    // Prepend the new review to the existing reviews
    setReviews((prev) => [submittedReview, ...prev]);

    // Update the top reviews counts
    setTopReviews((prevTopReviews) => {
      const updatedTopReviews = [...prevTopReviews];
      const valueForMoneyIndex = updatedTopReviews.findIndex(
        (tr) => tr.tag === "Value for Money"
      );
      if (newReview.reviewTitle.includes("Value for Money")) {
        updatedTopReviews[valueForMoneyIndex].count += 1;
      }
      return updatedTopReviews;
    });

    setNewReview({ name: "", rating: 0, reviewTitle: "", reviewContent: "" });
  };

  // Calculate overall rating
  const totalRatings = reviews.length;
  const averageRating =
    totalRatings > 0
      ? (
          reviews.reduce((sum, review) => sum + parseFloat(review.rating), 0) /
          totalRatings
        ).toFixed(1)
      : 0;
  const filledStars = Math.round(averageRating);
  return (
    <div className="pt-24 md:pt-32 mx-auto w-screen min-h-screen overflow-hidden p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Grid - Product Images */}
        <div className="w-full flex flex-wrap flex-col justify-between">
          <div className="relative h-72 w-72 md:w-[32rem] lg:w-[24rem] xl:w-[32rem] mx-auto bg-slate-200 rounded-xl border">
            <Image
              src={images[currentIndex]}
              alt="Product Image"
              layout="fill"
              className="rounded-xl object-cover"
            />

            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white border rounded-full shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white border rounded-full shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="w-full flex justify-center gap-8 mt-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`h-16 w-16 lg:h-[75px] lg:w-[75px] xl:h-[96px] xl:w-[96px] rounded-xl cursor-pointer ${
                  currentIndex === index
                    ? "border-2 border-slate-700"
                    : "border border-slate-300"
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  layout="responsive"
                  width={96}
                  height={96}
                  className="rounded-xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Grid - Description */}
        <div className="w-full lg:mt-0">
          <h1 className="text-3xl">
            Uno R3 CH340G ATmega328p Development Board Compatible
          </h1>
          <div className="w-full flex my-5">
            <h1 className="text-xl mb-0 pb-0">{averageRating}</h1>
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src={star}
                alt=""
                height={15}
                width={25}
                className="pb-1"
                style={{ opacity: index < filledStars ? 1 : 0.3 }}
              />
            ))}
            <p className="ml-1 pt-1 text-slate-600">({totalRatings}) ratings</p>
          </div>
          <p>
            The Uno R3 CH340G ATmega328P Development Board is a cost-effective,
            Arduino-compatible board perfect for beginners and hobbyists.
            Featuring the reliable ATmega328P chip and CH340G USB interface, it
            offers 14 digital I/O pins, 6 analog inputs, and seamless USB
            connectivity. Ideal for prototyping and educational projects, this
            board delivers great performance at an unbeatable price!
          </p>
          <div className="w-full flex flex-wrap md:flex-nowrap mt-5 gap-8 justify-center items-center">
            <h1 className="text-3xl">$699</h1>
            <div className=" flex items-end gap-4">
              <span className="text-lg my-auto">Quantity</span>
              <button
                className="h-8 w-8 bg-slate-50 border rounded"
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className="text-lg my-auto">{quantity}</span>
              <button
                className="h-8 w-8 bg-slate-50 border rounded"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-[#3897D1] rounded-lg text-md py-3 w-full text-white px-4 ">
              Add to Cart
            </button>
          </div>
          <button className="mt-8 bg-[#3897D1] rounded-lg text-md py-3 w-full text-white px-4">
            Buy Now
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-14 md:p-16">
        <h1 className="text-3xl mb-14">Product Details</h1>
        <div className="grid grid-cols-2 gap-5 mt-10">
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="bg-gray-200  w-1/2 md:w-[30%] flex items-center justify-center p-3">
                <p className="text-sm md:text-lg font-medium text-gray-800 text-center">
                  {detail.label}
                </p>
              </div>

              <div className="w-[70%] flex items-center justify-center p-3">
                <p className="text-sm md:text-lg text-gray-800 text-center">
                  {detail.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rating and Reviews */}
      <div className="md:p-16 pt-10">
        <h2 className="text-3xl mb-10 md:mb-14">Rating & Reviews</h2>
        <div className="md:grid md:grid-cols-5 gap-24">
          {/* Overall Rating */}
          <div className="col-span-1 place-content-center mx-auto">
            <div className="text-6xl font-bold flex justify-center">
              {averageRating}
            </div>
            <div className="flex justify-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src={star}
                  alt=""
                  height={15}
                  width={25}
                  className="pb-1"
                  style={{
                    opacity: index < Math.round(averageRating) ? 1 : 0.3,
                  }}
                />
              ))}
            </div>
            <div className="text-gray-600 text-sm flex justify-center">
              ({totalRatings}) ratings
            </div>
          </div>

          {/* Each Rating */}
          <div className="col-span-2 flex flex-col gap-2">
            {/* Replace this with your actual ratings data */}
            {ratings.map((rating) => (
              <div key={rating.stars} className="flex items-center">
                <span className="w-20 mb:w-32 text-right mr-2 text-sm">
                  {rating.label}
                </span>
                <span className="text-yellow-500 mr-2">{rating.stars}★</span>
                <div className="flex-1 h-2 bg-gray-300 rounded">
                  <div
                    className="h-full bg-yellow-500 rounded"
                    style={{ width: rating.width }}
                  />
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {rating.count}
                </span>
              </div>
            ))}
          </div>

          {/* Top Reviews */}
          <div className="col-span-2">
            <h3 className="text-xl mb-4 mt-4">Top Reviews:</h3>
            <div className="flex flex-wrap gap-2">
              {topReviews.map((topReview, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-4 py-2 mb-2 rounded-full text-sm text-gray-700"
                >
                  {topReview.tag} ({topReview.count})
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Review Submission Form */}
        <div className="md:p-16 pt-8">
          <div className="flex flex-row items-center mb-4">
            <h3 className="text-xl font-bold">Submit Your Review:</h3>
            <div className="flex items-center ml-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleStarClick(index + 1)}
                  className="cursor-pointer"
                >
                  <Image
                    src={star}
                    alt=""
                    height={30} 
                    width={30} 
                    className="pb-1"
                    style={{ opacity: index < newReview.rating ? 1 : 0.5   }}
                  />
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newReview.name}
              onChange={handleReviewChange}
              required
              className="border rounded p-2"
            />

            <input
              type="text"
              name="reviewTitle"
              placeholder="Review Title"
              value={newReview.reviewTitle}
              onChange={handleReviewChange}
              required
              className="border rounded p-2"
            />
            <textarea
              name="reviewContent"
              placeholder="Write your review here..."
              value={newReview.reviewContent}
              onChange={handleReviewChange}
              required
              className="border rounded p-2 resize-none h-24" 
            />
            <button
              type="submit"
              className="py-2 px-4 bg-[#83ABED] text-white rounded"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Customer Reviews */}
        <div className="md:p-16 pt-8 pb-8 md:pb-0">
          {" "}
          {reviews.map((review, index) => (
            <div
              key={index}
              className="px-8 py-6 rounded-3xl border shadow-xl mb-4"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-slate-200 text-xl border rounded-full flex items-center justify-center">
                    <span className="text-slate-700">
                      {review.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <p className="text-lg">{review.name}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm">{review.date}</p>
                  <button className="py-[0.4rem] px-2 ml-2 rounded-lg text-xs bg-[#3897D1] text-white">
                    {review.rating} ★
                  </button>
                </div>
              </div>
              <div className="px-1 mt-4">
                <p className="text-xl mb-1">{review.reviewTitle}!</p>
                <p>{review.reviewContent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
