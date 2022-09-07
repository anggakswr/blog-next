type CategoryType = "Text" | "Image" | "Video";

export type ConstantsType = {
  categories: CategoryType[];
};

const constants: ConstantsType = {
  categories: ["Text", "Image", "Video"],
};

export default constants;
