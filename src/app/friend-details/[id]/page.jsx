import Image from "next/image";
import friendsData from "../../../../public/friends.json";
import {
  MdDelete,
  MdOutlineMessage,
  MdOutlineSnooze,
  MdWifiCalling3,
} from "react-icons/md";
import { FaArchive, FaVideo } from "react-icons/fa";
import ClickBtn from "@/components/shared/ClickBtn";

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;
  const filterData = friendsData.find((friend) => friend.id == id);

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = filterData;

  return (
    <>
      <div className="max-w-7xl flex flex-col gap-4 mx-auto my-5 px-3 sm:px-4">
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-[1fr_1fr]">
          
          <div className="md:col-span-1 md:row-span-2 text-center space-y-2 bg-white rounded-md shadow py-5 px-3">
            <div>
              <Image
                className="mx-auto rounded-full"
                src={picture}
                alt="friend picture"
                height={100}
                width={100}
              />
            </div>

            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-sm text-gray-500">{days_since_contact}d ago</p>

            <p
              className={`badge text-white ${
                status === "overdue"
                  ? "bg-[#EF4444]"
                  : status === "almost due"
                    ? "bg-[#EFAD44]"
                    : "bg-[#244D3F]"
              }`}
            >
              {status}
            </p>

            
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="badge bg-[#CBFADB] text-[#244D3F]">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-[#8b648a] italic text-sm ">{bio}</p>
            <p className=" italic text-sm">{email}</p>
          </div>

          
          <div className="md:col-span-2 md:row-span-1 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="text-center shadow bg-white rounded-md flex items-center justify-center p-4">
              <div>
                <h2 className="font-bold text-xl md:text-2xl">
                  {days_since_contact}
                </h2>
                <p className="text-[#64748B] text-sm font-semibold">
                  days since contact
                </p>
              </div>
            </div>

            <div className="text-center shadow bg-white rounded-md flex items-center justify-center p-4">
              <div>
                <h2 className="font-bold text-xl md:text-2xl">{goal}</h2>
                <p className="text-[#64748B] text-sm font-semibold">
                  goal (days)
                </p>
              </div>
            </div>

            <div className="text-center shadow bg-white rounded-md flex items-center justify-center p-4 col-span-2 sm:col-span-1">
              <div>
                <h2 className="font-bold text-lg md:text-2xl">
                  {next_due_date}
                </h2>
                <p className="text-[#64748B] text-sm font-semibold">next due</p>
              </div>
            </div>
          </div>

          
          <div className="md:col-span-2 md:row-span-1 grid items-center bg-white px-4 py-4 shadow rounded-md">
            <div>
              <div className="flex flex-col  sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="font-bold text-lg md:text-xl text-[#434953]">
                Relationship Goal
              </h2>

              <span className="btn btn-sm w-full sm:w-auto text-center">
                edit
              </span>
            </div>

            <p className="font-semibold mt-2 text-sm md:text-base">
              <span className="text-[#434953]">Connect every </span>
              <span>{goal} days</span>
            </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:grid-rows-1 gap-4">
          <div className="flex flex-col w-full gap-2">
            <button className="btn w-full">
              <MdOutlineSnooze />
              Snooze 2 weeks
            </button>
            <button className="btn w-full">
              {" "}
              <FaArchive></FaArchive>Archive
            </button>
            <button className="btn w-full text-red-500">
              <MdDelete></MdDelete> Delete
            </button>
          </div>

          <div
            className="md:col-span-2 bg-white grid px-4
           items-center "
          >
            <div className="space-y-2">
              <h2 className="font-bold text-xl text-[#434953]">
                Quick Check-In
              </h2>
                <ClickBtn Data={filterData}></ClickBtn>
            </div>
          </div>
        </div>{" "}
        
      </div>
    </>
  );
};

export default FriendDetailsPage;
