
export const getAllTags = (data) => {
    const tags = data.map(item => ({ id: item.id, tag: item.tema }));
    const temasUnicosObj = tags.reduce((acc, curr) => {
        if (!acc[curr.tag]) {
            acc[curr.tag] = curr.id;
        }
        return acc;
    }, {});
    const temasUnicos = Object.entries(temasUnicosObj).map(([tag, id]) => ({ id, tag }));
    return temasUnicos;
}