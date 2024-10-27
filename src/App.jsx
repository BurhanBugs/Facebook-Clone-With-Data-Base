import CreatePost from "./Components/CreatePost";
import FileDisplay from "./Components/FileDisplay";
import GroupSection from "./Components/GroupSection";
import LeftSeciton from "./Components/LeftSeciton";
import Navbar from "./Components/Navbar";
export default function App() {
 

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-6">
        <div className="leftsectoin w-[24%] overflow-y-scroll  scrollbar scrollbar-thin scrollbar-hidden hover:scrollbar-visible h-[85vh] ">
          <div className="leftsection hidden lg:block">
            <LeftSeciton />
          </div>
        </div>
        <div className="centerPostSection scrollbar  mx-auto scrollbar-thin scrollbar-hidden overflow-y-scroll w-[110%] lg:w-[50%] h-[85vh]  ">
          <CreatePost />
          <FileDisplay/>
          
        </div>
        <div className="rightCreateGroupsSection px-6 w-[1%] sm:w-[24%]  invisible lg:visible h-[85vh]  ">
          <GroupSection />
        </div>
      </div>

    </>
  )
}