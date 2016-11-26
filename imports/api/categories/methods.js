Meteor.methods({
    'create.Category': (cat) => {
        return Categories.insert({
            name: cat.toUpperCase(),
            status: 'active',
            created: {
                by: 'aquaman',
                at: new Date()
            }
        })
    },
})