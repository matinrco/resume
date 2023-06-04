import React, { ReactElement } from "react";
import Link from "next/link";
import {
    Box,
    Divider,
    useMantineTheme,
    Button,
    Badge,
    Group,
    Stack,
    Text,
} from "@mantine/core";
import { HiOutlineExternalLink } from "react-icons/hi";

const Skills = (): ReactElement => {
    const theme = useMantineTheme();

    return (
        <Box my="xl">
            <Divider
                my="xs"
                variant="dashed"
                label="Current stack"
                labelProps={{ size: "md", fw: "normal", color: "gray.7" }}
            />
            <Stack align="flex-start">
                <Group spacing="xs">
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Typescript
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        React
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Next.js
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Redux Toolkit + Query
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Emotion
                    </Badge>
                </Group>
                <Button
                    size="xs"
                    px="xs"
                    radius="xl"
                    color="teal"
                    variant="subtle"
                    rightIcon={<HiOutlineExternalLink />}
                    component={Link}
                    href="https://github.com/matinrco/next-template"
                    target="_blank"
                >
                    View my sample code structure
                </Button>
            </Stack>
            <Text my="xs" size="md" fw="normal" color="gray.7">
                Other
            </Text>
            <Stack align="flex-start">
                <Group spacing="xs">
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Vite
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Node.js
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Nest.js
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        DB (Postgres/SQLite/MongoDB)
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        ORM (Prisma/TypeORM/Mongoose)
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Docker
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Linux
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Redis
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                    >
                        Caddy/Nginx
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "blue", deg: 60 }}
                    >
                        GraphQL
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "teal", to: "blue", deg: 60 }}
                    >
                        Directus/Strapi/Hasura/Supabase
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "orange", to: "red" }}
                    >
                        React Native
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "orange", to: "red" }}
                    >
                        Microfrontend
                    </Badge>
                    <Badge
                        size="lg"
                        sx={{ textTransform: "none" }}
                        variant="gradient"
                        gradient={{ from: "orange", to: "red" }}
                    >
                        AWS
                    </Badge>
                </Group>
                <Button
                    size="xs"
                    px="xs"
                    radius="xl"
                    color="blue"
                    variant="subtle"
                    rightIcon={<HiOutlineExternalLink />}
                    component={Link}
                    href="https://github.com/matinrco?tab=stars"
                    target="_blank"
                >
                    View my other tools & interests in my github stars
                </Button>
            </Stack>
            <Stack
                mt="xl"
                align="flex-start"
                spacing={`calc(${theme.spacing.xs} / 2)`}
            >
                <Group noWrap spacing="xs">
                    <Badge
                        variant="gradient"
                        gradient={{ from: "teal", to: "lime", deg: 105 }}
                        display="block"
                        p={0}
                        styles={() => ({ root: { width: 10, height: 10 } })}
                    ></Badge>
                    <Text size="xs" color="gray.6" sx={{ flex: 1 }}>
                        I’m happy with it & ready to use it in production
                        environment.
                    </Text>
                </Group>
                <Group noWrap spacing="xs">
                    <Badge
                        variant="gradient"
                        gradient={{ from: "teal", to: "blue", deg: 60 }}
                        display="block"
                        p={0}
                        styles={() => ({ root: { width: 10, height: 10 } })}
                    ></Badge>
                    <Text size="xs" color="gray.6" sx={{ flex: 1 }}>
                        I need to gain more experience.
                    </Text>
                </Group>
                <Group noWrap spacing="xs">
                    <Badge
                        variant="gradient"
                        gradient={{ from: "orange", to: "red" }}
                        display="block"
                        p={0}
                        styles={() => ({ root: { width: 10, height: 10 } })}
                    ></Badge>
                    <Text size="xs" color="gray.6" sx={{ flex: 1 }}>
                        I’m familiar with it and I know its importance and I’m
                        looking for opportunity to dive into it. Or maybe I need
                        to pass a learning stage before.
                    </Text>
                </Group>
            </Stack>
        </Box>
    );
};

export default Skills;
