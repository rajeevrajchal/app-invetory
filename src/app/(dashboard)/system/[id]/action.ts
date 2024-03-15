"use server";

import axios from "axios";
import { cookies } from "next/headers";

export async function getSystemData(id: string) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/system/${id}`;
    const response = await axios.get(baseUrl, {
      headers: {
        Authorization: token !== null ? `Bearer ${token}` : "",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
