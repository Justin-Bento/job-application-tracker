import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { digitalRecipieBookType } from "./digitalRecipieBookType";
import { hobbiesAndInterestsType } from "./hobbiesAndInterestsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    digitalRecipieBookType,
    hobbiesAndInterestsType,
  ],
};
