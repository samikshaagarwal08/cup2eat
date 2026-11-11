import { cacheLife } from "next/cache";

// With `cacheComponents` enabled, `new Date()` can't run during prerender
// unless it's cached. This keeps the footer static and refreshes daily.
export default async function CurrentYear() {
    "use cache";
    cacheLife("days");
    return <>{new Date().getFullYear()}</>;
}
