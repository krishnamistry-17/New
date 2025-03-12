import { Carousel, IconButton } from "@material-tailwind/react";
import four1 from "../../../assets/images/four1.png";
import four2 from "../../../assets/images/four2.png";
import four3 from "../../../assets/images/four3.png";

export function CarouselCustomArrows() {
  return (
    <div className="w-full max-w-full mx-auto">
      <Carousel
        className="rounded-sm"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-2 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-2 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <img src={four1} alt="image 1" className="w-full h-[300px] md:h-[570px] object-cover" />
        <img src={four2} alt="image 2" className="w-full h-[300px] md:h-[570px] object-cover" />
        <img src={four3} alt="image 3" className="w-full h-[300px] md:h-[570px] object-cover" />
      </Carousel>
    </div>
  );
}