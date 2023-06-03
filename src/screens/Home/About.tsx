import React, { ReactElement } from "react";
import { useTranslation } from "next-i18next";
import {
    Box,
    useMantineTheme,
    Text,
    Tooltip,
    Mark,
    Divider,
} from "@mantine/core";

const About = (): ReactElement => {
    const { t } = useTranslation(["common", "home"]);
    const theme = useMantineTheme();

    return (
        <Box my="xl">
            <Divider
                my="xs"
                variant="dashed"
                label="About"
                labelProps={{ size: "md", fw: "normal", color: "gray.7" }}
            />
            <Text size="md">
                I am a highly motivated,&nbsp;
                <Tooltip
                    inline
                    multiline
                    withArrow
                    width={400}
                    label="A product thinker software engineer is a software engineer who has a strong understanding of the product development process and is able to think strategically about how to build products that meet user needs. They are able to identify and solve problems, and they are able to work effectively with other stakeholders, such as product managers, designers, and testers."
                >
                    <Mark
                        sx={(theme) => ({
                            backgroundColor: theme.colors.yellow[0],
                        })}
                    >
                        product-thinking
                    </Mark>
                </Tooltip>
                ,&nbsp;
                <Tooltip
                    inline
                    multiline
                    withArrow
                    width={400}
                    label="A result-oriented software engineer is someone who is focused on delivering high-quality, working software that meets the needs of the end-users and stakeholders. They are able to quickly understand and analyze requirements, and then design, implement, test and deploy solutions that meet those needs. They are able to work independently and as part of a team, and they are able to communicate effectively with others. Additionally, they are able to stay up-to-date with new technologies and best practices in order to continue to improve their skills and deliver better results."
                >
                    <Mark
                        sx={(theme) => ({
                            backgroundColor: theme.colors.yellow[0],
                        })}
                    >
                        results-oriented
                    </Mark>
                </Tooltip>
                &nbsp;software engineer with a passion for problem solving and 6
                years of experience. My main stack is Typescript, React, Nodejs.
                I’m also full stack developer with TS/JS. Currently, I am a
                senior front-end developer at Pars Tasmim company.
            </Text>
        </Box>
    );
};

export default About;
