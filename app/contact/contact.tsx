// 'use client';

// import { ArrowLeft, Sparkles } from 'lucide-react';

// type Props = {
//   onBack?: () => void;
// };

// export default function ContactHero({ onBack }: Props) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
//       {/* floating background dots */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-300/15 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
//       </div>

//       <div className="container mx-auto px-6 py-20 relative z-10">
//         <div className="max-w-4xl mx-auto">
//           <button
//             onClick={onBack}
//             className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors duration-300"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span>Back to Home</span>
//           </button>

//           <div className="text-center mb-16">
//             <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-6">
//               <Sparkles className="w-5 h-5 text-white" />
//               <span className="text-white font-medium">Get Started</span>
//             </div>

//             <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//               Let&apos;s Create Something
//               <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
//                 Amazing Together
//               </span>
//             </h1>

//             <p className="text-xl text-purple-100 max-w-3xl mx-auto">
//               Ready to elevate your brand or creator journey? Share your vision with us and let&apos;s
//               discuss how we can bring it to life.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
