import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import _ from "lodash";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Image from "next/future/image";

function importAll(r) {
  return r.keys().map(r);
}
const logos = importAll(
  require.context("../images/logos", false, /\.(png|jpe?g|svg)$/)
);
export function Slider() {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, []);

  return (
    <>
      <div className={"flex h-48 justify-center overflow-x-hidden"}>
        <div className={"my-auto"}>
          <Marquee
            key={key}
            velocity={5}
            resetAfterTries={200}
            className={"my-auto"}
          >
            {_.times(logos.length, Number).map((id) => (
              <div
                key={id}
                className={
                  "m-4 flex h-12 w-12 justify-center rounded-full border border-slate-900/5 bg-white p-2 drop-shadow dark:border-slate-200/5"
                }
              >
                <Image src={logos[id]} alt={id} className={"m-auto h-8 w-8 "} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}
