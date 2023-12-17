import Prompt from "@/modles/Prompt";
import { connectToDB } from "@/utils/connectDB";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const myprompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    if (!myprompts) return new Response("Not found", { status: 404 });
    return new Response(JSON.stringify(myprompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch", { status: 400 });
  }
};
