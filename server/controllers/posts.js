import PostMessage from '../models/postMessage';



export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); // find all the messages inside the model

        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}


export const createPost = async (req, res) => {
    const body = rep.body;
    const newPost = new PostMessage(post);

    try {
        // https://www.restapitutorial.com/httpstatuscodes.html
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}