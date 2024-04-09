import Image from "next/image";
import img1 from "@/app/assets/Wzz6UELRpcvkKZQtmVmc.png";
import { Button } from "../ui/button";
import Link from "next/link";

const StartNow = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt=""
              src={img1}
              placeholder="blur"
              className="absolute inset-0 h-full w-full object-cover rounded shadow"
            />
          </div>

          <div className="lg:py-24 space-y-2">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Start Creating Now
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <Button asChild>
              <Link href="/dashboard">Start Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartNow;
