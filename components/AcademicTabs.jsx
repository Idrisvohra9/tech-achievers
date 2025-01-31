"use client";
import { useEffect, useState } from "react";
import { Tabs } from "./ui/tabs";
import { fetchAllPlaylists } from "@/lib/youtube";
import Link from "next/link";
export default function AcademicTabs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchAllPlaylists();
        console.log(response);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const tabs = [
    {
      title: "Free Courses",
      value: "free",
      content: (
        <div className="w-full overflow-hidden relative min-h-full mb-20 h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 overflow-y-scroll">
          <p>Free Courses</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {data.map((playlist, index) => (
              <Link
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                target="_blank"
              >
                <div className="aspect-video relative">
                  <img
                    src={playlist.snippet.thumbnails?.high?.url}
                    alt={playlist.snippet.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm">
                    {playlist.contentDetails.itemCount} videos
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold line-clamp-2 mb-2">
                    {playlist.snippet.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {playlist.snippet.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Paid Courses",
      value: "paid",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Paid Courses</p>
          <div className="w-full h-full flex flex-row items-center justify-center p-4">
            <button className="Btn"></button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen h-full [perspective:1000px] relative flex flex-col mx-auto w-full items-center justify-center px-8 mt-10 lg:mt-0">
      <Tabs tabs={tabs} />
    </div>
  );
}
