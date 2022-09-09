import upperCaseFirstLetter from "helpers/upperCaseFirstLetter";

const pathToTitle = (path: string) => {
  // /admin/post/add -> admin/post/add -> ['admin', 'post', 'add'] -> ['add', 'post', 'admin']
  const pathArr = path.slice(1).split("/").reverse();

  // ['add', 'post', 'admin']
  const pathArrUppercase = pathArr.map(
    (string) =>
      string.includes("-") // 'angga-keren'
        ? string
            .split("-") // ['angga', 'keren']
            .map((s) => upperCaseFirstLetter(s)) // ['Angga', 'Keren']
            .join(" ") // 'Angga Keren'
        : upperCaseFirstLetter(string) // 'Admin'
  );

  // ['Add', 'Post', 'Admin'] -> Add | Post | Admin
  return pathArrUppercase.join(" | ");
};

export default pathToTitle;
