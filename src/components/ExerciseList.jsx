import ReactPaginate from "react-paginate";
import BodyPartBox from "./BodyPart.jsx";
import { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllExercises } from "../features/exercise/exerciseSlice";
import Loader from "./Loader.jsx";
import { Link } from "react-router-dom";

export default function ExerciseList() {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercise.exercises);
  const status = useSelector((state) => state.exercise.status);
  const myRef = useRef(null);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const endOffset = currentPage + itemsPerPage;
  const currentItems = exercises?.slice(currentPage, endOffset);
  const pageCount = Math.ceil(exercises?.length / itemsPerPage);

  const showNextButton = currentPage !== (pageCount - 1) * itemsPerPage;
  const showPrevButton = currentPage !== 0;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % exercises.length;
    setCurrentPage(newOffset);
    myRef.current.scrollIntoView();
  };

  useEffect(() => {
    dispatch(fetchAllExercises());
  }, []);

  const tryAgain = () => {
    dispatch(fetchAllExercises());
  };

  return (
    <div ref={myRef}>
      <div className="pt-16  sm:py-10 lg:max-w-7xl">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl py-3 text-center">
            Exercises
          </h2>
          <BodyPartBox />
        </div>
        {status === "loading" && <Loader />}
        {status === "failed" && (
          <div>
            <div className="mt-10 flex flex-col items-center justify-center gap-x-6 gap-y-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-red-700">Error !!!</h2>
                <p className="text-base font-normal text-gray-800">
                  Please try again
                </p>
              </div>

              <button
                className="rounded-md bg-gray-700 px-2 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={tryAgain}
              >
                Try again
              </button>
            </div>
          </div>
        )}
        {status === "idle" && (
          <>
            <div className=" mt-6 grid grid-cols-1 gap-x-20 gap-y-10 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {currentItems?.map((exercise) => (
                <a key={exercise.id} href="#" className="group rounded-xl">
                  <div
                    className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                    style={{
                      boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    }}
                  >
                    <img
                      src={exercise.gifUrl}
                      alt={exercise.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg  capitalize text-gray-700">
                    {exercise.name}
                  </h3>
                  <p className="mt-1 text-base  capitalize text-gray-900">
                    {exercise.target}
                  </p>
                </a>
              ))}
            </div>
            <ReactPaginate
              breakLabel={<span className="mr-4">...</span>}
              nextLabel={
                showNextButton ? (
                  <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md">
                    <BsChevronRight />
                  </span>
                ) : null
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel={
                showPrevButton ? (
                  <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md mr-4">
                    <BsChevronLeft />
                  </span>
                ) : null
              }
              containerClassName="flex flex-wrap gap-y-2 items-center justify-center mt-6 mb-4"
              pageClassName="block border border-solid border-gray-300 hover:bg-gray-300 w-10 h-10 flex items-center justify-center rounded-md mr-4"
              activeClassName="bg-gray-800 text-white"
            />
          </>
        )}
      </div>
    </div>
  );
}
