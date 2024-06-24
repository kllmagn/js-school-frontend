const HOST = process.env.HOST || null;

export const formatPath = (path: string) => {
    return `${HOST ? "http://" : ""}${HOST || ""}${path}`
}
