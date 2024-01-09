import prisma from "@/utils/connect";
import { NextResponse } from "next/server"


// GET SINGLE POST
export const GET = async (req, {params}) => {

    const {slug} = params


    try {

        const post=await prisma.post.findUnique({
            where: {slug},
        })

        return new NextResponse(JSON.stringify({ posts, count },{ status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "something went wrong!" }, { status: 500 })
        );
    }
};