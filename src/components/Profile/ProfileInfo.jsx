import Bio from "./Bio";
import ProfileImage from "./ProfileImage";

export default function ProfileInfo() {
  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        <ProfileImage />
        <Bio />
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      </div>
    </>
  );
}
