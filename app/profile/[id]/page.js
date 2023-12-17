"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Profile from "@/components/Profile";

const PublicProfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const id = searchParams.get("id");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPrompts = async () => {
      const prompts = await fetch(`/api/users/${id}/posts`);
      const data = await prompts.json();
      setPosts(data);
    };
    if (id) getPrompts();
  }, []);

  return (
    <Profile
      name={""}
      desc={`Welcome to ${name}'s profile page. Expolre their exceptional prompts and inspire others with the power of your imagination`}
      data={posts}
    />
  );
};

export default PublicProfile;
