import React, { ReactElement } from "react";
import Link from "next/link";
import { Text, Anchor, useMantineTheme, Stack } from "@mantine/core";

const Footer = (): ReactElement => {
    const theme = useMantineTheme();

    return (
        <Stack
            mt={`calc(${theme.spacing.xl} * 2)`}
            align="center"
            spacing={`calc(${theme.spacing.xs} / 2)`}
        >
            <Text size="xs" color="gray.6">
                Wanna say sth? contact me or&nbsp;
                <Anchor
                    component={Link}
                    href="https://github.com/matinrco/resume/issues/new"
                    target="_blank"
                >
                    fill here
                </Anchor>
                .
            </Text>
            <Anchor
                size="xs"
                component={Link}
                href="https://github.com/matinrco/resume"
                target="_blank"
            >
                source code
            </Anchor>
        </Stack>
    );
};

export default Footer;
