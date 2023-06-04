import React, { ReactElement } from "react";
import { useTranslation } from "next-i18next";
import { Box, Divider, Text } from "@mantine/core";

const Education = (): ReactElement => {
    const { t } = useTranslation(["common", "home"]);

    return (
        <Box my="xl">
            <Divider
                my="xs"
                variant="dashed"
                label="Education"
                labelProps={{ size: "md", fw: "normal", color: "gray.7" }}
            />
            <Text size="md" color="gray.7">
                Bachelor of Engineering - BE, Information Technology.
            </Text>
            <Text size="sm" color="gray.7" italic>
                Islamic Azad University - South Tehran Branch
            </Text>
        </Box>
    );
};

export default Education;
