import { NextResponse, NextRequest } from "next/server"
import { User } from "@/src/models/User"

export async function DELETE(request: NextRequest, {params}: {params: Promise <{id: string}>}) {
     
  const {id} = await params

  await User.findByIdAndDelete(id)

  return NextResponse.json({
    message: `Usuario ${id} eliminado`
  })
}