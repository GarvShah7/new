export function reduce_to_single<Type>(
  data: (Type & { _id?: string | undefined | null })[] = []
): Type {
  if (!Array.isArray(data)) {
    return data;
  }
  if (data.length === 1) {
    return Object.assign({}, ...data) as Type;
  }
  return data.filter((i) => !i._id?.startsWith("drafts.")).length > 0
    ? data.filter((i) => !i._id?.startsWith("drafts."))[0]
    : data[0];
}
