let posts = [
    {
        id: 1,
        title: " Hiiiiiiiiii",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo necessitatibus consectetur animi illo, delectus facilis voluptas ipsam, ratione voluptate dolor iste laboriosam nihil cumque quod alias? Unde, dolores ad.",
        image: "images/Hero.svg"
    },
    {
        id: 2,
        title: " Hiiiiiiiiii",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo necessitatibus consectetur animi illo, delectus facilis voluptas ipsam, ratione voluptate dolor iste laboriosam nihil cumque quod alias? Unde, dolores ad.",
        image: null
    },
    {
        id: 3,
        title: " Hiiiiiiiiii",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo necessitatibus consectetur animi illo, delectus facilis voluptas ipsam, ratione voluptate dolor iste laboriosam nihil cumque quod alias? Unde, dolores ad.",
        image: "images/Hero.svg"
    },
    {
        id: 4,
        title: " Hiiiiiiiiii",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo necessitatibus consectetur animi illo, delectus facilis voluptas ipsam, ratione voluptate dolor iste laboriosam nihil cumque quod alias? Unde, dolores ad.",
        image: ""
    }
];

let defaultImage = "images/Hero.svg";

posts.forEach(post => {
    let postImage = post.image ? post.image : "default image";

    console.log(`ID: ${post.id}`);
    console.log(`Title: ${post.title}`);
    console.log(`Content: ${post.content}`);
    console.log(`Image: ${postImage}`);
});