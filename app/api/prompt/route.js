import Prompt from "@/modles/Prompt";
import { connectToDB } from "@/utils/connectDB";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch", { status: 400 });
  }
};
