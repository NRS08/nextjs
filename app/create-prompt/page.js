"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const [post, setPost] = useState({ post: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);
  const { data: session } = useSession();

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
