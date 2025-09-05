import SplitText from "../components/SplitText";
import Aurora from "../components/Aurora";
import Galaxy from "../components/Galaxy";
import BlurText from "../components/BlurText";
import RotatingText from "../components/RotatingText";
import SplashCursor from "../components/SplashCursor";
import ScrollFloat from "../components/ScrollFloat";
import CountUp from "../components/CountUp";
import FadeContent from "../components/FadeContent";
import CircularGallery from "../components/CircularGallery";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <SplashCursor />
        <div className="absolute inset-0 -z-10">
          <Aurora />
        </div>

        <div className="flex items-center">
          <h1 className="text-2xl text-white font-semibold">Happy</h1>

          <div className="ml-3">
            <RotatingText
              texts={["Birthday", "Sweetseventeen"]}
              mainClassName="text-2xl px-3 md:px-5 bg-[#ef00ec] text-white font-semibold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl shadow-lg inline-flex transition-all"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
              splitBy="characters"
            />
          </div>
        </div>

        <BlurText
          text="Lievia Sayangg"
          delay={150}
          animateBy="letters"
          direction="bottom"
          className="text-5xl font-semibold text-white mt-6"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="absolute inset-0 -z-10">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
          />

          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#060010] to-transparent backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#060010] to-transparent backdrop-blur-sm"></div>
        </div>

        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-white text-6xl font-semibold"
        >
          Umur Lipii Sekarang
        </ScrollFloat>
        <div className="flex items-center space-x-3">
          <CountUp
            from={0}
            to={17}
            separator=","
            direction="up"
            duration={6}
            className="count-up-text text-white text-6xl font-black"
          />
          <span className="text-white text-5xl font-semibold">Tahun</span>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
        <SplitText
          text="Pesan dari Paizz"
          className="text-4xl font-semibold text-center text"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className="border max-w-[450px] md:max-w-[600px] rounded-xl m-10 p-8">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            {
              <p className="font-medium">
                Haii Lieviaa.. <br />
                <br />
                Di hari yang spesial inii.. Aku ingin sekali berterima kasih
                sama kamu, dan ingin mengutarakan rasa syukur ku di mana betapa
                bahagianya aku punya kamu dalam hidup aku.. Kamu itu orang yang
                sangat baik, sopan, cantik, imut, lucu, tulus, sempurna, dan
                selalu bisa bikin aku bahagia walau hanya melihatmu.. <br />
                <br />
                Akuu masih inget masa-masa pertama kali kita kenal koo,, hihi..
                Kita yang dulu masih canggung, bahkan tatap-tatapan pun masih
                malu-malu, lalu kemudian takdir tuhan mendatangkan berbagai hal
                yang ternyata pada akhirnya itu yang menyatukan kitaa berrdua..
                <br />
                <br />
                Di hari ulang tahunmu ini, aku selalu doain yang terbaik buat
                kamuu.. Semoga Lievia dapat menjadi pribadi yang lebih baik,
                makinn cantikk imut kawaii, makin berbakti sama ortu, selalu
                diberkati oleh Tuhan, diberikan kesehatan setiap harinya,
                dilancarkan segala urusannya, diberikan hari yang penuh akan
                kebahagiaan, dan tercapai segala cita-citanya yaahh..
                <br />
                <br />
                Faizz kangeenn sekalii sama Lieviaa.. Maaf yaah kalau Faizz
                pernah berbuat salah sama Lieviaa.. Sehat-sehatt terus buat
                kedepannya yaahh..
                <br />
                <br />
                Selamat Ulang Tahun, Lieviaa.. I Love Youu <br />
                <br />~ your stars
              </p>
            }
          </FadeContent>
        </div>
      </div>

      <div className="mt-20">
        <div className="relative flex flex-col items-center justify-center text-white">
          <SplitText
            text="Galerikuu <3"
            className="text-4xl font-semibold text-center text"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <h2 className="italic text-gray-500 mt-3">geser yah ayaang</h2>
        </div>

        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={0}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>

      <footer className="bg-black/40 text-white py-6 mt-12">
        <div className="text-center text-sm md:text-base">
          Made by Love from Paizz to Lipiaa ❤️
        </div>
      </footer>
    </>
  );
}
