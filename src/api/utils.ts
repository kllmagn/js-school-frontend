const BACKEND_HOST = process.env.BACKEND_HOST || null;

export const formatPath = (path: string) => {
    return `${BACKEND_HOST ? "http://" : ""}${BACKEND_HOST || ""}${path}`
}
