export const get = (obj, path) =>
  path
    .split(".")
    .reduce(
      (acc, node) =>
        acc && node in acc ? ((acc = acc[node]), acc) : undefined,
      { ...obj }
    );
