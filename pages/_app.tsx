import { ReactElement, useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import type { AppProps } from "next/app";
import { getCookie, setCookie } from "cookies-next";
import { MantineProvider, ColorScheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { useColorScheme } from "@mantine/hooks";
import { Provider as ReactReduxProvider } from "react-redux";
import { wrapper } from "src/services/store";
import { emotionCache } from "src/services/emotionCache";
import RouterTransition from "src/screens/shared/RouterTransition";
import "src/services/global.scss";

const CustomApp = ({
    Component,
    colorScheme,
    ...rest
}: AppProps & { colorScheme: ColorScheme | undefined }): ReactElement => {
    const preferredColorScheme = useColorScheme(colorScheme);
    const { store, props } = wrapper.useWrappedStore(rest);

    useEffect(() => {
        setCookie("color-scheme", preferredColorScheme);
    });

    return (
        <ReactReduxProvider store={store}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    dir: "ltr",
                    fontFamily: `"Open Sans", sans-serif`,
                    colorScheme: preferredColorScheme,
                    globalStyles: (theme) => ({
                        html: {
                            scrollBehavior: "smooth",
                        },
                    }),
                }}
                emotionCache={emotionCache}
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

export default CustomApp;
