import { generatedContent } from "@/content/generated";
import { GeneratedContentSchema } from "@/content/schema";

export const content = GeneratedContentSchema.parse(generatedContent);
