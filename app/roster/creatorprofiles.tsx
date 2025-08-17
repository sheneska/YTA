import { CheckCircle } from "lucide-react";
import Image from 'next/image';

const influencers = [
  {
    name: "Luna Martinez",
    handle: "@lunamartinez",
    category: "Lifestyle & Travel",
    image: "/assets/creators/creator10.jpeg",
    bio: "Globetrotting lifestyle creator sharing authentic travel experiences and sustainable living tips.",
    specialties: [
      "Sustainable Travel",
      "Lifestyle Content",
      "Brand Partnerships",
      "Photography",
    ],
    recentBrands: ["Airbnb", "Patagonia", "GoPro", "Booking.com"],
    followers: "2.3M",
    engagement: "4.8%",
    platforms: [
      { name: "Instagram", followers: "1.2M", verified: true },
      { name: "TikTok", followers: "800K", verified: true },
      { name: "YouTube", followers: "300K", verified: false },
    ],
  },
  {
    name: "Luna Martinez",
    handle: "@lunamartinez",
    category: "Lifestyle & Travel",
    image: "/assets/creators/creator15.png",
    bio: "Globetrotting lifestyle creator sharing authentic travel experiences and sustainable living tips.",
    specialties: [
      "Sustainable Travel",
      "Lifestyle Content",
      "Brand Partnerships",
      "Photography",
    ],
    recentBrands: ["Airbnb", "Patagonia", "GoPro", "Booking.com"],
    followers: "2.3M",
    engagement: "4.8%",
    platforms: [
      { name: "Instagram", followers: "1.2M", verified: true },
      { name: "TikTok", followers: "800K", verified: true },
      { name: "YouTube", followers: "300K", verified: false },
    ],
  },
  {
    name: "Luna Martinez",
    handle: "@lunamartinez",
    category: "Lifestyle & Travel",
    image: "/assets/creators/creator4.jpg",
    bio: "Globetrotting lifestyle creator sharing authentic travel experiences and sustainable living tips.",
    specialties: [
      "Sustainable Travel",
      "Lifestyle Content",
      "Brand Partnerships",
      "Photography",
    ],
    recentBrands: ["Airbnb", "Patagonia", "GoPro", "Booking.com"],
    followers: "2.3M",
    engagement: "4.8%",
    platforms: [
      { name: "Instagram", followers: "1.2M", verified: true },
      { name: "TikTok", followers: "800K", verified: true },
      { name: "YouTube", followers: "300K", verified: false },
    ],
  },
  {
    name: "Luna Martinez",
    handle: "@lunamartinez",
    category: "Lifestyle & Travel",
    image: "/assets/creators/creator5.jpg",
    bio: "Globetrotting lifestyle creator sharing authentic travel experiences and sustainable living tips.",
    specialties: [
      "Sustainable Travel",
      "Lifestyle Content",
      "Brand Partnerships",
      "Photography",
    ],
    recentBrands: ["Airbnb", "Patagonia", "GoPro", "Booking.com"],
    followers: "2.3M",
    engagement: "4.8%",
    platforms: [
      { name: "Instagram", followers: "1.2M", verified: true },
      { name: "TikTok", followers: "800K", verified: true },
      { name: "YouTube", followers: "300K", verified: false },
    ],
  }
];

export default function CreatorProfiles() {
  return (
    <section className="container mx-auto px-6">
      <div className="space-y-12">
        {influencers.map((creator, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
          >
            <div className="grid md:grid-cols-3 gap-0">
              {/* Left Image / Intro */}
              <div className="relative w-full h-80 md:h-full">
                <Image
                    src={creator.image}
                    alt={creator.name}
                    fill
                    className="object-cover"
                    priority={index === 0}  // Optional: only make the first one priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/20 md:to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-1">{creator.name}</h3>
                  <p className="text-white/90 mb-2">{creator.handle}</p>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm text-white rounded-full">
                    {creator.category}
                  </span>
                </div>
              </div>

              {/* Main Card content */}
              <div className="md:col-span-2 p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {/* About */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                        About
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {creator.bio}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {creator.specialties.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full border border-purple-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recent Brands */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                        Recent Brand Partners
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {creator.recentBrands.map((brand, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 border-2 border-gray-200 text-gray-700 rounded-full hover:border-purple-300 hover:text-purple-700 transition-colors"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Stats */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center border border-purple-100">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {creator.followers}
                        </div>
                        <div className="text-gray-600 mt-1">Total Followers</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center border border-blue-100">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {creator.engagement}
                        </div>
                        <div className="text-gray-600 mt-1">Avg Engagement</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                        Platforms
                      </h4>
                      <div className="space-y-3">
                        {creator.platforms.map((p, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl border border-gray-100"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="font-semibold text-gray-800">
                                {p.name}
                              </span>
                              {p.verified && (
                                <div className="flex items-center px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  <span className="text-xs font-medium">
                                    Verified
                                  </span>
                                </div>
                              )}
                            </div>
                            <span className="font-bold text-gray-900">
                              {p.followers}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      View Full Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
