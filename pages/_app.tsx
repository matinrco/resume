import { ReactElement, useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";
import { MantineProvider, ColorScheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { useColorScheme } from "@mantine/hooks";
import { appWithTranslation } from "next-i18next";
import { Provider as ReactReduxProvider } from "react-redux";
import { wrapper } from "src/services/store";
import { getDirection } from "src/services/localeUtils";
import { ltrEmotionCache, rtlEmotionCache } from "src/services/emotionCache";
import RouterTransition from "src/screens/shared/RouterTransition";
import "src/services/global.scss";

const CustomApp = ({
    Component,
    colorScheme,
    ...rest
}: AppProps & { colorScheme: ColorScheme | undefined }): ReactElement => {
    const preferredColorScheme = useColorScheme(colorScheme);
    const router = useRouter();
    const direction = getDirection(router?.locale || "");
    const { store, props } = wrapper.useWrappedStore(rest);

    useEffect(() => {
        document.querySelector("html")?.setAttribute("dir", direction);
        setCookie("color-scheme", preferredColorScheme);
    });

    return (
        <ReactReduxProvider store={store}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    dir: direction,
                    colorScheme: preferredColorScheme,
                    fontFamily: (() => {
                        switch (direction) {
                            case "rtl":
                                return `
                            Vazirmatn,
                            -apple-system, 
                            BlinkMacSystemFont, 
                            Segoe UI, 
                            Roboto,Helvetica, 
                            Arial, 
                            Noto Sans, 
                            sans-serif, 
                            Apple Color Emoji,
                            Segoe UI Emoji, 
                            Segoe UI Symbol, 
                            Noto Color Emoji
                        `;
                            case "ltr":
                                return `
                            -apple-system, 
                            BlinkMacSystemFont, 
                            Segoe UI, 
                            Roboto,Helvetica, 
                            Arial, 
                            Noto Sans, 
                            sans-serif, 
                            Apple Color Emoji,
                            Segoe UI Emoji, 
                            Segoe UI Symbol, 
                            Noto Color Emoji
                        `;
                        }
                    })(),
                    globalStyles: (theme) => ({
                        html: {
                            scrollBehavior: "smooth",
                        },
                    }),
                }}
                emotionCache={(() => {
                    switch (direction) {
                        case "rtl":
                            return rtlEmotionCache;
                        case "ltr":
                            return ltrEmotionCache;
                    }
                })()}
            >
                <RouterTransition />
                <Notifications position="top-center" />
                <Component {...props.pageProps} />
            </MantineProvider>
        </ReactReduxProvider>
    );
};

CustomApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
    colorScheme: getCookie("color-scheme", ctx),
});

export default appWithTranslation(CustomApp);
