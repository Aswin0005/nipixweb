'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import star from '../../../../public/star.png';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../../firebaseConfig';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { CldImage } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

const ProductItem = () => {
  const router = useRouter();
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
  const [productDetails, setProductDetails] = useState(null);
  const [images, setImages] = useState([]);
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const [ratings, setRatings] = useState([]);
  const countReviewsByStars = (reviews) => {
    // Create an array to store count for each star rating
    const starRatings = [
      { stars: 5, label: 'Excellent', count: 0, width: '0%' },
      { stars: 4, label: 'Very Good', count: 0, width: '0%' },
      { stars: 3, label: 'Good', count: 0, width: '0%' },
      { stars: 2, label: 'Average', count: 0, width: '0%' },
      { stars: 1, label: 'Poor', count: 0, width: '0%' },
    ];

    // Iterate over the reviews and count the number of reviews for each star rating
    reviews.forEach((review) => {
      const starRating = starRatings.find(
        (rating) => rating.stars === review.rating
      );
      if (starRating) {
        starRating.count += 1;
      }
    });

    // Calculate the total number of reviews
    const totalReviews = reviews.length;

    // Update the width based on the count and total reviews
    starRatings.forEach((rating) => {
      rating.width =
        totalReviews > 0 ? `${(rating.count / totalReviews) * 100}%` : '0%';
    });

    return starRatings;
  };

  const [topReviews, setTopReviews] = useState([
    { tag: 'Good Quality', count: 0 },
    { tag: 'Durable', count: 0 },
    { tag: 'Nice Packaging', count: 0 },
    { tag: 'Trusted', count: 0 },
    { tag: 'Value for Money', count: 0 },
    { tag: 'No Damage', count: 0 },
  ]);

  const [reviews, setReviews] = useState([]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    reviewTitle: '',
    reviewContent: '',
  });

  const [userId, setUserId] = useState(null);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (stars) => {
    setNewReview((prev) => ({ ...prev, rating: stars }));
  };
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString(); // Format date as needed
    const submittedReview = {
      ...newReview,
      date,
      rating: newReview.rating.toFixed(1),
    };

    const productId = await params.id;
    const data = await axios.post(`/api/products/${productId}/reviews`, {
      userId,
      reviewTitle: newReview.reviewTitle,
      reviewContent: newReview.reviewContent,
      rating: newReview.rating,
    });

    console.log('Data After Post', data);
    // Prepend the new review to the existing reviews
    setReviews((prev) => [submittedReview, ...prev]);

    // Update the top reviews counts
    setTopReviews((prevTopReviews) => {
      const updatedTopReviews = [...prevTopReviews];
      const valueForMoneyIndex = updatedTopReviews.findIndex(
        (tr) => tr.tag === 'Value for Money'
      );
      if (newReview.reviewTitle.includes('Value for Money')) {
        updatedTopReviews[valueForMoneyIndex].count += 1;
      }
      return updatedTopReviews;
    });

    setNewReview({ name: '', rating: 0, reviewTitle: '', reviewContent: '' });
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

  const params = useParams();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
  }, [auth]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data } = await axios.get(`/api/products/${params.id}`);
        const reviewsData = await axios.get(
          `/api/products/${params.id}/reviews`
        );
        console.log('Data', data);
        setProductDetails(data.product);
        setReviews(reviewsData.data.reviews);
        console.log('Reviews', reviewsData.data.reviews);
        const updatedRatings = countReviewsByStars(reviewsData.data.reviews);
        console.log('Update', updatedRatings);
        setRatings(updatedRatings);
        setImages([
          data.product.image,
          data.product.additionalImages[0],
          data.product.additionalImages[1],
          data.product.additionalImages[2],
        ]);
        console.log('Images', images);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProductDetails();
  }, []);

  function formatDateAndTime(createdAt) {
    console.log('Creayed', createdAt);
    let date = new Date();
    if (createdAt) {
      const { seconds, nanoseconds } = createdAt;
      date = new Date(seconds * 1000 + nanoseconds / 1000000);
    }
    // Format Date as DD/MM/YY
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = String(date.getFullYear()).slice(-2);

    // Format Time as HH:MM AM/PM
    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12 AM/PM should display as 12, not 0

    const time = `${hours}:${minutes} ${ampm}`;
    const formattedDate = `${day}/${month}/${year}`;

    return `${formattedDate} ${time}`;
  }

  const handleBuyNow = () => {
    router.push(
      `/checkout?productId=${params.id}&quantity=${quantity}&type=product`
    );
  };
  const addToCart = async () => {
    if (!userId) {
      alert('Please log in to add items to your cart.');
      return;
    }

    try {
      const response = await axios.post(`/api/user/${userId}/cart/add`, {
        userId,
        productId: productDetails.id,
        name: productDetails.name,
        quantity,
        price: productDetails.price,
        image: productDetails.image,
      });

      alert('Item added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart');
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen p-4 md:p-8 pt-24 md:pt-32 mx-auto ">
          <div
            role="status"
            class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
          >
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                class="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div class="w-full">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="pt-24 md:pt-32 mx-auto w-screen min-h-screen overflow-hidden p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Grid - Product Images */}
            <div className="w-full flex flex-wrap flex-col justify-between">
              <div className="relative h-72 w-72 md:w-[32rem] lg:w-[24rem] xl:w-[32rem] mx-auto bg-slate-200 rounded-xl border">
                <CldImage
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
                        ? 'border-2 border-slate-700'
                        : 'border border-slate-300'
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <CldImage
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
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
              <h1 className="text-3xl">{productDetails.name}</h1>
              <div className="w-full flex my-5">
                <h1 className="text-xl mb-0 pb-0">
                  {productDetails.averageRating}
                </h1>
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
                <p className="ml-1 pt-1 text-slate-600">
                  ({productDetails.reviewCount}) ratings
                </p>
              </div>
              <p>{productDetails.description}</p>
              <div className="w-full flex flex-wrap md:flex-nowrap mt-5 gap-8 justify-center items-center">
                <h1 className="text-3xl">₹{productDetails.price}</h1>
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
                <button
                  className="bg-[#3897D1] rounded-lg text-md py-3 w-full text-white px-4 "
                  onClick={() => addToCart()}
                >
                  Add to Cart
                </button>
              </div>
              <button
                onClick={() => handleBuyNow()}
                className="mt-8 bg-[#3897D1] rounded-lg text-md py-3 w-full text-white px-4"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Info */}
          {/* <div className="mt-14 md:p-16">
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
          </div> */}

          {/* Rating and Reviews */}
          <div className="md:p-16 pt-10">
            <h2 className="text-3xl mb-10 md:mb-14">Rating & Reviews</h2>
            <div className="md:grid md:grid-cols-5 gap-24">
              {/* Overall Rating */}
              <div className="col-span-1 place-content-center mx-auto">
                <div className="text-6xl font-bold flex justify-center">
                  {productDetails.averageRating}
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
                        opacity:
                          index < Math.round(productDetails.averageRating)
                            ? 1
                            : 0.3,
                      }}
                    />
                  ))}
                </div>
                <div className="text-gray-600 text-sm flex justify-center">
                  ({productDetails.reviewCount}) ratings
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
                    <span className="text-yellow-500 mr-2">
                      {rating.stars}★
                    </span>
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
                        style={{ opacity: index < newReview.rating ? 1 : 0.5 }}
                      />
                    </span>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              {' '}
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="px-8 py-6 rounded-3xl border shadow-xl mb-4"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-slate-200 text-xl border rounded-full flex items-center justify-center">
                        <span className="text-slate-700">{review.name}</span>
                      </div>
                      <p className="text-lg">{review.userName}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm">
                        {formatDateAndTime(review.createdAt)}
                      </p>
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
      )}
    </>
  );
};

export default ProductItem;
