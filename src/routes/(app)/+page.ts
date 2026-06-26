import { CLIENT } from "$lib/api/CLIENT";

const recommendProducts = async () => {
	const res = await CLIENT.GET('/api/products/featured', {});
    return res.data || [];
};

const fetchCategori = async () => {
    const res = await CLIENT.GET('/api/categories')
    return res.data
}

const sportLoad = async () => {
    const res = await CLIENT.GET("/api/products", {
        params: {
            query: {
                categorySlug: "sport-tovary",

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

            },
        },
    });
    return res.data?.items || [];
};

const closesLoad = async () => {
    const res = await CLIENT.GET("/api/products", {
        params: {
            query: {
                categorySlug: "odezhda",
            },
        },
    });
    return res.data?.items || [];
};

export const load = async () => {
    const [sport, shoes, closes, recommend, categories] = await Promise.all([
        sportLoad(),
        shoesLoad(),
        closesLoad(),
        recommendProducts(),
        fetchCategori()
    ]);

    return {
        recommend,
        closes,
        shoes,
        sport,
        categories
    };
};