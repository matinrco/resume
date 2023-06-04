import React, { ReactElement } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import {
    Box,
    Image,
    Group,
    Stack,
    Text,
    ActionIcon,
    Tooltip,
} from "@mantine/core";
import { HiOutlineMail } from "react-icons/hi";
import {
    BsTelephone,
    BsWhatsapp,
    BsGithub,
    BsLinkedin,
    BsTwitter,
} from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

const Heading = (): ReactElement => {
    const { t } = useTranslation(["common", "home"]);

    return (
        <Box>
            <Group position="center">
                <Image
                    src="/matin-rezaei.jpg"
                    width={200}
                    height={200}
                    alt="Matin Rezaei"
                    radius="50%"
                />
                <Stack
                    spacing="xs"
                    sx={(theme) => ({
                        [theme.fn.smallerThan("xs")]: {
                            width: "100%",
                        },
                    })}
                >
                    <Stack spacing={0}>
                        <Text size="xl" fw="bold">
                            Matin Rezaei
                        </Text>
                        <Text size="md" fw="bold" color="gray.6">
                            Just a dev (whatever I can)
                        </Text>
                    </Stack>
                    <Stack spacing="xs">
                        <Group spacing="xs">
                            <Tooltip withArrow label="Mail me">
                                <ActionIcon
                                    radius="md"
                                    color="gray.6"
                                    variant="light"
                                    component={Link}
                                    href="mailto:matinrco@gmail.com"
                                >
                                    <HiOutlineMail size={18} />
                                </ActionIcon>
                            </Tooltip>
                            <Text>matinrco@gmail.com</Text>
                        </Group>
                        <Group spacing="xs">
                            <Tooltip withArrow label="Contact me on Telegram">
                                <ActionIcon
                                    radius="md"
                                    color="gray.6"
                                    variant="light"
                                    component={Link}
                                    href="https://t.me/matinrc0"
                                    target="_blank"
                                >
                                    <TbBrandTelegram size={17} />
                                </ActionIcon>
                            </Tooltip>
                            <Tooltip withArrow label="Contact me on WhatsApp">
                                <ActionIcon
                                    radius="md"
                                    color="gray.6"
                                    variant="light"
                                    component={Link}
                                    href="https://wa.me/989386593149"
                                    target="_blank"
                                >
                                    <BsWhatsapp size={16} />
                                </ActionIcon>
                            </Tooltip>
                            <Tooltip withArrow label="Contact me">
                                <ActionIcon
                                    radius="md"
                                    color="gray.6"
                                    variant="light"
                                    component={Link}
                                    href="tel:989386593149"
                                >
                                    <BsTelephone size={14} />
                                </ActionIcon>
                            </Tooltip>
                            <Text>+98 938 659 3149</Text>
                        </Group>
                        <Group spacing="xs">
                            <Tooltip withArrow label="Me on Github">
                                <ActionIcon
                                    radius="md"
                                    color="gray.6"
                                    variant="light"
                                    component={Link}
                                    href="https://github.com/matinrco"
                                    target="_blank"
                                >
                                    <BsGithub size={16} />
                                </ActionIcon>
                            </Tooltip>
                            <Tooltip withArrow label="Me on Linkedin">
                                <ActionIcon
                                    radius="md"
                                    color="gray.6"
                                    variant="light"
                                    component={Link}
                                    href="https://linkedin.com/in/matinrco"
                                    target="_blank"
                                >
                                    <BsLinkedin size={16} />
                                </ActionIcon>
                            </Tooltip>
                            <Tooltip withArrow label="Me on Twitter">
                                <ActionIcon
                                    radius="md"
                                    color="gray.6"
                                    variant="light"
                                    component={Link}
                                    href="https://twitter.com/matinrco"
                                    target="_blank"
                                >
                                    <BsTwitter size={16} />
                                </ActionIcon>
                            </Tooltip>
                            <Text>@matinrco</Text>
                        </Group>
                    </Stack>
                </Stack>
            </Group>
        </Box>
    );
};

export default Heading;
