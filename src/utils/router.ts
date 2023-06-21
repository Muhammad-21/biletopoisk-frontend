import { Routes } from "@/components/types"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export const changeRoute = (path:Routes, router: AppRouterInstance) => {
    router.push(path)
}