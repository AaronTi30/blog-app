import prisma from "@/utils/connect";
import { NextResponse } from "next/server"

export const GET = async (req) => {

    const {searchParams} = new URL(req.url)

    const page = searchParams.get("page")
    
    const POST_PER_PAGE = 2;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),

    }

    try{
        const [posts,count] = await prisma.$transaction([
            prisma.post.findMany(),
            prisma.post.count(),
        ]);
        return new NextResponse(JSON.stringify(posts,{ status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "something went wrong!" }, { status: 500 })
        );
    }
};
