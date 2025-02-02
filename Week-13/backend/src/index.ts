import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user) {
    return c.json("User already exists");
  } else {
    await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });
  }

  const token = sign({ userId: 1 }, c.env.JWT_SECRET);

  return c.json({ jwt: token });
});

app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    c.status(403);
    return c.json("User does not exist");
  }

  const jwt = sign({ userId: 1 }, c.env.JWT_SECRET);
  return c.json({ jwt: jwt });
});

app.post("/api/v1/blog", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.post("/api/v1/blog", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.get("/api/v1/blog/:id", (c) => {
  return c.json({ message: "Hello Hono!" });
});

export default app;
