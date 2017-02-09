if (Posts.find().count() === 0){
    Posts.insert({
        title:'Introducting Telescope',
        url:'http://test.com'
    });

    Posts.insert({
        title:'Meteor',
        url:'http://meteor.com'
    });

    Posts.insert({
        title:'baidu',
        url:'http://baidu.com'
    });


}