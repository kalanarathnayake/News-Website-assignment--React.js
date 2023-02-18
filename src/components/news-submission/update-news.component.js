import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNews } from "../../app/slices/news.slice";
import { storage } from "../../firebase";

export default function UpdateNews(props) {
    const dispatch = useDispatch();

    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    const [author, setauthor] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const [source, setsource] = useState("");
    const [category, setcategory] = useState("");
    const [location, setlocation] = useState("");

    const uploadImage = (e) => {
        if (e.target.files[0] !== null) {
            const fileName = e.target.files[0].name + "-" + new Date();
            const uploadTask = storage
                .ref(`digitalbook/${fileName}`)
                .put(e.target.files[0]);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    //progress function
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                },
                (error) => {
                    //error function
                    console.log(error);
                },
                () => {
                    //complete function
                    storage
                        .ref("digitalbook")
                        .child(fileName)
                        .getDownloadURL()
                        .then((url) => {
                            setimageUrl(url);
                        });
                }
            );
        } else {
            console.log("Something went wrong");
        }
    };

    const onSubmitHandler = () => {
        const newNews = {
            title,
            body,
            author,
            imageUrl,
            source,
            category,
            location,
        };

        dispatch(addNews(newNews));
    };

    return (
        <div className="flex items-center justify-center p-12">
            <div className="bg-white rounded-lg shadow-lg py-6 px-10 sm:max-w-6xl w-full ">
                <div className="sm:text-3xl text-2xl text-center font-serif text-black font-bold  mb-12">
                    New News Form
                </div>
                <form className="text-lg">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label
                                for=""
                                className="block mb-2 font-medium text-gray-900 dark:text-white"
                            >
                                News Title
                            </label>
                            <input
                                type="text"
                                id=""
                                value={title}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Title of the news"
                                onChange={(e) => settitle(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="text"
                                className="block mb-2 font-medium text-gray-900 dark:text-white"
                            >
                                Author
                            </label>
                            <input
                                type="text"
                                id="author"
                                value={author}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="News reporter"
                                onChange={(e) => setauthor(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                for=""
                                className="block mb-2 font-medium text-gray-900 dark:text-white"
                            >
                                Source
                            </label>
                            <input
                                type="text"
                                id="source"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Source of the news"
                                value={source}
                                onChange={(e) => setsource(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="category"
                                class="block mb-2 font-medium text-gray-900 dark:text-white"
                            >
                                Category
                            </label>
                            <select
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                id="category"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Select news category"
                                value={category}
                                onChange={(e) => setcategory(e.target.value)}
                                required
                            >
                                <option selected>Choose the category</option>
                                <option value="SPORTS">SPORTS</option>
                                <option value="LOCAL">LOCAL</option>
                                <option value="">add category</option>
                                <option value="">add category</option>
                            </select>
                        </div>
                        <div>
                            <label
                                for=""
                                className="block mb-2  font-medium text-gray-900 dark:text-white"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="News Location"
                                value={location}
                                onChange={(e) => setlocation(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            for=""
                            className="block mb-2  font-medium text-gray-900 dark:text-white"
                        >
                            Body
                        </label>
                        <input
                            type="text"
                            id="body"
                            className="bg-gray-50 border py-5 border-gray-300 text-gray-900 text-xxl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="News Content"
                            value={body}
                            onChange={(e) => setbody(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block mb-2 text-xxl font-medium text-gray-900 dark:text-white"
                            for="file_input"
                        >
                            Upload file
                        </label>
                        {imageUrl && <img src={imageUrl} />}
                        <input
                            className="block w-full text-xxl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="file_input"
                            onChange={(e) => uploadImage(e)}
                            type="file"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xxl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={onSubmitHandler}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
