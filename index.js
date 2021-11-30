const { User, Post, Subbreaddit, Sequelize: { Op }, sequelize } = require('./models');

async function buildUser() {
    const user = User.build({
        username: 'bluebarryscone',
        email: 'barry@barry.com',
        password: 'bluebarrybestbarry'
    })
    await user.save()
    await sequelize.close()
}

// buildUser()

async function createPost(title, content, userId, subId) {
    const post = await Post.create({
        title,
        content,
        userId,
        subId
    })
    await sequelize.close()
}

// createPost('Test Post 2', 'This is just another test post', 1, 1)

async function getAllPosts() {
    const posts = await Post.findAll()

    console.log(posts[0].title)

    await sequelize.close()
}

// getAllPosts()

async function getPostsFromSub(subId) {
    const posts = await Post.findAll({
        where: {
            subId: subId
        }
    })
    console.log(posts)
    await sequelize.close()
}

// SELECT * FROM posts
// WHERE subId = subId

// getPostsFromSub(1);

async function getPostsFromManySubs(subIdArr) {
    const posts = await Post.findAll({
        where: {
            subId: subIdArr
        }
    })
    console.log(posts)
    await sequelize.close()
}

// getPostsFromManySubs([1, 2])

async function getSomePosts(subId, userId) {
    const users = await Post.findAll({
        where: {
            subId,
            userId
        }
    })
    console.log(users)
    await sequelize.close()
}

// getSomePosts(1, 1)

async function getSomeUsers(searchTerm) {
    const users = await User.findAll({
        where: {
            password: {
                [Op.substring]: searchTerm
            }
        },
        order: [['username', 'DESC']],
        limit: 1
    })

    console.log(users)
    await sequelize.close()
}

// getSomeUsers('o')

async function getAUser(email) {
    const user = await User.findOne({
        where: {
            email
        }
    })
    console.log(user);
    await sequelize.close()
}

// getAUser('nate@nate.com');

async function findPostByPk(id) {
    const post = await Post.findByPk(id);

    console.log(post);
    await sequelize.close()
}

// findPostByPk(1);


async function updateUserPass(userId, newPass) {
    const user = await User.findByPk(userId);

    user.password = newPass;
    await user.save()
}

// updateUserPass(4, 'aStrongerPassword');

async function deletePostWithModel(postId) {
    await Post.destroy({
        where: {
            id: postId
        }
    })

    await sequelize.close()
}

// deletePostWithModel(6)

//USE THIS METHOD OF DESTROYING RECORDS vvvvv

async function deletePostWithInstance(postId) {
    const post = await Post.findByPk(postId);

    await post.destroy()

    await sequelize.close()
}

// deletePostWithInstance(7);

async function getSubAndPosts(subId) {
    const subAndPosts = await Subbreaddit.findByPk(subId, {
        include: Post
    })

    console.log(subAndPosts.Posts)
    await sequelize.close()
}

getSubAndPosts(1);