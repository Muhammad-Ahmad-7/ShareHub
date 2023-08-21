import Feed from "@components/Feed";
import "../style/style.css";

const Home = () => {
  return (
    <>
      <section className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-center md:text-6xl font-extrabold text-4xl">
          ShareHub
        </h1>
        <p className="text-center sm:w-2/4 text-[#3a3a3a] sm:text-xl">
          Discover Share Hub: Unite on the ultimate social platform. Seamlessly
          share moments, thoughts, and experiences with friends and family.
        </p>
      </section>
      <section className="flex flex-row mx-8 mt-16">
        <Feed />
      </section>
    </>
  );
};

export default Home;
