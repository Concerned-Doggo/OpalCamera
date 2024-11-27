"use client";
import { useState, useEffect } from "react";
import HomePageContent from "@components/HomePageContent";
import Loading from "@components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <HomePageContent />;
}
