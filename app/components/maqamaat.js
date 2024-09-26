"use client";

import React from "react";
import { maqamaat } from "../lib/data";
import { Typography } from "antd";
import { Card } from "antd";
import { AudioLinesSVG, PlaySVG } from "../assets/icons";
import { useUrlContext } from "../hooks/use-url-context";

// TODO:
// ADD SEARCH PARAMS WITH THE MAQAAM NAME
const Maqamaat = () => {
  const [selected, setSelected] = React.useState(maqamaat[0]);
  const { setUrl } = useUrlContext();

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {maqamaat.map((entry) => (
          <Card
            className={`${
              selected?.id === entry.id ? "bg-gray-100" : "bg-transparent"
            } hover:bg-gray-100 transition cursor-pointer`}
            onClick={() => {
              setSelected(entry);
            }}
          >
            <Typography.Text className="text-xl font-semibold block mb-2">
              {entry.name}
            </Typography.Text>
            <Typography.Text className="text-sm">
              Recitors: {entry.totalRecitors}
            </Typography.Text>
            <div className="flex items-center gap-x-2 mt-3">
              <AudioLinesSVG />
              <Typography.Text>Click to see</Typography.Text>
            </div>
          </Card>
        ))}
      </div>
      {selected && (
        <>
          <div className="mt-20">
            <Typography.Text className="text-4xl font-semibold mt-5 block">
              {selected.name}
            </Typography.Text>

            <div className="w-full space-y-5 mt-10">
              {selected.recitors.map((recitor) => (
                <div
                  className="flex items-center gap-x-2 cursor-pointer"
                  onClick={() => setUrl(recitor.recitation.audio)}
                >
                  <div className="w-20 h-20 relative bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="absolute">
                      <PlaySVG />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Typography.Text className="text-xl">
                      {recitor.recitation.surah}
                    </Typography.Text>
                    <Typography.Text className="text-sm">
                      {recitor.name}
                    </Typography.Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Maqamaat;
