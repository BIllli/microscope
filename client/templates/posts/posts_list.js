// var postsData=[
// {
//     title:'Introducing Telescope',
//     url:'http://sachagreif.com/introducing-telescope'
// },
// {
//     title:'meteor',
//     url:'http://meteor.com'
// },
// {
//     title:'Baidu',
//     url:'http://baidu.com'
// }

// ];


Template.postsList.helpers(
// {posts:postsData}

{
    posts:function(){
        return Posts.find();
    }
}
);




