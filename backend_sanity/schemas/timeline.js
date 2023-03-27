export default {
    name: 'timeline',
    title: 'Timeline',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'number'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'fromDate',
            title: 'From Date',
            type: 'string'
        },
        {
            name: 'toDate',
            title: 'To Date',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type:'image',
            options: {
                hotspot: true
            }
        }
    ]
}