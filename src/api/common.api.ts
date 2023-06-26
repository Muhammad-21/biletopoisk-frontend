export const BASE_URL = 'http://localhost:3001/api'

export async function getRequest<T>(url: string): Promise<T> {
    const res = await fetch(BASE_URL + url)
    return res.json()
}