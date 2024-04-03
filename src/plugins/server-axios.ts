import axios, { AxiosRequestConfig, Method } from "axios";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

interface AxiosAPI {
  url: string;
  method: Method;
  data?: any;
  headers?: any;
  params?: string;
  isAuthentication?: boolean;
  contentType?: string;
  responseType?: ResponseType;
  isDownload?: boolean;
  onUploadProgress?: () => void;
}

const serverAxios = async <T>(props: AxiosAPI): Promise<T> => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/`;
  const config: AxiosRequestConfig = {
    method: props.method || "GET",
    url: `${baseUrl}${props.url}`,
    headers: {
      "Content-Type": props.contentType || "application/json",
      accept: "application/json",
      Authorization: token !== null ? `Bearer ${token}` : "",
      ...props.headers,
    },
    data: props.data,
    params: props.params,
    responseType: props.responseType || ("json" as any),
    onUploadProgress: props.onUploadProgress,
    timeout: 0,
  };
  if (
    props.contentType === "multipart/form-data" ||
    (config?.headers?.["Content-Type"] &&
      config.headers["Content-Type"].includes("multipart/form-data"))
  ) {
    if (props.data instanceof Object && !(props.data instanceof FormData)) {
      const formData = new FormData();

      Object.entries(props.data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((file, index) => {
            formData.append(`${key}[${index}]`, file);
          });
        } else {
          formData.append(key, value as string);
        }
      });

      config.data = formData;
    } else {
      throw new Error("Invalid data format for multipart/form-data");
    }
  }
  try {
    const response = await axios(config);
    return props.isDownload ? (response as any) : (response?.data as T);
  } catch (error) {
    notFound();
  }
};

export default serverAxios;
