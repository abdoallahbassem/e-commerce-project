"use server";
import { auth } from "@/auth"; 

export default async function getMyToken() {
  const session = await auth();
  if (!session?.token) return null;
  return session.token;
}
