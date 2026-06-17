import { CLIENT } from "$lib/api/CLIENT";

const recommendProducts = async () => {
    const res = await CLIENT.GET("/api/products/featured");
    return res.data || [];
};

const sportLoad = async () => {
    const res = await CLIENT.GET("/api/products", {
        params: {
            query: {
                categorySlug: "sport-tovary",
                limit: 4,
            },
        },
    });
    return res.data?.items || [];
};

const shoesLoad = async () => {
    const res = await CLIENT.GET("/api/products", {
        params: {
            query: {
                categorySlug: "obuv",
                limit: 4,
            },
        },
    });s
    return res.data?.items || [];
};

const closesLoad = async () => {
    const res = await CLIENT.GET("/api/products", {
        params: {
            query: {
                categorySlug: "odezhda",
                limit: 4,
            },
        },
    });
    return res.data?.items || [];
};

export const load = async () => {
    const [sport, shoes, closes, recommend] = await Promise.all([
        sportLoad(),
        shoesLoad(),
        closesLoad(),
        recommendProducts(),
    ]);

    return {
        recommend,
        closes,
        shoes,
        sport,
    };
};