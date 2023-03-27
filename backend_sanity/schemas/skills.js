export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            Title: 'Name',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}