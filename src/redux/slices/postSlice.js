// creating a Post slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage, db } from "../../config/firebase";
import { collection, addDoc, getDocs, onSnapshot, query, where, orderBy, limit, doc, deleteDoc, setDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export const GetdatafromDB = createAsyncThunk(
  "feed/getData",
  async () => {
    try {
      const response = await getDocs(query(collection(db, "posts"), ));
      const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log('data in postslice', data)
      return data;
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }
)


// deletePost

export const DeletePost = createAsyncThunk("feed/deletePost",
  async (id) => {
      try {
          const docRef = doc(db, "posts", id)
          await deleteDoc(docRef)
          return id
      } catch (error) {
          console.log("error", error);

      }
  }
)


export const addposttoDB = createAsyncThunk(
  "feed/createPost",
  async (PostData) => {
    try {

      const file = PostData.localFile;
      console.log("hlo file name", file.name)
      console.log("hlo file in postslice", file)
      const fileRef = ref(storage, 'images/' + parseInt(Math.random() * 23423425312) + file.name);
      const metadata = {
        contentType: file.type,
      };
      await uploadBytes(fileRef, file, metadata)
      const url = await getDownloadURL(fileRef)
      console.log("url", url);

      let firebasepost = {
        localTitle: PostData.localTitle,
        ImageURl: url,
        localFileName:PostData.localFile.name,
      }
      const collectionRef = collection(db, "posts")
      const response = await addDoc(collectionRef, firebasepost)
      console.log("response after firebase store", response);



      
      window.location.reload();
    } catch (error) {

      console.error("Error adding document: ", error);
    }

  }
)



const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: [],
  },
  reducers: {
    createPost: (state, action) => {
      state.feed.unshift(action.payload);
    },
    deletePost: (state, action) => {
      state.feed = state.feed.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const postIndex = state.feed.findIndex((post) => post.id === action.payload.id);
      if (postIndex !== -1) {
        state.feed[postIndex] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addposttoDB.fulfilled, (state, action) => {
      state.feed.unshift(action.payload);
    });
    builder.addCase(GetdatafromDB.fulfilled, (state, action) => {
      state.feed = action.payload;
      console.log("data in postslice after getting from firebase", state.feed)
    });
    builder.addCase(DeletePost.fulfilled, (state, action) => {
      state.feed = state.feed.filter((post) => post.id !== action.payload)
  })
  }

});

export const { createPost, deletePost, updatePost } = feedSlice.actions;


export default feedSlice.reducer;
