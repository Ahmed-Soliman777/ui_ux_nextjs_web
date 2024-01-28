import Image from "next/image";
import CampSite from "./CampSite";

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div
        className="hide-scrollbar flex h-[340px] w-full 
        items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
      >
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subTitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div
          className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] 
        xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden
        rounded-3xl"
        >
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong> Feeling Lost </strong>And Not Knowing The Way?
            <p className="regular-14 xl:regular-16 mt-5 text-white">Starting From The Anxiety Of The Climbers When Visiting A New Climbing Location, The Possibility Of Getting Lost Is Very Large. That's Why We Are Here For Those Of Who You Want To Start An Adventure.</p>
            <Image
              src="./quote.svg"
              alt="camp-2"
              width={186}
              height={219}
              className="camp-quote"
            />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Camp;
