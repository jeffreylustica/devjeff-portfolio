export default {
    name: 'files',
    title: 'Files',
    type: 'document',
    fields: [
        {
            name: 'fileName',
            title: 'File Name',
            type: 'string'
        },
        {
            name: 'file',
            title: 'File',
            type: 'file'
        }
    ]
}