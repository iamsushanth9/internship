import React from "react";

export default function Animated3DBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div className="absolute left-1/4 top-[-80px] w-96 h-96 bg-cyan-400 opacity-30 rounded-full blur-3xl animate-float1" />
      <div className="absolute right-1/4 top-1/2 w-80 h-80 bg-blue-500 opacity-30 rounded-full blur-2xl animate-float2" />
      <div className="absolute left-1/2 bottom-[-100px] w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl animate-float3" />
      <div className="absolute right-10 bottom-10 w-48 h-48 bg-cyan-300 opacity-20 rounded-full blur-2xl animate-float4" />
    </div>
  );
}
