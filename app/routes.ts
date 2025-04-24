import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("technology", "routes/technology.tsx"),
  route("case-studies", "routes/case-studies.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("solutions", "routes/solutions.tsx"),
] satisfies RouteConfig;
