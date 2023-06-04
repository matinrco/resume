import React, { ReactElement } from "react";
import { useTranslation } from "next-i18next";
import { Box, Divider, List, Text } from "@mantine/core";

const Books = (): ReactElement => {
    const { t } = useTranslation(["common", "home"]);

    return (
        <Box my="xl">
            <Divider
                my="xs"
                variant="dashed"
                label="Recent related books I've read"
                labelProps={{ size: "md", fw: "normal", color: "gray.7" }}
            />
            <List c="gray.7" icon="•">
                <List.Item>
                    <Text size="md">
                        Soft Skills: The Software Developer&apos;s Life Manual
                    </Text>
                    <Text italic size="sm">
                        John Sonmez
                    </Text>
                </List.Item>
                <List.Item>
                    <Text size="md">
                        INSPIRED: How to Create Tech Products Customers Love
                    </Text>
                    <Text italic size="sm">
                        Marty Cagan
                    </Text>
                </List.Item>
                <List.Item>
                    <Text size="md">
                        Continuous Discovery Habits: Discover Products that
                        Create Customer Value and Business Value
                    </Text>
                    <Text italic size="sm">
                        Teresa Torres
                    </Text>
                </List.Item>
            </List>
        </Box>
    );
};

export default Books;
